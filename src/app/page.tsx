
"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface FeatureItem {
  titleKey: 'home.contentManagement.title' | 'home.languageSelector.title';
  descriptionKey: 'home.contentManagement.description' | 'home.languageSelector.description';
  imageSrc: string;
  imageAltKey: 'home.contentManagement.title' | 'home.languageSelector.title'; // Using titleKey as altKey for simplicity and relevance
  dataAiHint: string;
}

const features: FeatureItem[] = [
  {
    titleKey: 'home.contentManagement.title',
    descriptionKey: 'home.contentManagement.description',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAltKey: 'home.contentManagement.title',
    dataAiHint: 'content organization',
  },
  {
    titleKey: 'home.languageSelector.title',
    descriptionKey: 'home.languageSelector.description',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAltKey: 'home.languageSelector.title',
    dataAiHint: 'language interface',
  },
];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-12">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            {t('home.welcomeTitle')}
          </h1>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
            {t('home.welcomeSubtitle')}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {/* Removed Translate Button, kept About Us button */}
            <Button asChild variant="outline" size="lg">
              <Link href="/about">{t('nav.about')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          {t('home.featuresTitle')}
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2"> {/* Adjusted to 2 columns */}
          {features.map((feature) => (
            <Card key={feature.titleKey} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={feature.imageSrc}
                  alt={t(feature.imageAltKey)}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={feature.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  {t(feature.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{t(feature.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Ready to Go Global?
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl mt-4 mb-8">
              Start managing your content effortlessly with Global Hub.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Us Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
