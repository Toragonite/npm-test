"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleWithBestFit = void 0;
const locale_type_1 = require("./locale.type");
const formatting_util_1 = require("./formatting.util");
const getLocaleWithBestFit = (locale) => {
    // Convert the locale format (e.g., en-US to en_US or vice versa)
    const formattedLocale = (0, formatting_util_1.convertLocaleFormat)(locale);
    // Get supported locales from the Locale enum
    const supportedLocales = Object.values(locale_type_1.Locale);
    // Check for an exact match first
    if (supportedLocales.includes(formattedLocale)) {
        return formattedLocale;
    }
    // Attempt to find a best fit by matching only the language part
    const languagePart = formattedLocale.split(/[-_]/)[0];
    const bestFitLocale = supportedLocales.find((code) => {
        return code.split(/[-_]/)[0] === languagePart;
    });
    // Return the best-fit locale or a default fallback if no match is found
    return bestFitLocale || locale_type_1.Locale.ko_KR;
};
exports.getLocaleWithBestFit = getLocaleWithBestFit;
