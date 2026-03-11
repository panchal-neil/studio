import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, BrainCircuit } from 'lucide-react';

export default function PythonPathHomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-background p-4 text-center">
      <Card className="w-full max-w-2xl animate-fade-in-up">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="pt-4 text-center font-headline text-3xl">
            Welcome to Python Path Compass
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This is your interactive guide to mastering Python for web
            development. We'll cover everything from the basics of Python to
            deploying a full-stack application with Django and Docker.
          </p>
          <div className="flex items-center justify-center gap-4 rounded-lg bg-secondary p-4">
            <ArrowLeft className="h-6 w-6 animate-pulse text-primary" />
            <p className="font-semibold">
              Select a topic from the sidebar to begin your journey.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-lg border p-4">
            <BrainCircuit className="h-6 w-6 text-accent" />
            <p className="text-sm text-muted-foreground">
              Feeling stuck? Use the{' '}
              <span className="font-semibold text-accent">AI Clarifier</span> to
              get instant help with complex concepts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
