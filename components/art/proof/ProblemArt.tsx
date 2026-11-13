// Illustrations for the homepage "Is your team still doing this by hand?"
// cards. Each is one SVG on a 320 x 200 canvas (16:10). Decorative only.
// Keyframes live in Problems' <style> block (prefix `prob-`).

const INK = "#1B1D4E";
type Props = { className?: string };

const fillBox = { transformBox: "fill-box", transformOrigin: "center" } as const;

// A little app window with a face. x, y is the top-left corner.
function AppWindow({ x, y, bar, mood }: { x: number; y: number; bar: string; mood: "flat" | "happy" }) {
  const w = 110;
  const h = 110;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill="#FFFFFF" />
      <path d={`M${x} ${y + 22}V${y + 12}a12 12 0 0 1 12-12h${w - 24}a12 12 0 0 1 12 12v10z`} fill={bar} />
      <rect x={x} y={y} width={w} height={h} rx="12" stroke={INK} strokeWidth="5" />
      <path d={`M${x} ${y + 22}h${w}`} stroke={INK} strokeWidth="5" />
      <circle cx={x + 14} cy={y + 11} r="3" fill={INK} />
      <circle cx={x + 25} cy={y + 11} r="3" fill={INK} />
      <g className="animate-blink" style={fillBox}>
        <circle cx={x + 40} cy={y + 78} r="4.5" fill={INK} />
        <circle cx={x + 70} cy={y + 78} r="4.5" fill={INK} />
      </g>
      {mood === "happy" ? (
        <path d={`M${x + 45} ${y + 89}q10 8 20 0`} stroke={INK} strokeWidth="4.5" />
      ) : (
        <path d={`M${x + 46} ${y + 92}h18`} stroke={INK} strokeWidth="4.5" />
      )}
    </g>
  );
}

// (a) Two app windows, a sheet of data hopping from one to the other.
export function CopyDataArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* hop path */}
      <path
        d="M92 52Q160 0 228 52"
        stroke={INK}
        strokeWidth="3"
        strokeDasharray="2 12"
        className="animate-march"
        opacity="0.6"
      />
      <AppWindow x={20} y={56} bar="#B9A7FF" mood="flat" />
      <AppWindow x={190} y={56} bar="#35D6A0" mood="happy" />

      {/* the sheet: starts over the left window, hops to the right one */}
      <g className="prob-hop" style={fillBox}>
        <rect x="58" y="86" width="34" height="40" rx="4" fill="#FFE38A" stroke={INK} strokeWidth="4" />
        <path d="M65 97h20M65 106h20M65 115h12" stroke={INK} strokeWidth="3" />
      </g>

      {/* sparkles */}
      <path
        d="M160 150c1.5 6 4.5 9 10.5 10.5-6 1.5-9 4.5-10.5 10.5-1.5-6-4.5-9-10.5-10.5 6-1.5 9-4.5 10.5-10.5z"
        fill="#FFCB2E"
        stroke={INK}
        strokeWidth="3"
        className="animate-twinkle"
        style={fillBox}
      />
    </svg>
  );
}

// A sheet of paper with a folded corner. x, y is the top-left corner.
function Sheet({ x, y, missing }: { x: number; y: number; missing?: boolean }) {
  const body = `M${x} ${y}h44l16 16v60h-60z`;
  if (missing) {
    return (
      <g>
        <path d={body} fill="#F3F6FF" stroke={INK} strokeWidth="4" strokeDasharray="7 8" />
        <text
          x={x + 30}
          y={y + 52}
          textAnchor="middle"
          fontSize="34"
          fontWeight="800"
          fill={INK}
          className="prob-wobble"
          style={fillBox}
        >
          ?
        </text>
      </g>
    );
  }
  return (
    <g>
      <path d={body} fill="#FFFFFF" stroke={INK} strokeWidth="5" />
      <path d={`M${x + 44} ${y}v16h16`} stroke={INK} strokeWidth="4" />
      <path d={`M${x + 12} ${y + 20}h22`} stroke={INK} strokeWidth="3" opacity="0.5" />
      <circle cx={x + 22} cy={y + 40} r="3.5" fill={INK} />
      <circle cx={x + 38} cy={y + 40} r="3.5" fill={INK} />
      <path d={`M${x + 23} ${y + 50}q7 6 14 0`} stroke={INK} strokeWidth="3.5" />
    </g>
  );
}

// (b) One sheet found, two missing, a magnifying glass sweeping across.
export function ChasingDocsArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* "missing" tag */}
      <rect x="114" y="20" width="92" height="28" rx="14" fill="#FF7B7B" stroke={INK} strokeWidth="4" />
      <text x="160" y="39" textAnchor="middle" fontSize="13" fontWeight="800" letterSpacing="1.5" fill="#FFFFFF">
        MISSING
      </text>

      <Sheet x={50} y={70} />
      <Sheet x={130} y={70} missing />
      <Sheet x={210} y={70} missing />

      {/* ground */}
      <path d="M36 164h248" stroke={INK} strokeWidth="4" opacity="0.2" />

      {/* magnifying glass */}
      <g className="prob-sweep">
        <path d="M177 117l22 22" stroke={INK} strokeWidth="11" />
        <path d="M177 117l22 22" stroke="#FFCB2E" strokeWidth="4" />
        <circle cx="160" cy="100" r="25" fill="#A9CBFF" fillOpacity="0.4" stroke={INK} strokeWidth="5" />
        <path d="M148 92a14 14 0 0 1 10-8" stroke="#FFFFFF" strokeWidth="4" />
      </g>
    </svg>
  );
}

// A speech bubble with a tail at the bottom left.
function Bubble({
  x,
  y,
  w,
  h,
  fill,
  delay,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  delay: string;
  children: React.ReactNode;
}) {
  const tx = x + 22;
  const ty = y + h - 6;
  return (
    <g className="prob-bubble" style={{ ...fillBox, animationDelay: delay }}>
      <path d={`M${tx} ${ty}L${tx - 8} ${ty + 18}L${tx + 16} ${ty}z`} fill={fill} stroke={INK} strokeWidth="4.5" />
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={INK} strokeWidth="4.5" />
      {children}
    </g>
  );
}

// (c) The same question, three times. The last bubble is tired of it.
export function SameQuestionArt({ className }: Props) {
  const q = (x: number, y: number, size = 26) => (
    <text x={x} y={y} textAnchor="middle" fontSize={size} fontWeight="800" fill={INK}>
      ?
    </text>
  );
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <Bubble x={24} y={14} w={112} h={42} fill="#FFFFFF" delay="0s">
        {q(80, 44)}
      </Bubble>
      <Bubble x={98} y={68} w={112} h={42} fill="#A9CBFF" delay="0.7s">
        {q(154, 98)}
      </Bubble>
      <Bubble x={164} y={122} w={130} h={56} fill="#FFE38A" delay="1.4s">
        {/* tired face: heavy lids, flat wobbly mouth */}
        <path d="M194 146q6 4 12 0M216 146q6 4 12 0" stroke={INK} strokeWidth="4" />
        <path d="M200 160q5-3 10 0t10 0" stroke={INK} strokeWidth="3.5" />
        {q(266, 160, 30)}
      </Bubble>
      {/* sweat drop */}
      <path
        d="M300 104c4 6 6 9 6 12a6 6 0 0 1-12 0c0-3 2-6 6-12z"
        fill="#A9CBFF"
        stroke={INK}
        strokeWidth="3.5"
        className="prob-drip"
        style={fillBox}
      />
      {/* "again" tally marks */}
      <path d="M30 120v22M40 120v22M50 120v22M60 120v22M24 136l42-10" stroke={INK} strokeWidth="4" opacity="0.35" />
    </svg>
  );
}
