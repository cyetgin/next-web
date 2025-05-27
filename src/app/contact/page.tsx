
"use client";

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();

  const address = t('contact.info.address');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          {t('contact.title')}
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          {t('contact.description')}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">{t('contact.form.name.label')}</CardTitle> {/* Adjusted to be more generic */}
            <CardDescription>Send us your project ideas or inquiries.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">{t('contact.info.title')}</CardTitle>
            <CardDescription>Other ways to reach us for your trade solution needs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary hover:underline">
                  {address}
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-foreground/80">
                  <a href={`mailto:${t('contact.info.email')}`} className="hover:underline text-primary">
                    {t('contact.info.email')}
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
