// Small drawings used by the site chrome (announcement bar, footer).
// Thick navy outlines, flat fills, all decorative.

const INK = "#1B1D4E";

type Props = { className?: string };

// A white cartoon hand pointing right, with a yellow cuff. It nudges
// towards whatever sits to its right.
export function PointingHand({ className }: Props) {
  return (
    <svg
      viewBox="0 0 52 36"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <style>{`
        @keyframes chrome-nudge { 0%,100% { transform: translateX(0) } 50% { transform: translateX(4px) } }
        .chrome-nudge { animation: chrome-nudge 1.4s ease-in-out infinite; transform-box: fill-box; }
      `}</style>
      <g className="chrome-nudge">
        {/* finger, drawn first so the palm outline covers its base */}
        <rect x="20" y="8" width="28" height="10" rx="5" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
        {/* palm */}
        <rect x="9" y="8" width="22" height="22" rx="8" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
        {/* folded fingers */}
        <path d="M19 19.5h9M19 25h8" stroke={INK} strokeWidth="2.6" />
        {/* cuff */}
        <rect x="3" y="10" width="9" height="18" rx="3" fill="#FFCB2E" stroke={INK} strokeWidth="3" />
      </g>
    </svg>
  );
}

// Yellow speech bubble with a question mark.
export function QuestionBubble({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 60"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M18 4h28a14 14 0 0 1 14 14v12a14 14 0 0 1-14 14H30l-12 10V44a14 14 0 0 1-14-14V18A14 14 0 0 1 18 4z"
        fill="#FFCB2E"
        stroke={INK}
        strokeWidth="4"
      />
      <path d="M26 18a6 6 0 1 1 8 5.6c-1.5.6-2 1.6-2 3.4" stroke={INK} strokeWidth="4.5" />
      <circle cx="32" cy="34" r="2.8" fill={INK} />
    </svg>
  );
}
