export declare const defaultNS = "common";
export declare const fallbackLng = "ko";
export type LocaleTypes = (typeof locales)[number];
export declare enum Locale {
    ko_KR = "ko_KR",
    en_US = "en_US",
    vi_VN = "vi_VN",
    zh_CN = "zh_CN",
    zh_TW = "zh_TW",
    ru_RU = "ru_RU",
    ja_JP = "ja_JP",
    ne_NP = "ne_NP",
    ar_SA = "ar_SA",
    mn_MN = "mn_MN",
    ur_PK = "ur_PK",
    es_ES = "es_ES",
    fr_FR = "fr_FR"
}
export declare const localeCode: {
    [locale in LocaleTypes]: string;
};
export declare const defaultLocales: readonly ["ko", "en", "cn", "tw", "vn", "ru", "jp", "np", "mn", "ur", "ar", "es", "fr"];
export declare const unsupportedLocales: string[];
export declare const locales: ("ko" | "en" | "cn" | "tw" | "vn" | "ru" | "jp" | "np" | "mn" | "ur" | "ar" | "es" | "fr")[];
