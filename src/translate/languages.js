// https://cloud.google.com/translate/docs/languages

const zh = [
    { name: '简体中文', key: 'zh' },
    { name: '繁体中文', key: 'zh-TW' },
    { name: '英语', key: 'en' },
    { name: '南非荷兰语', key: 'af' },
    { name: '阿尔巴尼亚语', key: 'sq' },
    { name: '阿姆哈拉语', key: 'am' },
    { name: '阿拉伯语', key: 'ar' },
    { name: '亚美尼亚语', key: 'hy' },
    { name: '阿塞拜疆语', key: 'az' },
    { name: '巴斯克语', key: 'eu' },
    { name: '白俄罗斯语', key: 'be' },
    { name: '孟加拉语', key: 'bn' },
    { name: '波斯尼亚语', key: 'bs' },
    { name: '保加利亚语', key: 'bg' },
    { name: '加泰罗尼亚语', key: 'ca' },
    { name: '宿务语', key: 'ceb' },
    { name: '科西嘉语', key: 'co' },
    { name: '克罗地亚语', key: 'hr' },
    { name: '捷克语', key: 'cs' },
    { name: '丹麦语', key: 'da' },
    { name: '荷兰语', key: 'nl' },
    { name: '世界语', key: 'eo' },
    { name: '爱沙尼亚语', key: 'et' },
    { name: '芬兰语', key: 'fi' },
    { name: '法语', key: 'fr' },
    { name: '弗里斯兰语', key: 'fy' },
    { name: '加利西亚语', key: 'gl' },
    { name: '格鲁吉亚语', key: 'ka' },
    { name: '德语', key: 'de' },
    { name: '希腊语', key: 'el' },
    { name: '古吉拉特语', key: 'gu' },
    { name: '海地克里奥尔语', key: 'ht' },
    { name: '豪萨语', key: 'ha' },
    { name: '夏威夷语', key: 'haw' },
    { name: '希伯来语', key: 'he' },
    { name: '印地语', key: 'hi' },
    { name: '苗语', key: 'hmn' },
    { name: '匈牙利语', key: 'hu' },
    { name: '冰岛语', key: 'is' },
    { name: '伊博语', key: 'ig' },
    { name: '印度尼西亚语', key: 'id' },
    { name: '爱尔兰语', key: 'ga' },
    { name: '意大利语', key: 'it' },
    { name: '日语', key: 'ja' },
    { name: '爪哇语', key: 'jw' },
    { name: '卡纳达语', key: 'kn' },
    { name: '哈萨克语', key: 'kk' },
    { name: '高棉文', key: 'km' },
    { name: '韩语', key: 'ko' },
    { name: '库尔德语', key: 'ku' },
    { name: '吉尔吉斯语', key: 'ky' },
    { name: '老挝语', key: 'lo' },
    { name: '拉丁文', key: 'la' },
    { name: '拉脱维亚语', key: 'lv' },
    { name: '立陶宛语', key: 'lt' },
    { name: '卢森堡语', key: 'lb' },
    { name: '马其顿语', key: 'mk' },
    { name: '马尔加什语', key: 'mg' },
    { name: '马来语', key: 'ms' },
    { name: '马拉雅拉姆文', key: 'ml' },
    { name: '马耳他语', key: 'mt' },
    { name: '毛利语', key: 'mi' },
    { name: '马拉地语', key: 'mr' },
    { name: '蒙古文', key: 'mn' },
    { name: '缅甸语', key: 'my' },
    { name: '尼泊尔语', key: 'ne' },
    { name: '挪威语', key: 'no' },
    { name: '尼杨扎语', key: 'ny' },
    { name: '普什图语', key: 'ps' },
    { name: '波斯语', key: 'fa' },
    { name: '波兰语', key: 'pl' },
    { name: '葡萄牙语', key: 'pt' },
    { name: '旁遮普语', key: 'pa' },
    { name: '罗马尼亚语', key: 'ro' },
    { name: '俄语', key: 'ru' },
    { name: '萨摩亚语', key: 'sm' },
    { name: '苏格兰盖尔语', key: 'gd' },
    { name: '塞尔维亚语', key: 'sr' },
    { name: '塞索托语', key: 'st' },
    { name: '修纳语', key: 'sn' },
    { name: '信德语', key: 'sd' },
    { name: '僧伽罗语', key: 'si' },
    { name: '斯洛伐克语', key: 'sk' },
    { name: '斯洛文尼亚语', key: 'sl' },
    { name: '索马里语', key: 'so' },
    { name: '西班牙语', key: 'es' },
    { name: '巽他语', key: 'su' },
    { name: '斯瓦希里语', key: 'sw' },
    { name: '瑞典语', key: 'sv' },
    { name: '塔加路语', key: 'tl' },
    { name: '塔吉克语', key: 'tg' },
    { name: '泰米尔语', key: 'ta' },
    { name: '泰卢固语', key: 'te' },
    { name: '泰文', key: 'th' },
    { name: '土耳其语', key: 'tr' },
    { name: '乌克兰语', key: 'uk' },
    { name: '乌尔都语', key: 'ur' },
    { name: '乌兹别克语', key: 'uz' },
    { name: '越南语', key: 'vi' },
    { name: '威尔士语', key: 'cy' },
    { name: '班图语', key: 'xh' },
    { name: '意第绪语', key: 'yi' },
    { name: '约鲁巴语', key: 'yo' },
    { name: '祖鲁语', key: 'zu' },
];

const en = [
    { name: 'Chinese Simplified', key: 'zh' },
    { name: 'Chinese Traditional', key: 'zh-TW' },
    { name: 'English', key: 'en' },
    { name: 'Afrikaans', key: 'af' },
    { name: 'Albania', key: 'sq' },
    { name: 'Amharic', key: 'am' },
    { name: 'Arabic', key: 'ar' },
    { name: 'Armenian', key: 'hy' },
    { name: 'Azerbaijani', key: 'az' },
    { name: 'Basque', key: 'eu' },
    { name: 'Belarusian', key: 'be' },
    { name: 'Bengali', key: 'bn' },
    { name: 'Bosnia', key: 'bs' },
    { name: 'Bulgarian', key: 'bg' },
    { name: 'Catalan', key: 'ca' },
    { name: 'Cebu language', key: 'ceb' },
    { name: 'Corsican', key: 'co' },
    { name: 'Croatian', key: 'hr' },
    { name: 'Czech', key: 'cs' },
    { name: 'Danish', key: 'da' },
    { name: 'Dutch', key: 'nl' },
    { name: 'Esperanto', key: 'eo' },
    { name: 'Estonian', key: 'et' },
    { name: 'Finnish', key: 'fi' },
    { name: 'French', key: 'fr' },
    { name: 'Friesian', key: 'fy' },
    { name: 'Galician', key: 'gl' },
    { name: 'Georgian', key: 'ka' },
    { name: 'German', key: 'de' },
    { name: 'Greek', key: 'el' },
    { name: 'Gujarati', key: 'gu' },
    { name: 'Haiti Creole', key: 'ht' },
    { name: 'Hausa', key: 'ha' },
    { name: 'Hawaiian', key: 'haw' },
    { name: 'Hebrew', key: 'he' },
    { name: 'Hindi', key: 'hi' },
    { name: 'Hmong', key: 'hmn' },
    { name: 'Hungarian', key: 'hu' },
    { name: 'Icelandic', key: 'is' },
    { name: 'Ibo', key: 'ig' },
    { name: 'Indonesian', key: 'id' },
    { name: 'Irish', key: 'ga' },
    { name: 'Italian', key: 'it' },
    { name: 'Japanese', key: 'ja' },
    { name: 'Javanese', key: 'jw' },
    { name: 'Kannada', key: 'kn' },
    { name: 'Kazakh', key: 'kk' },
    { name: 'Khmer text', key: 'km' },
    { name: 'Korean', key: 'ko' },
    { name: 'Kurdish', key: 'ku' },
    { name: 'Kyrgyz', key: 'ky' },
    { name: 'Laotian', key: 'lo' },
    { name: 'Latin', key: 'la' },
    { name: 'Latvian', key: 'lv' },
    { name: 'Lithuania', key: 'lt' },
    { name: 'Luxembourg', key: 'lb' },
    { name: 'Macedonian', key: 'mk' },
    { name: 'Malagasy', key: 'mg' },
    { name: 'Malay', key: 'ms' },
    { name: 'Malayalam', key: 'ml' },
    { name: 'Malta', key: 'mt' },
    { name: 'Maori', key: 'mi' },
    { name: 'Marathi', key: 'mr' },
    { name: 'Mongolian', key: 'mn' },
    { name: 'Burmese', key: 'my' },
    { name: 'Nepalese', key: 'ne' },
    { name: 'Norwegian', key: 'no' },
    { name: 'Nyanza', key: 'ny' },
    { name: 'Pashto', key: 'ps' },
    { name: 'Persian', key: 'fa' },
    { name: 'Polish', key: 'pl' },
    { name: 'Portuguese', key: 'pt' },
    { name: 'Punjabi', key: 'pa' },
    { name: 'Romanian', key: 'ro' },
    { name: 'Russian', key: 'ru' },
    { name: 'Samoan', key: 'sm' },
    { name: 'Scottish Gaelic', key: 'gd' },
    { name: 'Serbian', key: 'sr' },
    { name: 'Sesotho', key: 'st' },
    { name: 'Shanna', key: 'sn' },
    { name: 'Sin German', key: 'sd' },
    { name: 'Sinhala', key: 'si' },
    { name: 'Slovakian', key: 'sk' },
    { name: 'Slovenian', key: 'sl' },
    { name: 'Somali', key: 'so' },
    { name: 'Spanish', key: 'es' },
    { name: 'Sundanese', key: 'su' },
    { name: 'Swahili', key: 'sw' },
    { name: 'Swedish', key: 'sv' },
    { name: 'Tagalogian', key: 'tl' },
    { name: 'Tajik', key: 'tg' },
    { name: 'Tamil', key: 'ta' },
    { name: 'Telugu', key: 'te' },
    { name: 'Thai', key: 'th' },
    { name: 'Turkish', key: 'tr' },
    { name: 'Ukrainian', key: 'uk' },
    { name: 'Urdu', key: 'ur' },
    { name: 'Uzbek', key: 'uz' },
    { name: 'Vietnamese', key: 'vi' },
    { name: 'Welsh', key: 'cy' },
    { name: 'bantu', key: 'xh' },
    { name: 'Yiddish', key: 'yi' },
    { name: 'Yoruba', key: 'yo' },
    { name: 'zulu', key: 'zu' },
];

const es = [
    { name: 'Chino (simplificado)', key: 'zh' },
    { name: 'Chinese (tradicional)', key: 'zh-TW' },
    { name: 'Inglés', key: 'en' },
    { name: 'Afrikáans', key: 'af' },
    { name: 'Albanés', key: 'sq' },
    { name: 'Amárico', key: 'am' },
    { name: 'Árabe', key: 'ar' },
    { name: 'Armenio', key: 'hy' },
    { name: 'Azerí', key: 'az' },
    { name: 'Vasco', key: 'eu' },
    { name: 'Bielorruso', key: 'be' },
    { name: 'Bengalí', key: 'bn' },
    { name: 'Bosnio', key: 'bs' },
    { name: 'Búlgaro', key: 'bg' },
    { name: 'Catalán', key: 'ca' },
    { name: 'Cebuano', key: 'ceb' },
    { name: 'Corso', key: 'co' },
    { name: 'Croata', key: 'hr' },
    { name: 'Checo', key: 'cs' },
    { name: 'Danés', key: 'da' },
    { name: 'Holandés', key: 'nl' },
    { name: 'Esperanto', key: 'eo' },
    { name: 'Estonio', key: 'et' },
    { name: 'Finlandés', key: 'fi' },
    { name: 'Francés', key: 'fr' },
    { name: 'Frisón', key: 'fy' },
    { name: 'Gallego', key: 'gl' },
    { name: 'Georgiano', key: 'ka' },
    { name: 'Alemán', key: 'de' },
    { name: 'Griego', key: 'el' },
    { name: 'Guyaratí', key: 'gu' },
    { name: 'Criollo haitiano', key: 'ht' },
    { name: 'Hausa', key: 'ha' },
    { name: 'Hawaiano', key: 'haw' },
    { name: 'Hebreo', key: 'he' },
    { name: 'Hindi', key: 'hi' },
    { name: 'Hmong', key: 'hmn' },
    { name: 'Húngaro', key: 'hu' },
    { name: 'Islandés', key: 'is' },
    { name: 'Igbo', key: 'ig' },
    { name: 'Indonesio', key: 'id' },
    { name: 'Irlandés', key: 'ga' },
    { name: 'Italiano', key: 'it' },
    { name: 'Japonés', key: 'ja' },
    { name: 'Javanés', key: 'jw' },
    { name: 'Canarés', key: 'kn' },
    { name: 'Kazajo', key: 'kk' },
    { name: 'Jemer', key: 'km' },
    { name: 'Coreano', key: 'ko' },
    { name: 'Kurdo', key: 'ku' },
    { name: 'Kirguís', key: 'ky' },
    { name: 'Laosiano', key: 'lo' },
    { name: 'Latín', key: 'la' },
    { name: 'Letónn', key: 'lv' },
    { name: 'Lituano', key: 'lt' },
    { name: 'Luxemburgués', key: 'lb' },
    { name: 'Macedonio', key: 'mk' },
    { name: 'Malgache', key: 'mg' },
    { name: 'Malayo', key: 'ms' },
    { name: 'Malabar', key: 'ml' },
    { name: 'Maltés', key: 'mt' },
    { name: 'Maorí', key: 'mi' },
    { name: 'Maratí', key: 'mr' },
    { name: 'Mongol', key: 'mn' },
    { name: 'Birmano', key: 'my' },
    { name: 'Nepalí', key: 'ne' },
    { name: 'Noruego', key: 'no' },
    { name: 'Nyanza (Chichewa)', key: 'ny' },
    { name: 'Pastún', key: 'ps' },
    { name: 'Persa', key: 'fa' },
    { name: 'Polaco', key: 'pl' },
    { name: 'Portugués', key: 'pt' },
    { name: 'Punyabí', key: 'pa' },
    { name: 'Rumano', key: 'ro' },
    { name: 'Español', key: 'es' },
    { name: 'Ruso', key: 'ru' },
    { name: 'Samoano', key: 'sm' },
    { name: 'Gaélico escocés', key: 'gd' },
    { name: 'Serbio', key: 'sr' },
    { name: 'Sesoto', key: 'st' },
    { name: 'Shona', key: 'sn' },
    { name: 'Sindhi', key: 'sd' },
    { name: 'Cingalés', key: 'si' },
    { name: 'Eslovaco', key: 'sk' },
    { name: 'Esloveno', key: 'sl' },
    { name: 'Somalí', key: 'so' },
    { name: 'Sudanés', key: 'su' },
    { name: 'Suajili', key: 'sw' },
    { name: 'Sueco', key: 'sv' },
    { name: 'Tagalo (filipino)', key: 'tl' },
    { name: 'Tayiko', key: 'tg' },
    { name: 'Tamil', key: 'ta' },
    { name: 'Telugu', key: 'te' },
    { name: 'Tailandés', key: 'th' },
    { name: 'Turco', key: 'tr' },
    { name: 'Ucrainiano', key: 'uk' },
    { name: 'Urdu', key: 'ur' },
    { name: 'Uzbeko', key: 'uz' },
    { name: 'Vietnamita', key: 'vi' },
    { name: 'Galés', key: 'cy' },
    { name: 'Xhosa', key: 'xh' },
    { name: 'Yiddish', key: 'yi' },
    { name: 'Yoruba', key: 'yo' },
    { name: 'Zulú', key: 'zu' },
];

export default {
    zh,
    'zh-cn': zh,
    en,
    es,
};
