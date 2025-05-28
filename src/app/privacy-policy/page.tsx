
"use client";

import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl text-primary">
            {t('legal.privacyPolicy.title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
          <p className="text-muted-foreground italic">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
          <p>
            {/* Replace with your actual content */}
            {t('legal.privacyPolicy.placeholder')}
          </p>
          <p className="mt-4">
            This is a placeholder for your Privacy Policy. Please replace this text with your company's official Privacy Policy.
            It should detail how user data is collected, stored, used, and protected. Ensure it complies with GDPR and other applicable data protection regulations.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
          <p>
            Placeholder content...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
          <p>
            Placeholder content...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>
          <p>
            Placeholder content about cookie usage...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Data Security</h2>
          <p>
            Placeholder content about data security measures...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights</h2>
          <p>
            Placeholder content about user rights under GDPR (e.g., access, rectification, erasure)...
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: [Your Contact Email/Link to Contact Page].
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

    