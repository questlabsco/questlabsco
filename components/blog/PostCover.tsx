import type { CSSProperties, ReactNode } from "react";
import type { BlogArt } from "@/lib/data/blog/types";

// Cover drawings for blog posts: one small scene per `BlogArt` key, each on
// its own pastel panel, each with a face and something that moves on its
// own (blinks, bobs, swings, rings, rolls). Decorative only.
//
//   <PostCover art="truck" className="w-full" />

const INK = "#1B1D4E";
const SUN = "#FFCB2E";
const SUN_LIGHT = "#FFE38A";
const BRAND = "#3B4CFF";
const SKY = "#A9CBFF";
const MINT = "#35D6A0";
const CORAL = "#FF7B7B";
const LILAC = "#B9A7FF";
const WHITE = "#FFFFFF";
const SCREEN = "#DCE5FF";

const panel: Record<BlogArt, string> = {
  tools: "#E4ECFF",
  robot: "#DDF7EE",
  checklist: "#FFF3CC",
  calendar: "#FFE6E6",
  phone: "#ECE6FF",
  house: "#FFF7E3",
  truck: "#E1EEFF",
  scales: "#E2F8F0",
  magnifier: "#FFF1D6",
  pricetag: "#FFE9EF",
};

// Loop styles. Inline so each part can have its own duration and delay,
// which keeps the covers on a page from moving in lockstep.
const box = { transformBox: "fill-box", transformOrigin: "center" } as const;
function loop(duration: number, delay = 0, extra: CSSProperties = {}): CSSProperties {
  return { ...box, animationDuration: `${duration}s`, animationDelay: `${delay}s`, ...extra };
}
function custom(name: string, duration: number, delay = 0, extra: CSSProperties = {}): CSSProperties {
  return {
    ...box,
    animation: `${name} ${duration}s ease-in-out ${delay}s infinite`,
    ...extra,
  };
}
// Pivot a rotation around a point in the drawing's own coordinates.
const at = (x: number, y: number) =>
  ({ transformBox: "view-box", transformOrigin: `${x}px ${y}px` }) as const;

const keyframes = `
@keyframes pc-ring{0%,58%,100%{transform:rotate(0)}62%{transform:rotate(-9deg)}66%{transform:rotate(9deg)}70%{transform:rotate(-7deg)}74%{transform:rotate(7deg)}78%{transform:rotate(-3deg)}82%{transform:rotate(0)}}
@keyframes pc-pulse{0%,100%{opacity:.25}50%{opacity:1}}
@keyframes pc-puff{0%{transform:translate(0,6px) scale(.6);opacity:0}25%{opacity:1}100%{transform:translate(10px,-22px) scale(1.15);opacity:0}}
@keyframes pc-bump{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
@keyframes pc-search{0%,100%{transform:translate(0,0)}30%{transform:translate(-16px,6px)}60%{transform:translate(-4px,-8px)}}
@keyframes pc-swing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}
@keyframes pc-tilt{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
@keyframes pc-tick{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
`;

// Two dot eyes that blink, a smile and pink cheeks.
function Face({
  x,
  y,
  gap = 26,
  eye = 4.5,
  smile = 12,
  cheeks = true,
  delay = 0,
  blink = 4.5,
}: {
  x: number;
  y: number;
  gap?: number;
  eye?: number;
  smile?: number;
  cheeks?: boolean;
  delay?: number;
  blink?: number;
}) {
  const l = x - gap / 2;
  const r = x + gap / 2;
  return (
    <g>
      <g className="animate-blink" style={loop(blink, delay)}>
        <circle cx={l} cy={y} r={eye} fill={INK} />
        <circle cx={r} cy={y} r={eye} fill={INK} />
      </g>
      {cheeks && (
        <>
          <circle cx={l - eye * 1.3} cy={y + eye * 2.4} r={eye * 0.95} fill={CORAL} opacity="0.65" />
          <circle cx={r + eye * 1.3} cy={y + eye * 2.4} r={eye * 0.95} fill={CORAL} opacity="0.65" />
        </>
      )}
      <path
        d={`M${x - smile / 2} ${y + eye * 2}q${smile / 2} ${smile * 0.55} ${smile} 0`}
        stroke={INK}
        strokeWidth="3.6"
      />
    </g>
  );
}

// Four-point sparkle centred on (x, y).
function Spark({ x, y, s = 8, delay = 0, dur = 2.6, color = SUN }: {
  x: number; y: number; s?: number; delay?: number; dur?: number; color?: string;
}) {
  const k = s * 0.22;
  return (
    <path
      d={`M${x} ${y - s}Q${x + k} ${y - k} ${x + s} ${y}Q${x + k} ${y + k} ${x} ${y + s}Q${x - k} ${y + k} ${x - s} ${y}Q${x - k} ${y - k} ${x} ${y - s}Z`}
      fill={color}
      stroke={INK}
      strokeWidth="2.6"
      className="animate-twinkle"
      style={loop(dur, delay)}
    />
  );
}

// Soft background dots on the panel.
function Dots({ items }: { items: [number, number, number][] }) {
  return (
    <>
      {items.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={WHITE} opacity="0.7" />
      ))}
    </>
  );
}

function Tools() {
  return (
    <>
      <Dots items={[[30, 118, 16], [214, 30, 20]]} />
      <Spark x={30} y={34} delay={-0.4} />
      <Spark x={212} y={110} s={7} delay={-1.5} dur={3.1} color={WHITE} />
      <g className="animate-float" style={loop(6)}>
        {/* wrench, poking out and wiggling */}
        <g className="animate-wiggle" style={{ ...at(92, 66), animationDuration: "3.2s" }}>
          <path d="M92 66L80 28" stroke={INK} strokeWidth="15" />
          <path d="M92 66L80 28" stroke={SCREEN} strokeWidth="6" />
          <circle cx="78" cy="22" r="13" fill={SCREEN} stroke={INK} strokeWidth="5" />
          <circle cx="78" cy="22" r="5" fill={panel.tools} stroke={INK} strokeWidth="3.5" />
        </g>
        {/* screwdriver */}
        <g className="animate-wiggle" style={{ ...at(150, 66), animationDuration: "4.1s", animationDelay: "-1.2s" }}>
          <path d="M150 66L160 36" stroke={INK} strokeWidth="5" />
          <rect x="157" y="10" width="16" height="30" rx="7" fill={SUN} stroke={INK} strokeWidth="5" transform="rotate(20 165 25)" />
        </g>
        {/* lid handle */}
        <path d="M102 56v-9h36v9" stroke={INK} strokeWidth="5" />
        {/* box */}
        <rect x="56" y="64" width="128" height="68" rx="12" fill={CORAL} stroke={INK} strokeWidth="5" />
        <rect x="50" y="54" width="140" height="20" rx="8" fill={SUN} stroke={INK} strokeWidth="5" />
        <rect x="112" y="68" width="16" height="10" rx="3" fill={WHITE} stroke={INK} strokeWidth="3.5" />
        <Face x={120} y={98} gap={30} delay={-0.8} />
      </g>
    </>
  );
}

function Robot() {
  return (
    <>
      <Dots items={[[26, 30, 14], [222, 124, 18]]} />
      <Spark x={26} y={110} delay={-0.9} />
      {/* spinning cog */}
      <g className="animate-spin-slow" style={loop(9)}>
        <circle cx="200" cy="114" r="16" stroke={INK} strokeWidth="8" strokeDasharray="6.3 6.27" />
        <circle cx="200" cy="114" r="12" fill={SUN} stroke={INK} strokeWidth="4" />
        <circle cx="200" cy="114" r="4" fill={INK} />
      </g>
      {/* the bot */}
      <g className="animate-float" style={loop(5.4)}>
        <path d="M88 42V28" stroke={INK} strokeWidth="5" />
        <circle cx="88" cy="23" r="7" fill={SUN} stroke={INK} strokeWidth="4.5" className="animate-twinkle" style={loop(3.3, -1)} />
        <rect x="40" y="62" width="10" height="24" rx="5" fill={MINT} stroke={INK} strokeWidth="4.5" />
        <rect x="126" y="62" width="10" height="24" rx="5" fill={MINT} stroke={INK} strokeWidth="4.5" />
        <path d="M80 108v6M96 108v6" stroke={INK} strokeWidth="5" />
        <rect x="60" y="112" width="56" height="30" rx="10" fill={BRAND} stroke={INK} strokeWidth="5" />
        <rect x="48" y="42" width="80" height="66" rx="18" fill={WHITE} stroke={INK} strokeWidth="5" />
        <rect x="58" y="52" width="60" height="44" rx="10" fill={SCREEN} stroke={INK} strokeWidth="4" />
        <Face x={88} y={70} gap={22} eye={4.5} smile={14} cheeks={false} delay={-2} />
      </g>
      {/* speech bubble with typing dots */}
      <g className="animate-float" style={loop(4.4, -1.6)}>
        <path d="M158 70L146 92L180 74Z" fill={WHITE} stroke={INK} strokeWidth="5" />
        <rect x="142" y="28" width="78" height="46" rx="16" fill={WHITE} stroke={INK} strokeWidth="5" />
        {[162, 181, 200].map((cx, i) => (
          <circle key={cx} cx={cx} cy="51" r="5" fill={INK} className="animate-twinkle" style={loop(1.5, i * 0.3)} />
        ))}
      </g>
    </>
  );
}

function Checklist() {
  const rows = [
    { y: 62, done: true },
    { y: 86, done: true },
    { y: 110, done: false },
  ];
  return (
    <>
      <Dots items={[[30, 36, 18], [36, 120, 10], [220, 132, 14]]} />
      <Spark x={34} y={84} delay={-0.3} />
      <Spark x={214} y={26} s={7} delay={-1.3} dur={3} color={WHITE} />
      <g className="animate-float" style={loop(6.4)}>
        <rect x="66" y="24" width="96" height="118" rx="12" fill={SKY} stroke={INK} strokeWidth="5" />
        <rect x="76" y="40" width="76" height="94" rx="6" fill={WHITE} stroke={INK} strokeWidth="4" />
        {rows.map((row, i) => (
          <g key={row.y}>
            <rect x="85" y={row.y - 8} width="16" height="16" rx="4" fill={row.done ? MINT : WHITE} stroke={INK} strokeWidth="3.5" />
            {row.done ? (
              <path d={`M88.5 ${row.y}l3.5 3.5 6.5-7`} stroke={INK} strokeWidth="3.2" />
            ) : (
              <g className="animate-twinkle" style={loop(2.4, -0.5)}>
                <path d={`M88.5 ${row.y}l3.5 3.5 6.5-7`} stroke={BRAND} strokeWidth="3.2" />
              </g>
            )}
            <path d={`M110 ${row.y}H${i === 1 ? 134 : 142}`} stroke="#C9D3F5" strokeWidth="5" />
          </g>
        ))}
        {/* clip, with a little face */}
        <rect x="94" y="14" width="40" height="20" rx="7" fill={SUN} stroke={INK} strokeWidth="5" />
        <Face x={114} y={22} gap={12} eye={2.3} smile={6} cheeks={false} delay={-3} blink={5.1} />
      </g>
      {/* pencil, scribbling */}
      <g className="animate-wiggle" style={{ ...at(186, 120), animationDuration: "2.2s" }}>
        <g transform="rotate(24 186 82)">
          <rect x="177" y="34" width="18" height="16" rx="4" fill={CORAL} stroke={INK} strokeWidth="4.5" />
          <rect x="177" y="48" width="18" height="60" rx="3" fill={SUN} stroke={INK} strokeWidth="4.5" />
          <path d="M177 108L186 126L195 108Z" fill="#FFF7E3" stroke={INK} strokeWidth="4.5" />
          <circle cx="182" cy="70" r="2" fill={INK} />
          <circle cx="190" cy="70" r="2" fill={INK} />
          <path d="M182.5 76q3.5 3 7 0" stroke={INK} strokeWidth="2.4" />
        </g>
      </g>
    </>
  );
}

function Calendar() {
  const days: [number, number][] = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) days.push([72 + c * 21, 74 + r * 20]);
  const picked = days[8];
  return (
    <>
      <Dots items={[[214, 32, 18], [24, 124, 14]]} />
      <Spark x={212} y={110} delay={-0.7} />
      <Spark x={30} y={32} s={7} delay={-1.9} dur={3.2} color={WHITE} />
      <g className="animate-float" style={loop(6.8)}>
        <rect x="56" y="32" width="128" height="108" rx="14" fill={WHITE} stroke={INK} strokeWidth="5" />
        <path d="M56 64V46a14 14 0 0 1 14-14h100a14 14 0 0 1 14 14v18Z" fill={CORAL} stroke={INK} strokeWidth="5" />
        <rect x="84" y="20" width="10" height="24" rx="5" fill={WHITE} stroke={INK} strokeWidth="4" />
        <rect x="146" y="20" width="10" height="24" rx="5" fill={WHITE} stroke={INK} strokeWidth="4" />
        <Face x={120} y={44} gap={22} eye={3.4} smile={10} cheeks={false} delay={-1.1} />
        {days.map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="14" height="12" rx="3" fill={i === 8 ? SUN : SCREEN} stroke={i === 8 ? INK : "none"} strokeWidth="3" />
        ))}
        <circle
          cx={picked[0] + 7}
          cy={picked[1] + 6}
          r="14"
          stroke={INK}
          strokeWidth="3"
          strokeDasharray="4 6"
          className="animate-march"
        />
      </g>
      {/* little clock */}
      <g className="animate-float" style={loop(4.2, -2)}>
        <circle cx="40" cy="80" r="18" fill={SUN} stroke={INK} strokeWidth="5" />
        <path d="M40 80h8" stroke={INK} strokeWidth="4" />
        <g className="animate-spin-slow" style={{ ...at(40, 80), animationDuration: "6s" }}>
          <path d="M40 80V68" stroke={INK} strokeWidth="4" />
        </g>
        <circle cx="40" cy="80" r="2.5" fill={INK} />
      </g>
    </>
  );
}

function Phone() {
  return (
    <>
      <Dots items={[[30, 34, 16], [214, 122, 18]]} />
      <Spark x={206} y={30} delay={-0.2} />
      <Spark x={34} y={116} s={7} delay={-1.4} dur={3} color={WHITE} />
      {/* sound waves */}
      {[
        "M80 58q-9 18 0 36",
        "M68 48q-15 28 0 56",
        "M164 58q9 18 0 36",
        "M176 48q15 28 0 56",
      ].map((d, i) => (
        <path key={d} d={d} stroke={INK} strokeWidth="5" style={custom("pc-pulse", 1.6, (i % 2) * 0.4)} />
      ))}
      <g style={custom("pc-ring", 3.4)}>
        <rect x="92" y="20" width="60" height="114" rx="12" fill={LILAC} stroke={INK} strokeWidth="5" />
        <rect x="100" y="32" width="44" height="80" rx="6" fill={WHITE} stroke={INK} strokeWidth="4" />
        <g className="animate-blink" style={loop(4.8, -1)}>
          <circle cx="113" cy="64" r="4" fill={INK} />
          <circle cx="131" cy="64" r="4" fill={INK} />
        </g>
        <ellipse cx="122" cy="80" rx="5" ry="6" fill={INK} />
        <circle cx="106" cy="74" r="3.5" fill={CORAL} opacity="0.65" />
        <circle cx="138" cy="74" r="3.5" fill={CORAL} opacity="0.65" />
        <circle cx="122" cy="123" r="4" fill={WHITE} stroke={INK} strokeWidth="3" />
      </g>
      {/* missed-call badge */}
      <g className="animate-twinkle" style={loop(2.2, -0.6)}>
        <circle cx="152" cy="22" r="11" fill={CORAL} stroke={INK} strokeWidth="4" />
        <path d="M152 16v7" stroke={WHITE} strokeWidth="3.5" />
        <circle cx="152" cy="28" r="1.8" fill={WHITE} />
      </g>
    </>
  );
}

function House() {
  return (
    <>
      <Dots items={[[30, 40, 18], [212, 50, 12]]} />
      <Spark x={36} y={100} delay={-1} />
      <Spark x={214} y={96} s={7} delay={-0.2} dur={3.1} color={WHITE} />
      {/* chimney smoke */}
      {[0, -1.6].map((d) => (
        <circle key={d} cx="160" cy="22" r="7" fill={WHITE} stroke={INK} strokeWidth="3.5" style={custom("pc-puff", 3.2, d)} />
      ))}
      <g className="animate-float" style={loop(7)}>
        <rect x="150" y="30" width="18" height="34" rx="3" fill={WHITE} stroke={INK} strokeWidth="5" />
        <rect x="64" y="70" width="112" height="64" rx="6" fill={SUN_LIGHT} stroke={INK} strokeWidth="5" />
        <path d="M48 78L120 24L192 78Z" fill={CORAL} stroke={INK} strokeWidth="5" />
        {/* window eyes */}
        <rect x="78" y="84" width="28" height="22" rx="5" fill={WHITE} stroke={INK} strokeWidth="4" />
        <rect x="134" y="84" width="28" height="22" rx="5" fill={WHITE} stroke={INK} strokeWidth="4" />
        <g className="animate-blink" style={loop(5, -2.2)}>
          <circle cx="94" cy="96" r="5" fill={INK} />
          <circle cx="150" cy="96" r="5" fill={INK} />
        </g>
        {/* door, with a smile */}
        <rect x="108" y="100" width="24" height="34" rx="10" fill={BRAND} stroke={INK} strokeWidth="5" />
        <path d="M114 116q6 5 12 0" stroke={WHITE} strokeWidth="3" />
        <circle cx="127" cy="124" r="2" fill={SUN} />
      </g>
      <path d="M28 136H212" stroke={INK} strokeWidth="5" />
    </>
  );
}

function Truck() {
  return (
    <>
      <Dots items={[[34, 32, 16], [210, 28, 12]]} />
      <Spark x={206} y={44} delay={-0.5} />
      {/* road */}
      <path d="M0 134H240" stroke={INK} strokeWidth="4" strokeDasharray="14 14" className="animate-march" style={{ animationDuration: "0.8s" }} />
      {/* speed lines */}
      {[
        { d: "M14 66h18", delay: 0 },
        { d: "M6 84h24", delay: -0.4 },
        { d: "M16 102h14", delay: -0.8 },
      ].map((line) => (
        <path key={line.d} d={line.d} stroke={INK} strokeWidth="4" style={custom("pc-pulse", 1.2, line.delay)} />
      ))}
      <g style={custom("pc-bump", 0.9)}>
        <rect x="40" y="46" width="112" height="70" rx="10" fill={WHITE} stroke={INK} strokeWidth="5" />
        <path d="M150 64h28l22 24v20a8 8 0 0 1-8 8h-42Z" fill={BRAND} stroke={INK} strokeWidth="5" />
        <path d="M158 72h17l15 16h-32Z" fill={SCREEN} stroke={INK} strokeWidth="4" />
        <rect x="192" y="100" width="12" height="8" rx="3" fill={SUN} stroke={INK} strokeWidth="3" />
        <Face x={96} y={76} gap={28} eye={5} smile={16} delay={-1.4} />
      </g>
      {/* wheels */}
      {[78, 172].map((cx) => (
        <g key={cx} className="animate-spin-slow" style={loop(1.6)}>
          <circle cx={cx} cy="118" r="14" fill={INK} />
          <circle cx={cx} cy="118" r="6" fill={WHITE} />
          <path d={`M${cx - 6} 118h12`} stroke={INK} strokeWidth="3" />
        </g>
      ))}
    </>
  );
}

function Scales() {
  return (
    <>
      <Dots items={[[28, 30, 16], [216, 126, 16]]} />
      <Spark x={212} y={28} delay={-1.1} />
      <Spark x={28} y={118} s={7} delay={-0.3} dur={3} color={WHITE} />
      <path d="M120 44V124" stroke={INK} strokeWidth="6" />
      <rect x="86" y="122" width="68" height="14" rx="7" fill={BRAND} stroke={INK} strokeWidth="5" />
      <g style={custom("pc-tilt", 4.6, 0, at(120, 44))}>
        <path d="M56 44H184" stroke={INK} strokeWidth="6" />
        <path d="M56 44L42 86M56 44L70 86M184 44L170 86M184 44L198 86" stroke={INK} strokeWidth="3.5" />
        {/* left pan: a little bot */}
        <rect x="44" y="64" width="24" height="22" rx="6" fill={MINT} stroke={INK} strokeWidth="4" />
        <g className="animate-blink" style={loop(4.4, -0.6)}>
          <circle cx="51" cy="74" r="2.4" fill={INK} />
          <circle cx="61" cy="74" r="2.4" fill={INK} />
        </g>
        <path d="M34 86H78Q76 102 56 102Q36 102 34 86Z" fill={WHITE} stroke={INK} strokeWidth="5" />
        {/* right pan: a person */}
        <circle cx="184" cy="73" r="12" fill={SUN} stroke={INK} strokeWidth="4" />
        <g className="animate-blink" style={loop(5.3, -2.4)}>
          <circle cx="179.5" cy="72" r="2.4" fill={INK} />
          <circle cx="188.5" cy="72" r="2.4" fill={INK} />
        </g>
        <path d="M180 78q4 3 8 0" stroke={INK} strokeWidth="2.6" />
        <path d="M162 86H206Q204 102 184 102Q164 102 162 86Z" fill={WHITE} stroke={INK} strokeWidth="5" />
      </g>
      <circle cx="120" cy="40" r="9" fill={SUN} stroke={INK} strokeWidth="5" />
    </>
  );
}

function Magnifier() {
  return (
    <>
      <Dots items={[[210, 30, 16], [26, 126, 14]]} />
      <Spark x={30} y={30} delay={-0.6} />
      {/* papers being inspected */}
      <g className="animate-float" style={loop(7.2, -1)}>
        <rect x="34" y="40" width="72" height="92" rx="8" fill={WHITE} stroke={INK} strokeWidth="5" transform="rotate(-6 70 86)" />
        <path d="M48 64H90M48 80H92M48 96H80M48 112H88" stroke="#C9D3F5" strokeWidth="5" transform="rotate(-6 70 86)" />
      </g>
      <g style={custom("pc-search", 6)}>
        <path d="M168 92L202 126" stroke={INK} strokeWidth="17" />
        <path d="M168 92L202 126" stroke={SUN} strokeWidth="7" />
        <circle cx="146" cy="68" r="36" fill="#EEF3FF" stroke={INK} strokeWidth="6" />
        <path d="M126 52a24 24 0 0 1 16-10" stroke={WHITE} strokeWidth="5" />
        {/* a big curious eye */}
        <g className="animate-blink" style={loop(4, -1.5)}>
          <ellipse cx="146" cy="70" rx="18" ry="12" fill={WHITE} stroke={INK} strokeWidth="4" />
          <circle cx="149" cy="70" r="7" fill={INK} />
          <circle cx="151.5" cy="67.5" r="2.2" fill={WHITE} />
        </g>
      </g>
      <Spark x={206} y={64} s={7} delay={-1.8} dur={3.2} color={WHITE} />
    </>
  );
}

function Pricetag() {
  return (
    <>
      <Dots items={[[214, 34, 18], [30, 40, 12]]} />
      <Spark x={34} y={70} delay={-0.4} />
      <Spark x={210} y={64} s={7} delay={-1.6} dur={3} color={WHITE} />
      {/* coins */}
      <g className="animate-float" style={loop(3.8, -0.8)}>
        <circle cx="54" cy="112" r="16" fill={SUN_LIGHT} stroke={INK} strokeWidth="5" />
        <circle cx="54" cy="112" r="8" stroke={INK} strokeWidth="3" />
      </g>
      <g className="animate-float" style={loop(4.6, -2.2)}>
        <circle cx="190" cy="110" r="12" fill={SUN_LIGHT} stroke={INK} strokeWidth="4.5" />
        <circle cx="190" cy="110" r="5.5" stroke={INK} strokeWidth="3" />
      </g>
      <circle cx="120" cy="16" r="5" fill={INK} />
      <g style={custom("pc-swing", 3.8, 0, at(120, 16))}>
        <path d="M92 58L120 36L148 58V128a8 8 0 0 1-8 8H100a8 8 0 0 1-8-8Z" fill={MINT} stroke={INK} strokeWidth="5" />
        <circle cx="120" cy="54" r="6" fill={panel.pricetag} stroke={INK} strokeWidth="4" />
        <path d="M120 16V54" stroke={INK} strokeWidth="3" />
        <Face x={120} y={84} gap={22} eye={4.2} smile={14} delay={-0.9} />
        <path d="M106 118H134" stroke={INK} strokeWidth="5" />
        <path d="M110 128H130" stroke={INK} strokeWidth="5" opacity="0.4" />
      </g>
    </>
  );
}

const scenes: Record<BlogArt, () => ReactNode> = {
  tools: Tools,
  robot: Robot,
  checklist: Checklist,
  calendar: Calendar,
  phone: Phone,
  house: House,
  truck: Truck,
  scales: Scales,
  magnifier: Magnifier,
  pricetag: Pricetag,
};

export default function PostCover({ art, className }: { art: BlogArt; className?: string }) {
  const Scene = scenes[art] ?? Tools;
  return (
    <svg
      viewBox="0 0 240 150"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid slice"
    >
      <style>{keyframes}</style>
      <rect width="240" height="150" fill={panel[art] ?? panel.tools} />
      <Scene />
    </svg>
  );
}
