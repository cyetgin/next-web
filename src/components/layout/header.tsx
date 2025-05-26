"use client";

import { AppLogo } from '@/components/icons/app-logo';
import { LanguageSelector } from '@/components/language-selector';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { PanelLeftOpen, UserCircle } from 'lucide-react';

export function Header() {
  const { isMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {isMobile && <SidebarTrigger asChild>
            <Button variant="ghost" size="icon">
              <PanelLeftOpen className="h-6 w-6" />
            </Button>
          </SidebarTrigger>}
          <div className="text-primary"> {/* Provides color context for AppLogo SVG */}
            <AppLogo className="h-7 w-auto" /> {/* Control size via className */}
          </div>
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
