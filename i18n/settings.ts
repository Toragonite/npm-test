import type { InitOptions } from "i18next";
import { defaultNS, fallbackLng, locales } from "./util";

export function getOptions(lang = fallbackLng, ns = defaultNS): InitOptions {
    return {
        debug: false, // Set true to see console logs
        supportedLngs: locales,
        fallbackLng,
        lng: lang,
        fallbackNS: defaultNS,
        defaultNS,
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
