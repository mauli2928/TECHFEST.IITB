"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { CyborgCore } from "./cyborg-core";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface SceneCanvasProps {
  className?: string;
  cameraZ?: number;
  interactive?: boolean;
}

export function SceneCanvas({
  className = "",
  cameraZ = 5,
  interactive = true,
}: SceneCanvasProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={cn("touch-none", className)}>
      <Canvas
        dpr={isMobile ? [1, 1.2] : [1, 1.75]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, cameraZ]} fov={42} />
        <ambientLight intensity={0.35} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e5ff" />
        <pointLight position={[-8, -4, 6]} intensity={0.8} color="#8b5cf6" />
        <pointLight position={[0, -10, 5]} intensity={0.4} color="#00d4ff" />
        <Suspense fallback={null}>
          <CyborgCore
            interactive={interactive && !isMobile}
            scrollProgress={scrollProgress}
          />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
