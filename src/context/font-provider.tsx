
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
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    // This function runs only on initial mount for useState
    if (typeof window !== 'undefined') { // Ensure localStorage is available
      const storedFontSize = localStorage.getItem(FONT_STORAGE_KEY) as FontSize | null;
      if (storedFontSize && ['sm', 'md', 'lg'].includes(storedFontSize)) {
        return storedFontSize;
      }
    }
    return DEFAULT_FONT_SIZE;
  });

  useEffect(() => {
    // This effect runs on mount and whenever fontSize changes.
    // It's crucial that typeof window check is here too for environments like SSR
    // where document might not be available initially, though for classList it should be client-side.
    if (typeof window !== 'undefined') {
      localStorage.setItem(FONT_STORAGE_KEY, fontSize);
      document.documentElement.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg');
      document.documentElement.classList.add(`font-scale-${fontSize}`);
    }
  }, [fontSize]);

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
