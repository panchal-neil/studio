import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { RoadmapTopic } from "@/lib/types";
import { roadmapData } from "@/lib/roadmap-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function findTopicByPath(path: string): RoadmapTopic | undefined {
  for (const category of roadmapData) {
    for (const topic of category.topics) {
      if (topic.path === path) {
        return topic;
      }
      if (topic.subtopics) {
        for (const subtopic of topic.subtopics) {
          if (subtopic.path === path) {
            return subtopic;
          }
        }
      }
    }
  }
  return undefined;
}
