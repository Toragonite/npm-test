"use strict";
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
exports.useTranslation = void 0;
const i18next_1 = require("i18next");
const i18next_resources_to_backend_1 = __importDefault(require("i18next-resources-to-backend"));
const initReactI18next_1 = require("react-i18next/initReactI18next");
const settings_1 = require("./settings");
const initI18next = (lng, ns) => __awaiter(void 0, void 0, void 0, function* () {
    const i18nInstance = (0, i18next_1.createInstance)();
    yield i18nInstance
        .use(initReactI18next_1.initReactI18next)
        .use((0, i18next_resources_to_backend_1.default)((language, namespace) => { var _a; return _a = `./locales/${language}/${namespace}.json`, Promise.resolve().then(() => __importStar(require(_a))); }))
        .init((0, settings_1.getOptions)(lng, ns));
    return i18nInstance;
});
function useTranslation(lng, ns, options = {} //forcely removed error, might occur problem
) {
    return __awaiter(this, void 0, void 0, function* () {
        const i18nextInstance = yield initI18next(lng, ns);
        return {
            t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
            i18n: i18nextInstance,
        };
    });
}
exports.useTranslation = useTranslation;
