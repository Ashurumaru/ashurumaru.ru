import { i18n, Locale } from '@/shared/config/i18n';

const dictionaries = {
  en: () =>
    import('@/shared/constants/languages/en.json').then((module) => module.default),
  ru: () =>
    import('@/shared/constants/languages/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const dictionaryLoader =
    dictionaries[locale] || dictionaries[i18n.defaultLocale];

  if (typeof dictionaryLoader !== 'function') {
    throw new Error(`No dictionary loader found for locale: ${locale}`);
  }

  return dictionaryLoader();
};
