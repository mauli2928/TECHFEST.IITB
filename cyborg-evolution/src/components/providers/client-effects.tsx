"use client";

import { useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";

/**
 * Renders children only after hydration so browser-only visuals
 * (particles, cursor, Lenis-adjacent UI) never mismatch SSR HTML.
 */
export function ClientEffects({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;
    // #region agent log
    fetch("http://127.0.0.1:7445/ingest/6c939b8b-e6d2-4339-a134-1285bc4d1203", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "deb8f9" },
      body: JSON.stringify({
        sessionId: "deb8f9",
        hypothesisId: "H1",
        location: "client-effects.tsx:mounted",
        message: "ClientEffects hydrated",
        data: { mounted: true },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [mounted]);

  if (!mounted) return null;

  return <>{children}</>;
}
