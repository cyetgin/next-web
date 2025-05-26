"use client";

import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from '@/context/language-context';
import { translations, TranslationKey, Locale, DEFAULT_LOCALE } from '@/lib/i18n';

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  const { selectedLanguage } = context;

  const t = (key: TranslationKey | string): string => { // Allow string for dynamic keys if necessary, though TranslationKey is preferred
    const lang = selectedLanguage as Locale;
    // Fallback chain: selected language -> default language -> key itself
    return translations[lang]?.[key as TranslationKey] || translations[DEFAULT_LOCALE]?.[key as TranslationKey] || String(key);
  };

  return { t, currentLanguage: selectedLanguage };
};
