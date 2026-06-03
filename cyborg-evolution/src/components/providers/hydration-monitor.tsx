"use client";

import { useEffect } from "react";

/** Captures React hydration warnings for debug sessions (client-only). */
export function HydrationMonitor() {
  useEffect(() => {
    const original = console.error;
    console.error = (...args: unknown[]) => {
      const message = args.map((a) => String(a)).join(" ");
      if (/hydrat/i.test(message)) {
        // #region agent log
        fetch("http://127.0.0.1:7445/ingest/6c939b8b-e6d2-4339-a134-1285bc4d1203", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "deb8f9" },
          body: JSON.stringify({
            sessionId: "deb8f9",
            hypothesisId: "H6",
            location: "hydration-monitor.tsx",
            message: "Hydration console error",
            data: { snippet: message.slice(0, 400) },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
      }
      original.apply(console, args);
    };
    return () => {
      console.error = original;
    };
  }, []);

  return null;
}
