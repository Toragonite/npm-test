"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleKey = void 0;
const locale_type_1 = require("./locale.type");
const getLocaleKey = (localeValue) => {
    const keys = Object.keys(locale_type_1.localeCode);
    for (const key of keys) {
        if (locale_type_1.localeCode[key] === localeValue) {
            return key;
        }
    }
    return locale_type_1.fallbackLng;
};
exports.getLocaleKey = getLocaleKey;
