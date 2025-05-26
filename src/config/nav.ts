
import type { LucideIcon } from 'lucide-react';
import { Home, Info, Mail, LayoutGrid, Newspaper, Settings, Lightbulb } from 'lucide-react'; // Added Lightbulb
import type { TranslationKey } from '@/lib/i18n';

export interface NavItem {
  titleKey: TranslationKey;
  href: string;
  icon: LucideIcon;
  disabled?: boolean;
  exactMatch?: boolean; // For active link highlighting
}

export const navItems: NavItem[] = [
  { titleKey: 'nav.home', href: '/', icon: Home, exactMatch: true },
  { titleKey: 'nav.products', href: '/products', icon: LayoutGrid },
  { titleKey: 'nav.solutions', href: '/solutions', icon: Lightbulb }, // New Solutions link
  { titleKey: 'nav.news', href: '/news', icon: Newspaper },
  { titleKey: 'nav.about', href: '/about', icon: Info },
  { titleKey: 'nav.contact', href: '/contact', icon: Mail },
];
