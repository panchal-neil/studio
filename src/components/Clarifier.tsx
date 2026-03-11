'use client';

import { useFormState, useFormStatus } from 'react-dom';
import type { FormState } from '@/app/python-path/clarifier/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ClarifierProps {
  clarifyConceptAction: (
    prevState: FormState,
    formData: FormData
  ) => Promise<FormState>;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-semibold">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Clarifying...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Clarify Concept
        </>
      )}
    </Button>
  );
}

export function Clarifier({ clarifyConceptAction }: ClarifierProps) {
  const initialState: FormState = { response: '', error: '' };
  const [state, formAction] = useFormState(clarifyConceptAction, initialState);

  return (
    <div className="space-y-6">
      <form action={formAction} className="space-y-4">
        <Textarea
          name="question"
          placeholder="e.g., What is the difference between a list and a tuple in Python?"
          rows={4}
          required
          minLength={10}
          className="bg-secondary/50"
        />
        <SubmitButton />
      </form>

      {state.error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.response && (
        <Card className="bg-secondary/50">
          <CardContent className="p-6">
            <div
              className="prose prose-sm dark:prose-invert max-w-none space-y-4"
              dangerouslySetInnerHTML={{
                __html: state.response.replace(/\n/g, '<br />'),
              }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
