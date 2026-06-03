"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";
import { NAV_LINKS, FOOTER_LINKS, TECHFEST } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="section-shell relative overflow-hidden border-t border-[var(--card-border)] py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="tech-panel tech-panel-elevated mb-10 flex flex-col gap-3 rounded-xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-2xl sm:px-6">
          <div className="flex items-center gap-2 font-heading text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            <Terminal className="h-4 w-4 text-accent-on-bg" />
            Neural Command Center
          </div>
          <div className="flex flex-wrap gap-4 font-heading text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em]">
            <span>
              Uplink: <span className="text-accent-on-bg">Secure</span>
            </span>
            <span>
              Contact:{" "}
              <a href={`mailto:${TECHFEST.email}`} className="text-accent-on-bg hover:underline">
                {TECHFEST.email}
              </a>
            </span>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              TECHFEST
              <span className="text-gradient"> IIT BOMBAY</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {TECHFEST.tagline}. Asia&apos;s largest science and technology festival at{" "}
              {TECHFEST.institute}, Mumbai.
            </p>
            <motion.div
              className="mt-6 h-px max-w-xs bg-gradient-to-r from-accent-bright via-accent-secondary to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div>
            <p className="mb-4 font-heading text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-accent-on-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-heading text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              Protocol
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm text-foreground/75 transition-colors hover:text-accent-on-bg"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--card-border)] pt-8 text-center sm:flex-row sm:text-left"
        >
          <p className="text-xs text-[var(--muted)]">
            © 2026 {TECHFEST.name}, {TECHFEST.institute}. All
            systems reserved.
          </p>
          <p className="font-heading text-[10px] uppercase tracking-[0.22em] text-accent/80">
            Where the future is built
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
