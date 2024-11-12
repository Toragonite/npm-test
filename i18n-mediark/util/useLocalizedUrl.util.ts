import { usePathname, useSearchParams } from "next/navigation";

export function useLocalizedUrl(targetLocale: string): URL {
    const pathname = usePathname();
    const searchParams = useSearchParams();

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
