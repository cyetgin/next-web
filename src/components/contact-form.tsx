
"use client";

import { useEffect, useRef } from 'react';
import { useActionState } from 'react'; // Correct for useActionState
import { useFormStatus } from 'react-dom'; // Correct for useFormStatus
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { handleContactForm, type ContactFormState } from '@/actions/contact';
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

const initialState: ContactFormState = {
  message: null,
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        t('contact.form.submitButton')
      )}
    </Button>
  );
}

export function ContactForm() {
  const { t } = useTranslation();
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Message Sent!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
        action: state.success ? <CheckCircle2 className="text-green-500" /> : <AlertCircle className="text-red-500" />,
      });
      if (state.success) {
        formRef.current?.reset(); // Reset form on success
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6" ref={formRef}>
      <div className="space-y-2">
        <Label htmlFor="name">{t('contact.form.name.label')}</Label>
        <Input
          id="name"
          name="name"
          placeholder={t('contact.form.name.placeholder')}
          aria-describedby="name-error"
        />
        {state.errors?.name && (
          <p id="name-error" className="text-sm text-destructive">{state.errors.name.join(', ')}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t('contact.form.email.label')}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t('contact.form.email.placeholder')}
          aria-describedby="email-error"
        />
        {state.errors?.email && (
          <p id="email-error" className="text-sm text-destructive">{state.errors.email.join(', ')}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t('contact.form.message.label')}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t('contact.form.message.placeholder')}
          rows={6}
          className="resize-none"
          aria-describedby="message-error"
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-destructive">{state.errors.message.join(', ')}</p>
        )}
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
