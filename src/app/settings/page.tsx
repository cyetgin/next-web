
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
import { Palette, Languages, ExternalLinkIcon, Accessibility, CalendarClock, Trash2, Cookie } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useLinkBehavior, type LinkBehaviorContextType } from "@/context/link-behavior-provider";
import { useAccessibility, type AccessibilityContextType } from "@/context/accessibility-provider";
import { useDateTimeFormat, type DateTimeFormatContextType, DATE_FORMAT_OPTIONS } from "@/context/datetime-format-provider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const COOKIE_CONSENT_KEY = 'atez_cookie_consent';
const LINK_BEHAVIOR_STORAGE_KEY = 'atez-link-behavior';
const REDUCE_MOTION_STORAGE_KEY = 'atez-accessibility-reduce-motion';
const DATETIME_FORMAT_STORAGE_KEY = 'atez-datetime-format';
const LANGUAGE_STORAGE_KEY = 'globalHubLanguage';
const THEME_STORAGE_KEY = 'theme'; // next-themes default key

type CookieConsentStatus = 'accepted' | 'rejected' | 'notSet';

export default function SettingsPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { linkBehavior, setLinkBehavior } = useLinkBehavior() as LinkBehaviorContextType;
  const { reduceMotion, setReduceMotion } = useAccessibility() as AccessibilityContextType;
  const { dateTimeFormat, setDateTimeFormat } = useDateTimeFormat() as DateTimeFormatContextType;

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
      window.location.reload(); // Force reload to make banner reappear
    } else {
      const consentValue = action === 'accept' ? 'true' : 'false';
      localStorage.setItem(COOKIE_CONSENT_KEY, consentValue);
      setCookieStatus(action === 'accept' ? 'accepted' : 'rejected');
    }
  };

  const handleClearAllSettings = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(LINK_BEHAVIOR_STORAGE_KEY);
    localStorage.removeItem(REDUCE_MOTION_STORAGE_KEY);
    localStorage.removeItem(DATETIME_FORMAT_STORAGE_KEY);
    localStorage.removeItem(LANGUAGE_STORAGE_KEY);
    localStorage.removeItem(THEME_STORAGE_KEY); // next-themes might use a different key if configured
    window.location.reload();
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
        
        {/* Link Behavior Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <ExternalLinkIcon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.linkBehavior.title")}</CardTitle>
              <CardDescription>{t("settings.linkBehavior.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="link-behavior-switch" className="pr-4">{t("settings.linkBehavior.label")}</Label>
              <Switch
                id="link-behavior-switch"
                checked={linkBehavior === 'newTab'}
                onCheckedChange={(checked) => setLinkBehavior(checked ? 'newTab' : 'sameTab')}
              />
            </div>
             <p className="text-sm text-muted-foreground">
              {linkBehavior === 'newTab' ? t('common.on') : t('common.off')}
            </p>
          </CardContent>
        </Card>

        {/* Accessibility Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <Accessibility className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.accessibility.title")}</CardTitle>
              <CardDescription>{t("settings.accessibility.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="reduce-motion-switch" className="pr-4">{t("settings.accessibility.reduceMotion.label")}</Label>
              <Switch
                id="reduce-motion-switch"
                checked={reduceMotion}
                onCheckedChange={setReduceMotion}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {reduceMotion ? t('settings.accessibility.reduceMotion.true') : t('settings.accessibility.reduceMotion.false')}
            </p>
          </CardContent>
        </Card>

        {/* Date & Time Format Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <CalendarClock className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.dateTime.title")}</CardTitle>
              <CardDescription>{t("settings.dateTime.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="datetime-format-select">{t("settings.dateTime.format.label")}</Label>
              <Select value={dateTimeFormat} onValueChange={(value) => setDateTimeFormat(value as DateTimeFormatContextType['dateTimeFormat'])}>
                <SelectTrigger id="datetime-format-select" className="w-full">
                  <SelectValue placeholder={t("settings.dateTime.format.label")} />
                </SelectTrigger>
                <SelectContent>
                  {DATE_FORMAT_OPTIONS.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {t(option.labelKey as any)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Data Management Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <Trash2 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <CardTitle className="text-2xl">{t("settings.dataManagement.title")}</CardTitle>
              <CardDescription>{t("settings.dataManagement.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  {t("settings.dataManagement.clearAll.button")}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{t("settings.dataManagement.clearAll.confirm.title")}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t("settings.dataManagement.clearAll.confirm.description")}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{t("settings.dataManagement.clearAll.confirm.cancelButton")}</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearAllSettings}>
                    {t("settings.dataManagement.clearAll.confirm.confirmButton")}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
