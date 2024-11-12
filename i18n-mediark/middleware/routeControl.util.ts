import { NextRequest, NextResponse } from "next/server";

import { getEnumValues } from "../helper/enum2List.util";
import {
  LocaleTypes,
  fallbackLng,
  locales,
  defaultLocales,
  unsupportedLocales,
} from "../util";

export class RouteControl<T extends Record<string, string>> {
  private readonly fbLocale: LocaleTypes;
  private readonly locales: LocaleTypes[];
  private readonly routeTypes: T;
  constructor(private request: NextRequest, routeTypes: T) {
    this.request = request;
    this.fbLocale = fallbackLng;
    this.locales = locales;
    this.routeTypes = routeTypes;
  }

  isControlledRoute(): boolean {
    return (
      this.isApiRoute() ||
      this.isLocaleRoute() ||
      this.isStaticAsset() ||
      this.isOptions()
    );
  }
  private isApiRoute(): boolean {
    return this.request.nextUrl.pathname.startsWith("/api");
  }

  private isLocaleRoute(): boolean {
    return this.request.nextUrl.pathname.startsWith("/locales");
  }

  private isStaticAsset(): boolean {
    const staticPaths = ["/_next", "/favicon.ico", "/assets", "/public"];
    return staticPaths.some((path) =>
      this.request.nextUrl.pathname.startsWith(path)
    );
  }

  private isOptions(): boolean {
    return this.request.method === "OPTIONS";
  }

  private isNonLocalizedRoute(): boolean {
    const nonLocalizedRoutes = getEnumValues(this.routeTypes);
    return nonLocalizedRoutes.some((route) =>
      this.request.nextUrl.pathname.startsWith(route)
    );
  }

  private redirectToLocaleIfMissing(): NextResponse | null {
    const { pathname, search } = this.request.nextUrl;
    const pathSegments = pathname.split("/");
    const potentialLocale = pathSegments[1] as LocaleTypes;

    // UPDATED: Check if the potential locale is valid but unsupported
    if (
      defaultLocales.includes(potentialLocale) &&
      unsupportedLocales.includes(potentialLocale)
    ) {
      const newUrl = this.request.nextUrl.clone();
      // Redirect to the fallback locale and remove the unsupported locale from the path
      newUrl.pathname = `/${this.fbLocale}${pathname.slice(
        potentialLocale.length + 1
      )}`; // UPDATED
      console.log(
        "[Locale] Redirecting unsupported locale to fallback:",
        newUrl.toString()
      );
      newUrl.search = search;
      return NextResponse.redirect(newUrl);
    }

    // UPDATED: Check if locale is missing or invalid, then redirect to the fallback
    if (!this.locales.includes(potentialLocale)) {
      const newUrl = this.request.nextUrl.clone();
      newUrl.pathname = `/${this.fbLocale}${pathname}`;
      console.log(
        "[Locale] Redirecting to fallback locale:",
        newUrl.toString()
      );
      newUrl.search = search;
      return NextResponse.redirect(newUrl);
    }

    return null; // No redirection needed if locale is found
  }

  handleLocale(): NextResponse | null {
    if (this.isNonLocalizedRoute()) {
      return this.redirectToLocaleIfMissing();
    }

    return null;
  }
}
