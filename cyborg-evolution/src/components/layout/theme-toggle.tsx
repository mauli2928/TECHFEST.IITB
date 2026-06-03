"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "tech-chip relative flex h-10 w-[4.25rem] items-center rounded-full p-1 transition-all duration-500 hover:shadow-[0_0_40px_var(--glow)] sm:h-11 sm:w-[4.5rem]",
        className
      )}
    >
      <span
        className={cn(
          "absolute flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-secondary/30 text-accent-on-bg transition-[left] duration-300 sm:h-9 sm:w-9",
          !mounted || isDark ? "left-1" : "left-[calc(100%-2.35rem)]"
        )}
        aria-hidden={!mounted}
      >
        {mounted && (isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />)}
      </span>
    </button>
  );
}
