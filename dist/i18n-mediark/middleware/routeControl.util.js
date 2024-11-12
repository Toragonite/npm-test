"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteControl = void 0;
const server_1 = require("next/server");
const enum2List_util_1 = require("../helper/enum2List.util");
const util_1 = require("../util");
class RouteControl {
    constructor(request, routeTypes) {
        this.request = request;
        this.request = request;
        this.fbLocale = util_1.fallbackLng;
        this.locales = util_1.locales;
        this.routeTypes = routeTypes;
    }
    isControlledRoute() {
        return (this.isApiRoute() ||
            this.isLocaleRoute() ||
            this.isStaticAsset() ||
            this.isOptions());
    }
    isApiRoute() {
        return this.request.nextUrl.pathname.startsWith("/api");
    }
    isLocaleRoute() {
        return this.request.nextUrl.pathname.startsWith("/locales");
    }
    isStaticAsset() {
        const staticPaths = ["/_next", "/favicon.ico", "/assets", "/public"];
        return staticPaths.some((path) => this.request.nextUrl.pathname.startsWith(path));
    }
    isOptions() {
        return this.request.method === "OPTIONS";
    }
    isNonLocalizedRoute() {
        const nonLocalizedRoutes = (0, enum2List_util_1.getEnumValues)(this.routeTypes);
        return nonLocalizedRoutes.some((route) => this.request.nextUrl.pathname.startsWith(route));
    }
    redirectToLocaleIfMissing() {
        const { pathname, search } = this.request.nextUrl;
        const pathSegments = pathname.split("/");
        const potentialLocale = pathSegments[1];
        // UPDATED: Check if the potential locale is valid but unsupported
        if (util_1.defaultLocales.includes(potentialLocale) &&
            util_1.unsupportedLocales.includes(potentialLocale)) {
            const newUrl = this.request.nextUrl.clone();
            // Redirect to the fallback locale and remove the unsupported locale from the path
            newUrl.pathname = `/${this.fbLocale}${pathname.slice(potentialLocale.length + 1)}`; // UPDATED
            console.log("[Locale] Redirecting unsupported locale to fallback:", newUrl.toString());
            newUrl.search = search;
            return server_1.NextResponse.redirect(newUrl);
        }
        // UPDATED: Check if locale is missing or invalid, then redirect to the fallback
        if (!this.locales.includes(potentialLocale)) {
            const newUrl = this.request.nextUrl.clone();
            newUrl.pathname = `/${this.fbLocale}${pathname}`;
            console.log("[Locale] Redirecting to fallback locale:", newUrl.toString());
            newUrl.search = search;
            return server_1.NextResponse.redirect(newUrl);
        }
        return null; // No redirection needed if locale is found
    }
    handleLocale() {
        if (this.isNonLocalizedRoute()) {
            return this.redirectToLocaleIfMissing();
        }
        return null;
    }
}
exports.RouteControl = RouteControl;
