"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/effects/section-reveal";
import { Badge } from "@/components/ui/badge";
import { EVOLUTION_STAGES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function EvolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = track.scrollWidth - window.innerWidth + 64;
      const tween = gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      return () => tween.scrollTrigger?.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="evolution"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28 md:py-32"
    >
      <div className="section-shell">
        <SectionReveal className="mx-auto max-w-7xl">
          <Badge className="mb-4 sm:mb-6">Cyborg Evolution Experience</Badge>
          <h2 className="font-display max-w-3xl text-[clamp(1.75rem,5vw,3.5rem)] font-bold tracking-tight">
            From human mind to{" "}
            <span className="text-gradient">future civilization</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[var(--muted)] sm:text-base">
            A cinematic journey through five phases of technological evolution — the
            story Techfest IIT Bombay brings to life on campus.
          </p>
        </SectionReveal>
      </div>

      <div className="mt-12 hidden lg:block">
        <div ref={trackRef} className="flex w-max gap-5 px-[max(1rem,4vw)]">
          {EVOLUTION_STAGES.map((stage, i) => (
            <article
              key={stage.id}
              className="tech-panel hud-corner tech-panel-elevated holographic-outline relative flex h-[min(420px,70vh)] w-[min(88vw,500px)] shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-8 sm:rounded-3xl"
            >
              <motion.div
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                style={{
                  background:
                    i % 2 === 0
                      ? "color-mix(in srgb, var(--accent) 25%, transparent)"
                      : "color-mix(in srgb, var(--accent-secondary) 25%, transparent)",
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <span className="font-heading text-7xl font-bold text-accent/15">
                {stage.phase}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold md:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-4 max-w-sm leading-relaxed text-[var(--muted)]">
                  {stage.description}
                </p>
              </div>
              <div className="flex items-center gap-3 font-heading text-[10px] uppercase tracking-[0.25em] text-accent-on-bg">
                <motion.span
                  className="h-2 w-2 rounded-full bg-accent-bright"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Phase {stage.phase} · Active
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="section-shell mt-10 flex flex-col gap-4 lg:hidden">
        {EVOLUTION_STAGES.map((stage, i) => (
          <SectionReveal key={stage.id} delay={i * 0.05}>
            <article className="tech-panel hud-corner tech-panel-elevated overflow-hidden rounded-xl p-6 sm:rounded-2xl sm:p-8">
              <span className="font-heading text-4xl font-bold text-accent/20">
                {stage.phase}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {stage.description}
              </p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
