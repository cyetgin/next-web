
"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useState, useEffect, useContext } from 'react';

const DEFAULT_REDUCE_MOTION = false;
const REDUCE_MOTION_STORAGE_KEY = 'atez-accessibility-reduce-motion';

export interface AccessibilityContextType {
  reduceMotion: boolean;
  setReduceMotion: Dispatch<SetStateAction<boolean>>;
}

export const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  const [reduceMotion, setReduceMotion] = useState<boolean>(DEFAULT_REDUCE_MOTION);

  useEffect(() => {
    const storedValue = localStorage.getItem(REDUCE_MOTION_STORAGE_KEY);
    if (storedValue !== null) {
      setReduceMotion(storedValue === 'true');
    } else {
      localStorage.setItem(REDUCE_MOTION_STORAGE_KEY, String(DEFAULT_REDUCE_MOTION));
      document.documentElement.classList.toggle('reduce-motion', DEFAULT_REDUCE_MOTION);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(REDUCE_MOTION_STORAGE_KEY, String(reduceMotion));
    document.documentElement.classList.toggle('reduce-motion', reduceMotion);
    // For Tailwind CSS `motion-reduce:` variant, you might not need this class on <html>
    // if Tailwind is configured to respect the OS-level "reduce motion" setting.
    // However, having a class can be useful for custom CSS or JS-driven animations.
  }, [reduceMotion]);

  return (
    <AccessibilityContext.Provider value={{ reduceMotion, setReduceMotion }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
