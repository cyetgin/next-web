"use client";

import { useContext } from 'react';
import { Languages } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LanguageContext, LanguageContextType } from '@/context/language-context';
import { AVAILABLE_LOCALES, Locale } from '@/lib/i18n';

export function LanguageSelector() {
  const context = useContext(LanguageContext);

  if (!context) {
    // This case should ideally not happen if used within LanguageProvider
    return null; 
  }
  const { selectedLanguage, setSelectedLanguage } = context;

  return (
    <Select
      value={selectedLanguage}
      onValueChange={(value) => setSelectedLanguage(value as Locale)}
    >
      <SelectTrigger className="w-auto min-w-[120px] h-9 text-sm">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <SelectValue placeholder="Language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {AVAILABLE_LOCALES.map((locale) => (
          <SelectItem key={locale.value} value={locale.value}>
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
