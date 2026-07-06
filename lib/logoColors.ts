// Deterministic color assignment for placeholder company "logo" marks
// (LogoStrip, TestimonialCarousel) until real client logo files are added.

const palette = [
  "#2563EB", // blue
  "#16A34A", // green
  "#EA580C", // orange
  "#DB2777", // pink
  "#0891B2", // cyan
  "#7C3AED", // violet
  "#CA8A04", // amber
  "#DC2626", // red
];

export function colorForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return palette[hash % palette.length];
}

export function initialsFor(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
