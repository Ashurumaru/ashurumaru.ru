import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nConfig from '../../../next-i18next.config.mjs';

export default async function initTranslations(locale, namespaces, i18nInstance, resources) {
    i18nInstance = i18nInstance || createInstance();

    i18nInstance.use(initReactI18next);

    if (!resources) {
        const loadedResources = {};

        for (const ns of namespaces) {
            const response = await fetch(`/locales/${locale}/${ns}.json`);
            const translations = await response.json();
            loadedResources[locale] = {
                ...(loadedResources[locale] || {}),
                [ns]: translations,
            };
        }

        resources = loadedResources;
    }

    await i18nInstance.init({
        lng: locale,
        resources,
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        defaultNS: namespaces[0],
        fallbackNS: namespaces[0],
        ns: namespaces,
        preload: resources ? [] : i18nConfig.locales,
    });

    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t,
    };
}
