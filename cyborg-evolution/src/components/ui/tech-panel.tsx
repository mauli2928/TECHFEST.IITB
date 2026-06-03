import * as React from "react";
import { cn } from "@/lib/utils";

interface TechPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  corners?: boolean;
  holographic?: boolean;
}

export function TechPanel({
  className,
  elevated = false,
  corners = true,
  holographic = false,
  children,
  ...props
}: TechPanelProps) {
  return (
    <div
      className={cn(
        "tech-panel overflow-hidden",
        corners && "hud-corner",
        elevated && "tech-panel-elevated",
        holographic && "holographic-outline",
        className
      )}
      {...props}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
