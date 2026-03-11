import { CopyButton } from './CopyButton';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FileCode } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  return (
    <Card className="bg-secondary/50 shadow-none">
      {title && (
        <CardHeader className="flex-row items-center gap-2 space-y-0 p-4">
          <FileCode className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="font-code text-sm font-medium">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="relative p-0">
        <CopyButton textToCopy={code} />
        <pre className="w-full overflow-x-auto rounded-b-lg bg-sidebar p-4 font-code text-sm text-sidebar-foreground">
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
