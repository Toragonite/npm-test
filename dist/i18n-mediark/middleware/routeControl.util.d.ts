import { NextRequest, NextResponse } from "next/server";
export declare class RouteControl<T extends Record<string, string>> {
    private request;
    private readonly fbLocale;
    private readonly locales;
    private readonly routeTypes;
    constructor(request: NextRequest, routeTypes: T);
    isControlledRoute(): boolean;
    private isApiRoute;
    private isLocaleRoute;
    private isStaticAsset;
    private isOptions;
    private isNonLocalizedRoute;
    private redirectToLocaleIfMissing;
    handleLocale(): NextResponse | null;
}
