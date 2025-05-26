
"use client";

import { useEffect, useRef } from 'react';
import { useActionState } from 'react'; // Changed from 'react-dom' and useFormState
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { handleTranslate, type TranslateFormState } from '@/actions/translate';
import { AVAILABLE_LOCALES } from '@/lib/i18n';
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const initialState: TranslateFormState = {
  message: null,
  success: false,
};

export default function TranslatePage() {
  const { t } = useTranslation();
  const [state, formAction] = useActionState(handleTranslate, initialState); // Changed from useFormState
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? t('translate.result.title') : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
        action: state.success ? <CheckCircle2 className="text-green-500" /> : <AlertCircle className="text-red-500" />,
      });
      if (state.success) {
        formRef.current?.reset(); // Reset form on success
      }
    }
  }, [state, toast, t]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 max-w-3xl">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{t('translate.title')}</CardTitle>
          <CardDescription>{t('translate.description')}</CardDescription>
        </CardHeader>
        <form action={formAction} ref={formRef}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="text-to-translate">{t('translate.form.textToTranslate.label')}</Label>
              <Textarea
                id="text-to-translate"
                name="text"
                placeholder={t('translate.form.textToTranslate.placeholder')}
                rows={6}
                className="resize-none"
                aria-describedby="text-error"
              />
              {state.errors?.text && (
                <p id="text-error" className="text-sm text-destructive">{state.errors.text.join(', ')}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="target-language">{t('translate.form.targetLanguage.label')}</Label>
              <Select name="targetLanguage" defaultValue={AVAILABLE_LOCALES[0].value}>
                <SelectTrigger id="target-language" aria-describedby="language-error">
                  <SelectValue placeholder="Select target language" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_LOCALES.map((locale) => (
                    <SelectItem key={locale.value} value={locale.value}>
                      {locale.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state.errors?.targetLanguage && (
                 <p id="language-error" className="text-sm text-destructive">{state.errors.targetLanguage.join(', ')}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-terminology">{t('translate.form.customTerminology.label')}</Label>
              <Input
                id="custom-terminology"
                name="customTerminology"
                placeholder={t('translate.form.customTerminology.placeholder')}
              />
               {state.errors?.customTerminology && (
                 <p className="text-sm text-destructive">{state.errors.customTerminology.join(', ')}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" size="lg">{t('translate.form.submitButton')}</Button>
          </CardFooter>
        </form>
      </Card>

      {state.translatedText && state.success && (
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">{t('translate.result.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-wrap">{state.translatedText}</p>
          </CardContent>
        </Card>
      )}
      {!state.translatedText && !state.success && state.message === null && (
         <Card className="mt-8 shadow-lg border-dashed">
          <CardHeader>
            <CardTitle className="text-2xl">{t('translate.result.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('translate.result.noResult')}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
