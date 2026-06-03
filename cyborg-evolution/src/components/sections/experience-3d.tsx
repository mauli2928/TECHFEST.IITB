"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CyberHudDisplay } from "@/components/effects/cyber-hud-display";
import { EXPERIENCE_HIGHLIGHTS } from "@/lib/constants";

export function Experience3DSection() {
  return (
    <section id="experience" className="section-shell relative py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="tech-panel hud-corner tech-panel-elevated holographic-outline relative overflow-hidden rounded-xl sm:rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-secondary/15" />

          <div className="relative grid lg:grid-cols-2">
            <div className="relative border-b border-[var(--panel-border)] lg:border-b-0 lg:border-r">
              <CyberHudDisplay />
            </div>

            <div className="relative flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <Badge className="mb-4 w-fit sm:mb-6">Systems Interface</Badge>
              <h2 className="font-display text-[clamp(1.5rem,4.5vw,2.75rem)] font-bold tracking-tight">
                The <span className="text-gradient">command layer</span> of Techfest
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Real-time festival intelligence — competitions, exhibitions, robotics
                arenas, and innovation pipelines unified in one cybernetic operations
                dashboard.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {EXPERIENCE_HIGHLIGHTS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="tech-chip flex items-center gap-2.5 rounded-lg px-3 py-2 font-heading text-[10px] uppercase tracking-[0.08em] text-[var(--muted)] sm:text-[11px]"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-sm bg-accent-bright shadow-[0_0_10px_var(--accent-bright)]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Button
                magnetic
                variant="glow"
                size="lg"
                className="mt-8 w-full sm:w-auto"
              >
                Access Command Layer
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
