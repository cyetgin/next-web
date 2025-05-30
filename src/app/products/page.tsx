
"use client";

import Image from 'next/image'; 
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  ExternalLink, 
  PackageCheck, 
  BrainCircuit, 
  FileText, 
  Lightbulb, 
  ArrowRight,
} from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';
import type { LucideIcon } from 'lucide-react';
import { useLinkBehavior } from '@/context/link-behavior-provider';


interface Product {
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  slug: string; 
  icon?: LucideIcon; 
  imageUrl?: string; 
  detailPagePath?: string;
}

interface ProductCategory {
  categoryKey: TranslationKey;
  icon: LucideIcon;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    categoryKey: 'products.category.customsCompliance',
    icon: PackageCheck,
    products: [
      { 
        nameKey: 'products.product.tariff', 
        descriptionKey: 'products.product.tariff.description', 
        slug: 'tariff', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-tariff-3-%400.5x.webp?alt=media&token=3da28717-ea71-4362-b438-c3c5205be1bd',
        detailPagePath: '/products/tariff' 
      },
      { 
        nameKey: 'products.product.logicust', 
        descriptionKey: 'products.product.logicust.description', 
        slug: 'logicust', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-logicust-3-%400.5x.webp?alt=media&token=4f83103e-5574-4ec7-abd5-8b0d299ecf2f'
      },
    ],
  },
  {
    categoryKey: 'products.category.aiSolutions',
    icon: BrainCircuit,
    products: [
      { 
        nameKey: 'products.product.customsShield', 
        descriptionKey: 'products.product.customsShield.description', 
        slug: 'customs-shield', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icons-customs-shield-3-%400.5x.webp?alt=media&token=b0f7725f-a3b1-4765-834c-a7bda54e022a' 
      },
      { 
        nameKey: 'products.product.customsXRay', 
        descriptionKey: 'products.product.customsXRay.description', 
        slug: 'customs-xray', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-customs-x-ray-3-%400.5x.webp?alt=media&token=24feb9c5-9986-4b84-aabd-1fe9adb3838f' 
      },
      { 
        nameKey: 'products.product.transitAI', 
        descriptionKey: 'products.product.transitAI.description', 
        slug: 'transit-ai', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-transitAI%400.5x.webp?alt=media&token=aaff5c1b-885a-4059-9a73-3cac5ef437c1' 
      },
      { 
        nameKey: 'products.product.declarantAI', 
        descriptionKey: 'products.product.declarantAI.description', 
        slug: 'declarant-ai', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-declarantAI%400.5x.webp?alt=media&token=321b1787-e926-446f-9eec-79d2e4b778ea'
      },
    ],
  },
  {
    categoryKey: 'products.category.declarationFiling',
    icon: FileText,
    products: [
      { 
        nameKey: 'products.product.transcode', 
        descriptionKey: 'products.product.transcode.description', 
        slug: 'transcode', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-transcode-3-%400.5x.webp?alt=media&token=86b8bffe-3847-416a-b413-9b822565641b' 
      },
      { 
        nameKey: 'products.product.declarant', 
        descriptionKey: 'products.product.declarant.description', 
        slug: 'declarant', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-declarant-3-%400.5x.webp?alt=media&token=a2c6cf7f-b841-455b-b503-043679d5400d'
      },
    ],
  },
  {
    categoryKey: 'products.category.other',
    icon: Lightbulb,
    products: [
      { 
        nameKey: 'products.product.greenpulse', 
        descriptionKey: 'products.product.greenpulse.description', 
        slug: 'greenpulse', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-greenpulse-3-%400.5x.webp?alt=media&token=ade9a485-6717-467d-855e-2a757a087dcf' 
      },
      { 
        nameKey: 'products.product.customsLoupe', 
        descriptionKey: 'products.product.customsLoupe.description', 
        slug: 'customs-loupe', 
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/icon-customs-loupe-3-%400.5x.webp?alt=media&token=8b3ddf7b-bc43-4461-a2fb-2a692a363722'
      },
    ],
  },
];

export default function ProductsPage() {
  const { t } = useTranslation();
  const { linkBehavior } = useLinkBehavior();

  const linkTarget = linkBehavior === 'newTab' ? '_blank' : '_self';
  const linkRel = linkBehavior === 'newTab' ? 'noopener noreferrer' : undefined;

  return (
    <TooltipProvider>
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
          <p className="text-lg font-semibold mb-4 text-primary">
            {t('products.mainPlatformIntro')}
          </p>
          <div className="my-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/A%20Global%20Single%20Window%402x-v2.png?alt=media&token=6fd2546c-956b-4896-abe3-c4c1ec359dc3"
              alt={t('products.mainPlatformIntro')}
              width={574}
              height={90}
              className="mx-auto"
            />
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="https://singlewindow.io" target={linkTarget} rel={linkRel}>
              {t('products.visitPlatformButton')} <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <Card key={category.categoryKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                <category.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <CardTitle className="text-2xl">{t(category.categoryKey)}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.products.map((product) => {
                    const ProductIcon = product.icon; 
                    const descriptionText = t(product.descriptionKey);
                    
                    let productDescriptionElement;
                    if (product.nameKey === 'products.product.logicust') {
                      const parts = descriptionText.split('{{PRODUCT_TOOLTIP_TARGET}}');
                      productDescriptionElement = (
                        <div className="text-sm text-foreground/80 mt-1 mb-3 leading-relaxed flex-grow">
                          {parts[0]}
                          {parts.length > 1 && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="underline decoration-dashed cursor-help font-semibold text-primary">
                                  {t('products.product.logicust.tooltip.productTrigger')}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{t('products.product.logicust.tooltip.productContent')}</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                          {parts[1]}
                        </div>
                      );
                    } else {
                      productDescriptionElement = (
                        <p className="text-sm text-foreground/80 mt-1 mb-3 leading-relaxed flex-grow">
                          {descriptionText}
                        </p>
                      );
                    }

                    return (
                      <div key={product.nameKey} className="p-4 border rounded-lg shadow-sm bg-card hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-2">
                          {product.imageUrl ? (
                            <Image
                              src={product.imageUrl}
                              alt={t(product.nameKey)}
                              width={24} 
                              height={24} 
                              className="h-6 w-6 object-contain" 
                            />
                          ) : ProductIcon ? (
                            <ProductIcon className="h-6 w-6 text-accent flex-shrink-0" />
                          ) : null}
                          <h3 className="text-xl font-semibold text-primary">{t(product.nameKey)}</h3>
                        </div>
                        {productDescriptionElement}
                        <Button asChild size="sm" variant="outline" className="mt-auto group">
                          <Link href={product.detailPagePath || `#${product.slug}`} target={product.detailPagePath ? '_self' : linkTarget} rel={product.detailPagePath ? undefined : linkRel}>
                            {t('products.exploreButton')}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
