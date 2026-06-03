"use client";

import { ThemeProvider } from "./theme-provider";
import { SmoothScroll } from "./smooth-scroll";
import { HydrationMonitor } from "./hydration-monitor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <HydrationMonitor />
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
