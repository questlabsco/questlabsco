// Small drawings for the case-study pages. Decorative only.

const INK = "#1B1D4E";
const pivot = { transformBox: "fill-box", transformOrigin: "center" } as const;

type Props = { className?: string };

// A bullseye with a face and an arrow stuck in it. Used on the scorecard.
export function BullseyeFace({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none">
      <circle cx="58" cy="64" r="46" fill="#FF7B7B" stroke={INK} strokeWidth="4.5" />
      <circle cx="58" cy="64" r="31" fill="#FFFFFF" stroke={INK} strokeWidth="4.5" />
      {/* face in the middle */}
      <g className="animate-blink" style={pivot}>
        <circle cx="48" cy="60" r="3.6" fill={INK} />
        <circle cx="68" cy="60" r="3.6" fill={INK} />
      </g>
      <path d="M47 72q11 9 22 0" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      {/* arrow */}
      <path d="M80 42L110 12" stroke={INK} strokeWidth="4.5" strokeLinecap="round" />
      <path
        d="M102 10l8 2 2 8M96 16l8 2"
        stroke={INK}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="80" cy="42" r="4" fill="#FFCB2E" stroke={INK} strokeWidth="3" />
    </svg>
  );
}

// Before and after, for any project: a messy pile of sheets with a worried
// face, a marching arrow, then a tidy stack with a happy face.
export function BeforeAfter({ className }: Props) {
  return (
    <svg viewBox="0 0 420 150" className={className} aria-hidden="true" fill="none">
      {/* messy pile */}
      <g className="animate-wiggle" style={pivot}>
        <rect
          x="26" y="38" width="64" height="80" rx="6"
          fill="#FFFFFF" stroke={INK} strokeWidth="4.5"
          transform="rotate(-14 58 78)"
        />
        <rect
          x="54" y="30" width="64" height="80" rx="6"
          fill="#FFE38A" stroke={INK} strokeWidth="4.5"
          transform="rotate(12 86 70)"
        />
        <rect
          x="38" y="44" width="64" height="80" rx="6"
          fill="#FFFFFF" stroke={INK} strokeWidth="4.5"
          transform="rotate(-3 70 84)"
        />
        {/* worried face */}
        <path d="M55 70l9 3M86 70l-9 3" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="61" cy="81" r="3.4" fill={INK} />
        <circle cx="80" cy="81" r="3.4" fill={INK} />
        <path d="M61 101q9.5-8 19 0" stroke={INK} strokeWidth="3.8" strokeLinecap="round" />
      </g>
      {/* sweat drop */}
      <path
        d="M120 46c-5 7-5 11 0 11s5-4 0-11z"
        fill="#A9CBFF" stroke={INK} strokeWidth="3" strokeLinejoin="round"
      />

      {/* arrow */}
      <path
        d="M152 80H250"
        stroke={INK}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray="3 11"
        className="animate-march"
      />
      <path
        d="M244 66l15 14-15 14"
        stroke={INK}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M205 34c1.5 6 4 8.5 10 10-6 1.5-8.5 4-10 10-1.5-6-4-8.5-10-10 6-1.5 8.5-4 10-10z"
        fill="#FFCB2E" stroke={INK} strokeWidth="3" strokeLinejoin="round"
        className="animate-twinkle" style={pivot}
      />

      {/* tidy stack */}
      <g className="animate-float" style={pivot}>
        <rect x="316" y="30" width="76" height="88" rx="7" fill="#A9CBFF" stroke={INK} strokeWidth="4.5" />
        <rect x="308" y="38" width="76" height="88" rx="7" fill="#FFE38A" stroke={INK} strokeWidth="4.5" />
        <rect x="300" y="46" width="76" height="88" rx="7" fill="#FFFFFF" stroke={INK} strokeWidth="4.5" />
        <circle cx="326" cy="82" r="3.6" fill={INK} />
        <circle cx="350" cy="82" r="3.6" fill={INK} />
        <path d="M325 96q13 11 26 0" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <circle cx="390" cy="40" r="14" fill="#35D6A0" stroke={INK} strokeWidth="4" />
        <path d="M383 40l5 5 9-10" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
