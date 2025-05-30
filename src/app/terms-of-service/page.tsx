
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDateTimeFormat } from '@/context/datetime-format-provider';
import { format } from 'date-fns';
import { dateFnsLocales, type Locale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function TermsOfServicePage() {
  const { t, currentLanguage } = useTranslation();
  const { dateTimeFormat } = useDateTimeFormat();
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // Ensure this runs only on the client after hydration
     try {
      const date = new Date(); // Current date for "Last updated"
      const locale = dateFnsLocales[currentLanguage as Locale] || dateFnsLocales.en;
      setFormattedDate(format(date, dateTimeFormat, { locale }));
    } catch (e) {
      console.error("Error formatting date:", e);
      setFormattedDate(new Date().toLocaleDateString()); // Fallback
    }
  }, [currentLanguage, dateTimeFormat]);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl text-primary">
            {t('legal.termsOfService.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
          <p className="text-muted-foreground italic">
            Last updated: {formattedDate || "Loading..."}
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
          <p>
            {t('legal.termsOfService.placeholder')}
          </p>
          <p className="mt-4">
            This is a placeholder for your Terms of Service. Please replace this text with your company's official Terms of Service.
            It should outline the rules and regulations for the use of your company's Website and services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">User Responsibilities</h2>
          <p>
            Placeholder content...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
          <p>
            Placeholder content...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
          <p>
            Placeholder content...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Governing Law</h2>
          <p>
            Placeholder content...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: [Your Contact Email/Link to Contact Page].
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
