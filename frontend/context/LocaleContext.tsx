import * as React from 'react';
import { useRouter } from 'next/router';
import { isLocale, defaultLocale } from '../utils/locales';
import { Locale } from '../types';

type ContextProps = {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
};

const LocaleContext = React.createContext<ContextProps>({
  locale: defaultLocale,
  setLocale: () => null,
});

export const LocaleProvider: React.FC<{ initialLocale: Locale }> = ({
  initialLocale,
  children,
}) => {
  const [locale, setLocale] = React.useState(initialLocale);
  const { query } = useRouter();

  React.useEffect(() => {
    if (
      typeof query.locale === 'string' &&
      isLocale(query.locale) &&
      locale !== query.locale
    ) {
      setLocale(query.locale);
    }
  }, [query.locale, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
