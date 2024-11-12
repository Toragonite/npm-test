"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const runsOnServerSide = typeof window === "undefined";
// //
// i18next
//     .use(initReactI18next)
//     .use(LanguageDetector)
//     .use(
//         resourcesToBackend((language: LocaleTypes, namespace: string) =>
//             fetch(`/locales/${language}/${namespace}.json`).then((res) =>
//                 res.json()
//             )
//         )
//     )
//     .init({
//         ...getOptions(),
//         lng: undefined, // let detect the language on client side
//         detection: {
//             order: ["path"],
//         },
//         preload: runsOnServerSide ? locales : [],
//     });
function useTranslation(lng, ns, options) {
    // const [cookies, setCookie] = useCookies([cookieName]);
    const ret = (0, react_i18next_1.useTranslation)(ns, options);
    const { i18n } = ret;
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
    }
    else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLng, setActiveLng] = (0, react_1.useState)(i18n.resolvedLanguage);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useEffect)(() => {
            if (activeLng === i18n.resolvedLanguage)
                return;
            setActiveLng(i18n.resolvedLanguage);
        }, [activeLng, i18n.resolvedLanguage]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useEffect)(() => {
            if (!lng || i18n.resolvedLanguage === lng)
                return;
            i18n.changeLanguage(lng);
        }, [lng, i18n]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
    }
    return ret;
}
exports.useTranslation = useTranslation;
