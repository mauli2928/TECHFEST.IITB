"use client";

import { motion } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";
import { NeuralGrid } from "./neural-grid";
import { Particles } from "./particles";
import { EnergyWaves } from "./energy-waves";
import { ScanLine } from "./scan-line";
import { CircuitPattern } from "./circuit-pattern";

export function AmbientBackground() {
  const mounted = useMounted();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity: "var(--ambient-strength)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,color-mix(in_srgb,var(--accent-secondary)_14%,transparent),transparent)]" />

      {mounted && (
        <>
          <motion.div
            className="absolute -left-[25%] top-[-15%] h-[90vh] w-[90vh] rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent) 30%, transparent) 0%, transparent 60%)",
            }}
            initial={false}
            animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-[20%] bottom-[-15%] h-[75vh] w-[75vh] rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent-secondary) 25%, transparent) 0%, transparent 60%)",
            }}
            initial={false}
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <CircuitPattern />
      {mounted && (
        <>
          <EnergyWaves />
          <NeuralGrid />
          <Particles />
          <ScanLine />
        </>
      )}

      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.25]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, color-mix(in srgb, var(--accent) 6%, transparent) 1px, color-mix(in srgb, var(--accent) 6%, transparent) 2px)",
        }}
      />
    </div>
  );
}
