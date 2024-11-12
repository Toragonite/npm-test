"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertLocaleFormat = void 0;
const locale_type_1 = require("./locale.type");
// Helper function to validate locale
const isValidLocale = (locale) => {
    return Object.values(locale_type_1.Locale).includes(locale);
};
// Function to convert between hyphen and underscore formats
const convertLocaleFormat = (locale) => {
    if (!isValidLocale(locale)) {
        console.error(`Invalid locale provided: ${locale}`);
        return locale.includes("-") ? "ko-KR" : locale_type_1.Locale.ko_KR;
    }
    // Automatically switch format based on current separator
    return locale.includes("-")
        ? locale.replace("-", "_")
        : locale.replace("_", "-");
};
exports.convertLocaleFormat = convertLocaleFormat;
