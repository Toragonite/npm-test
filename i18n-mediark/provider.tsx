"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { getOptions } from "./settings";
import { LocaleTypes } from "./util";

interface I18nProviderProps {
    children: ReactNode;
    lang: LocaleTypes;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
    children,
    lang,
}) => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeI18n = async () => {
            if (!i18next.isInitialized) {
                await i18next
                    .use(initReactI18next)
                    .use(HttpBackend)
                    .init<HttpBackendOptions>({
                        ...getOptions(lang),
                        backend: {
                            loadPath: `/locales/{{lng}}/{{ns}}.json`,
                        },
                    });
            } else {
                await i18next.changeLanguage(lang);
                await i18next.reloadResources(lang);
            }
            setIsInitialized(true);
        };

        // Call initializeI18n whenever `lang` changes
        initializeI18n().catch((error) =>
            console.error("Error initializing i18n:", error)
        );
    }, [lang]);

    if (!isInitialized) return null;

    return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
