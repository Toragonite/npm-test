export const getEnumValues = <T extends Record<string, string>>(
    enumObj: T
): string[] => {
    return Object.values(enumObj);
};
