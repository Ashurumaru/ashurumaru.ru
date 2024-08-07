import type { Locale } from '@/shared/config/i18n';

const dictionaries = {
  en: () => import('@/shared/dictionaries/en.json').then(module => module.default),
  ru: () => import('@/shared/dictionaries/ru.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) => {
  const dictionaryLoader = dictionaries[locale];
  if (dictionaryLoader) {
    return await dictionaryLoader();
  } else {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }
};
