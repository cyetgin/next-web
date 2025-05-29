
"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Header } from './header';
import { SidebarNav } from './sidebar-nav';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'; // Removed Settings, LogOut
import { useTranslation } from '@/hooks/use-translation';
import { useSidebar } from '@/components/ui/sidebar';
import { getCopyrightText } from '@/lib/i18n';
import { LanguageContext } from '@/context/language-context';
import React from 'react';

function CustomSidebarHeaderContent() {
  const { isMobile, state, toggleSidebar } = useSidebar();

  if (isMobile) {
    return null;
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleSidebar} aria-label={state === 'expanded' ? "Collapse sidebar" : "Expand sidebar"}>
      {state === 'expanded' ? <PanelLeftClose className="h-6 w-6" /> : <PanelLeftOpen className="h-6 w-6" />}
    </Button>
  );
}

export default function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const langContext = React.useContext(LanguageContext);
  const copyrightText = getCopyrightText(langContext?.translations || {});


  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader className="p-4 flex items-center justify-end">
           <CustomSidebarHeaderContent />
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarNav />
        </SidebarContent>
        <SidebarFooter className="p-2 border-t">
          {/* Settings and Logout buttons removed */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col items-center flex-1 p-6 overflow-auto">
            {children}
          </main>
          <footer className="py-6 px-4 md:px-6 border-t bg-background">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>{copyrightText}</p>
              <nav className="flex gap-4 mt-2 sm:mt-0">
                <Link href="/terms-of-service" className="hover:text-primary hover:underline">
                  {t('legal.termsOfService.link')}
                </Link>
                <Link href="/privacy-policy" className="hover:text-primary hover:underline">
                  {t('legal.privacyPolicy.link')}
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
