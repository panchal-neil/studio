import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface ConceptCardProps {
  title: string;
  description: string;
  Icon?: LucideIcon;
}

export function ConceptCard({ title, description, Icon }: ConceptCardProps) {
  return (
    <Card className="bg-card shadow-sm">
      <CardHeader className="flex-row items-center gap-4 space-y-0">
        {Icon && <Icon className="h-8 w-8 shrink-0 text-primary" />}
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
