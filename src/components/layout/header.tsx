
"use client";

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { LanguageSelector } from '@/components/language-selector';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Menu, UserCircle } from 'lucide-react'; // Changed PanelLeftOpen to Menu

export function Header() {
  const { isMobile } = useSidebar();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {isMobile && ( 
            <SidebarTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" /> {/* Changed from PanelLeftOpen */}
              </Button>
            </SidebarTrigger>
          )}
          <Link href="/" className="text-xl md:text-2xl font-semibold text-primary hover:text-primary/90 whitespace-nowrap no-underline">
            {t('logo.text')}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Button variant="ghost" size="icon" className="rounded-full">
            <UserCircle className="h-6 w-6" />
            <span className="sr-only">User Profile</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
