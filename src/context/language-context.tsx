"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useState, useEffect } from 'react';
import { DEFAULT_LOCALE, Locale } from '@/lib/i18n';

export interface LanguageContextType {
  selectedLanguage: Locale;
  setSelectedLanguage: Dispatch<SetStateAction<Locale>>;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>(DEFAULT_LOCALE);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('globalHubLanguage') as Locale | null;
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('globalHubLanguage', selectedLanguage);
    }
  }, [selectedLanguage, isInitialized]);
  
  if (!isInitialized) {
    return null; // Or a loading spinner
  }

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
