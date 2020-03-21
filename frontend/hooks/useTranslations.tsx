import * as React from 'react';
import LocaleContext from '../context/LocaleContext';
import translations from '../translations';
import { defaultLocale } from '../utils/locales';

const useTranslation = () => {
  const { locale } = React.useContext(LocaleContext);
  function t(key: any) {
    if (!translations[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return translations[locale][key] || translations[defaultLocale][key] || '';
  }
  return { t, locale };
};

export default useTranslation;
