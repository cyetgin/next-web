
"use client";

import type { ReactNode } from 'react';
import Image from 'next/image';
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

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader className="p-4 flex items-center justify-between">
          <div className="group-data-[collapsible=icon]:hidden">
            {/* 
              Logo updated to use atez-logo.png. 
              Ensure atez-logo.png (512x159 pixels) is in the /public directory.
            */}
            <Image
              src="/atez-logo.png"
              alt="ATEZ Software Technologies Logo"
              width={512}
              height={159}
              className="h-8 w-auto" // Adjust height constraint as needed
              priority // Optional: if logo is LCP
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
          <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center">
            <Settings className="mr-2 h-5 w-5 group-data-[collapsible=icon]:mr-0" />
            <span className="group-data-[collapsible=icon]:hidden">Settings</span>
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
