import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ResourceCardProps {
  url: string;
  title: string;
  description?: string;
}

export function ResourceCard({ url, title, description }: ResourceCardProps) {
  return (
    <Card className="transition-all hover:bg-secondary/50 hover:shadow-md">
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-lg text-primary">{title}</CardTitle>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
          </div>
          {description && (
            <CardDescription className="pt-1">{description}</CardDescription>
          )}
        </CardHeader>
      </Link>
    </Card>
  );
}
