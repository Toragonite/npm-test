"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locales = exports.unsupportedLocales = exports.defaultLocales = exports.localeCode = exports.Locale = exports.fallbackLng = exports.defaultNS = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
exports.defaultNS = "common";
exports.fallbackLng = "ko";
var Locale;
(function (Locale) {
    Locale["ko_KR"] = "ko_KR";
    Locale["en_US"] = "en_US";
    Locale["vi_VN"] = "vi_VN";
    Locale["zh_CN"] = "zh_CN";
    Locale["zh_TW"] = "zh_TW";
    Locale["ru_RU"] = "ru_RU";
    Locale["ja_JP"] = "ja_JP";
    Locale["ne_NP"] = "ne_NP";
    Locale["ar_SA"] = "ar_SA";
    Locale["mn_MN"] = "mn_MN";
    Locale["ur_PK"] = "ur_PK";
    Locale["es_ES"] = "es_ES";
    Locale["fr_FR"] = "fr_FR";
})(Locale = exports.Locale || (exports.Locale = {}));
exports.localeCode = {
    ko: Locale.ko_KR,
    en: Locale.en_US,
    cn: Locale.zh_CN,
    tw: Locale.zh_TW,
    vn: Locale.vi_VN,
    ru: Locale.ru_RU,
    jp: Locale.ja_JP,
    np: Locale.ne_NP,
    mn: Locale.mn_MN,
    ar: Locale.ar_SA,
    es: Locale.es_ES,
    ur: Locale.ur_PK,
    fr: Locale.fr_FR,
};
exports.defaultLocales = [
    exports.fallbackLng,
    "en",
    "cn",
    "tw",
    "vn",
    "ru",
    "jp",
    "np",
    "mn",
    "ur",
    "ar",
    "es",
    "fr",
];
exports.unsupportedLocales = [];
//supportedLocales
exports.locales = exports.defaultLocales.filter((locale) => !exports.unsupportedLocales.includes(locale));
