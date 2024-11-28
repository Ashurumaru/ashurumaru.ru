import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-write transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-accent text-primary hover:bg-accent-hover',
        primary: 'bg-primary text-white',
        outline:
          'border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary',
        ghost: 'border border-accent text-accent hover:bg-accent-hover hover:text-primary bg-transparent', // Added ghost variant
      },
      size: {
        default: 'h-[44px] px-6',
        md: 'h-[48px] px-6',
        lg: 'h-[56px] px-8 text-sm uppercase tracking-[2px]',
        sm: 'h-[32px] px-4 text-sm', // Added small size
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
