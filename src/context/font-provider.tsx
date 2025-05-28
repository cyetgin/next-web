
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
  // Initialize with default, will be updated from localStorage after mount
  const [fontSize, setFontSize] = useState<FontSize>(DEFAULT_FONT_SIZE);

  // Effect to load font size from localStorage on initial client-side mount
  useEffect(() => {
    const storedFontSize = localStorage.getItem(FONT_STORAGE_KEY) as FontSize | null;
    if (storedFontSize && ['sm', 'md', 'lg'].includes(storedFontSize)) {
      // If a valid size is found in localStorage, set it.
      // This will trigger the second useEffect to apply classes.
      setFontSize(storedFontSize);
    } else {
      // If no valid size in localStorage, apply default classes and save default to localStorage.
      // This ensures consistency if localStorage was empty or had an invalid value.
      document.documentElement.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg');
      document.documentElement.classList.add(`font-scale-${DEFAULT_FONT_SIZE}`);
      localStorage.setItem(FONT_STORAGE_KEY, DEFAULT_FONT_SIZE);
      // setFontSize(DEFAULT_FONT_SIZE); // Not strictly necessary if state is already default, but good for clarity
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array: runs once on mount on the client

  // Effect to apply font size changes to localStorage and DOM
  useEffect(() => {
    // This effect runs when `fontSize` changes (including from the effect above)
    // or on initial render if the initial state triggers a change from a hypothetical pre-effect state.
    document.documentElement.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg');
    document.documentElement.classList.add(`font-scale-${fontSize}`);
    localStorage.setItem(FONT_STORAGE_KEY, fontSize);
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
