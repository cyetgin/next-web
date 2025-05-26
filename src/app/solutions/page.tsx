
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
  Bot, 
  Network,
  // Solution specific icons
  ListFilter,
  Calculator,
  // ShieldCheck, // Re-used
  FileWarning,
  SearchCode,
  Percent,
  PlugZap,
  FileStack,
  FileLock2,
  // Bot, // Re-used for TransitAI, DeclarantAI
  ShieldAlert,
  SearchCheck,
  FileBarChart2,
  AreaChart,
  Sparkles,
  History // Added for Historical Data
} from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';
import type { LucideIcon } from 'lucide-react';

interface Solution {
  nameKey: TranslationKey;
  productNameKey: TranslationKey;
  icon: LucideIcon;
}

interface ProductInfo {
  nameKey: TranslationKey;
  icon: LucideIcon;
  slug: string;
}

const solutionsList: Solution[] = [
  { nameKey: 'solutions.solution.htsClassification', productNameKey: 'products.product.logicust', icon: ListFilter },
  { nameKey: 'solutions.solution.landedCost', productNameKey: 'products.product.logicust', icon: Calculator },
  { nameKey: 'solutions.solution.customsCompliance', productNameKey: 'products.product.logicust', icon: ShieldCheck },
  { nameKey: 'solutions.solution.exportControls', productNameKey: 'products.product.logicust', icon: FileWarning },
  { nameKey: 'solutions.solution.findHtsCode', productNameKey: 'products.product.tariff', icon: SearchCode },
  { nameKey: 'solutions.solution.taxCalculation', productNameKey: 'products.product.tariff', icon: Percent },
  { nameKey: 'solutions.solution.smartSuggestions', productNameKey: 'products.product.tariff', icon: Sparkles },
  { nameKey: 'solutions.solution.historicalDataTariff', productNameKey: 'products.product.tariff', icon: History },
  { nameKey: 'solutions.solution.sapIntegration', productNameKey: 'products.product.declarant', icon: PlugZap },
  { nameKey: 'solutions.solution.declarantAI', productNameKey: 'products.product.declarant', icon: Bot }, 
  { nameKey: 'solutions.solution.relayhub', productNameKey: 'products.product.declarant', icon: Network },
  { nameKey: 'solutions.solution.transitDeclarationFiling', productNameKey: 'products.product.transcode', icon: FileStack },
  { nameKey: 'solutions.solution.guaranteeManagement', productNameKey: 'products.product.transcode', icon: FileLock2 },
  { nameKey: 'solutions.solution.transitAI', productNameKey: 'products.product.transcode', icon: Bot }, 
  { nameKey: 'solutions.solution.preClearanceControl', productNameKey: 'products.product.customsShield', icon: ShieldAlert },
  { nameKey: 'solutions.solution.postDeclarationControl', productNameKey: 'products.product.customsXRay', icon: SearchCheck },
  { nameKey: 'solutions.solution.cbamReporting', productNameKey: 'products.product.greenpulse', icon: FileBarChart2 },
  { nameKey: 'solutions.solution.dataVisualization', productNameKey: 'products.product.tradeloupe', icon: AreaChart },
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
            <Card key={productKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                <ProductIcon className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-2xl">{t(productInfo.nameKey)}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productSolutions.map((solution) => {
                    const SolutionIcon = solution.icon;
                    return (
                      <Link
                        key={solution.nameKey}
                        href={`/products#${productInfo.slug}`}
                        className="block p-4 border rounded-lg shadow-sm bg-card hover:shadow-lg transition-shadow duration-300 group transform hover:-translate-y-1 h-full"
                      >
                        <div className="flex items-start gap-3">
                          <SolutionIcon className="h-7 w-7 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-md font-semibold text-foreground group-hover:text-primary transition-colors">
                              {t(solution.nameKey)}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
              <div className="p-6 pt-4 mt-auto">
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
