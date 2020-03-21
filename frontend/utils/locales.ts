import * as http from 'http';
import { Locale } from '../types';
export const defaultLocale = 'en';
export const locales = ['en', 'de'];

const DEFAULT_LOCALE = 'en';

export function isLocale(tested: string): tested is Locale {
  return locales.some(locale => locale === tested);
}

export function detectLocale(req?: http.IncomingMessage): string {
  if (req) {
    const acceptLanugage = req.headers['accept-language'];
    if (acceptLanugage) {
      const requestedLocales = acceptLanugage.split(',').map(part => {
        const [locale, priority] = part.trim().split(';q=');
        return { locale, priority: parseInt(priority) };
      });
      requestedLocales.sort((a, b) => b.priority - a.priority);
      const found = requestedLocales.find(({ locale }) => locale !== '*');
      if (!found) return DEFAULT_LOCALE;
      else {
        const locale = found.locale.split('-')[0];
        if (locales.includes(locale)) return locale;
        else return DEFAULT_LOCALE;
      }
    }
  }

  if (typeof navigator !== 'undefined') {
    const locale = navigator.languages[0].split('-')[0];
    if (locale && locales.includes(locale)) return locale;
    else return DEFAULT_LOCALE;
  }

  return DEFAULT_LOCALE;
}
