"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalizedUrl = void 0;
const navigation_1 = require("next/navigation");
function useLocalizedUrl(targetLocale) {
    const pathname = (0, navigation_1.usePathname)();
    const searchParams = (0, navigation_1.useSearchParams)();
    // Split the pathname into segments and exclude the current locale if it's part of the path
    const pathSegments = pathname
        .split("/")
        .filter((segment) => segment && segment !== targetLocale);
    // Construct the new path with the target locale
    const newPath = `/${targetLocale}/${pathSegments.join("/")}`;
    const newUrl = new URL(newPath, window.location.origin);
    // Append existing search parameters to the new URL
    searchParams.forEach((value, key) => {
        newUrl.searchParams.append(key, value);
    });
    return newUrl;
}
exports.useLocalizedUrl = useLocalizedUrl;
