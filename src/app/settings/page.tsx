
"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSelector } from "@/components/language-selector";
// import { Button } from "@/components/ui/button"; // Not used
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
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Not used
import { Palette, Languages } from "lucide-react";

export default function SettingsPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

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

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
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
      </div>
    </div>
  );
}
