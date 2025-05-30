
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';
import type { TranslationKey, Locale } from '@/lib/i18n';
import { useDateTimeFormat } from '@/context/datetime-format-provider';
import { format } from 'date-fns';
import { dateFnsLocales } from '@/lib/i18n';
import { useLinkBehavior } from '@/context/link-behavior-provider';


interface BlogPost {
  id: string;
  titleKey: TranslationKey;
  excerptKey: TranslationKey;
  categoryKey: TranslationKey;
  imageUrl: string;
  imageAltKey: TranslationKey;
  dataAiHint: string;
  date: string; 
  slug: string; 
}

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    titleKey: 'news.post1.title',
    excerptKey: 'news.post1.excerpt',
    categoryKey: 'news.category.technology',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAltKey: 'news.post1.title',
    dataAiHint: 'ai customs',
    date: '2023-10-26', // Using ISO format for easier parsing
    slug: '/news/future-of-customs-with-ai',
  },
  {
    id: '2',
    titleKey: 'news.post2.title',
    excerptKey: 'news.post2.excerpt',
    categoryKey: 'news.category.companyNews',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAltKey: 'news.post2.title',
    dataAiHint: 'blockchain supplychain',
    date: '2023-11-05',
    slug: '/news/atez-blockchain-initiative',
  },
  {
    id: '3',
    titleKey: 'news.post3.title',
    excerptKey: 'news.post3.excerpt',
    categoryKey: 'news.category.industryUpdates',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAltKey: 'news.post3.title',
    dataAiHint: 'autonomous data logistics',
    date: '2023-11-15',
    slug: '/news/impact-of-autonomous-data-handling',
  },
];

export default function NewsPage() {
  const { t, currentLanguage } = useTranslation();
  const { dateTimeFormat } = useDateTimeFormat();
  const { linkBehavior } = useLinkBehavior();

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const locale = dateFnsLocales[currentLanguage as Locale] || dateFnsLocales.en;
      return format(date, dateTimeFormat, { locale });
    } catch (e) {
      console.error("Error formatting date:", e);
      return dateString; // Fallback to original string
    }
  };

  const linkTarget = linkBehavior === 'newTab' ? '_blank' : '_self';
  const linkRel = linkBehavior === 'newTab' ? 'noopener noreferrer' : undefined;


  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          {t('news.title')}
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          {t('news.description')}
        </p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={post.imageUrl}
                alt={t(post.imageAltKey)}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={post.dataAiHint}
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary">{t(post.categoryKey)}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  {formatDate(post.date)}
                </div>
              </div>
              <CardTitle className="text-xl line-clamp-2">{t(post.titleKey)}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80 line-clamp-3">{t(post.excerptKey)}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full group">
                <Link href={post.slug} target={linkTarget} rel={linkRel}>
                  {t('news.readMore')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
