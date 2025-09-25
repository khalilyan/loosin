'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', label: 'EN', countryCode: 'GB' },
  { code: 'am', label: 'AM', countryCode: 'AM' },
  { code: 'ru', label: 'RU', countryCode: 'RU' }
];

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState(pathname.split('/')[1] || 'en');

  useEffect(() => {
    const locale = pathname.split('/')[1] || 'en';
    setCurrentLocale(locale);
  }, [pathname]);

  const changeLanguage = (locale) => {
    const segments = pathname.split('/');
    if (segments[1] && languages.some(lang => lang.code === segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ currentLocale, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}