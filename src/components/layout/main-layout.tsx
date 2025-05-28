
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
import { PanelLeftClose, PanelLeftOpen, Settings, LogOut } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useSidebar } from '@/components/ui/sidebar';

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
          <Button asChild variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center">
            <Link href="/settings">
              <Settings className="mr-2 h-5 w-5 group-data-[collapsible=icon]:mr-0" />
              <span className="group-data-[collapsible=icon]:hidden">{t('nav.settings')}</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center">
            <LogOut className="mr-2 h-5 w-5 group-data-[collapsible=icon]:mr-0" />
            <span className="group-data-[collapsible=icon]:hidden">Log Out</span>
          </Button>
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
              <p>{t('footer.copyright')}</p>
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

    