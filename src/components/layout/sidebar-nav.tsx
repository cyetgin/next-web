"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/use-translation';
import { navItems, NavItem } from '@/config/nav';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'; // Assuming these exist or are similar to example

export function SidebarNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <SidebarMenu>
      {navItems.map((item) => {
        const isActive = item.exactMatch ? pathname === item.href : pathname.startsWith(item.href);
        return (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} passHref legacyBehavior>
              <SidebarMenuButton
                variant="default"
                size="default"
                isActive={isActive}
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                tooltip={{content: t(item.titleKey), side: "right", align: "center" }}
              >
                <item.icon className="h-5 w-5" />
                <span className="group-data-[collapsible=icon]:hidden">{t(item.titleKey)}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
