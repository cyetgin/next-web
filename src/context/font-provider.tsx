
"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useState, useEffect, useContext } from 'react';

export type FontSize = 'sm' | 'md' | 'lg';
const DEFAULT_FONT_SIZE: FontSize = 'md';
const FONT_STORAGE_KEY = 'atez-font-size';

export interface FontContextType {
  fontSize: FontSize;
  setFontSize: Dispatch<SetStateAction<FontSize>>;
}

export const FontContext = createContext<FontContextType | undefined>(undefined);

interface FontProviderProps {
  children: ReactNode;
}

export const FontProvider = ({ children }: FontProviderProps) => {
  const [fontSize, setFontSize] = useState<FontSize>(DEFAULT_FONT_SIZE);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedFontSize = localStorage.getItem(FONT_STORAGE_KEY) as FontSize | null;
    if (storedFontSize && ['sm', 'md', 'lg'].includes(storedFontSize)) {
      setFontSize(storedFontSize);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(FONT_STORAGE_KEY, fontSize);
      document.documentElement.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg');
      document.documentElement.classList.add(`font-scale-${fontSize}`);
    }
  }, [fontSize, isInitialized]);
  
  if (!isInitialized) {
    return null; // Or a loading spinner
  }

  return (
    <FontContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = (): FontContextType => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};
