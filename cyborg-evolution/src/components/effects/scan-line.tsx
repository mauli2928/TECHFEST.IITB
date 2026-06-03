"use client";

export function ScanLine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-accent-bright/15 to-transparent"
        style={{ animation: "scan 6s linear infinite" }}
      />
      <div
        className="absolute left-0 right-0 h-px bg-accent-bright/40"
        style={{
          animation: "scan 6s linear infinite",
          boxShadow: "0 0 20px var(--accent-bright)",
        }}
      />
    </div>
  );
}
