'use server';

import { clarifyConcept } from '@/ai/flows/ai-concept-clarifier-flow';

export type FormState = {
  response: string;
  error: string;
};

export async function clarifyConceptAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const question = formData.get('question') as string;

  if (!question || question.trim().length < 10) {
    return { response: '', error: 'Please enter a question with at least 10 characters.' };
  }

  try {
    const response = await clarifyConcept(question);
    return { response, error: '' };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return {
      response: '',
      error: `Sorry, we couldn't get an explanation for you. Error: ${errorMessage}`,
    };
  }
}
