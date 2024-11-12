import { Locale } from "./locale.type";

// Helper function to validate locale
const isValidLocale = (locale: string): locale is Locale => {
  return Object.values(Locale).includes(locale as Locale);
};

// Function to convert between hyphen and underscore formats
export const convertLocaleFormat = (locale: string): Locale | string => {
  if (!isValidLocale(locale)) {
    console.error(`Invalid locale provided: ${locale}`);
    return locale.includes("-") ? "ko-KR" : Locale.ko_KR;
  }

  // Automatically switch format based on current separator
  return locale.includes("-")
    ? (locale.replace("-", "_") as Locale)
    : locale.replace("_", "-");
};
