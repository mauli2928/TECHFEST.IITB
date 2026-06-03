"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 px-3 sm:px-4 md:px-8",
        scrolled ? "py-2" : "py-3 sm:py-4"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-xl px-3 py-2.5 sm:rounded-2xl sm:px-4 sm:py-3 md:px-6",
          scrolled && "tech-panel tech-panel-elevated rounded-xl sm:rounded-2xl"
        )}
      >
        <a
          href="#"
          className="font-heading text-[9px] font-bold tracking-[0.18em] text-foreground sm:text-[10px] sm:tracking-[0.22em] md:text-xs"
        >
          TECHFEST<span className="text-accent-on-bg">.IITB</span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-accent-on-bg xl:text-[11px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)] sm:h-11 sm:w-11 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-3 top-[3.75rem] z-50 max-h-[calc(100dvh-4.5rem)] overflow-y-auto rounded-xl tech-panel tech-panel-elevated sm:inset-x-4 sm:rounded-2xl lg:hidden"
            data-lenis-prevent
          >
            <ul className="flex flex-col gap-0.5 p-3 sm:p-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3.5 font-heading text-xs uppercase tracking-[0.18em] text-[var(--muted)] active:bg-[var(--hud)] hover:text-accent-on-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-[var(--card-border)] px-4 py-4">
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
