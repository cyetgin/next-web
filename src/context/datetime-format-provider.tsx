
"use client";

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useState, useEffect, useContext } from 'react';

// Define a few common date formats. You can expand this list.
// These are compatible with date-fns format strings.
export type DateTimeFormatOption = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';
export const DATE_FORMAT_OPTIONS: { value: DateTimeFormatOption, labelKey: string }[] = [
  { value: 'DD/MM/YYYY', labelKey: 'settings.dateTime.format.dmy' },
  { value: 'MM/DD/YYYY', labelKey: 'settings.dateTime.format.mdy' },
  { value: 'YYYY-MM-DD', labelKey: 'settings.dateTime.format.ymd' },
];

const DEFAULT_DATETIME_FORMAT: DateTimeFormatOption = 'MM/DD/YYYY';
const DATETIME_FORMAT_STORAGE_KEY = 'atez-datetime-format';


export interface DateTimeFormatContextType {
  dateTimeFormat: DateTimeFormatOption;
  setDateTimeFormat: Dispatch<SetStateAction<DateTimeFormatOption>>;
}

export const DateTimeFormatContext = createContext<DateTimeFormatContextType | undefined>(undefined);

interface DateTimeFormatProviderProps {
  children: ReactNode;
}

export const DateTimeFormatProvider = ({ children }: DateTimeFormatProviderProps) => {
  const [dateTimeFormat, setDateTimeFormat] = useState<DateTimeFormatOption>(DEFAULT_DATETIME_FORMAT);

  useEffect(() => {
    const storedFormat = localStorage.getItem(DATETIME_FORMAT_STORAGE_KEY) as DateTimeFormatOption | null;
    if (storedFormat && DATE_FORMAT_OPTIONS.find(opt => opt.value === storedFormat)) {
      setDateTimeFormat(storedFormat);
    } else {
      localStorage.setItem(DATETIME_FORMAT_STORAGE_KEY, DEFAULT_DATETIME_FORMAT);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(DATETIME_FORMAT_STORAGE_KEY, dateTimeFormat);
  }, [dateTimeFormat]);

  return (
    <DateTimeFormatContext.Provider value={{ dateTimeFormat, setDateTimeFormat }}>
      {children}
    </DateTimeFormatContext.Provider>
  );
};

export const useDateTimeFormat = (): DateTimeFormatContextType => {
  const context = useContext(DateTimeFormatContext);
  if (context === undefined) {
    throw new Error('useDateTimeFormat must be used within a DateTimeFormatProvider');
  }
  return context;
};
