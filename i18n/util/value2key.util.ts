import { fallbackLng, localeCode, LocaleTypes } from './locale.type';

export const getLocaleKey = (localeValue: string): LocaleTypes => {
    const keys = Object.keys(localeCode) as Array<LocaleTypes>;
    for (const key of keys) {
        if (localeCode[key] === localeValue) {
            return key;
        }
    }
    return fallbackLng as LocaleTypes;
};
