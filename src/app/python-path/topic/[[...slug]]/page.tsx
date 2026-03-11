import { notFound } from 'next/navigation';
import { findTopicByPath } from '@/lib/utils';
import { ContentRenderer } from '@/components/ContentRenderer';
import type { Metadata } from 'next';

type TopicPageProps = {
  params: {
    slug?: string[];
  };
};

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const path = params.slug?.join('/') || '';
  const topic = findTopicByPath(path);

  if (!topic) {
    return {
      title: 'Topic Not Found',
    }
  }

  return {
    title: `${topic.title} | Python Path Compass`,
    description: topic.description,
  }
}

export default function TopicPage({ params }: TopicPageProps) {
  const path = params.slug?.join('/') ?? '';
  const topic = findTopicByPath(path);

  if (!topic) {
    // Redirect to the intro page or show a not found message.
    // For now, let's use Next.js's notFound utility.
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-10">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">
          {topic.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {topic.description}
        </p>
      </header>

      <main>
        <ContentRenderer content={topic.content} />
      </main>
    </div>
  );
}
