
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/language-context';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/components/layout/main-layout';
import { CookieConsentBanner } from '@/components/cookie-consent-banner';
import { LinkBehaviorProvider } from '@/context/link-behavior-provider';
import { AccessibilityProvider } from '@/context/accessibility-provider';
import { DateTimeFormatProvider } from '@/context/datetime-format-provider';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ATEZ Software Technologies',
  description: "ATEZ Software Technologies: Revolutionizing cross-border trade with intelligent solutions for customs compliance, cross-border movement of goods, and autonomous data handling, powered by Artificial Intelligence, Machine Learning, and Business Intelligence.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <LinkBehaviorProvider>
              <AccessibilityProvider>
                <DateTimeFormatProvider>
                  <MainLayout>
                    {children}
                  </MainLayout>
                  <Toaster />
                  <CookieConsentBanner />
                </DateTimeFormatProvider>
              </AccessibilityProvider>
            </LinkBehaviorProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
