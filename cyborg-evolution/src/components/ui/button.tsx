"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-heading text-sm font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border border-accent-bright/50 bg-gradient-to-r from-accent to-accent-secondary text-[#010308] shadow-[0_0_30px_var(--glow),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_var(--glow),0_0_80px_var(--glow-purple)] hover:scale-[1.03]",
        outline:
          "tech-panel border-[var(--panel-border)] bg-[var(--panel-bottom)] text-[var(--accent-deep)] hover:border-[var(--accent)] hover:text-[var(--accent)] dark:text-accent-on-bg dark:hover:border-accent-bright hover:shadow-[0_0_40px_var(--glow)]",
        ghost:
          "bg-[var(--panel-bottom)] text-foreground border border-transparent hover:border-[var(--panel-border)]",
        glow:
          "border-2 border-[var(--accent-deep)] bg-[var(--panel-top)] text-[var(--accent-deep)] shadow-[0_0_40px_var(--glow)] hover:bg-gradient-to-r hover:from-accent/15 hover:to-accent-secondary/15 dark:border-accent-bright dark:text-accent-on-bg hover:shadow-[0_0_60px_var(--glow)]",
      },
      size: {
        default: "h-11 px-7 sm:h-12 sm:px-8",
        sm: "h-10 px-5 text-xs",
        lg: "h-12 px-8 text-sm sm:h-14 sm:px-10",
        icon: "h-11 w-11",
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
  magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, magnetic = false, children, ...props }, ref) => {
    const innerRef = React.useRef<HTMLButtonElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current!);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !innerRef.current) return;
      const rect = innerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      innerRef.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    };

    const handleMouseLeave = () => {
      if (!innerRef.current) return;
      innerRef.current.style.transform = "translate(0, 0)";
    };

    return (
      <button
        ref={innerRef}
        className={cn(buttonVariants({ variant, size, className }))}
        onMouseMove={magnetic ? handleMouseMove : undefined}
        onMouseLeave={magnetic ? handleMouseLeave : undefined}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
