"use server";

import { translateContent, type TranslateContentInput } from '@/ai/flows/translate-content';
import { z } from 'zod';

const TranslateFormSchema = z.object({
  text: z.string().min(1, "Text to translate cannot be empty."),
  targetLanguage: z.string().min(1, "Target language is required."),
  customTerminology: z.string().optional(),
});

export interface TranslateFormState {
  message: string | null;
  translatedText?: string;
  errors?: {
    text?: string[];
    targetLanguage?: string[];
    customTerminology?: string[];
  };
  success: boolean;
}

export async function handleTranslate(
  prevState: TranslateFormState,
  formData: FormData
): Promise<TranslateFormState> {
  const validatedFields = TranslateFormSchema.safeParse({
    text: formData.get('text'),
    targetLanguage: formData.get('targetLanguage'),
    customTerminology: formData.get('customTerminology'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const input: TranslateContentInput = {
      text: validatedFields.data.text,
      targetLanguage: validatedFields.data.targetLanguage,
      customTerminology: validatedFields.data.customTerminology || undefined, // Ensure undefined if empty
    };
    
    const result = await translateContent(input);
    
    return {
      message: "Translation successful!",
      translatedText: result.translatedText,
      success: true,
    };
  } catch (error) {
    console.error("Translation error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during translation.";
    return {
      message: `Translation failed: ${errorMessage}`,
      success: false,
    };
  }
}
