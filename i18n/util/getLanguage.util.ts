import { LocaleTypes } from "./locale.type";

export function getLanguage(locale: LocaleTypes): string {
    const localeCode: { [locale in LocaleTypes]: string } = {
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
