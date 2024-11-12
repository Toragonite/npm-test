"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = void 0;
const util_1 = require("./util");
function getOptions(lang = util_1.fallbackLng, ns = util_1.defaultNS) {
    return {
        debug: false,
        supportedLngs: util_1.locales,
        fallbackLng: util_1.fallbackLng,
        lng: lang,
        fallbackNS: util_1.defaultNS,
        defaultNS: util_1.defaultNS,
        interpolation: {
            escapeValue: false,
        },
        ns: [
            "common",
            "keywordExample",
            "questionnaire",
            "register_tablet",
            "unitType",
        ],
    };
}
exports.getOptions = getOptions;
