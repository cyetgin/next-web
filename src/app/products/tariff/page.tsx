
"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Search, ListChecks, Calculator, Sparkles, RefreshCw, Globe2, Languages, FileText, ExternalLink } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface Module {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: React.ElementType;
}

interface Benefit {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: React.ElementType;
}

export default function TariffPage() {
  const { t } = useTranslation();

  const modules: Module[] = [
    { titleKey: 'products.tariff.module.basicQuery.title', descriptionKey: 'products.tariff.module.basicQuery.description', icon: Search },
    { titleKey: 'products.tariff.module.detailedQuery.title', descriptionKey: 'products.tariff.module.detailedQuery.description', icon: ListChecks },
    { titleKey: 'products.tariff.module.taxCalculation.title', descriptionKey: 'products.tariff.module.taxCalculation.description', icon: Calculator },
    { titleKey: 'products.tariff.module.findMyCommodityCode.title', descriptionKey: 'products.tariff.module.findMyCommodityCode.description', icon: Sparkles },
  ];

  const benefits: Benefit[] = [
    { titleKey: 'products.tariff.keyBenefit.realTimeUpdates.title', descriptionKey: 'products.tariff.keyBenefit.realTimeUpdates.description', icon: RefreshCw },
    { titleKey: 'products.tariff.keyBenefit.multiCountrySupport.title', descriptionKey: 'products.tariff.keyBenefit.multiCountrySupport.description', icon: Globe2 },
    { titleKey: 'products.tariff.keyBenefit.eliminateLanguageBarriers.title', descriptionKey: 'products.tariff.keyBenefit.eliminateLanguageBarriers.description', icon: Languages },
    { titleKey: 'products.tariff.keyBenefit.upToDateNomenclatures.title', descriptionKey: 'products.tariff.keyBenefit.upToDateNomenclatures.description', icon: FileText },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-16">
      <div className="flex justify-start">
        <Button asChild variant="outline" className="group">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t('common.backToProducts')}
          </Link>
        </Button>
      </div>

      <header className="space-y-4">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/TARIFF%402x-v2.png?alt=media&token=a94dcd84-fe64-4699-9ea2-70ec737ca484"
          alt={t('products.tariff.pageTitle')}
          width={425} 
          height={135}
          priority 
        />
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/tariff-main.webp?alt=media&token=e9b2602e-c9c2-4d40-b539-81a8d1de9cf1"
            alt={t('products.tariff.pageTitle')}
            width={600}
            height={450}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
            {t('products.tariff.generalDescription')}
          </p>
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center text-primary">
          {t('products.tariff.modules.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <Card key={module.titleKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader className="flex flex-row items-start gap-4">
                <module.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-2xl">{t(module.titleKey)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{t(module.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center text-primary">
          {t('products.tariff.keyBenefits.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.titleKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader className="flex flex-row items-start gap-4">
                <benefit.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-2xl">{t(benefit.titleKey)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{t(benefit.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-secondary/50 rounded-lg shadow-inner text-center">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              {t('products.tariff.cta.title')}
            </h2>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg">
                <Link href="https://tariff.singlewindow.io" target="_blank" rel="noopener noreferrer">
                  {t('products.tariff.cta.button')} <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
