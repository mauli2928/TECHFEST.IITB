"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/effects/section-reveal";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TECHFEST, TECHFEST_STATS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="section-shell energy-border relative py-20 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <Badge className="mb-4 sm:mb-6">About Techfest</Badge>
          <h2 className="font-display max-w-4xl text-[clamp(1.75rem,5.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight">
            Asia&apos;s Largest Science & Technology Festival —{" "}
            <span className="text-gradient">reimagined as humanity&apos;s innovation OS.</span>
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-14">
          <SectionReveal delay={0.1}>
            <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Organized annually by{" "}
              <strong className="text-foreground">{TECHFEST.institute}</strong>, Techfest
              is the student-run epicenter where science meets spectacle. For over 27
              years, it has fulfilled its motto —{" "}
              <em className="text-accent-on-bg">{TECHFEST.tagline}</em> — through
              competitions, exhibitions, lectures, and outreach that reach millions
              digitally and hundreds of thousands on campus.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              From International Robowars and the Global Humanoid Conclave to TechConnect
              with 140+ R&D exhibits — featuring AI, robotics, biosciences, and
              defence — Techfest is where drones fly, machines battle, and the
              world&apos;s brightest engineers prototype the cybernetic civilization ahead.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {TECHFEST_STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 0 50px var(--glow)" }}
                className="tech-panel hud-corner tech-panel-elevated relative overflow-hidden rounded-xl p-5 sm:rounded-2xl sm:p-6"
              >
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/10 blur-2xl" />
                <p className="font-heading text-2xl font-bold text-gradient-energy sm:text-3xl md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-heading text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.18em]">
                  {stat.label}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.25}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              {
                title: "International Competitions",
                desc: "35,000+ participants from 20+ countries",
              },
              {
                title: "Exhibitions & TechConnect",
                desc: "140+ working models & industry R&D demos",
              },
              {
                title: "Lectures & Workshops",
                desc: "Visionaries, hands-on labs, and night showcases",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="tech-panel hud-corner rounded-xl p-5 sm:rounded-2xl sm:p-6"
              >
                <p className="font-heading text-xs uppercase tracking-[0.18em] text-accent-on-bg">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
