"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/effects/section-reveal";
import { Badge } from "@/components/ui/badge";
import { FUTURE_BUILDERS } from "@/lib/constants";
import { Users } from "lucide-react";

export function CommunitySection() {
  return (
    <section id="community" className="section-shell relative py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="text-center">
          <Badge className="mb-4 sm:mb-6">Future Builders</Badge>
          <h2 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-tight">
            The ecosystem powering <span className="text-gradient">Techfest</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
            Competitors, visitors, international delegations, workshop participants, and
            innovators — united at IIT Bombay to engineer the future.
          </p>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {FUTURE_BUILDERS.map((builder, i) => (
            <SectionReveal key={builder.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 0 40px var(--glow)" }}
                className="group tech-panel hud-corner relative overflow-hidden rounded-xl p-5 sm:rounded-2xl sm:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-accent-on-bg sm:h-12 sm:w-12">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="font-heading text-2xl font-bold text-gradient-energy sm:text-3xl">
                  {builder.count}
                </p>
                <h3 className="mt-2 font-heading text-sm font-semibold sm:text-base">
                  {builder.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">
                  {builder.role}
                </p>
                <motion.div
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
