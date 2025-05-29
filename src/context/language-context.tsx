
"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useState, useEffect } from 'react';
import { DEFAULT_LOCALE, Locale, AVAILABLE_LOCALES } from '@/lib/i18n';

export interface LanguageContextType {
  selectedLanguage: Locale;
  setSelectedLanguage: Dispatch<SetStateAction<Locale>>;
  translations: Record<string, string>; // Loaded translations
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>(DEFAULT_LOCALE);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isAppInitialized, setIsAppInitialized] = useState(false); // Tracks if initial language and translations are loaded

  // Effect for loading language preference from localStorage (runs once on mount)
  useEffect(() => {
    const storedLanguage = localStorage.getItem('globalHubLanguage') as Locale | null;
    if (storedLanguage && AVAILABLE_LOCALES.find(l => l.value === storedLanguage)) {
      setSelectedLanguage(storedLanguage);
    }
    // Initial translations will be loaded by the next effect, triggered by selectedLanguage state
  }, []);

  // Effect for loading translation file when selectedLanguage changes or on initial setup
  useEffect(() => {
    const loadTranslations = async (lang: Locale) => {
      try {
        const response = await fetch(`/locales/${lang}.json`);
        if (!response.ok) {
          console.error(`Failed to load ${lang}.json, status: ${response.status}`);
          throw new Error(`Failed to load ${lang}.json`);
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(`Error loading translations for ${lang}:`, error);
        // Attempt to load default (English) if the selected one fails and it's not already English
        if (lang !== DEFAULT_LOCALE) {
          try {
            console.warn(`Attempting to load fallback translations for ${DEFAULT_LOCALE}`);
            const fallbackResponse = await fetch(`/locales/${DEFAULT_LOCALE}.json`);
            if (!fallbackResponse.ok) {
              console.error(`Failed to load fallback ${DEFAULT_LOCALE}.json, status: ${fallbackResponse.status}`);
              throw new Error(`Failed to load ${DEFAULT_LOCALE}.json`);
            }
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
          } catch (fallbackError) {
            console.error("Error loading default translations:", fallbackError);
            setTranslations({}); // Set to empty if all fails
          }
        } else {
            setTranslations({}); // Set to empty if English itself fails
        }
      } finally {
        if (!isAppInitialized) {
            setIsAppInitialized(true);
        }
      }
    };

    loadTranslations(selectedLanguage);
  }, [selectedLanguage, isAppInitialized]); // Rerun if selectedLanguage changes or to init

  // Effect for saving selected language to localStorage
  useEffect(() => {
    // Only save after initial determination and translations have been attempted
    if (isAppInitialized) { 
      localStorage.setItem('globalHubLanguage', selectedLanguage);
    }
  }, [selectedLanguage, isAppInitialized]);

  if (!isAppInitialized) {
    return null; // Or a global loading spinner
  }

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

    
