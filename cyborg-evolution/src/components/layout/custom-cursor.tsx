"use client";

import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMounted } from "@/hooks/use-mounted";

export function CustomCursor() {
  const mounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { x, y } = useMousePosition();

  const cursorX = useSpring(x, { stiffness: 600, damping: 35 });
  const cursorY = useSpring(y, { stiffness: 600, damping: 35 });
  const ringX = useSpring(x, { stiffness: 180, damping: 28 });
  const ringY = useSpring(y, { stiffness: 180, damping: 28 });

  if (!mounted || !isDesktop) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-bright mix-blend-difference"
        style={{ x: cursorX, y: cursorY, boxShadow: "0 0 12px var(--glow)" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
