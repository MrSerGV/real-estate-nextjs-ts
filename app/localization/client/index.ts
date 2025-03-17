import { SupportedLanguage } from "@/app/localization/suported-languagies";
import { ClientDictionary } from "@/app/localization/client/types";

import en from './en.json';
import es from './es.json';


const locales: Record<SupportedLanguage, ClientDictionary> = {
    en,
    es
};

export  default locales
