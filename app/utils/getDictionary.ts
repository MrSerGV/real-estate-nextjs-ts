import { importDictionary } from '@/app/localization/server/server-dictionaries';
import { getLanguage } from '@/app/utils/getLanguage';
import { SupportedLanguage } from '@/app/localization/suported-languagies';

export const getDictionary = async () => {
    const lang = await getLanguage();
    return await importDictionary(lang as SupportedLanguage);
}