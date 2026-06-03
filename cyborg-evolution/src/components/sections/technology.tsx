"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/effects/section-reveal";
import { Badge } from "@/components/ui/badge";
import { TECHNOLOGY_DOMAINS } from "@/lib/constants";

const accentColors = [
  "from-accent/20 to-transparent",
  "from-accent-secondary/20 to-transparent",
  "from-accent-tertiary/20 to-transparent",
];

export function TechnologySection() {
  return (
    <section id="technology" className="section-shell energy-border relative py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge className="mb-4 sm:mb-6">Future Technology</Badge>
            <h2 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-tight">
              Domains at the <span className="text-gradient">frontier</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)] sm:text-base">
            Real competition categories from Techfest — AI/ML, robotics, aerospace,
            aquatics, coding, ideation, and beyond.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {TECHNOLOGY_DOMAINS.map((tech, i) => (
            <SectionReveal key={tech.id} delay={i * 0.04}>
              <motion.article
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group tech-panel hud-corner relative h-full overflow-hidden rounded-xl p-5 sm:rounded-2xl sm:p-6"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accentColors[i % 3]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <span className="relative font-heading text-[10px] uppercase tracking-[0.22em] text-accent-on-bg">
                  {tech.tag}
                </span>
                <h3 className="relative mt-3 font-heading text-base font-semibold sm:text-lg">
                  {tech.name}
                </h3>
                <p className="relative mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {tech.description}
                </p>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-accent-bright to-accent-secondary"
                  initial={false}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
