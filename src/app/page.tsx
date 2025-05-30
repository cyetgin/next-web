
"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Cpu, BarChart, Link2, ShieldCheck, Workflow, Truck, Settings2 } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { useAccessibility } from '@/context/accessibility-provider';


interface CapabilityItem {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  imageSrc: string;
  imageAltKey: TranslationKey;
  icon?: LucideIcon; 
}

const capabilities: CapabilityItem[] = [
  {
    titleKey: 'home.capabilities.crossBorder.title',
    descriptionKey: 'home.capabilities.crossBorder.description',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/compliance-600-400.webp?alt=media&token=ae787123-7b50-47f0-899b-5b0369e35768',
    imageAltKey: 'home.capabilities.crossBorder.title',
    icon: ShieldCheck,
  },
  {
    titleKey: 'home.capabilities.autonomousData.title',
    descriptionKey: 'home.capabilities.autonomousData.description',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/end-to-end.webp?alt=media&token=20090d41-cf2b-455e-ad11-e8c172743f9c',
    imageAltKey: 'home.capabilities.autonomousData.title',
    icon: Workflow,
  },
  {
    titleKey: 'home.capabilities.streamlinedCustomsTransit.title',
    descriptionKey: 'home.capabilities.streamlinedCustomsTransit.description',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/streamlined-600-400.webp?alt=media&token=05a6798f-3d8c-4ee9-abc3-0f8e5b4dba75',
    imageAltKey: 'home.capabilities.streamlinedCustomsTransit.title',
    icon: Truck,
  },
  {
    titleKey: 'home.capabilities.autonomousDataFlowAutomation.title',
    descriptionKey: 'home.capabilities.autonomousDataFlowAutomation.description',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/autonomous-600-400.webp?alt=media&token=a8bb849d-f80a-4457-afc9-8b5a9eded375',
    imageAltKey: 'home.capabilities.autonomousDataFlowAutomation.title',
    icon: Settings2,
  },
];

const BrainCircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125"/><path d="M18.62 4A2 2 0 0 0 17 2h-2"/><path d="M6 2A2 2 0 0 0 4 4v2"/><path d="M5 14a3 3 0 0 0 6 0"/><path d="M19 14a3 3 0 0 0 6 0"/><path d="M12 14a3 3 0 0 0 6 0"/><path d="M2 9A2 2 0 0 0 0 11v2a2 2 0 0 0 2 2h2c0-1.09.23-2.11.64-3H2Z"/><path d="M22 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2.64c.41-.89.64-1.91.64-3H22Z"/><path d="M15.24 10.5a3 3 0 0 0-4.48 0"/><path d="M15.5 15.5A2.5 2.5 0 0 0 18 18h1a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 13 15.5Z"/><path d="M8.5 15.5A2.5 2.5 0 0 1 6 18H5a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2A2.5 2.5 0 0 1 9.5 18h1a2.5 2.5 0 0 1 2.5-2.5Z"/></svg>
);

const technologiesList = [
  { nameKey: 'Blockchain', icon: <Link2 className="h-4 w-4" /> },
  { nameKey: 'Artificial Intelligence', icon: <Cpu className="h-4 w-4" /> },
  { nameKey: 'Machine Learning', icon: <BrainCircuitIcon /> },
  { nameKey: 'Business Intelligence', icon: <BarChart className="h-4 w-4" /> },
];

interface MetricItem {
  labelKey: TranslationKey;
  value: string;
  Icon?: LucideIcon; 
  imageUrl?: string; 
}

const initialPlatformMetrics: MetricItem[] = [
  {
    labelKey: 'home.metrics.tariffUsers',
    value: '50K+',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-tariff-3-%400.5x.webp?alt=media&token=3da28717-ea71-4362-b438-c3c5205be1bd'
  },
  {
    labelKey: 'home.metrics.tariffQueries',
    value: 'Loading...',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-tariff-3-%400.5x.webp?alt=media&token=3da28717-ea71-4362-b438-c3c5205be1bd'
  },
  {
    labelKey: 'home.metrics.logicustProducts',
    value: 'Loading...',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-logicust-3-%400.5x.webp?alt=media&token=4f83103e-5574-4ec7-abd5-8b0d299ecf2f'
  },
  {
    labelKey: 'home.metrics.transcodeTransitDeclarations',
    value: 'Loading...',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-transcode-3-%400.5x.webp?alt=media&token=86b8bffe-3847-416a-b413-9b822565641b'
  },
  {
    labelKey: 'home.metrics.transcodeTransitAI',
    value: '95%+',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-transitAI%400.5x.webp?alt=media&token=aaff5c1b-885a-4059-9a73-3cac5ef437c1'
  },
  {
    labelKey: 'home.metrics.declarantCustomsDeclarations',
    value: '1M+',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-declarant-3-%400.5x.webp?alt=media&token=a2c6cf7f-b841-455b-b503-043679d5400d'
  },
  {
    labelKey: 'home.metrics.declarantDeclarantAI',
    value: 'Loading...',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-declarantAI%400.5x.webp?alt=media&token=321b1787-e926-446f-9eec-79d2e4b778ea'
  },
  {
    labelKey: 'home.metrics.shieldAIDeclarationsControlled',
    value: 'Loading...',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icons-customs-shield-3-%400.5x.webp?alt=media&token=b0f7725f-a3b1-4765-834c-a7bda54e022a'
  },
];


export default function HomePage() {
  const { t } = useTranslation();
  const { reduceMotion } = useAccessibility();
  const [animateIn, setAnimateIn] = useState(false);
  const [metricsData, setMetricsData] = useState<MetricItem[]>(initialPlatformMetrics);

  useEffect(() => {
    if (!reduceMotion) {
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(true); // If reduceMotion is true, show immediately without animation
    }
  }, [reduceMotion]);

  useEffect(() => {
    const fetchTariffQueries = async () => {
      try {
        const response = await fetch('https://tariff.singlewindow.io/api/v2-0/user-admin/public/query-count/free');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const count = data.count;

        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.tariffQueries'
              ? { ...metric, value: count.toLocaleString() }
              : metric
          )
        );
      } catch (error) {
        console.error("Failed to fetch tariff queries:", error);
        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.tariffQueries'
              ? { ...metric, value: "Error" }
              : metric
          )
        );
      }
    };

    const fetchLogicustProductCount = async () => {
      try {
        const response = await fetch('https://logify.singlewindow.io/api/v1-0/commodities/count');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        let count: number;

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (data && typeof data.count === 'number') {
            count = data.count;
          } else if (typeof data === 'number') {
            count = data;
          } else {
            const parsedNum = parseInt(data, 10);
            if (!isNaN(parsedNum)) {
                count = parsedNum;
            } else {
                console.error("Logicust product count response is not in expected JSON format:", data);
                throw new Error("Invalid data format for Logicust product count");
            }
          }
        } else {
            const textData = await response.text();
            const parsedNum = parseInt(textData, 10);
            if (!isNaN(parsedNum)) {
                count = parsedNum;
            } else {
                console.error("Logicust product count response is not plain text number:", textData);
                throw new Error("Invalid data format for Logicust product count (text)");
            }
        }

        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.logicustProducts'
              ? { ...metric, value: count.toLocaleString() }
              : metric
          )
        );
      } catch (error) {
        console.error("Failed to fetch Logicust product count:", error);
        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.logicustProducts'
              ? { ...metric, value: "Error" }
              : metric
          )
        );
      }
    };

    const fetchTranscodeDeclarationCount = async () => {
      try {
        const response = await fetch('https://transcode.singlewindow.io/api/tds/public/reports/total-declaration-count-formatted');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();

        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.transcodeTransitDeclarations'
              ? { ...metric, value: data }
              : metric
          )
        );
      } catch (error) {
        console.error("Failed to fetch Transcode declaration count:", error);
        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.transcodeTransitDeclarations'
              ? { ...metric, value: "Error" }
              : metric
          )
        );
      }
    };

    const fetchDeclarantAIDocumentCount = async () => {
      try {
        const response = await fetch('https://declarant-api.singlewindow.io/api/public/document-count');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        let count: number;

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (data && typeof data.count === 'number') {
            count = data.count;
          } else if (typeof data === 'number') { 
            count = data;
          } else {
            const parsedNum = parseInt(data, 10); 
            if (!isNaN(parsedNum)) {
                count = parsedNum;
            } else {
                console.error("DeclarantAI document count response is not in expected JSON format:", data);
                throw new Error("Invalid data format for DeclarantAI document count");
            }
          }
        } else { 
            const textData = await response.text();
            const parsedNum = parseInt(textData, 10); 
            if (!isNaN(parsedNum)) {
                count = parsedNum;
            } else {
                console.error("DeclarantAI document count response is not plain text number:", textData);
                throw new Error("Invalid data format for DeclarantAI document count (text)");
            }
        }

        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.declarantDeclarantAI'
              ? { ...metric, value: count.toLocaleString() }
              : metric
          )
        );
      } catch (error) {
        console.error("Failed to fetch DeclarantAI document count:", error);
        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.declarantDeclarantAI'
              ? { ...metric, value: "Error" }
              : metric
          )
        );
      }
    };

    const fetchShieldAIDeclarationsCount = async () => {
      try {
        const response = await fetch('https://declarant-api.singlewindow.io/api/public/ai-sec-integrations-count');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        let count: number;

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (data && typeof data.count === 'number') {
            count = data.count;
          } else if (typeof data === 'number') {
            count = data;
          } else {
            const parsedNum = parseInt(data, 10);
            if (!isNaN(parsedNum)) {
                count = parsedNum;
            } else {
                console.error("ShieldAI integrations count response is not in expected JSON format:", data);
                throw new Error("Invalid data format for ShieldAI integrations count");
            }
          }
        } else {
            const textData = await response.text();
            const parsedNum = parseInt(textData, 10);
            if (!isNaN(parsedNum)) {
                count = parsedNum;
            } else {
                console.error("ShieldAI integrations count response is not plain text number:", textData);
                throw new Error("Invalid data format for ShieldAI integrations count (text)");
            }
        }
        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.shieldAIDeclarationsControlled'
              ? { ...metric, value: count.toLocaleString() }
              : metric
          )
        );
      } catch (error) {
        console.error("Failed to fetch ShieldAI integrations count:", error);
        setMetricsData(prevMetrics =>
          prevMetrics.map(metric =>
            metric.labelKey === 'home.metrics.shieldAIDeclarationsControlled'
              ? { ...metric, value: "Error" }
              : metric
          )
        );
      }
    };

    fetchTariffQueries();
    fetchLogicustProductCount();
    fetchTranscodeDeclarationCount();
    fetchDeclarantAIDocumentCount();
    fetchShieldAIDeclarationsCount();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-12">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            {t('home.welcomeTitle')}
          </h1>
           <p className="mt-2 text-lg font-medium text-primary/80 md:text-xl">
            {t('home.blockchainReadySlogan')}
          </p>
          <p className="mx-auto max-w-[800px] text-foreground/80 md:text-xl mt-4">
            {t('home.welcomeSubtitle')}
          </p>
           <div className="mt-6 flex justify-center gap-x-4 gap-y-2 flex-wrap">
            {technologiesList.map((tech, index) => (
              <span
                key={tech.nameKey as string}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium text-accent-foreground bg-accent px-3 py-1 rounded-full",
                  !reduceMotion && "transition-all duration-500 ease-out",
                  animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                  !reduceMotion && `delay-[${index * 150}ms]`
                )}
                style={!reduceMotion ? { transitionDelay: `${index * 150}ms` } : {}}
              >
                {tech.icon} {t(tech.nameKey as TranslationKey)}
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/solutions">{t('home.exploreSolutionsButton')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">
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

      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 space-y-10">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl text-primary">
            {t('home.metrics.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricsData.map((metric) => (
              <Card key={metric.labelKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader className="pb-2 flex items-center justify-center h-16">
                  {metric.imageUrl ? (
                    <Image
                      src={metric.imageUrl}
                      alt={t(metric.labelKey)}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ) : metric.Icon ? (
                    <metric.Icon className="h-10 w-10 text-accent" />
                  ) : null}
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-4xl font-bold text-primary">{metric.value}</p>
                </CardContent>
                <CardFooter className="pt-0 justify-center">
                  <p className="text-sm text-muted-foreground">{t(metric.labelKey)}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
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
