
"use client";

import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from '@/context/language-context';
import type { TranslationKey } from '@/lib/i18n'; // Assuming TranslationKey is still defined in i18n.ts
import { getCopyrightText } from '@/lib/i18n';


export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  const { selectedLanguage, translations } = context;

  const t = (key: TranslationKey | string): string => {
    // translations object should ideally not be null if LanguageProvider handles loading correctly
    // but we can add a check for robustness or if it's initially empty.
    if (Object.keys(translations).length === 0 && key !== 'footer.copyright') {
      // Could return a loading indicator or the key itself if translations are not yet loaded.
      // For now, returning the key is a simple fallback.
      // console.warn(`Translations not loaded or empty, returning key: ${key}`);
    }
    if (key === 'footer.copyright') {
      return getCopyrightText(translations);
    }
    return translations[key as TranslationKey] || String(key); // Fallback to the key itself if not found
  };

  return { t, currentLanguage: selectedLanguage };
};

    