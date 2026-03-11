import { Clarifier } from '@/components/Clarifier';
import { clarifyConceptAction } from './actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

export const metadata = {
  title: 'AI Concept Clarifier',
};

export default function ClarifierPage() {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <BrainCircuit className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">AI Concept Clarifier</CardTitle>
          <CardDescription className="text-lg">
            Stuck on a concept? Ask our AI for a simplified explanation, analogy, or more context.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Clarifier clarifyConceptAction={clarifyConceptAction} />
        </CardContent>
      </Card>
    </div>
  );
}
