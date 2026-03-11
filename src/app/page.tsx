import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Code2,
  Container,
  Database,
  Feather,
  GitBranch,
  BrainCircuit,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

const features = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: 'Python Fundamentals',
    description: 'Master Python from installation to advanced concepts like OOP.',
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'SQL Concepts',
    description: 'Understand data storage, relations, and advanced queries.',
  },
  {
    icon: <Container className="h-8 w-8 text-primary" />,
    title: 'Docker & Containers',
    description: 'Learn to build and manage applications with Docker and Compose.',
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: 'Interactive Roadmap',
    description: 'Visually navigate your learning path with our structured guide.',
  },
  {
    icon: <Feather className="h-8 w-8 text-primary" />,
    title: 'Code Snippets',
    description: 'Ready-to-use code examples for quick learning and implementation.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI Concept Clarifier',
    description:
      'Get instant, simplified explanations for complex topics from our AI.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <Feather className="mr-2 h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">
              Python Path Compass
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col items-start gap-4">
              <h1 className="font-headline text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Guided Path to
                <br className="hidden sm:inline" />
                Mastering Python
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                An interactive roadmap designed for junior developers to
                confidently navigate Python, SQL, Docker, and Django.
              </p>
              <Button asChild size="lg" className="font-semibold">
                <Link href="/python-path">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-2xl md:h-96">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
            </div>
          </div>
        </section>

        <section id="features" className="container space-y-6 bg-secondary py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to go from beginner to proficient, all in one
              place.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-start gap-4">
                    {feature.icon}
                    <span className="font-headline text-xl font-semibold">
                      {feature.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built to accelerate developer onboarding.
          </p>
        </div>
      </footer>
    </div>
  );
}
