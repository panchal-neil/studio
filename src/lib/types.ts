import type { LucideIcon } from 'lucide-react';

export interface CodeBlockContent {
  type: 'code';
  code: string;
  language: 'bash' | 'python' | 'sql' | 'yaml' | 'dockerfile' | 'json' | 'text';
  title?: string;
}

export interface TextContent {
  type: 'text';
  content: string;
}

export interface ResourceContent {
  type: 'resource';
  url: string;
  title: string;
  description?: string;
}

export interface ConceptContent {
  type: 'concept';
  title: string;
  description: string;
  icon?: LucideIcon;
}

export type TopicContent = CodeBlockContent | TextContent | ResourceContent | ConceptContent;

export interface RoadmapTopic {
  id: string;
  title: string;
  path: string;
  description: string;
  content: TopicContent[];
  subtopics?: RoadmapTopic[];
}

export interface RoadmapCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  topics: RoadmapTopic[];
}
