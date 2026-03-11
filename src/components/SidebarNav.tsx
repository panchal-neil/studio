'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { roadmapData } from '@/lib/roadmap-data';
import * as Collapsible from '@radix-ui/react-collapsible';

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      {roadmapData.map((category) => (
        <SidebarGroup key={category.id}>
          <SidebarGroupLabel asChild>
            <div className="flex items-center gap-2">
              <category.icon className="h-4 w-4" />
              <span>{category.title}</span>
            </div>
          </SidebarGroupLabel>
          <Collapsible.Root
            defaultOpen={pathname.startsWith(`/python-path/topic/${category.id}`)}
          >
            <SidebarMenu>
              {category.topics.map((topic) => (
                <SidebarMenuItem key={topic.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === `/python-path/topic/${topic.path}`}
                    tooltip={topic.title}
                  >
                    <Link href={`/python-path/topic/${topic.path}`}>
                      <span>{topic.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </Collapsible.Root>
        </SidebarGroup>
      ))}
    </>
  );
}
