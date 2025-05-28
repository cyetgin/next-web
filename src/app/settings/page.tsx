
"use client";

import React from "react"; 
import { useTheme } from "next-themes";
import { useTranslation } from "@/hooks/use-translation";
import { useFont, type FontSize } from "@/context/font-provider";
import { useDensity, type Density } from "@/context/density-provider"; // Added
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
import { Palette, Languages, Baseline, Rows } from "lucide-react"; // Added Rows for density

export default function SettingsPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFont();
  const { density, setDensity } = useDensity(); // Added

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

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
                value={fontSize}
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
              <LanguageSelector />
            </div>
          </CardContent>
        </Card>

        {/* Content Density Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
            <Rows className="h-8 w-8 text-primary" /> {/* Added Rows icon */}
            <div>
              <CardTitle className="text-2xl">{t("settings.density.title")}</CardTitle>
              <CardDescription>{t("settings.density.description")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>{t("settings.density.label")}</Label> {/* Assuming a general label for the group */}
              <RadioGroup
                value={density}
                onValueChange={(value: string) => setDensity(value as Density)}
                className="flex space-x-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="density-compact" />
                  <Label htmlFor="density-compact" className="font-normal">{t("settings.density.compact")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="density-default" />
                  <Label htmlFor="density-default" className="font-normal">{t("settings.density.default")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spacious" id="density-spacious" />
                  <Label htmlFor="density-spacious" className="font-normal">{t("settings.density.spacious")}</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
