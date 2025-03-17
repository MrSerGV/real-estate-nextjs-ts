export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LIST = [
    {
        label: 'English',
        locale: 'en',
    },
    {
        label: 'Español',
        locale: 'es',
    }
];

export const SUPPORTED_LANGUAGES = LANGUAGE_LIST.map(
    (language) => language.locale,
);