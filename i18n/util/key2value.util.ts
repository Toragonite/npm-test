import { localeCode, LocaleTypes } from './locale.type';

export function getLocaleCode(locale: LocaleTypes): string {
    return localeCode[locale];
}
