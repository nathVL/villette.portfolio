import en from './locales/en.json';
import fr from './locales/fr.json';

export type Locale = 'en' | 'fr';

const dictionaries = {
    en,
    fr,
};

export function getDictionary(locale: Locale = 'en') {
    return dictionaries[locale] ?? dictionaries['en'];
}

export type Dictionary = typeof en;
