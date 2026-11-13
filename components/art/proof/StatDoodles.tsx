// Tiny corner doodles for the homepage stat cards. Decorative only.
// Keyframes live in ProofBar's <style> block (prefix `proof-`).

const INK = "#1B1D4E";
type Props = { className?: string };

const fillBox = { transformBox: "fill-box", transformOrigin: "center" } as const;

// Three little faces: active clients.
export function FacesDoodle({ className }: Props) {
  const faces = [
    { cx: 15, cy: 40, fill: "#35D6A0", delay: "0s", blink: "-1s" },
    { cx: 49, cy: 40, fill: "#FF7B7B", delay: "0.5s", blink: "-2.8s" },
    { cx: 32, cy: 28, fill: "#FFCB2E", delay: "0.25s", blink: "-0.2s" },
  ];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {faces.map((f) => (
        <g key={f.cx + "-" + f.cy} className="proof-bob" style={{ ...fillBox, animationDelay: f.delay }}>
          <circle cx={f.cx} cy={f.cy} r="11" fill={f.fill} stroke={INK} strokeWidth="3.5" />
          <g className="animate-blink" style={{ ...fillBox, animationDelay: f.blink }}>
            <circle cx={f.cx - 4} cy={f.cy - 1.5} r="1.8" fill={INK} />
            <circle cx={f.cx + 4} cy={f.cy - 1.5} r="1.8" fill={INK} />
          </g>
          <path d={`M${f.cx - 4} ${f.cy + 3.5}q4 3.5 8 0`} stroke={INK} strokeWidth="2.6" />
        </g>
      ))}
    </svg>
  );
}

// Clock with a sweeping hand: hours saved.
export function ClockDoodle({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g className="proof-bob" style={{ animationDuration: "3.6s", animationDelay: "-1.2s" }}>
      <path d="M27 8h10M32 8v5" stroke={INK} strokeWidth="3.5" />
      <path d="M49 15l4 4" stroke={INK} strokeWidth="3.5" />
      <circle cx="32" cy="36" r="22" fill="#FFFFFF" stroke={INK} strokeWidth="3.5" />
      <circle cx="32" cy="36" r="17" fill="#FFE38A" />
      <path d="M32 36v-9" stroke={INK} strokeWidth="3.5" />
      <path
        d="M32 36h11"
        stroke={INK}
        strokeWidth="3.5"
        className="proof-tick"
        style={{ transformBox: "view-box", transformOrigin: "32px 36px" }}
      />
      <circle cx="32" cy="36" r="2.8" fill={INK} />
      </g>
    </svg>
  );
}

// Smiling star: client rating.
export function StarDoodle({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g className="animate-wiggle" style={fillBox}>
        <path
          d="M32 9L37.9 24.9L54.8 25.6L41.5 36.1L46.1 52.4L32 43L17.9 52.4L22.5 36.1L9.2 25.6L26.1 24.9Z"
          fill="#FFCB2E"
          stroke={INK}
          strokeWidth="3.5"
        />
        <g className="animate-blink [animation-delay:-1.7s]" style={fillBox}>
          <circle cx="28.5" cy="31" r="1.8" fill={INK} />
          <circle cx="35.5" cy="31" r="1.8" fill={INK} />
        </g>
        <path d="M28.5 35.5q3.5 3 7 0" stroke={INK} strokeWidth="2.6" />
      </g>
      <circle cx="56" cy="10" r="2.5" fill="#FF7B7B" className="animate-twinkle" style={fillBox} />
      <circle cx="8" cy="54" r="2" fill="#35D6A0" className="animate-twinkle [animation-delay:-1.1s] [animation-duration:3s]" style={fillBox} />
    </svg>
  );
}

// Calendar with a tick that pops in: weeks to a production build.
export function CalendarDoodle({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="14" width="44" height="40" rx="6" fill="#FFFFFF" />
      <path d="M10 26V20a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v6z" fill="#B9A7FF" />
      <rect x="10" y="14" width="44" height="40" rx="6" stroke={INK} strokeWidth="3.5" />
      <path d="M10 26h44" stroke={INK} strokeWidth="3.5" />
      <path d="M22 9v9M42 9v9" stroke={INK} strokeWidth="3.5" />
      <g opacity="0.4">
        <circle cx="20" cy="34" r="1.8" fill={INK} className="animate-twinkle" style={fillBox} />
        <circle cx="28" cy="34" r="1.8" fill={INK} className="animate-twinkle [animation-delay:-0.7s]" style={fillBox} />
        <circle cx="20" cy="44" r="1.8" fill={INK} className="animate-twinkle [animation-delay:-1.4s]" style={fillBox} />
      </g>
      <g className="proof-pop" style={fillBox}>
        <circle cx="40" cy="41" r="9" fill="#35D6A0" stroke={INK} strokeWidth="3" />
        <path d="M35.5 41l3 3 6-6.5" stroke={INK} strokeWidth="3" />
      </g>
    </svg>
  );
}
