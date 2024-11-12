"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleCode = void 0;
const locale_type_1 = require("./locale.type");
function getLocaleCode(locale) {
    return locale_type_1.localeCode[locale];
}
exports.getLocaleCode = getLocaleCode;
