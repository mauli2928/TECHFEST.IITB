"use client";

import { useMounted } from "@/hooks/use-mounted";

/** Viewport corner HUD brackets — desktop only, after hydration */
export function HolographicFrame() {
  const mounted = useMounted();

  if (!mounted) return null;

  const corner =
    "pointer-events-none fixed z-[5] hidden h-16 w-16 border-accent-on-bg/40 lg:block";

  return (
    <>
      <div className={`${corner} left-3 top-20 border-l-2 border-t-2`} />
      <div className={`${corner} right-3 top-20 border-r-2 border-t-2`} />
      <div className={`${corner} bottom-3 left-3 border-b-2 border-l-2`} />
      <div className={`${corner} bottom-3 right-3 border-b-2 border-r-2`} />
    </>
  );
}
