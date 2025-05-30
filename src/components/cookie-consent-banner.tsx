
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { useLinkBehavior } from '@/context/link-behavior-provider';


const COOKIE_CONSENT_KEY = 'atez_cookie_consent';

export function CookieConsentBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const { linkBehavior } = useLinkBehavior();

  const linkTarget = linkBehavior === 'newTab' ? '_blank' : '_self';
  const linkRel = linkBehavior === 'newTab' ? 'noopener noreferrer' : undefined;

  useEffect(() => {
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consentGiven === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80 text-center sm:text-left">
          {t('legal.cookieConsent.text')}
          <Link href="/privacy-policy" className="underline hover:text-primary ml-1" target={linkTarget} rel={linkRel}>
            {t('legal.privacyPolicy.link')}
          </Link>.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button onClick={handleReject} variant="destructive" size="sm">
            {t('legal.cookieConsent.rejectButton')}
          </Button>
          <Button onClick={handleAccept} size="sm">
            {t('legal.cookieConsent.acceptButton')}
          </Button>
        </div>
      </div>
    </div>
  );
}
