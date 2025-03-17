'use client'

import { useCallback, useState, useEffect } from 'react';
import { DEFAULT_LANGUAGE, LANG_KEY } from '@/middleware';

import locales from './index'
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '@/app/localization/suported-languagies';
import { ClientDictionary } from '@/app/localization/client/types';


const useTranslation = <Namespace extends keyof ClientDictionary>(namespace?: Namespace) => {
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

    const t = useCallback(
        (str?: string): string => {
            const isSupported = SUPPORTED_LANGUAGES.includes(language as SupportedLanguage);
            const languageToLoad = isSupported ? language : DEFAULT_LANGUAGE;
            const dictionary = locales[languageToLoad] || locales[DEFAULT_LANGUAGE];
            if (!namespace) {
                return '';
            }
            const namespaceDictionary: string | ClientDictionary[Namespace] = dictionary[namespace];
            if (typeof namespaceDictionary === 'string') {
                return namespaceDictionary;
            }

            return str && typeof namespaceDictionary === 'object' && str in namespaceDictionary ?
                String(namespaceDictionary[str as keyof ClientDictionary[Namespace]]) :
                    str || '';
        }, [language]
    );

    useEffect(() => {
        const initialLanguage = document?.cookie.split(`${LANG_KEY}=`)[1];
        setLanguage(initialLanguage);
    }, []);

    return { t, language, setLanguage };
};


export { useTranslation };
