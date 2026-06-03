"use client";

import { motion } from "framer-motion";

export function EnergyWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 h-[200%] w-[200%] -translate-x-1/2 rounded-[40%]"
          style={{
            top: `${-50 + i * 20}%`,
            background: `radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) ${8 - i * 2}%, transparent) 0%, transparent 55%)`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 40 + i * 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}
