"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguage = void 0;
function getLanguage(locale) {
    const localeCode = {
        ko: "한국어",
        en: "English",
        ur: "اُردُو",
        ar: "عربي",
        jp: "日本語",
        cn: "简体中文",
        tw: "繁體中文",
        vn: "Tiếng Việt",
        ru: "Русский",
        np: "नेपाली",
        mn: "Монгол",
        es: "Español",
        fr: "Français",
    };
    return localeCode[locale];
}
exports.getLanguage = getLanguage;
