// Summarizes publications using Genkit and Gemini.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing research publications.
 *
 * - summarizePublication - A function that takes publication text and returns a summary.
 * - SummarizePublicationInput - The input type for the summarizePublication function.
 * - SummarizePublicationOutput - The output type for the summarizePublication function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePublicationInputSchema = z.object({
  publicationText: z
    .string()
    .describe('The full text content of the research publication.'),
});
export type SummarizePublicationInput = z.infer<typeof SummarizePublicationInputSchema>;

const SummarizePublicationOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the research publication.'),
});
export type SummarizePublicationOutput = z.infer<typeof SummarizePublicationOutputSchema>;

export async function summarizePublication(
  input: SummarizePublicationInput
): Promise<SummarizePublicationOutput> {
  return summarizePublicationFlow(input);
}

const summarizePublicationPrompt = ai.definePrompt({
  name: 'summarizePublicationPrompt',
  input: {schema: SummarizePublicationInputSchema},
  output: {schema: SummarizePublicationOutputSchema},
  prompt: `Summarize the following research publication in a single paragraph:

{{{publicationText}}}`,
});

const summarizePublicationFlow = ai.defineFlow(
  {
    name: 'summarizePublicationFlow',
    inputSchema: SummarizePublicationInputSchema,
    outputSchema: SummarizePublicationOutputSchema,
  },
  async input => {
    const {output} = await summarizePublicationPrompt(input);
    return output!;
  }
);
