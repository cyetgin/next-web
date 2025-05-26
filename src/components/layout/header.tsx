
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
            Logo updated to use atez-logo.png. 
            Ensure atez-logo.png (512x159 pixels) is in the /public directory.
          */}
          <Image
            src="/atez-logo.png" 
            alt="ATEZ Software Technologies Logo"
            width={512} 
            height={159}
            className="h-8 w-auto" // Adjust height constraint as needed, width will scale automatically
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
