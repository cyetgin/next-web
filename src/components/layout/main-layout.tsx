
"use client";

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Header } from './header';
import { SidebarNav } from './sidebar-nav';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, Settings, LogOut } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';


export default function MainLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader className="p-4 flex items-center justify-between">
          <div className="group-data-[collapsible=icon]:hidden">
            <Image
              src="/atez-logo.png"
              alt="ATEZ Software Technologies Logo"
              width={512}
              height={159}
              className="h-8 w-auto"
              priority
            />
          </div>
           <SidebarTrigger asChild className="group-data-[collapsible=icon]:hidden">
             <Button variant="ghost" size="icon">
                <PanelLeftClose className="h-6 w-6" />
             </Button>
           </SidebarTrigger>
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
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
