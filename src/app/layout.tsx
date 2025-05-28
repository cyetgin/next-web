
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/language-context';
import { ThemeProvider } from '@/components/theme-provider';
import { FontProvider } from '@/context/font-provider';
import { DensityProvider } from '@/context/density-provider';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/components/layout/main-layout';
import { CookieConsentBanner } from '@/components/cookie-consent-banner'; // Added

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
  description: 'ATEZ Software Technologies: Revolutionizing cross-border trade with intelligent solutions for customs, logistics, and autonomous data handling using Blockchain, AI, ML, and BI.',
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
            <FontProvider>
              <DensityProvider>
                <MainLayout>
                  {children}
                </MainLayout>
                <Toaster />
                <CookieConsentBanner /> {/* Added */}
              </DensityProvider>
            </FontProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

    