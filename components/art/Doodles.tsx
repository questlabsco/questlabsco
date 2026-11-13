// Small shared drawings in the site's style: thick navy outlines, flat
// fills. All decorative, so they are hidden from screen readers.
// Size and position them with className (they scale with width).

const INK = "#1B1D4E";

type Props = { className?: string };

// Puffy cloud, as on the blue sections. Add `animate-drift` to make it move.
export function Cloud({ className }: Props) {
  return (
    <svg viewBox="0 0 96 52" className={className} aria-hidden="true" fill="none">
      <path
        d="M22 46h54a16 16 0 0 0 2-31.9A22 22 0 0 0 36 12a15 15 0 0 0-17 13.6A10.5 10.5 0 0 0 22 46z"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Four-point sparkle. Add `animate-twinkle`.
export function Sparkle({ className, color = "#FFCB2E" }: Props & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <path
        d="M20 3c2 9 6 13 15 15-9 2-13 6-15 15-2-9-6-13-15-15 9-2 13-6 15-15z"
        fill={color}
        stroke={INK}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn curly arrow for the handwritten notes. It points down and to
// the right by default; flip or rotate it with className
// (e.g. "-scale-x-100 rotate-12").
export function HandArrow({ className }: Props) {
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden="true" fill="none">
      <path
        d="M6 8c14-4 30 2 30 14 0 8-10 9-10 2 0-9 16-6 22 12"
        stroke={INK}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 36l11 2 2-11"
        stroke={INK}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Round badge with a tick, for "done" states.
export function CheckBadge({ className, color = "#35D6A0" }: Props & { color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="19" fill={color} stroke={INK} strokeWidth="4.5" />
      <path d="M15 25l6 6 12-13" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Heart with a little face.
export function HeartFace({ className }: Props) {
  return (
    <svg viewBox="0 0 64 60" className={className} aria-hidden="true" fill="none">
      <path
        d="M32 54C10 40 5 28 5 19a13.5 13.5 0 0 1 27-3 13.5 13.5 0 0 1 27 3c0 9-5 21-27 35z"
        fill="#FF7B7B"
        stroke={INK}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="25" r="3" fill={INK} />
      <circle cx="40" cy="25" r="3" fill={INK} />
      <path d="M25 33q7 6 14 0" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// Dashed curved connector with a marching animation. Stretch it between two
// things with className; `flip` mirrors it.
export function DashedCurve({ className, flip = false }: Props & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="none"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M4 6c10 44 54 66 112 68"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 12"
        className="animate-march"
        opacity="0.75"
      />
    </svg>
  );
}
