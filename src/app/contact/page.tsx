
"use client";

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin } from 'lucide-react';
import type { TranslationKey } from '@/lib/i18n';

interface AddressInfo {
  titleKey: TranslationKey;
  addressKey: TranslationKey;
}

const officeAddresses: AddressInfo[] = [
  { titleKey: 'contact.info.address.hq.title', addressKey: 'contact.info.address.hq.address' },
  { titleKey: 'contact.info.address.uk.title', addressKey: 'contact.info.address.uk.address' },
  { titleKey: 'contact.info.address.de.title', addressKey: 'contact.info.address.de.address' },
  { titleKey: 'contact.info.address.us.title', addressKey: 'contact.info.address.us.address' },
];

export default function ContactPage() {
  const { t } = useTranslation();

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
            <CardDescription>Reach out to us at our various locations or via email.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {officeAddresses.map((office) => {
              const address = t(office.addressKey);
              const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
              return (
                <div key={office.titleKey} className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t(office.titleKey)}</h3>
                    <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary hover:underline">
                      {address}
                    </Link>
                  </div>
                </div>
              );
            })}
            <div className="flex items-start gap-4 pt-4 border-t">
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

    