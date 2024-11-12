/* eslint-disable @typescript-eslint/naming-convention */
export const defaultNS = "common";
export const fallbackLng = "ko";

export type LocaleTypes = (typeof locales)[number];

export enum Locale {
    ko_KR = "ko_KR", // 한국어(한국)
    en_US = "en_US", // 영어(미국)
    vi_VN = "vi_VN", // 베트남어(베트남)
    zh_CN = "zh_CN", // 중국어 간체(중국)
    zh_TW = "zh_TW", // 중국어 번체(대만)
    ru_RU = "ru_RU", // 러시아어
    ja_JP = "ja_JP", // 일본어
    ne_NP = "ne_NP", // 네팔어
    ar_SA = "ar_SA", // 아랍어
    mn_MN = "mn_MN", // 몽골어
    ur_PK = "ur_PK", // 우르두어
    es_ES = "es_ES", // 스페인어
    fr_FR = "fr_FR", // 프랑스어
}

export const localeCode: { [locale in LocaleTypes]: string } = {
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

export const defaultLocales = [
    fallbackLng,
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
] as const;

export const unsupportedLocales: string[] = [];

//supportedLocales
export const locales = defaultLocales.filter(
    (locale) => !unsupportedLocales.includes(locale)
);
