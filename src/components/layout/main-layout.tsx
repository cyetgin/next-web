
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
  // SidebarTrigger // No longer needed directly here for PanelLeftClose
} from '@/components/ui/sidebar';
import { Header } from './header';
import { SidebarNav } from './sidebar-nav';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen, Settings, LogOut } from 'lucide-react'; // Added PanelLeftOpen
import { useTranslation } from '@/hooks/use-translation';
import { useSidebar } from '@/components/ui/sidebar'; // Import useSidebar

// New component for the sidebar's dynamic header content
function CustomSidebarHeaderContent() {
  const { isMobile, state, toggleSidebar } = useSidebar();

  if (isMobile) {
    // On mobile, the sidebar is a sheet, typically triggered/closed differently.
    // The primary toggle (hamburger) is in the main Header component.
    // An explicit close button can be part of the SheetContent if needed,
    // but for this request, we focus on the desktop toggle.
    return null;
  }

  // For desktop view
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
        <Header />
        <main className="flex flex-col items-center flex-1 p-6 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
