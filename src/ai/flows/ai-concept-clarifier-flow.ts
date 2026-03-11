'use server';
/**
 * @fileOverview A Genkit flow for clarifying technical concepts related to Python, SQL, and Docker.
 *
 * - clarifyConcept - A function that handles the concept clarification process.
 * - ConceptClarifierInput - The input type for the clarifyConcept function.
 * - ConceptClarifierOutput - The return type for the clarifyConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConceptClarifierInputSchema = z
  .string()
  .describe('The question or concept about Python, SQL, or Docker to be clarified.');
export type ConceptClarifierInput = z.infer<typeof ConceptClarifierInputSchema>;

const ConceptClarifierOutputSchema = z
  .string()
  .describe('A simplified explanation, analogy, or additional context for the concept.');
export type ConceptClarifierOutput = z.infer<typeof ConceptClarifierOutputSchema>;

export async function clarifyConcept(input: ConceptClarifierInput): Promise<ConceptClarifierOutput> {
  return aiConceptClarifierFlow(input);
}

const aiConceptClarifierPrompt = ai.definePrompt({
  name: 'aiConceptClarifierPrompt',
  input: {schema: ConceptClarifierInputSchema},
  output: {schema: ConceptClarifierOutputSchema},
  prompt: `You are an expert software engineer and educator, specializing in Python, SQL, and Docker. Your goal is to clarify complex technical concepts for junior developers. When a junior developer asks a question about Python, SQL, or Docker, provide a simplified explanation, a helpful analogy, or additional context to aid their understanding.

Question: {{{input}}}

Explanation:`,
});

const aiConceptClarifierFlow = ai.defineFlow(
  {
    name: 'aiConceptClarifierFlow',
    inputSchema: ConceptClarifierInputSchema,
    outputSchema: ConceptClarifierOutputSchema,
  },
  async input => {
    const {output} = await aiConceptClarifierPrompt(input);
    return output!;
  }
);
