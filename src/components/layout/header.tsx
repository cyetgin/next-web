
"use client";

import Image from 'next/image';
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
          {/* 
            Replace with your actual logo. 
            1. Place your logo (e.g., logo.png) in the /public directory.
            2. Update src to "/logo.png".
            3. Adjust width and height to your logo's dimensions.
          */}
          <Image
            src="https://placehold.co/154x32.png" 
            alt="ATEZ Software Technologies Logo"
            width={154} 
            height={32}
            className="h-8 w-auto" // Adjust height constraint as needed, width will scale automatically
            data-ai-hint="company logo"
            priority // Optional: if logo is LCP
          />
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
