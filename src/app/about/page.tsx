
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, BookOpen, Cpu, BarChart, Link as LinkIcon, Linkedin } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface TechIcon {
  Icon: React.ElementType; // Can be LucideIcon or an inline SVG component
  label: string;
  color: string;
}

interface TeamMember {
  nameKey: TranslationKey;
  titleKey: TranslationKey;
  linkedInUrl: string; // Using string directly for placeholder
  photoPlaceholder: string;
  dataAiHint: string;
}

const mockTeamMembers: TeamMember[] = [
  {
    nameKey: 'about.team.member1.name',
    titleKey: 'about.team.member1.title',
    linkedInUrl: '#', // Placeholder
    photoPlaceholder: 'https://placehold.co/300x360.png',
    dataAiHint: 'person portrait',
  },
  {
    nameKey: 'about.team.member2.name',
    titleKey: 'about.team.member2.title',
    linkedInUrl: '#', // Placeholder
    photoPlaceholder: 'https://placehold.co/300x360.png',
    dataAiHint: 'person portrait',
  },
  {
    nameKey: 'about.team.member3.name',
    titleKey: 'about.team.member3.title',
    linkedInUrl: '#', // Placeholder
    photoPlaceholder: 'https://placehold.co/300x360.png',
    dataAiHint: 'person portrait',
  },
];


export default function AboutPage() {
  const { t } = useTranslation();

  const techIcons: TechIcon[] = [
    { Icon: LinkIcon, label: "Blockchain", color: "text-blue-500" },
    { Icon: Cpu, label: "Artificial Intelligence", color: "text-purple-500" },
    { Icon: BarChart, label: "Business Intelligence", color: "text-green-500" }
  ];

  const BrainCircuitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-500 lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125"/><path d="M18.62 4A2 2 0 0 0 17 2h-2"/><path d="M6 2A2 2 0 0 0 4 4v2"/><path d="M5 14a3 3 0 0 0 6 0"/><path d="M19 14a3 3 0 0 0 6 0"/><path d="M12 14a3 3 0 0 0 6 0"/><path d="M2 9A2 2 0 0 0 0 11v2a2 2 0 0 0 2 2h2c0-1.09.23-2.11.64-3H2Z"/><path d="M22 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2.64c.41-.89.64-1.91.64-3H22Z"/><path d="M15.24 10.5a3 3 0 0 0-4.48 0"/><path d="M15.5 15.5A2.5 2.5 0 0 0 18 18h1a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2.5 2.5 0 0 0-2.5-2.5h-1A2.5 2.5 0 0 0 13 15.5Z"/><path d="M8.5 15.5A2.5 2.5 0 0 1 6 18H5a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2A2.5 2.5 0 0 1 9.5 18h1a2.5 2.5 0 0 1 2.5-2.5Z"/></svg>
  );


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
            data-ai-hint="global network"
          />
        </div>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start gap-3">
            <Target className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
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
           <CardHeader className="flex flex-row items-start gap-3">
            <BookOpen className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
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
                    <BrainCircuitIcon />
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
            data-ai-hint="team collaboration"
          />
        </div>
      </div>

      <section className="text-center py-12">
        <Users className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-semibold mb-4">{t('about.team.title')}</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto mb-10">
          {t('about.team.description')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTeamMembers.map((member) => (
            <Card key={member.nameKey} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="relative w-full h-[360px]"> {/* Container for image */}
                <Image
                  src={member.photoPlaceholder}
                  alt={t(member.nameKey)}
                  width={300}
                  height={360}
                  className="object-cover rounded-t-lg"
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardContent className="p-6">
                <Link href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline">
                  {t(member.nameKey)}
                  <Linkedin className="h-5 w-5" />
                </Link>
                <p className="text-muted-foreground mt-1">{t(member.titleKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}
