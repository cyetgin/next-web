"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, BookOpen } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          {t('about.title')}
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          {t('home.companyInfo.description')}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt={t('about.mission.title')}
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="team meeting"
          />
        </div>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
            <Target className="h-10 w-10 text-primary" />
            <div>
              <CardTitle className="text-3xl">{t('about.mission.title')}</CardTitle>
              <CardDescription>Our core purpose and driving force.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t('about.mission.content')}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Card className="shadow-lg md:order-last">
           <CardHeader className="flex flex-row items-center gap-3">
            <BookOpen className="h-10 w-10 text-primary" />
             <div>
              <CardTitle className="text-3xl">{t('about.story.title')}</CardTitle>
              <CardDescription>The journey that shaped ATEZ Software Technologies.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t('about.story.content')}
            </p>
          </CardContent>
        </Card>
         <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt={t('about.story.title')}
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="company journey"
          />
        </div>
      </div>
      
      <section className="text-center py-12">
         <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team (Placeholder)</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Our diverse team of engineers, designers, and product visionaries are passionate about building great software. We are currently working on showcasing our amazing team members here!
        </p>
      </section>

    </div>
  );
}
