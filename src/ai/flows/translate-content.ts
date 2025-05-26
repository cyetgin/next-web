'use server';

/**
 * @fileOverview An AI agent for translating website content into multiple languages,
 * incorporating custom terminology when appropriate.
 *
 * - translateContent - A function that handles the content translation process.
 * - TranslateContentInput - The input type for the translateContent function.
 * - TranslateContentOutput - The return type for the translateContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateContentInputSchema = z.object({
  text: z.string().describe('The text content to be translated.'),
  targetLanguage: z.string().describe('The target language for the translation.'),
  customTerminology: z
    .string()
    .optional()
    .describe('Optional custom terminology to be used in the translation.'),
});

export type TranslateContentInput = z.infer<typeof TranslateContentInputSchema>;

const TranslateContentOutputSchema = z.object({
  translatedText: z.string().describe('The translated text content.'),
});

export type TranslateContentOutput = z.infer<typeof TranslateContentOutputSchema>;

export async function translateContent(input: TranslateContentInput): Promise<TranslateContentOutput> {
  return translateContentFlow(input);
}

const translateContentPrompt = ai.definePrompt({
  name: 'translateContentPrompt',
  input: {schema: TranslateContentInputSchema},
  output: {schema: TranslateContentOutputSchema},
  prompt: `Translate the following text into {{targetLanguage}}:

{{#if customTerminology}}
  Incorporate the following custom terminology into the translation: {{customTerminology}}
{{/if}}

Text to translate: {{{text}}}`,
});

const translateContentFlow = ai.defineFlow(
  {
    name: 'translateContentFlow',
    inputSchema: TranslateContentInputSchema,
    outputSchema: TranslateContentOutputSchema,
  },
  async input => {
    const {output} = await translateContentPrompt(input);
    return output!;
  }
);
