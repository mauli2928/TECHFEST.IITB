"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HERO_STATS, TECHFEST } from "@/lib/constants";

const taglines = ["ENTER THE FUTURE", "THE EVOLUTION OF TECHNOLOGY"];

export function HeroSection() {
  return (
    <section className="section-shell relative flex min-h-[100dvh] flex-col justify-center overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <h1 className="font-display text-[clamp(2.5rem,9vw,5rem)] font-bold leading-[0.95] tracking-tight">
          <span className="block glow-text">TECHFEST</span>
          <span className="block text-gradient">IIT BOMBAY</span>
        </h1>

        <div className="mt-5 space-y-2">
          {taglines.map((line) => (
            <p
              key={line}
              className="text-accent-on-bg font-heading text-[clamp(0.7rem,2.5vw,0.95rem)] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em]"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
          {TECHFEST.tagline} — Asia&apos;s largest science and technology festival.
          Where Robowars collide, drones ascend, AI systems awaken, and 180,000+
          minds converge to build tomorrow at IIT Bombay.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button magnetic size="lg" className="group w-full min-w-0 sm:w-auto">
            Enter the Future
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </Button>
          <a
            href="#events"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "inline-flex w-full min-w-0 items-center justify-center gap-2 sm:w-auto"
            )}
          >
            <Calendar className="h-4 w-4 shrink-0" />
            Explore Events
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[var(--card-border)] pt-8 sm:max-w-xl sm:gap-6">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-lg font-bold text-gradient-energy sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 font-heading text-[8px] uppercase tracking-[0.12em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.18em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="tech-chip flex items-center gap-3 rounded-full px-4 py-2">
          <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
            Scroll
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-accent-bright to-transparent" />
        </div>
      </div>
    </section>
  );
}
