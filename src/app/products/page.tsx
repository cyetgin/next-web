
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, PackageCheck, BrainCircuit, FileText, Lightbulb } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface Product {
  nameKey: TranslationKey;
  // descriptionKey?: TranslationKey; // Future enhancement
}

interface ProductCategory {
  categoryKey: TranslationKey;
  icon: React.ElementType;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    categoryKey: 'products.category.customsCompliance',
    icon: PackageCheck,
    products: [
      { nameKey: 'products.product.tariff' },
      { nameKey: 'products.product.logicust' },
    ],
  },
  {
    categoryKey: 'products.category.aiSolutions',
    icon: BrainCircuit,
    products: [
      { nameKey: 'products.product.customsShield' },
      { nameKey: 'products.product.customsXRay' },
      { nameKey: 'products.product.transitAI' },
      { nameKey: 'products.product.declarantAI' },
    ],
  },
  {
    categoryKey: 'products.category.declarationFiling',
    icon: FileText,
    products: [
      { nameKey: 'products.product.transcode' },
      { nameKey: 'products.product.declarant' },
      { nameKey: 'products.product.relayhub' },
    ],
  },
  {
    categoryKey: 'products.category.other',
    icon: Lightbulb,
    products: [
      { nameKey: 'products.product.greenpulse' },
      { nameKey: 'products.product.tradeloupe' },
    ],
  },
];

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          {t('products.title')}
        </h1>
        <p className="mx-auto max-w-[800px] text-foreground/80 md:text-xl">
          {t('products.description')}
        </p>
      </header>

      <section className="text-center p-6 bg-secondary/30 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-primary">
          {t('products.mainPlatformIntro')}
        </h2>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="https://singlewindow.io" target="_blank" rel="noopener noreferrer">
            {t('products.visitPlatformButton')} <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {productCategories.map((category) => (
          <Card key={category.categoryKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <category.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">{t(category.categoryKey)}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-foreground/90">
                {category.products.map((product) => (
                  <li key={product.nameKey}>{t(product.nameKey)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
