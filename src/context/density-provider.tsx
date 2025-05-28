
"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useState, useEffect, useContext } from 'react';

export type Density = 'compact' | 'default' | 'spacious';
const DEFAULT_DENSITY: Density = 'default';
const DENSITY_STORAGE_KEY = 'atez-content-density';

export interface DensityContextType {
  density: Density;
  setDensity: Dispatch<SetStateAction<Density>>;
}

export const DensityContext = createContext<DensityContextType | undefined>(undefined);

interface DensityProviderProps {
  children: ReactNode;
}

export const DensityProvider = ({ children }: DensityProviderProps) => {
  const [density, setDensity] = useState<Density>(DEFAULT_DENSITY);

  useEffect(() => {
    const storedDensity = localStorage.getItem(DENSITY_STORAGE_KEY) as Density | null;
    if (storedDensity && ['compact', 'default', 'spacious'].includes(storedDensity)) {
      setDensity(storedDensity);
    } else {
      document.documentElement.classList.remove('density-compact', 'density-default', 'density-spacious');
      document.documentElement.classList.add(`density-${DEFAULT_DENSITY}`);
      localStorage.setItem(DENSITY_STORAGE_KEY, DEFAULT_DENSITY);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('density-compact', 'density-default', 'density-spacious');
    document.documentElement.classList.add(`density-${density}`);
    localStorage.setItem(DENSITY_STORAGE_KEY, density);
  }, [density]);

  return (
    <DensityContext.Provider value={{ density, setDensity }}>
      {children}
    </DensityContext.Provider>
  );
};

export const useDensity = (): DensityContextType => {
  const context = useContext(DensityContext);
  if (context === undefined) {
    throw new Error('useDensity must be used within a DensityProvider');
  }
  return context;
};
