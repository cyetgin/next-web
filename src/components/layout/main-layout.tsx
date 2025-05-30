
"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Header } from './header';
import { HorizontalNav } from './horizontal-nav';
import { useTranslation } from '@/hooks/use-translation';
import { getCopyrightText } from '@/lib/i18n';
import { LanguageContext } from '@/context/language-context';
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLinkBehavior } from '@/context/link-behavior-provider';

export default function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const langContext = React.useContext(LanguageContext);
  const copyrightText = getCopyrightText(langContext?.translations || {});
  const isMobile = useIsMobile(); 
  const { linkBehavior } = useLinkBehavior();

  const linkTarget = linkBehavior === 'newTab' ? '_blank' : '_self';
  const linkRel = linkBehavior === 'newTab' ? 'noopener noreferrer' : undefined;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      {!isMobile && ( 
        <div className="bg-secondary shadow-md border-b border-border">
          <div className="container mx-auto">
            <HorizontalNav />
          </div>
        </div>
      )}
      <main className="flex-1 w-full py-4 px-5 sm:p-6 md:p-8 flex flex-col items-center">
        {children}
      </main>
      <footer className="py-6 px-4 md:px-6 border-t bg-background">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>{copyrightText}</p>
          <nav className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/terms-of-service" className="hover:text-primary hover:underline" target={linkTarget} rel={linkRel}>
              {t('legal.termsOfService.link')}
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary hover:underline" target={linkTarget} rel={linkRel}>
              {t('legal.privacyPolicy.link')}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
