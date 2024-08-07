'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/lib/utils';

// Tabs Root Component
const Tabs = TabsPrimitive.Root;

// Tabs List Component
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn('inline-flex h-auto rounded-md p-1 text-primary', className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// Tabs Trigger Component
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center w-full justify-center whitespace-nowrap text-white rounded-lg p-3 font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50',
      // Добавление фона
      'bg-[#27272c]',
      'data-[state=active]:border data-[state=active]:bg-primary data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:font-bold data-[state=active]:shadow-sm',
      // Убедитесь, что размеры вкладок остаются постоянными
      'box-border border border-transparent',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// Tabs Content Component
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'min-h-[480px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
