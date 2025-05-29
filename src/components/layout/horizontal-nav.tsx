
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/use-translation';
import { navItems } from '@/config/nav';

export function HorizontalNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className="flex justify-center">
      <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 py-2">
        {navItems.map((item) => {
          const isActive = item.exactMatch ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center px-3 py-2 rounded-md text-sm transition-colors duration-150 ease-in-out", // Added inline-flex items-center
                  "text-foreground/80 hover:text-primary hover:font-bold focus:outline-none focus:ring-2 focus:ring-primary/50",
                  isActive ? "font-semibold text-primary bg-primary/10" : "font-medium"
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <item.icon className={cn("mr-2 h-5 w-5 flex-shrink-0", isActive ? "text-primary" : "text-foreground/70")} />
                {t(item.titleKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
