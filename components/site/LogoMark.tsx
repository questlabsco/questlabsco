import { colorForName } from "@/lib/logoColors";

// Original abstract icon marks (not real trademarks) for placeholder client
// names in LogoStrip / TestimonialCarousel — gives each a distinct logo-like
// silhouette instead of a flat colored square. Swap for real client logo
// files whenever they're available.
const shapes: ((c: string) => JSX.Element)[] = [
  (c) => <circle cx="12" cy="12" r="8" fill="none" stroke={c} strokeWidth="4" />,
  (c) => <rect x="5" y="5" width="14" height="14" fill={c} transform="rotate(45 12 12)" />,
  (c) => <polygon points="12,3 21,20 3,20" fill={c} />,
  (c) => <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill={c} />,
  (c) => (
    <>
      <circle cx="9" cy="12" r="7" fill={c} opacity="0.8" />
      <circle cx="16" cy="12" r="7" fill={c} />
    </>
  ),
  (c) => <path d="M4 18 L9 6 L14 18 L19 6" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />,
];

function shapeForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 17 + name.charCodeAt(i)) >>> 0;
  return shapes[hash % shapes.length];
}

export default function LogoMark({
  name,
  className = "size-6",
}: {
  name: string;
  className?: string;
}) {
  const color = colorForName(name);
  const shape = shapeForName(name);
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {shape(color)}
    </svg>
  );
}
