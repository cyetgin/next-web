
"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, BookOpen, Cpu, BarChart, Link as LinkIcon } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();

  const techIcons = [
    { Icon: LinkIcon, label: "Blockchain", color: "text-blue-500" },
    { Icon: Cpu, label: "Artificial Intelligence", color: "text-purple-500" },
    { Icon: BarChart, label: "Business Intelligence", color: "text-green-500" }
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          {t('about.title')}
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          {t('home.companyInfo.description')} {/* Re-using this key as it's updated */}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/agsw-whole.webp?alt=media&token=7f020544-825f-4c47-b53e-11c14bb186a1"
            alt={t('about.mission.title')}
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
            <Target className="h-10 w-10 text-primary" />
            <div>
              <CardTitle className="text-3xl">{t('about.mission.title')}</CardTitle>
              <CardDescription>{t('about.mission.description')}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t('about.mission.content')}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg md:order-last">
           <CardHeader className="flex flex-row items-center gap-3">
            <BookOpen className="h-10 w-10 text-primary" />
             <div>
              <CardTitle className="text-3xl">{t('about.story.title')}</CardTitle>
              <CardDescription>{t('about.story.description')}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t('about.story.content')}
            </p>
             <div className="mt-6">
              <h4 className="text-xl font-semibold mb-3 text-primary">{t('about.story.enablingTechnologiesTitle')}</h4>
              <div className="flex flex-wrap gap-4">
                {techIcons.map(tech => (
                  <div key={tech.label} className="flex items-center gap-2 p-2 border rounded-lg bg-secondary/30">
                    <tech.Icon className={`h-6 w-6 ${tech.color}`} />
                    <span className="text-sm font-medium text-foreground/90">{tech.label}</span>
                  </div>
                ))}
                 <div className="flex items-center gap-2 p-2 border rounded-lg bg-secondary/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-500 lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125"/><path d="M18.62 4A2 2 0 0 0 17 2h-2"/><path d="M6 2A2 2 0 0 0 4 4v2"/><path d="M5 14a3 3 0 0 0 6 0"/><path d="M19 14a3 3 0 0 0 6 0"/><path d="M12 14a3 3 0 0 0 6 0"/><path d="M2 9A2 2 0 0 0 0 11v2a2 2 0 0 0 2 2h2c0-1.09.23-2.11.64-3H2Z"/><path d="M22 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2.64c.41-.89.64-1.91.64-3H22Z"/><path d="M15.24 10.5a3 3 0 0 0-4.48 0"/><path d="M15.5 15.5A2.5 2.5 0 0 0 18 18h1a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 13 15.5Z"/><path d="M8.5 15.5A2.5 2.5 0 0 1 6 18H5a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2A2.5 2.5 0 0 1 9.5 18h1a2.5 2.5 0 0 1 2.5-2.5Z"/></svg>
                    <span className="text-sm font-medium text-foreground/90">Machine Learning</span>
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>
         <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/global-hub-21v8j.firebasestorage.app/o/atez-vision.webp?alt=media&token=6c7ca25e-2e2b-4ef2-a668-ace020e29a69"
            alt={t('about.story.title')}
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
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
