"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TECHFEST } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    const ctx = gsap.context(() => {
      gsap.to(glow, {
        scale: 1.6,
        opacity: 0.65,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const lines = ["JOIN THE EVOLUTION", "ENTER THE FUTURE", "BUILD TOMORROW"];

  return (
    <section
      ref={sectionRef}
      className="section-shell relative overflow-hidden py-28 sm:py-36 md:py-48"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(600px,90vw)] w-[min(600px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--accent-bright) 0%, var(--accent) 25%, var(--accent-secondary) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Badge className="mb-6 sm:mb-8">
          <Sparkles className="mr-1.5 inline h-3 w-3 text-accent-on-bg" />
          Techfest IIT Bombay
        </Badge>

        <div className="space-y-1 sm:space-y-2">
          {lines.map((line, i) => (
            <motion.p
              key={line}
              initial={false}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="font-display text-[clamp(1.75rem,7vw,3.75rem)] font-bold leading-[1.05] tracking-tight"
            >
              {i === 1 ? (
                <span className="text-gradient glow-text">{line}</span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mx-auto mt-8 max-w-lg px-2 text-sm text-[var(--muted)] sm:text-lg"
        >
          {TECHFEST.name} {TECHFEST.institute} — {TECHFEST.tagline}. Be where 180,000+
          minds converge to architect humanity&apos;s cybernetic tomorrow.
        </motion.p>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-3 px-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          <Button magnetic size="lg" className="group w-full sm:w-auto">
            Register for Techfest
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <a
            href={TECHFEST.website}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto"
            )}
          >
            Visit techfest.org
          </a>
        </motion.div>
      </div>
    </section>
  );
}
