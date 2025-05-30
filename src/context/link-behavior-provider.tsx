
"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useState, useEffect, useContext } from 'react';

export type LinkBehavior = 'sameTab' | 'newTab';
const DEFAULT_LINK_BEHAVIOR: LinkBehavior = 'sameTab';
const LINK_BEHAVIOR_STORAGE_KEY = 'atez-link-behavior';

export interface LinkBehaviorContextType {
  linkBehavior: LinkBehavior;
  setLinkBehavior: Dispatch<SetStateAction<LinkBehavior>>;
}

export const LinkBehaviorContext = createContext<LinkBehaviorContextType | undefined>(undefined);

interface LinkBehaviorProviderProps {
  children: ReactNode;
}

export const LinkBehaviorProvider = ({ children }: LinkBehaviorProviderProps) => {
  const [linkBehavior, setLinkBehavior] = useState<LinkBehavior>(DEFAULT_LINK_BEHAVIOR);

  useEffect(() => {
    const storedLinkBehavior = localStorage.getItem(LINK_BEHAVIOR_STORAGE_KEY) as LinkBehavior | null;
    if (storedLinkBehavior && ['sameTab', 'newTab'].includes(storedLinkBehavior)) {
      setLinkBehavior(storedLinkBehavior);
    } else {
      localStorage.setItem(LINK_BEHAVIOR_STORAGE_KEY, DEFAULT_LINK_BEHAVIOR);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LINK_BEHAVIOR_STORAGE_KEY, linkBehavior);
  }, [linkBehavior]);

  return (
    <LinkBehaviorContext.Provider value={{ linkBehavior, setLinkBehavior }}>
      {children}
    </LinkBehaviorContext.Provider>
  );
};

export const useLinkBehavior = (): LinkBehaviorContextType => {
  const context = useContext(LinkBehaviorContext);
  if (context === undefined) {
    throw new Error('useLinkBehavior must be used within a LinkBehaviorProvider');
  }
  return context;
};
