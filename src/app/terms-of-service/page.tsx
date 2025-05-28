
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  const { t } = useTranslation();

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
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
          <p>
            {/* Replace with your actual content */}
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

    