import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type Language = 'nl' | 'en';

export function copy<T>(language: Language, nl: T, en: T): T {
  return language === 'en' ? en : nl;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem('language') === 'en' ? 'en' : 'nl'
  );

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}