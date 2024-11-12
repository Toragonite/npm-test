import { LocaleTypes } from './util';
export declare function useTranslation(lng: LocaleTypes, ns: string, options?: {
    keyPrefix?: string;
}): Promise<{
    t: import("i18next").TFunction<any, string>;
    i18n: import("i18next").i18n;
}>;
