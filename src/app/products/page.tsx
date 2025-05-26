
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, PackageCheck, BrainCircuit, FileText, Lightbulb, ArrowRight } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface Product {
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  slug: string; // For placeholder link
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
      { nameKey: 'products.product.tariff', descriptionKey: 'products.product.tariff.description', slug: 'tariff' },
      { nameKey: 'products.product.logicust', descriptionKey: 'products.product.logicust.description', slug: 'logicust' },
    ],
  },
  {
    categoryKey: 'products.category.aiSolutions',
    icon: BrainCircuit,
    products: [
      { nameKey: 'products.product.customsShield', descriptionKey: 'products.product.customsShield.description', slug: 'customs-shield' },
      { nameKey: 'products.product.customsXRay', descriptionKey: 'products.product.customsXRay.description', slug: 'customs-xray' },
      { nameKey: 'products.product.transitAI', descriptionKey: 'products.product.transitAI.description', slug: 'transit-ai' },
      { nameKey: 'products.product.declarantAI', descriptionKey: 'products.product.declarantAI.description', slug: 'declarant-ai' },
    ],
  },
  {
    categoryKey: 'products.category.declarationFiling',
    icon: FileText,
    products: [
      { nameKey: 'products.product.transcode', descriptionKey: 'products.product.transcode.description', slug: 'transcode' },
      { nameKey: 'products.product.declarant', descriptionKey: 'products.product.declarant.description', slug: 'declarant' },
      { nameKey: 'products.product.relayhub', descriptionKey: 'products.product.relayhub.description', slug: 'relayhub' },
    ],
  },
  {
    categoryKey: 'products.category.other',
    icon: Lightbulb,
    products: [
      { nameKey: 'products.product.greenpulse', descriptionKey: 'products.product.greenpulse.description', slug: 'greenpulse' },
      { nameKey: 'products.product.tradeloupe', descriptionKey: 'products.product.tradeloupe.description', slug: 'tradeloupe' },
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

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {productCategories.map((category) => (
          <Card key={category.categoryKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex flex-row items-center gap-3 pb-4">
              <category.icon className="h-8 w-8 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">{t(category.categoryKey)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
              {category.products.map((product) => (
                <div key={product.nameKey} className="p-4 border rounded-lg shadow-sm bg-card">
                  <h3 className="text-xl font-semibold text-primary">{t(product.nameKey)}</h3>
                  <p className="text-sm text-foreground/80 mt-1 mb-3 leading-relaxed">
                    {t(product.descriptionKey)}
                  </p>
                  {/* Placeholder link: Update href to actual product detail page later */}
                  <Button asChild size="sm" variant="outline" className="mt-auto group">
                    <Link href={`#${product.slug}`}>
                      {t('products.exploreButton')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

    