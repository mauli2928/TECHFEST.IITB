"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { seededUnit } from "@/lib/deterministic";
import { useMounted } from "@/hooks/use-mounted";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  purple: boolean;
};

function buildParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededUnit(i, 1) * 100,
    y: seededUnit(i, 2) * 100,
    size: seededUnit(i, 3) * 2.5 + 0.8,
    duration: seededUnit(i, 4) * 8 + 10,
    delay: seededUnit(i, 5) * 4,
    purple: i % 3 === 0,
  }));
}

export function Particles({ count = 45 }: { count?: number }) {
  const mounted = useMounted();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!mounted) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const resolved = isMobile ? Math.min(count, 28) : count;
    const built = buildParticles(resolved);
    setParticles(built);

    // #region agent log
    fetch("http://127.0.0.1:7445/ingest/6c939b8b-e6d2-4339-a134-1285bc4d1203", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "deb8f9" },
      body: JSON.stringify({
        sessionId: "deb8f9",
        hypothesisId: "H2",
        location: "particles.tsx:useEffect",
        message: "Particles built client-only",
        data: { count: built.length },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [mounted, count]);

  if (!mounted || particles.length === 0) {
    return <div className="absolute inset-0" aria-hidden />;
  }

  return (
    <div className="absolute inset-0" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.purple ? "var(--accent-secondary)" : "var(--accent-deep)",
            boxShadow: p.purple
              ? "0 0 8px var(--glow-purple)"
              : "0 0 8px var(--glow)",
          }}
          initial={false}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
