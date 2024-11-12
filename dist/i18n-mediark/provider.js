"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nProvider = void 0;
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const i18next_1 = __importDefault(require("i18next"));
const i18next_http_backend_1 = __importDefault(require("i18next-http-backend"));
const settings_1 = require("./settings");
const I18nProvider = ({ children, lang, }) => {
    const [isInitialized, setIsInitialized] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const initializeI18n = () => __awaiter(void 0, void 0, void 0, function* () {
            if (!i18next_1.default.isInitialized) {
                yield i18next_1.default
                    .use(react_i18next_1.initReactI18next)
                    .use(i18next_http_backend_1.default)
                    .init(Object.assign(Object.assign({}, (0, settings_1.getOptions)(lang)), { backend: {
                        loadPath: `/locales/{{lng}}/{{ns}}.json`,
                    } }));
            }
            else {
                yield i18next_1.default.changeLanguage(lang);
                yield i18next_1.default.reloadResources(lang);
            }
            setIsInitialized(true);
        });
        // Call initializeI18n whenever `lang` changes
        initializeI18n().catch((error) => console.error("Error initializing i18n:", error));
    }, [lang]);
    if (!isInitialized)
        return null;
    return react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: i18next_1.default }, children);
};
exports.I18nProvider = I18nProvider;
