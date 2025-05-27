
"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Search, ListChecks, Calculator, Sparkles } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface Module {
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

      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          {t('products.tariff.pageTitle')}
        </h1>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://placehold.co/600x450.png"
            alt={t('products.tariff.pageTitle')}
            width={600}
            height={450}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="trade compliance regulations"
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
    </div>
  );
}

    