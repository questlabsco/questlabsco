// Small drawings for the case-study pages. Decorative only. Both loop on
// their own: the bullseye blinks and its arrow wobbles; the before/after
// pile shuffles, sweats, and the tidy stack pops its tick.

const INK = "#1B1D4E";
const pivot = { transformBox: "fill-box", transformOrigin: "center" } as const;

type Props = { className?: string };

const bullseyeStyles = `
@keyframes ca-twang {
  0%, 62%, 100% { transform: rotate(0deg); }
  66% { transform: rotate(-7deg); }
  70% { transform: rotate(5deg); }
  74% { transform: rotate(-3deg); }
  78% { transform: rotate(1.5deg); }
  82% { transform: rotate(0deg); }
}
@keyframes ca-blink {
  0%, 44%, 50%, 88%, 100% { transform: scaleY(1); }
  47%, 91% { transform: scaleY(0.1); }
}
@keyframes ca-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.ca-twang { animation: ca-twang 5.5s ease-in-out infinite; }
.ca-blink { animation: ca-blink 3.8s ease-in-out infinite; }
.ca-bob { animation: ca-bob 4.6s ease-in-out infinite; }
`;

// A bullseye with a face and an arrow stuck in it. Used on the scorecard.
export function BullseyeFace({ className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none">
      <style>{bullseyeStyles}</style>
      <g className="ca-bob" style={pivot}>
        <circle cx="58" cy="64" r="46" fill="#FF7B7B" stroke={INK} strokeWidth="4.5" />
        <circle cx="58" cy="64" r="31" fill="#FFFFFF" stroke={INK} strokeWidth="4.5" />
        {/* face in the middle */}
        <g className="ca-blink" style={pivot}>
          <circle cx="48" cy="60" r="3.6" fill={INK} />
          <circle cx="68" cy="60" r="3.6" fill={INK} />
        </g>
        <path d="M47 72q11 9 22 0" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {/* arrow, wobbling about the point where it went in */}
        <g
          className="ca-twang"
          style={{ transformBox: "view-box", transformOrigin: "80px 42px" }}
        >
          <path d="M80 42L110 12" stroke={INK} strokeWidth="4.5" strokeLinecap="round" />
          <path
            d="M102 10l8 2 2 8M96 16l8 2"
            stroke={INK}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <circle cx="80" cy="42" r="4" fill="#FFCB2E" stroke={INK} strokeWidth="3" />
      </g>
    </svg>
  );
}

const beforeAfterStyles = `
@keyframes ba-shuffle-a {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  30% { transform: translate(-5px, 2px) rotate(-5deg); }
  60% { transform: translate(3px, -2px) rotate(3deg); }
}
@keyframes ba-shuffle-b {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, -3px) rotate(6deg); }
  70% { transform: translate(-3px, 1px) rotate(-3deg); }
}
@keyframes ba-shuffle-c {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  40% { transform: translate(2px, 3px) rotate(2deg); }
  75% { transform: translate(-2px, -1px) rotate(-2deg); }
}
@keyframes ba-fret {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
}
@keyframes ba-drip {
  0%, 20% { transform: translateY(-4px); opacity: 0; }
  35% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(14px); opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
}
@keyframes ba-tick-badge {
  0%, 28% { transform: scale(0); }
  38% { transform: scale(1.25); }
  44%, 90% { transform: scale(1); }
  100% { transform: scale(0); }
}
@keyframes ba-tick-draw {
  0%, 38% { stroke-dashoffset: 24; }
  52%, 100% { stroke-dashoffset: 0; }
}
.ba-a { animation: ba-shuffle-a 5.2s ease-in-out infinite; }
.ba-b { animation: ba-shuffle-b 4.4s ease-in-out infinite; }
.ba-c { animation: ba-shuffle-c 6.1s ease-in-out infinite; }
.ba-fret { animation: ba-fret 3.2s ease-in-out infinite; }
.ba-drip { animation: ba-drip 2.8s ease-in infinite; }
.ba-badge { animation: ba-tick-badge 6s ease-in-out infinite; }
.ba-tick { stroke-dasharray: 24; animation: ba-tick-draw 6s ease-out infinite; }
`;

// Before and after, for any project: a messy pile of sheets with a worried
// face, a marching arrow, then a tidy stack with a happy face.
export function BeforeAfter({ className }: Props) {
  return (
    <svg viewBox="0 0 420 150" className={className} aria-hidden="true" fill="none">
      <style>{beforeAfterStyles}</style>
      {/* messy pile: each sheet shuffles on its own loop */}
      <g className="ba-a" style={pivot}>
        <rect
          x="26" y="38" width="64" height="80" rx="6"
          fill="#FFFFFF" stroke={INK} strokeWidth="4.5"
          transform="rotate(-14 58 78)"
        />
      </g>
      <g className="ba-b" style={pivot}>
        <rect
          x="54" y="30" width="64" height="80" rx="6"
          fill="#FFE38A" stroke={INK} strokeWidth="4.5"
          transform="rotate(12 86 70)"
        />
      </g>
      <g className="ba-c" style={pivot}>
        <rect
          x="38" y="44" width="64" height="80" rx="6"
          fill="#FFFFFF" stroke={INK} strokeWidth="4.5"
          transform="rotate(-3 70 84)"
        />
        {/* worried face, fretting */}
        <g className="ba-fret" style={pivot}>
          <path d="M55 70l9 3M86 70l-9 3" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="61" cy="81" r="3.4" fill={INK} />
          <circle cx="80" cy="81" r="3.4" fill={INK} />
          <path d="M61 101q9.5-8 19 0" stroke={INK} strokeWidth="3.8" strokeLinecap="round" />
        </g>
      </g>
      {/* sweat drop */}
      <g className="ba-drip" style={pivot}>
        <path
          d="M120 46c-5 7-5 11 0 11s5-4 0-11z"
          fill="#A9CBFF" stroke={INK} strokeWidth="3" strokeLinejoin="round"
        />
      </g>

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
        className="animate-twinkle" style={{ ...pivot, animationDuration: "2.9s" }}
      />

      {/* tidy stack */}
      <g className="animate-float" style={pivot}>
        <rect x="316" y="30" width="76" height="88" rx="7" fill="#A9CBFF" stroke={INK} strokeWidth="4.5" />
        <rect x="308" y="38" width="76" height="88" rx="7" fill="#FFE38A" stroke={INK} strokeWidth="4.5" />
        <rect x="300" y="46" width="76" height="88" rx="7" fill="#FFFFFF" stroke={INK} strokeWidth="4.5" />
        <g className="animate-blink" style={pivot}>
          <circle cx="326" cy="82" r="3.6" fill={INK} />
          <circle cx="350" cy="82" r="3.6" fill={INK} />
        </g>
        <path d="M325 96q13 11 26 0" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        {/* the tick pops in, draws itself, holds, then resets */}
        <g className="ba-badge" style={pivot}>
          <circle cx="390" cy="40" r="14" fill="#35D6A0" stroke={INK} strokeWidth="4" />
          <path
            d="M383 40l5 5 9-10"
            stroke={INK}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ba-tick"
          />
        </g>
      </g>
    </svg>
  );
}
