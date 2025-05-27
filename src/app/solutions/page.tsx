
"use client";

import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight,
  ShieldCheck, 
  Bot, 
  Network,
  ListFilter,
  Calculator,
  FileWarning,
  SearchCode,
  Percent,
  PlugZap,
  FileStack,
  FileLock2,
  ShieldAlert,
  SearchCheck,
  FileBarChart2,
  AreaChart, 
  Sparkles,
  History
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
  icon?: LucideIcon; // Lucide icon is now optional
  imageUrl?: string; // Added imageUrl for Firebase images
  slug: string;
  detailPagePath?: string; // For linking to specific product pages
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
  { nameKey: 'solutions.solution.dataVisualization', productNameKey: 'products.product.customsLoupe', icon: AreaChart },
];

const productDetailsMap: Record<string, ProductInfo> = {
  'products.product.logicust': { 
    nameKey: 'products.product.logicust', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-logicust-3-%400.5x.webp?alt=media&token=4f83103e-5574-4ec7-abd5-8b0d299ecf2f', 
    slug: 'logicust' 
  },
  'products.product.tariff': { 
    nameKey: 'products.product.tariff', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-tariff-3-%400.5x.webp?alt=media&token=3da28717-ea71-4362-b438-c3c5205be1bd', 
    slug: 'tariff', 
    detailPagePath: '/products/tariff' 
  },
  'products.product.declarant': { 
    nameKey: 'products.product.declarant', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-declarant-3-%400.5x.webp?alt=media&token=a2c6cf7f-b841-455b-b503-043679d5400d', 
    slug: 'declarant' 
  },
  'products.product.transcode': { 
    nameKey: 'products.product.transcode', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-transcode-3-%400.5x.webp?alt=media&token=86b8bffe-3847-416a-b413-9b822565641b', 
    slug: 'transcode' 
  },
  'products.product.customsShield': { 
    nameKey: 'products.product.customsShield', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icons-customs-shield-3-%400.5x.webp?alt=media&token=b0f7725f-a3b1-4765-834c-a7bda54e022a', 
    slug: 'customs-shield' 
  },
  'products.product.customsXRay': { 
    nameKey: 'products.product.customsXRay', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-customs-x-ray-3-%400.5x.webp?alt=media&token=24feb9c5-9986-4b84-aabd-1fe9adb3838f', 
    slug: 'customs-xray' 
  },
  'products.product.greenpulse': { 
    nameKey: 'products.product.greenpulse', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-greenpulse-3-%400.5x.webp?alt=media&token=ade9a485-6717-467d-855e-2a757a087dcf', 
    slug: 'greenpulse' 
  },
  'products.product.customsLoupe': { 
    nameKey: 'products.product.customsLoupe', 
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-customs-loupe-3-%400.5x.webp?alt=media&token=8b3ddf7b-bc43-4461-a2fb-2a692a363722', 
    slug: 'customs-loupe' 
  },
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
          const productLink = productInfo.detailPagePath || `/products#${productInfo.slug}`;

          return (
            <Card key={productKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                {productInfo.imageUrl ? (
                  <Image
                    src={productInfo.imageUrl}
                    alt={t(productInfo.nameKey)}
                    width={32} 
                    height={32} 
                    className="h-8 w-8 object-contain flex-shrink-0"
                  />
                ) : ProductIcon ? (
                  <ProductIcon className="h-8 w-8 text-primary flex-shrink-0" />
                ) : null}
                <CardTitle className="text-2xl">{t(productInfo.nameKey)}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productSolutions.map((solution) => {
                    const SolutionIcon = solution.icon;
                    return (
                      <Link
                        key={solution.nameKey}
                        href={productLink} 
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
                    <Link href={productLink}>
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

