// Small animated illustrations for the homepage "How it works" steps and
// the audit offer. Thick navy outlines, flat fills, little faces.
// All decorative: hidden from screen readers. Size them with className.
//
// Custom keyframes are prefixed `steps-` / `audit-` so they never clash.

const INK = "#1B1D4E";
const fb = { transformBox: "fill-box", transformOrigin: "center" } as const;

const keyframes = `
@keyframes steps-pop {
  0%, 18% { transform: scale(0); }
  28% { transform: scale(1.18); }
  34%, 100% { transform: scale(1); }
}
@keyframes steps-swing {
  0%, 100% { transform: rotate(-7deg); }
  50% { transform: rotate(7deg); }
}
@keyframes steps-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}
@keyframes steps-flame {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.7); }
}
@keyframes audit-stamp {
  0%, 72%, 100% { transform: scale(1); }
  80% { transform: scale(1.22); }
  88% { transform: scale(0.94); }
}
@keyframes steps-breathe {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-4px) rotate(-1.5deg); }
}
@keyframes steps-puff {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes steps-ring {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes audit-node {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.18); }
}
@keyframes audit-hand {
  to { transform: rotate(360deg); }
}
@keyframes audit-zap {
  0%, 62%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
  70% { transform: scale(0.82) rotate(-6deg); opacity: 0.55; }
  80% { transform: scale(1.12) rotate(4deg); opacity: 1; }
}
@keyframes audit-bar {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.6); }
}
@keyframes audit-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2.5px); }
}
@keyframes audit-tick {
  0%, 10% { transform: scale(0); }
  22% { transform: scale(1.25); }
  30%, 100% { transform: scale(1); }
}
`;

// Shared keyframes. Render once per illustration (cheap, and keeps each
// drawing self-contained wherever it is used).
function Keyframes() {
  return <style>{keyframes}</style>;
}

// Step 1: a calendar with a face, and a tick that pops in.
export function CalendarArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Keyframes />
      <g style={{ ...fb, animation: "steps-breathe 4.4s ease-in-out infinite" }}>
      {/* body */}
      <rect x="40" y="30" width="120" height="110" rx="16" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
      {/* header band */}
      <path d="M40 64V46a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v18z" fill="#FF7B7B" stroke={INK} strokeWidth="5" />
      {/* rings */}
      <rect x="64" y="18" width="12" height="26" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="4.5" style={{ animation: "steps-ring 2.2s ease-in-out infinite" }} />
      <rect x="124" y="18" width="12" height="26" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="4.5" style={{ animation: "steps-ring 2.2s ease-in-out -1.1s infinite" }} />
      {/* face */}
      <g style={fb} className="animate-blink">
        <circle cx="82" cy="90" r="5.5" fill={INK} />
        <circle cx="118" cy="90" r="5.5" fill={INK} />
      </g>
      <circle cx="70" cy="104" r="5" fill="#FF7B7B" opacity="0.6" />
      <circle cx="130" cy="104" r="5" fill="#FF7B7B" opacity="0.6" />
      <path d="M88 106q12 11 24 0" stroke={INK} strokeWidth="5" />
      </g>
      {/* tick badge */}
      <g style={{ ...fb, animation: "steps-pop 3.2s cubic-bezier(.2,.9,.3,1.2) infinite" }}>
        <circle cx="150" cy="128" r="21" fill="#35D6A0" stroke={INK} strokeWidth="5" />
        <path d="M140 129l7 7 13-14" stroke={INK} strokeWidth="5.5" />
      </g>
      {/* sparkle */}
      <path
        d="M176 26c1.5 6 4 8.5 10 10-6 1.5-8.5 4-10 10-1.5-6-4-8.5-10-10 6-1.5 8.5-4 10-10z"
        fill="#FFCB2E"
        stroke={INK}
        strokeWidth="3"
        style={fb}
        className="animate-twinkle"
      />
    </svg>
  );
}

// Step 2: a clipboard plan with little price tags swinging off each line.
export function RoadmapArt({ className }: { className?: string }) {
  const rows = [
    { y: 62, tag: "#FFCB2E", delay: "0s" },
    { y: 90, tag: "#35D6A0", delay: "-0.8s" },
    { y: 118, tag: "#FF7B7B", delay: "-1.6s" },
  ];
  return (
    <svg
      viewBox="0 0 200 160"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Keyframes />
      {/* sparkle */}
      <path
        d="M30 40c1.2 4.5 3 6.5 7.5 7.5-4.5 1.2-6.3 3-7.5 7.5-1.2-4.5-3-6.3-7.5-7.5 4.5-1 6.3-3 7.5-7.5z"
        fill="#B9A7FF"
        stroke={INK}
        strokeWidth="3"
        style={{ ...fb, animationDelay: "-0.6s", animationDuration: "3s" }}
        className="animate-twinkle"
      />
      {/* board */}
      <rect x="44" y="24" width="96" height="128" rx="12" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
      {/* clip */}
      <rect x="70" y="14" width="44" height="22" rx="8" fill="#A9CBFF" stroke={INK} strokeWidth="4.5" style={{ animation: "steps-ring 3s ease-in-out -0.5s infinite" }} />
      {rows.map((r) => (
        <g key={r.y}>
          <rect x="56" y={r.y - 7} width="14" height="14" rx="3" fill="#F3F6FF" stroke={INK} strokeWidth="3.5" />
          <path d={`M78 ${r.y}h36`} stroke={INK} strokeWidth="4" opacity="0.55" />
          {/* string to the tag */}
          <path d={`M118 ${r.y}h10`} stroke={INK} strokeWidth="3" />
          <g
            style={{
              transformBox: "fill-box",
              transformOrigin: "left center",
              animation: `steps-swing 2.4s ease-in-out ${r.delay} infinite`,
            }}
          >
            <path
              d={`M128 ${r.y - 9}h30l10 9-10 9h-30z`}
              fill={r.tag}
              stroke={INK}
              strokeWidth="3.5"
            />
            <text
              x="144"
              y={r.y + 5}
              textAnchor="middle"
              fontSize="14"
              fontWeight="800"
              fill={INK}
              fontFamily="inherit"
            >
              $
            </text>
          </g>
        </g>
      ))}
      {/* little face at the foot of the board */}
      <g style={fb} className="animate-blink">
        <circle cx="84" cy="138" r="3.5" fill={INK} />
        <circle cx="100" cy="138" r="3.5" fill={INK} />
      </g>
      <path d="M86 145q6 4.5 12 0" stroke={INK} strokeWidth="3.5" />
    </svg>
  );
}

// Step 3: a rocket with a face lifting off, flame flickering.
export function RocketArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 166"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Keyframes />
      {/* sparkles */}
      <path
        d="M38 30c1.5 6 4 8.5 10 10-6 1.5-8.5 4-10 10-1.5-6-4-8.5-10-10 6-1.5 8.5-4 10-10z"
        fill="#FFCB2E"
        stroke={INK}
        strokeWidth="3"
        style={fb}
        className="animate-twinkle"
      />
      <path
        d="M164 52c1.2 4.5 3 6.5 7.5 7.5-4.5 1.2-6.3 3-7.5 7.5-1.2-4.5-3-6.3-7.5-7.5 4.5-1 6.3-3 7.5-7.5z"
        fill="#B9A7FF"
        stroke={INK}
        strokeWidth="3"
        style={{ ...fb, animationDelay: "-1.1s" }}
        className="animate-twinkle"
      />
      <circle cx="154" cy="20" r="4" fill="#35D6A0" stroke={INK} strokeWidth="2.5" style={{ ...fb, animationDelay: "-0.4s", animationDuration: "3.2s" }} className="animate-twinkle" />

      <g style={{ animation: "steps-bob 2.6s ease-in-out infinite" }}>
        {/* flame */}
        <path
          d="M88 110q12 36 24 0z"
          fill="#FFCB2E"
          stroke={INK}
          strokeWidth="4"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center top",
            animation: "steps-flame 0.5s ease-in-out infinite",
          }}
        />
        {/* fins */}
        <path d="M76 78L56 102l2 14 18-12z" fill="#FF7B7B" stroke={INK} strokeWidth="4.5" />
        <path d="M124 78l20 24-2 14-18-12z" fill="#FF7B7B" stroke={INK} strokeWidth="4.5" />
        {/* body */}
        <path d="M100 16c22 16 30 44 26 86H74c-4-42 4-70 26-86z" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
        {/* nose band */}
        <path d="M86 32q14-6 28 0" stroke={INK} strokeWidth="4" />
        {/* window with a face */}
        <circle cx="100" cy="62" r="15" fill="#A9CBFF" stroke={INK} strokeWidth="4.5" />
        <g style={fb} className="animate-blink">
          <circle cx="94.5" cy="60" r="2.6" fill={INK} />
          <circle cx="105.5" cy="60" r="2.6" fill={INK} />
        </g>
        <path d="M95 66.5q5 4 10 0" stroke={INK} strokeWidth="3" />
        {/* nozzle */}
        <rect x="86" y="100" width="28" height="10" rx="3" fill={INK} />
      </g>

      {/* launch puffs */}
      <g fill="#FFFFFF" stroke={INK} strokeWidth="4">
        <circle cx="66" cy="150" r="11" style={{ ...fb, animation: "steps-puff 2.6s ease-in-out infinite" }} />
        <circle cx="134" cy="150" r="11" style={{ ...fb, animation: "steps-puff 2.6s ease-in-out -1.3s infinite" }} />
        <circle cx="84" cy="154" r="9" style={{ ...fb, animation: "steps-puff 2.2s ease-in-out -0.6s infinite" }} />
        <circle cx="116" cy="154" r="9" style={{ ...fb, animation: "steps-puff 2.2s ease-in-out -1.7s infinite" }} />
      </g>
    </svg>
  );
}

// Audit offer: a big clipboard labelled "YOUR AUDIT" with five ticks
// (one per thing we look at) and a tilted "FREE" stamp.
export function AuditClipboard({ className }: { className?: string }) {
  const rows = [116, 140, 164, 188, 212];
  const lineEnds = [160, 148, 156, 112, 104];
  return (
    <svg
      viewBox="0 0 220 260"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Keyframes />
      {/* board */}
      <rect x="18" y="30" width="184" height="222" rx="18" fill="#3B4CFF" stroke={INK} strokeWidth="6" />
      {/* paper */}
      <rect x="34" y="48" width="152" height="190" rx="8" fill="#FFFFFF" stroke={INK} strokeWidth="4.5" />
      {/* clip */}
      <rect x="78" y="16" width="64" height="34" rx="10" fill="#B9A7FF" stroke={INK} strokeWidth="5" />
      <circle cx="110" cy="27" r="5" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
      {/* title */}
      <text
        x="110"
        y="86"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        letterSpacing="0.5"
        fill={INK}
        fontFamily="inherit"
      >
        YOUR AUDIT
      </text>
      <path d="M58 97h104" stroke="#FFCB2E" strokeWidth="6" />
      {/* checklist */}
      {rows.map((y, i) => (
        <g key={y}>
          <rect x="48" y={y - 8} width="16" height="16" rx="4" fill="#F3F6FF" stroke={INK} strokeWidth="3.5" />
          <path
            d={`M51 ${y}l4.5 4.5 9-10`}
            stroke="#1B1D4E"
            strokeWidth="4"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `audit-tick 5s cubic-bezier(.2,.9,.3,1.2) ${i * 0.35}s infinite both`,
            }}
          />
          <path d={`M74 ${y}H${lineEnds[i]}`} stroke={INK} strokeWidth="4" opacity="0.45" />
        </g>
      ))}
      {/* FREE stamp, tilted */}
      <g transform="rotate(-14 162 198)">
        <g style={{ transformBox: "fill-box", transformOrigin: "center", animation: "audit-stamp 4s ease-in-out infinite" }}>
          <rect x="122" y="178" width="80" height="40" rx="8" fill="#FF7B7B" stroke={INK} strokeWidth="4.5" />
          <rect x="129" y="185" width="66" height="26" rx="5" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="5 4" />
          <text
            x="162"
            y="206"
            textAnchor="middle"
            fontSize="20"
            fontWeight="800"
            letterSpacing="1"
            fill="#FFFFFF"
            fontFamily="inherit"
          >
            FREE
          </text>
        </g>
      </g>
    </svg>
  );
}

// Small icons for the five audit panels (48-unit canvas). Each one has its
// own slow idle loop; the panel around it adds a wiggle on hover.
type IconProps = { className?: string };
const iconBase = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// Three nodes joined up, each pulsing in turn, the links marching.
export function IconWorkflows({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <Keyframes />
      <path
        d="M12 14h24M14 18l8 13M34 18l-8 13"
        stroke={INK}
        strokeWidth="3.5"
        strokeDasharray="4 3"
        className="animate-march [animation-duration:2.4s]"
      />
      <circle cx="10" cy="14" r="6" fill="#FFCB2E" stroke={INK} strokeWidth="3.5" style={{ ...fb, animation: "audit-node 3s ease-in-out infinite" }} />
      <circle cx="38" cy="14" r="6" fill="#35D6A0" stroke={INK} strokeWidth="3.5" style={{ ...fb, animation: "audit-node 3s ease-in-out -1s infinite" }} />
      <circle cx="24" cy="36" r="7" fill="#FF7B7B" stroke={INK} strokeWidth="3.5" style={{ ...fb, animation: "audit-node 3s ease-in-out -2s infinite" }} />
    </svg>
  );
}

// A toolbox that bobs, its clasp blinking like a little eye.
export function IconTools({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <Keyframes />
      <g style={{ animation: "audit-bob 3.4s ease-in-out -0.8s infinite" }}>
        <path d="M17 18v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5" stroke={INK} strokeWidth="3.5" />
        <rect x="5" y="18" width="38" height="24" rx="5" fill="#FF7B7B" stroke={INK} strokeWidth="3.5" />
        <path d="M5 28h38" stroke={INK} strokeWidth="3.5" />
        <rect
          x="20"
          y="24"
          width="8"
          height="8"
          rx="2"
          fill="#FFCB2E"
          stroke={INK}
          strokeWidth="3"
          className="animate-blink [animation-duration:5.5s]"
          style={fb}
        />
      </g>
    </svg>
  );
}

// A clock whose minute hand goes round, slowly.
export function IconTimeSinks({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <Keyframes />
      <circle cx="24" cy="25" r="18" fill="#A9CBFF" stroke={INK} strokeWidth="3.5" />
      <path d="M24 25l7 5" stroke={INK} strokeWidth="3.5" />
      <path
        d="M24 25V14"
        stroke={INK}
        strokeWidth="3.5"
        style={{ transformBox: "view-box", transformOrigin: "24px 25px", animation: "audit-hand 7s linear infinite" }}
      />
      <circle cx="24" cy="25" r="2.2" fill={INK} />
      <path d="M19 4h10" stroke={INK} strokeWidth="3.5" />
    </svg>
  );
}

// A lightning bolt that flickers now and then.
export function IconQuickWins({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <Keyframes />
      <path
        d="M28 3L10 27h12l-4 18 20-26H26l2-16z"
        fill="#FFCB2E"
        stroke={INK}
        strokeWidth="3.5"
        style={{ ...fb, animation: "audit-zap 3.8s ease-in-out -0.5s infinite" }}
      />
      <circle cx="40" cy="38" r="2.5" fill="#FF7B7B" className="animate-twinkle [animation-duration:2.6s]" style={fb} />
    </svg>
  );
}

// Bar chart, bars dipping and rising in turn.
export function IconNumbers({ className }: IconProps) {
  const bars = [
    { x: 8, y: 27, h: 15, fill: "#35D6A0", delay: "0s" },
    { x: 20, y: 17, h: 25, fill: "#B9A7FF", delay: "-0.7s" },
    { x: 32, y: 8, h: 34, fill: "#FFCB2E", delay: "-1.4s" },
  ];
  return (
    <svg {...iconBase} className={className}>
      <Keyframes />
      {bars.map((b) => (
        <rect
          key={b.x}
          x={b.x}
          y={b.y}
          width="8"
          height={b.h}
          rx="2"
          fill={b.fill}
          stroke={INK}
          strokeWidth="3.5"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center bottom",
            animation: `audit-bar 3.6s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
      <path d="M4 43h40" stroke={INK} strokeWidth="3.5" />
    </svg>
  );
}
