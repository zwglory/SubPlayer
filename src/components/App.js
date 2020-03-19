import React, { useState, useMemo, useCallback, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Sub from '../subtitle/sub';
import { secondToTime, notify } from '../utils';
import { getSubFromVttUrl, vttToUrlUseWorker } from '../subtitle';
import Storage from '../utils/storage';
import equal from 'fast-deep-equal';
import { ToastContainer } from 'react-toastify';
import translate from '../translate';

const history = [];
let inTranslation = false;
const storage = new Storage();
const worker = new Worker(vttToUrlUseWorker());

export default function() {
    // Player instance
    const [player, setPlayer] = useState(null);

    // Language
    const [lang, setLang] = useState(storage.get('lang') || navigator.language.toLowerCase());

    // Subtitle currently playing index
    const [currentIndex, setCurrentIndex] = useState(-1);

    // Subtitle currently playing time
    const [currentTime, setCurrentTime] = useState(0);

    // All subtitles
    const [subtitles, setSubtitles] = useState([]);

    // All options
    const [options, setOptions] = useState({
        videoUrl: '/sample.mp4',
        subtitleUrl: '/sample.vtt',
        uploadDialog: false,
        useAudioWaveform: false,
    });

    // Update language
    const updateLang = useCallback(
        value => {
            setLang(value);
            storage.set('lang', value);
        },
        [setLang],
    );

    // Update an option
    const setOption = useCallback(
        (key, value) => {
            setOptions({
                ...options,
                [key]: value,
            });
        },
        [options, setOptions],
    );

    // Only way to update all subtitles
    const updateSubtitles = useCallback(
        (subs, saveToHistory = true) => {
            if (subs.length && !equal(subs, subtitles)) {
                setSubtitles(subs);

                // Save 100 subtitles to history
                if (saveToHistory) {
                    if (history.length >= 100) {
                        history.shift();
                    }
                    history.push(subs.map(sub => sub.clone));
                }

                // Save to storage
                storage.set('subtitles', subs);

                // Convert subtitles to vtt url
                worker.postMessage(subs);
            }
        },
        [setSubtitles, subtitles],
    );

    // Initialize subtitles from url or storage
    const initSubtitles = useCallback(async () => {
        const storageSubs = storage.get('subtitles');
        if (storageSubs && storageSubs.length) {
            updateSubtitles(storageSubs.map(item => new Sub(item.start, item.end, item.text)));
        } else {
            const subs = await getSubFromVttUrl(options.subtitleUrl);
            updateSubtitles(subs);
        }
    }, [options.subtitleUrl, updateSubtitles]);

    // Run only once
    useEffect(() => {
        initSubtitles();
        if (player) {
            worker.onmessage = event => {
                player.subtitle.switch(event.data);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [player]);

    // Update current index from current time
    useMemo(() => {
        setCurrentIndex(
            subtitles.findIndex(item => {
                return item.startTime <= currentTime && item.endTime >= currentTime;
            }),
        );
    }, [subtitles, currentTime, setCurrentIndex]);

    // Detect if the subtitle exists
    const checkSub = useCallback(sub => subtitles.includes(sub), [subtitles]);

    // Check if subtitle is legal
    const checkSubtitleIllegal = useCallback(
        sub => {
            if (!checkSub(sub)) return;
            const index = subtitles.indexOf(sub);
            const previous = subtitles[index - 1];
            return (previous && sub.startTime < previous.endTime) || !sub.check;
        },
        [checkSub, subtitles],
    );

    // Update a single subtitle
    const updateSubtitle = useCallback(
        (sub, key, value) => {
            if (!checkSub(sub)) return;
            const index = subtitles.indexOf(sub);
            const subs = [...subtitles];
            const { clone } = sub;
            clone[key] = value;
            subs[index] = clone;
            updateSubtitles(subs);
        },
        [checkSub, subtitles, updateSubtitles],
    );

    // Delete a subtitle
    const removeSubtitle = useCallback(
        sub => {
            if (!checkSub(sub)) return;
            if (subtitles.length === 1) {
                return notify('Please keep at least one subtitle', 'error');
            }
            const index = subtitles.indexOf(sub);
            const subs = [...subtitles];
            subs.splice(index, 1);
            updateSubtitles(subs);
        },
        [checkSub, subtitles, updateSubtitles],
    );

    // Add a subtitle
    const addSubtitle = useCallback(
        index => {
            const subs = [...subtitles];
            const previous = subtitles[index - 1];
            const start = previous ? secondToTime(previous.endTime + 0.001) : '00:00:00.001';
            const end = previous ? secondToTime(previous.endTime + 1.001) : '00:00:01.001';
            const sub = new Sub(start, end, '[Subtitle Text]');
            subs.splice(index, 0, sub);
            updateSubtitles(subs);
        },
        [subtitles, updateSubtitles],
    );

    // Merge two subtitles
    const mergeSubtitle = useCallback(
        sub => {
            if (!checkSub(sub)) return;
            const index = subtitles.indexOf(sub);
            const next = subtitles[index + 1];
            if (!checkSub(next)) return;
            const merge = new Sub(sub.start, next.end, sub.text + '\n' + next.text);
            const subs = [...subtitles];
            subs[index] = merge;
            subs.splice(index + 1, 1);
            updateSubtitles(subs);
        },
        [checkSub, subtitles, updateSubtitles],
    );

    // Remove all subtitles
    const removeSubtitles = useCallback(() => {
        updateSubtitles([new Sub('00:00:00.000', '00:00:01.000', '[Subtitle Text]')]);
    }, [updateSubtitles]);

    // Undo subtitles
    const undoSubtitles = useCallback(() => {
        if (history.length > 1) {
            history.pop();
            const subs = history[history.length - 1];
            updateSubtitles(subs, false);
            notify('History rollback successful');
        } else {
            notify('History is empty', 'error');
        }
    }, [updateSubtitles]);

    // Clean all subtitles
    const cleanSubtitles = useCallback(() => {
        history.length = 0;
        storage.set('subtitles', []);
        removeSubtitles();
        notify('Empty all subtitles successfully');
    }, [removeSubtitles]);

    // Translate all subtitles
    const translateSubtitles = useCallback(
        async lang => {
            if (!inTranslation) {
                if (subtitles.length <= 1000) {
                    inTranslation = true;
                    try {
                        console.log(subtitles);
                        const subs = await translate(subtitles, lang);
                        updateSubtitles(subs);
                        inTranslation = false;
                    } catch (error) {
                        notify(error.message, 'error');
                        inTranslation = false;
                    }
                } else {
                    notify('Limit 1000 translations per batch', 'error');
                }
            } else {
                notify('Translation in progress', 'error');
            }
        },
        [subtitles, updateSubtitles],
    );

    const props = {
        lang,
        updateLang,
        player,
        options,
        subtitles,
        setPlayer,
        setOptions,
        currentIndex,
        currentTime,
        setCurrentIndex,
        setCurrentTime,
        updateSubtitles,
        checkSub,
        setOption,
        addSubtitle,
        undoSubtitles,
        mergeSubtitle,
        removeSubtitle,
        removeSubtitles,
        updateSubtitle,
        cleanSubtitles,
        translateSubtitles,
        checkSubtitleIllegal,
    };

    return (
        <React.Fragment>
            <GlobalStyle />
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
            <ToastContainer />
        </React.Fragment>
    );
}
