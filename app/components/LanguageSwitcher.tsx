import { ChangeEvent } from 'react';

import { HOME } from '@/app/api/routes';
import { LANG_KEY } from '@/middleware';
import { LANGUAGE_LIST } from '@/app/localization/suported-languagies';
import { useTranslation } from '@/app/localization/client/useTranslation';


const LanguageSwitcher = () => {
    const { language, setLanguage } = useTranslation();

    const onLanguageChange = (selectedLanguage: string) => {
        if (selectedLanguage !== language) {
            setLanguage(selectedLanguage);
            document.cookie = `${LANG_KEY}=${selectedLanguage}; path=${HOME};`;
            window.location.reload(); // reload page for apply changes on server
        }
    };

    return (
        <div className='flex space-x-2 px-3 py-2'>
            <select
                className='p-2 border border-black-900 focus:ring-2 focus:outline-none focus:ring-black-700 rounded-md cursor-pointer'
                onChange={(e: ChangeEvent<HTMLSelectElement>) => onLanguageChange(e.target.value)}
                value={language}
            >
            {
                LANGUAGE_LIST.map((lang, index) => (<option key={index} value={lang.locale}>{lang.label}</option>))
            }
            </select>
        </div>
    );
}

export default LanguageSwitcher;