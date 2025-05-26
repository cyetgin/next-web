import type { LucideIcon } from 'lucide-react';
import { Home, Languages, Info, Mail } from 'lucide-react';
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
  { titleKey: 'nav.translate', href: '/translate', icon: Languages },
  { titleKey: 'nav.about', href: '/about', icon: Info },
  { titleKey: 'nav.contact', href: '/contact', icon: Mail },
];
