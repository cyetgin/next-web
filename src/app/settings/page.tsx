
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSelector } from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Palette, Languages, TextQuote, Rows, Cookie } from "lucide-react";
import { useFont, FontContextType } from "@/context/font-provider";
import { useDensity, DensityContextType } from "@/context/density-provider";

const COOKIE_CONSENT_KEY = 'atez_cookie_consent';

type CookieConsentStatus = 'accepted' | 'rejected' | 'notSet';

export default function SettingsPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFont() as FontContextType;
  const { density, setDensity } = useDensity() as DensityContextType;

  const [mounted, setMounted] = React.useState(false);
  const [cookieStatus, setCookieStatus] = useState<CookieConsentStatus>('notSet');

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted) {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (consent === 'true') {
        setCookieStatus('accepted');
      } else if (consent === 'false') {
        setCookieStatus('rejected');
      } else {
        setCookieStatus('notSet');
      }
    }
  }, [mounted]);

  const handleCookieAction = (action: 'accept' | 'reject' | 'clear') => {
    if (action === 'clear') {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      setCookieStatus('notSet');
    } else {
      const consentValue = action === 'accept' ? 'true' : 'false';
      localStorage.setItem(COOKIE_CONSENT_KEY, consentValue);
      setCookieStatus(action === 'accept' ? 'accepted' : 'rejected');
    }
    // Optionally force a re-render of the banner or refresh page if needed
    // Forcing a reload to make banner reappear if 'clear' is chosen
    if (action === 'clear') window.location.reload();
  };


  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          {t("settings.title")}
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          {t("settings.description")}
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {/* Appearance Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <Palette className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.appearance.title")}</CardTitle>
              <CardDescription>{t("settings.appearance.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme-select">{t("settings.appearance.theme.label")}</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="theme-select" className="w-full">
                  <SelectValue placeholder={t("settings.appearance.theme.label")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">{t("settings.appearance.theme.light")}</SelectItem>
                  <SelectItem value="dark">{t("settings.appearance.theme.dark")}</SelectItem>
                  <SelectItem value="system">{t("settings.appearance.theme.system")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Language Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
             <Languages className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.language.title")}</CardTitle>
              <CardDescription>{t("settings.language.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language-select-settings-page">{t("settings.language.select.label")}</Label>
              <LanguageSelector />
            </div>
          </CardContent>
        </Card>

        {/* Font Size Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <TextQuote className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.fontSize.title")}</CardTitle>
              <CardDescription>{t("settings.fontSize.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>{t("settings.fontSize.label")}</Label>
              <RadioGroup
                value={fontSize}
                onValueChange={(value) => setFontSize(value as FontContextType['fontSize'])}
                className="flex space-x-2"
              >
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="sm" id="font-sm" />
                  <Label htmlFor="font-sm" className="font-normal cursor-pointer">{t("settings.fontSize.sm")}</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="md" id="font-md" />
                  <Label htmlFor="font-md" className="font-normal cursor-pointer">{t("settings.fontSize.md")}</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="lg" id="font-lg" />
                  <Label htmlFor="font-lg" className="font-normal cursor-pointer">{t("settings.fontSize.lg")}</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Content Density Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <Rows className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.density.title")}</CardTitle>
              <CardDescription>{t("settings.density.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>{t("settings.density.label")}</Label>
               <RadioGroup
                value={density}
                onValueChange={(value) => setDensity(value as DensityContextType['density'])}
                className="flex space-x-2"
              >
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="compact" id="density-compact" />
                  <Label htmlFor="density-compact" className="font-normal cursor-pointer">{t("settings.density.compact")}</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="default" id="density-default" />
                  <Label htmlFor="density-default" className="font-normal cursor-pointer">{t("settings.density.default")}</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="spacious" id="density-spacious" />
                  <Label htmlFor="density-spacious" className="font-normal cursor-pointer">{t("settings.density.spacious")}</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
        
        {/* Cookie Preferences Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <Cookie className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.cookies.title")}</CardTitle>
              <CardDescription>{t("settings.cookies.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>{t('settings.cookies.status.label')}</Label>
              <p className="text-sm text-muted-foreground">
                {cookieStatus === 'accepted' && t('settings.cookies.status.accepted')}
                {cookieStatus === 'rejected' && t('settings.cookies.status.rejected')}
                {cookieStatus === 'notSet' && t('settings.cookies.status.notSet')}
              </p>
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button onClick={() => handleCookieAction('accept')} variant="default" size="sm">
                {t('settings.cookies.button.acceptAll')}
              </Button>
              <Button onClick={() => handleCookieAction('reject')} variant="destructive" size="sm">
                {t('settings.cookies.button.rejectAll')}
              </Button>
              <Button onClick={() => handleCookieAction('clear')} variant="outline" size="sm">
                {t('settings.cookies.button.clear')}
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
