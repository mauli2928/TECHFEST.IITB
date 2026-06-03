import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.2em]",
  {
    variants: {
      variant: {
        default:
          "tech-chip border-[var(--panel-border)] text-[var(--accent-deep)] dark:text-accent-on-bg",
        outline:
          "border-[var(--accent-deep)] bg-[var(--panel-bottom)] text-[var(--accent-deep)] shadow-[0_0_20px_var(--glow)] dark:border-accent-bright/60 dark:text-accent-on-bg",
        muted:
          "border-[var(--panel-border)] bg-[var(--panel-bottom)] text-[var(--muted)]",
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
  );
}

export { Badge, badgeVariants };
