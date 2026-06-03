"use client";

/** SVG circuit texture — CSS hides on small screens (no JS viewport branch). */
export function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 hidden h-full w-full opacity-[0.07] dark:opacity-[0.12] md:block"
      aria-hidden
    >
      <defs>
        <pattern
          id="circuit"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 60 H40 V20 H80 V60 H120 M60 60 V100"
            fill="none"
            stroke="var(--accent-bright)"
            strokeWidth="0.5"
          />
          <circle cx="40" cy="20" r="2" fill="var(--accent)" />
          <circle cx="80" cy="60" r="2" fill="var(--accent-secondary)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
