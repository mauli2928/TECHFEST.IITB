"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/effects/section-reveal";
import { Badge } from "@/components/ui/badge";
import { EVENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Radio } from "lucide-react";

const statusStyles = {
  live: "text-emerald-400 border-emerald-400/40 bg-emerald-400/15 shadow-[0_0_20px_rgba(52,211,153,0.2)]",
  active: "text-accent-on-bg border-accent/40 bg-accent/15",
  open: "text-accent-secondary border-accent-secondary/40 bg-accent-secondary/15",
} as const;

export function EventsSection() {
  return (
    <section id="events" className="section-shell energy-border relative py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge className="mb-4 sm:mb-6">Events & Experiences</Badge>
              <h2 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-tight">
                Mission <span className="text-gradient">control</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm text-[var(--muted)]">
                Competitions, exhibitions, lectures, workshops, and international
                showcases at IIT Bombay.
              </p>
            </div>
            <motion.div
              animate={{ boxShadow: ["0 0 20px var(--glow)", "0 0 40px var(--glow)", "0 0 20px var(--glow)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="tech-chip flex w-fit items-center gap-2 rounded-full px-4 py-2 font-heading text-[10px] uppercase tracking-[0.2em]"
            >
              <Radio className="h-3 w-3 text-accent-on-bg" />
              <span className="text-[var(--muted)]">Status:</span>
              <span className="text-accent-on-bg">Operational</span>
            </motion.div>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {EVENTS.map((event, i) => (
            <SectionReveal key={event.id} delay={i * 0.04}>
              <motion.article
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group tech-panel hud-corner tech-panel-elevated relative flex h-full min-h-[200px] flex-col rounded-xl p-5 sm:rounded-2xl sm:p-6"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-heading text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {event.category}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 rounded-full border px-2 py-0.5 font-heading text-[8px] uppercase tracking-wider sm:text-[9px]",
                      statusStyles[event.status]
                    )}
                  >
                    {event.status}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-base font-semibold leading-tight sm:text-lg">
                  {event.name}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {event.description}
                </p>

                <div className="mt-5 flex items-center justify-end border-t border-[var(--card-border)] pt-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--card-border)] transition-all group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent-on-bg">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
