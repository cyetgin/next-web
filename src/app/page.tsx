
"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cpu, BrainCircuit, BarChart, Link2, PackageCheck, Workflow, Settings2 } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface CapabilityItem {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  imageSrc: string;
  imageAltKey: TranslationKey;
  dataAiHint: string;
  icon: React.ElementType;
}

const capabilities: CapabilityItem[] = [
  {
    titleKey: 'home.capabilities.crossBorder.title',
    descriptionKey: 'home.capabilities.crossBorder.description',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAltKey: 'home.capabilities.crossBorder.title',
    dataAiHint: 'logistics customs',
    icon: PackageCheck,
  },
  {
    titleKey: 'home.capabilities.autonomousData.title',
    descriptionKey: 'home.capabilities.autonomousData.description',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAltKey: 'home.capabilities.autonomousData.title',
    dataAiHint: 'automation workflow',
    icon: Workflow, // Or Settings2 for a more "autonomous process" feel
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
          <p className="mx-auto max-w-[800px] text-foreground/80 md:text-xl mt-4">
            {t('home.welcomeSubtitle')}
          </p>
           <div className="mt-6 flex justify-center gap-x-4 gap-y-2 flex-wrap">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              <Link2 className="h-4 w-4" /> Blockchain
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              <Cpu className="h-4 w-4" /> Artificial Intelligence
            </span>
             <span className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125"/><path d="M18.62 4A2 2 0 0 0 17 2h-2"/><path d="M6 2A2 2 0 0 0 4 4v2"/><path d="M5 14a3 3 0 0 0 6 0"/><path d="M19 14a3 3 0 0 0 6 0"/><path d="M12 14a3 3 0 0 0 6 0"/><path d="M2 9A2 2 0 0 0 0 11v2a2 2 0 0 0 2 2h2c0-1.09.23-2.11.64-3H2Z"/><path d="M22 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2.64c.41-.89.64-1.91.64-3H22Z"/><path d="M15.24 10.5a3 3 0 0 0-4.48 0"/><path d="M15.5 15.5A2.5 2.5 0 0 0 18 18h1a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 13 15.5Z"/><path d="M8.5 15.5A2.5 2.5 0 0 1 6 18H5a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2A2.5 2.5 0 0 1 9.5 18h1a2.5 2.5 0 0 1 2.5-2.5Z"/></svg>
              Machine Learning
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              <BarChart className="h-4 w-4" /> Business Intelligence
            </span>
          </div>
          <div className="mt-10 flex justify-center gap-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
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
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {capabilities.map((capability) => (
            <Card key={capability.titleKey} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={capability.imageSrc}
                  alt={t(capability.imageAltKey)}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={capability.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <capability.icon className="h-6 w-6 text-primary" />
                  {t(capability.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{t(capability.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              {t('home.cta.title')}
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl mt-4 mb-8">
              {t('home.cta.description')}
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">{t('home.cta.button')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}

