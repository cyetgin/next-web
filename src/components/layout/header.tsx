
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { LanguageSelector } from '@/components/language-selector';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export function Header() {
  const { t, currentLanguage } = useTranslation();
  // Removed useSidebar and isMobile as sidebar is being replaced

  let logoSrc: string;
  let logoWidth: number;
  let logoHeight: number;

  if (currentLanguage === 'tr') {
    logoSrc = "https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/400-105-TR.png?alt=media&token=a93538ed-50f5-42db-a4bc-e749bc3ea9b8";
    logoWidth = 400;
    logoHeight = 105;
  } else { // English and German
    logoSrc = "https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/400-105-EN.png?alt=media&token=63ad9b7e-7011-433a-b02d-03f695831975";
    logoWidth = 400;
    logoHeight = 105;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-[110px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* Mobile menu toggle removed as primary navigation is changing */}
          <Link href="/" className="flex items-center text-primary hover:text-primary/90 no-underline">
            <Image
              src={logoSrc}
              alt={t('logo.text')}
              width={logoWidth}
              height={logoHeight}
              className="h-[105px] w-auto"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link href="/settings">
              <Settings className="h-6 w-6" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
