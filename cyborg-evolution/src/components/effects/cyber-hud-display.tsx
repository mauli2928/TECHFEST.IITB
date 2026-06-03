"use client";

/** Flat SVG HUD — no WebGL / Three.js */
export function CyberHudDisplay({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden bg-[var(--panel-bottom)] p-6 sm:min-h-[360px] ${className}`}
    >
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <svg
        viewBox="0 0 400 400"
        className="relative h-auto w-full max-w-[320px] text-accent-on-bg"
        aria-hidden
      >
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="30s"
            repeatCount="indefinite"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="8 12"
          />
        </g>
        <circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="var(--accent-secondary)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
        <line
          x1="200"
          y1="40"
          x2="200"
          y2="360"
          stroke="currentColor"
          strokeOpacity="0.2"
        />
        <line
          x1="40"
          y1="200"
          x2="360"
          y2="200"
          stroke="currentColor"
          strokeOpacity="0.2"
        />
        <polygon
          points="200,120 240,200 200,280 160,200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
        <circle cx="200" cy="200" r="6" fill="currentColor" className="opacity-90" />
        <circle
          cx="200"
          cy="200"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-70"
        >
          <animate
            attributeName="r"
            values="12;18;12"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0.2;0.7"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] uppercase tracking-widest text-accent-on-bg/70">
        <span>SYS::ACTIVE</span>
        <span>LAT 19.13° N</span>
      </div>
    </div>
  );
}
