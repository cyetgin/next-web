
"use client";

import React from "react"; 
import { useTheme } from "next-themes";
import { useTranslation } from "@/hooks/use-translation";
import { useFont, type FontSize } from "@/context/font-provider";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Palette, Languages, Baseline } from "lucide-react"; // Baseline for font size

export default function SettingsPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFont();

  // Ensure theme and fontSize are not undefined before rendering Select/RadioGroup
  // This is important because their values might be read from localStorage asynchronously.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // You can return a loading skeleton here if needed
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
          <CardHeader className="flex flex-row items-center gap-3">
            <Palette className="h-8 w-8 text-primary" />
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

            <div className="space-y-2">
              <Label>{t("settings.appearance.fontSize.label")}</Label>
              <RadioGroup
                value={fontSize} // Changed from defaultValue to value
                onValueChange={(value: string) => setFontSize(value as FontSize)}
                className="flex space-x-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sm" id="font-sm" />
                  <Label htmlFor="font-sm" className="font-normal">{t("settings.appearance.fontSize.sm")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="md" id="font-md" />
                  <Label htmlFor="font-md" className="font-normal">{t("settings.appearance.fontSize.md")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lg" id="font-lg" />
                  <Label htmlFor="font-lg" className="font-normal">{t("settings.appearance.fontSize.lg")}</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Language Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
             <Languages className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">{t("settings.language.title")}</CardTitle>
              <CardDescription>{t("settings.language.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language-select-settings-page">{t("settings.language.select.label")}</Label>
               {/* We need to ensure LanguageSelector's SelectTrigger has a unique ID or is labelled correctly if used multiple times. 
                   For simplicity here, assuming LanguageSelector is robust enough or giving it an ID here.
                   However, LanguageSelector itself doesn't take an id prop for its Select component.
                   A better approach might be to simply use the LanguageSelector component if its styling is acceptable.
               */}
              <LanguageSelector />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
