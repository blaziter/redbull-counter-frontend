import { i18n } from '@lingui/core';
export const locales = {
    en: 'English',
    cs: 'Česky',
};

export const defaultLocale = 'en';

export async function loadCatalog(locale: string) {
    const { messages } = await import(`./${locale}.po`);
    i18n.loadAndActivate({ locale, messages });
}
