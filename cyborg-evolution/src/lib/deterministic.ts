/** Deterministic 0–1 value from index (same on server and client). */
export function seededUnit(index: number, salt = 0): number {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}
