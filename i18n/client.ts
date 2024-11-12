"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
    initReactI18next,
    useTranslation as useTranslationOrg,
} from "react-i18next";
//might be problem
// import { useCookies } from 'react-cookie';
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { locales, LocaleTypes } from "./util";
import { getOptions } from "./settings";

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

export function useTranslation(
    lng: LocaleTypes,
    ns: string,
    options: Record<string, unknown>
) {
    // const [cookies, setCookie] = useCookies([cookieName]);
    const ret = useTranslationOrg(ns, options);
    const { i18n } = ret;
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (activeLng === i18n.resolvedLanguage) return;
            setActiveLng(i18n.resolvedLanguage);
        }, [activeLng, i18n.resolvedLanguage]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!lng || i18n.resolvedLanguage === lng) return;
            i18n.changeLanguage(lng);
        }, [lng, i18n]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
    }
    return ret;
}
