import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-border-light bg-transparent text-text-light hover:bg-bg-light/80 dark:bg-bg-dark dark:text-text-dark dark:hover:bg-bg-dark/80",
        secondary:
          "border-border-light bg-transparent text-text-secondary hover:bg-bg-light/80 dark:bg-bg-dark dark:text-text-dark dark:hover:bg-bg-dark/80",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600/80 dark:bg-red-700 dark:hover:bg-red-700/80",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600/80 dark:bg-green-700 dark:hover:bg-green-700/80",
        outline:
          "border-accent.DEFAULT bg-transparent text-accent.DEFAULT hover:bg-accent.DEFAULT/10 dark:border-accent.DEFAULT dark:bg-transparent dark:text-accent.DEFAULT dark:hover:bg-accent.DEFAULT/10", // Изменено на border-accent.DEFAULT
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
