import { Locale } from "./locale.type";
import { convertLocaleFormat } from "./formatting.util";

export const getLocaleWithBestFit = (locale: string): Locale => {
  // Convert the locale format (e.g., en-US to en_US or vice versa)
  const formattedLocale = convertLocaleFormat(locale) as Locale;

  // Get supported locales from the Locale enum
  const supportedLocales = Object.values(Locale);

  // Check for an exact match first
  if (supportedLocales.includes(formattedLocale)) {
    return formattedLocale;
  }

  // Attempt to find a best fit by matching only the language part
  const languagePart = formattedLocale.split(/[-_]/)[0];
  const bestFitLocale = supportedLocales.find((code) => {
    return code.split(/[-_]/)[0] === languagePart;
  });

  // Return the best-fit locale or a default fallback if no match is found
  return bestFitLocale || Locale.ko_KR;
};
