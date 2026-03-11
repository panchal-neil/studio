import type { TopicContent } from '@/lib/types';
import { CodeBlock } from './CodeBlock';
import { ConceptCard } from './ConceptCard';
import { ResourceCard } from './ResourceCard';

type ContentRendererProps = {
  content: TopicContent[];
};

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="space-y-8">
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return (
              <p key={index} className="text-base leading-relaxed text-foreground/90">
                {item.content}
              </p>
            );
          case 'code':
            return (
              <CodeBlock
                key={index}
                code={item.code}
                language={item.language}
                title={item.title}
              />
            );
          case 'concept':
            return (
              <ConceptCard
                key={index}
                title={item.title}
                description={item.description}
                Icon={item.icon}
              />
            );
          case 'resource':
            return (
              <ResourceCard
                key={index}
                url={item.url}
                title={item.title}
                description={item.description}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
