"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary-600)] text-white hover:bg-[var(--primary-700)] shadow-md shadow-[var(--primary-500)]/20",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[var(--surface-4)] bg-transparent hover:bg-[var(--surface-2)] text-[var(--foreground)]",
        secondary: "bg-[var(--surface-2)] text-[var(--foreground)] hover:bg-[var(--surface-3)] border border-[var(--surface-4)]",
        ghost: "hover:bg-[var(--surface-2)] hover:text-[var(--foreground)] text-[var(--text-muted)]",
        link: "text-[var(--primary-500)] underline-offset-4 hover:underline",
        success: "bg-[var(--success)] text-white hover:bg-[var(--success-hover)] shadow-md shadow-[var(--success)]/20",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // We'll skip asChild for motion.button integration to keep it simple
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
