
"use client";

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  ChevronRight,
  BookOpen,
  Truck,
  ShieldCheck,
  Search,
  FilePenLine,
  Replace,
  Leaf,
  Globe,
  Bot, // For Declarant AI solution
  ArrowRightLeft // For Transit AI solution
} from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';
import type { LucideIcon } from 'lucide-react';

interface Solution {
  nameKey: TranslationKey;
  productNameKey: TranslationKey;
}

interface ProductInfo {
  nameKey: TranslationKey;
  icon: LucideIcon;
  slug: string;
}

const solutionsList: Solution[] = [
  { nameKey: 'solutions.solution.htsClassification', productNameKey: 'products.product.logicust' },
  { nameKey: 'solutions.solution.landedCost', productNameKey: 'products.product.logicust' },
  { nameKey: 'solutions.solution.customsCompliance', productNameKey: 'products.product.logicust' },
  { nameKey: 'solutions.solution.exportControls', productNameKey: 'products.product.logicust' },
  { nameKey: 'solutions.solution.findHtsCode', productNameKey: 'products.product.tariff' },
  { nameKey: 'solutions.solution.taxCalculation', productNameKey: 'products.product.tariff' },
  { nameKey: 'solutions.solution.customsDeclarationFiling', productNameKey: 'products.product.declarant' },
  { nameKey: 'solutions.solution.sapIntegration', productNameKey: 'products.product.declarant' },
  { nameKey: 'solutions.solution.declarantAI', productNameKey: 'products.product.declarant' }, // New
  { nameKey: 'solutions.solution.transitDeclarationFiling', productNameKey: 'products.product.transcode' },
  { nameKey: 'solutions.solution.guaranteeManagement', productNameKey: 'products.product.transcode' },
  { nameKey: 'solutions.solution.transitAI', productNameKey: 'products.product.transcode' }, // New
  { nameKey: 'solutions.solution.preClearanceControl', productNameKey: 'products.product.customsShield' },
  { nameKey: 'solutions.solution.postDeclarationControl', productNameKey: 'products.product.customsXRay' },
  { nameKey: 'solutions.solution.cbamReporting', productNameKey: 'products.product.greenpulse' },
  { nameKey: 'solutions.solution.dataVisualization', productNameKey: 'products.product.tradeloupe' },
];

const productDetailsMap: Record<string, ProductInfo> = {
  'products.product.logicust': { nameKey: 'products.product.logicust', icon: Truck, slug: 'logicust' },
  'products.product.tariff': { nameKey: 'products.product.tariff', icon: BookOpen, slug: 'tariff' },
  'products.product.declarant': { nameKey: 'products.product.declarant', icon: FilePenLine, slug: 'declarant' },
  'products.product.transcode': { nameKey: 'products.product.transcode', icon: Replace, slug: 'transcode' },
  'products.product.customsShield': { nameKey: 'products.product.customsShield', icon: ShieldCheck, slug: 'customs-shield' },
  'products.product.customsXRay': { nameKey: 'products.product.customsXRay', icon: Search, slug: 'customs-xray' },
  'products.product.greenpulse': { nameKey: 'products.product.greenpulse', icon: Leaf, slug: 'greenpulse' },
  'products.product.tradeloupe': { nameKey: 'products.product.tradeloupe', icon: Globe, slug: 'tradeloupe' },
  // Although DeclarantAI and TransitAI are products themselves, on this page they are listed as solutions
  // provided BY Declarant and Transcode respectively. Their specific product icons (Bot, ArrowRightLeft)
  // are used on the Products page. Here, we use the parent product's icon.
};


export default function SolutionsPage() {
  const { t } = useTranslation();

  const solutionsByProduct = solutionsList.reduce((acc, solution) => {
    const productKey = solution.productNameKey;
    if (!acc[productKey]) {
      acc[productKey] = [];
    }
    acc[productKey].push(solution);
    return acc;
  }, {} as Record<TranslationKey, Solution[]>);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary flex items-center justify-center">
          <Lightbulb className="mr-3 h-10 w-10" />
          {t('solutions.title')}
        </h1>
        <p className="mx-auto max-w-[800px] text-foreground/80 md:text-xl">
          {t('solutions.description')}
        </p>
      </header>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {Object.entries(solutionsByProduct).map(([productKey, productSolutions]) => {
          const productInfo = productDetailsMap[productKey as TranslationKey];
          if (!productInfo) return null; 

          const ProductIcon = productInfo.icon;

          return (
            <Card key={productKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                <ProductIcon className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-2xl">{t(productInfo.nameKey)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <ul className="space-y-2">
                  {productSolutions.map((solution) => (
                    <li key={solution.nameKey}>
                      <Button asChild variant="ghost" className="w-full justify-start text-left h-auto py-2 group">
                        <Link href={`/products#${productInfo.slug}`} className="flex items-center justify-between w-full">
                          <span className="text-base text-foreground/90">{t(solution.nameKey)}</span>
                          <ChevronRight className="h-5 w-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                 <Button asChild variant="outline" className="w-full group">
                    <Link href={`/products#${productInfo.slug}`}>
                      {t('solutions.viewProductDetails')} ({t(productInfo.nameKey)})
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

