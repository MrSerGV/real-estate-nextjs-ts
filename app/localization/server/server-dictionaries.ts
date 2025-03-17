import 'server-only'
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '@/app/localization/suported-languagies';
import { ServerDictionary } from '@/app/localization/server/types';
import { DEFAULT_LANGUAGE } from "@/middleware";

export const importDictionary = async (locale: string): Promise<ServerDictionary> => {
    let dictionary: ServerDictionary;

    const isSupported = SUPPORTED_LANGUAGES.includes(locale as SupportedLanguage);
    const languageToLoad = isSupported ? locale : DEFAULT_LANGUAGE;

    try {
        dictionary = await import(`./${locale}.json`).then(
            (module) => module.default,
        );
    } catch (error) {
        console.error(
            `Failed to load messages for language: ${locale}`,
            error,
        );
        if (languageToLoad !== DEFAULT_LANGUAGE) {
            dictionary = await import(`./${locale}.json`).then(
                (module) => module.default,
            );
        } else {
            throw new Error("Failed to load default language messages.");
        }
    }

    return dictionary;
}
