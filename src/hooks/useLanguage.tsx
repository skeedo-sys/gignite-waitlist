import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '../types/language';
import { enTranslations } from '../i18n/en';
import { bnTranslations } from '../i18n/bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof enTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'bn'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith('bn') ? 'bn' : 'en';
      setLanguageState(browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Set HTML lang attribute for accessibility
    document.documentElement.lang = lang;
    // Set text direction for Bengali
    if (lang === 'bn') {
      document.documentElement.dir = 'ltr';
    }
  };

  const translations = language === 'bn' ? bnTranslations : enTranslations;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations,
      }}
    >
      {isClient && children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
