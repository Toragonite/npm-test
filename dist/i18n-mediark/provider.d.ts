import React, { ReactNode } from "react";
import { LocaleTypes } from "./util";
interface I18nProviderProps {
    children: ReactNode;
    lang: LocaleTypes;
}
export declare const I18nProvider: React.FC<I18nProviderProps>;
export {};
