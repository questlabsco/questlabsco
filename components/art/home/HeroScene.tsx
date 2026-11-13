import type { CSSProperties, ReactNode } from "react";
import { ChartColumn, Hourglass, Workflow, Wrench, Zap } from "lucide-react";
import Mascot from "@/components/art/Mascot";
import { Cloud } from "@/components/art/Doodles";

// The homepage hero illustration: Questy standing on a chunky "workflow
// machine". Messy work rides in on the left side of a conveyor, tidy ticked
// sheets come out on the right. Five labelled pills (what the free audit
// looks at) float around it, joined to the machine by marching dashed lines.
//
// Coordinate system: one SVG, viewBox 0 0 1100 480. Everything positioned in
// HTML on top of it (Questy, pills, clouds) uses percentages of that box:
//   left% = x / 1100 * 100, top% = y / 480 * 100.
// Below lg the pills become a wrapped row above the scene and the
// connectors are hidden. On phones the scene is drawn wider than the
// container and cropped at both ends, so the machine stays a readable size.

const INK = "#1B1D4E";
const W = 1100;
const H = 480;

const pct = (v: number, of: number) => `${((v / of) * 100).toFixed(3)}%`;

// The five things the audit looks at. (x, y) is the pill's centre in scene
// units; `to` is the connector path from that centre to the machine.
const pills = [
  {
    label: "Your Workflows",
    Icon: Workflow,
    x: 115,
    y: 220,
    path: "M115 220C230 250 330 255 418 250",
    bob: { animationDelay: "0s", animationDuration: "5s" },
  },
  {
    label: "Your Tools",
    Icon: Wrench,
    x: 235,
    y: 110,
    path: "M235 110C330 110 390 160 418 205",
    bob: { animationDelay: "-1.2s", animationDuration: "5.8s" },
  },
  {
    label: "Time Sinks",
    Icon: Hourglass,
    x: 385,
    y: 45,
    path: "M385 45C395 90 420 115 440 138",
    bob: { animationDelay: "-2.6s", animationDuration: "4.6s" },
  },
  {
    label: "Quick Wins",
    Icon: Zap,
    x: 820,
    y: 90,
    path: "M820 90C740 100 700 150 682 205",
    bob: { animationDelay: "-0.7s", animationDuration: "5.4s" },
  },
  {
    label: "The Numbers",
    Icon: ChartColumn,
    x: 975,
    y: 210,
    path: "M975 210C870 240 760 250 682 250",
    bob: { animationDelay: "-3.3s", animationDuration: "6.2s" },
  },
];

// Gear outline with trapezoid teeth, as a closed path.
function gearPath(cx: number, cy: number, rOuter: number, rInner: number, teeth: number) {
  const pts: string[] = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const corners: [number, number][] = [
      [a - step * 0.3, rInner],
      [a - step * 0.17, rOuter],
      [a + step * 0.17, rOuter],
      [a + step * 0.3, rInner],
    ];
    for (const [ang, r] of corners) {
      pts.push(`${(cx + r * Math.cos(ang)).toFixed(1)} ${(cy + r * Math.sin(ang)).toFixed(1)}`);
    }
  }
  return `M${pts.join("L")}Z`;
}

const GEAR_L = { cx: 452, cy: 172 };
const GEAR_R = { cx: 650, cy: 168 };
const gearLeft = gearPath(GEAR_L.cx, GEAR_L.cy, 38, 29, 10);
const gearRight = gearPath(GEAR_R.cx, GEAR_R.cy, 30, 22, 8);

const SPARKLE = "M20 3c2 9 6 13 15 15-9 2-13 6-15 15-2-9-6-13-15-15 9-2 13-6 15-15z";

const css = `
.hero-in { animation: hero-in 9s linear infinite; }
.hero-out { animation: hero-out 9s linear infinite; }
@keyframes hero-in {
  0% { transform: translateX(0); opacity: 0; }
  8% { opacity: 1; }
  100% { transform: translateX(400px); opacity: 1; }
}
@keyframes hero-out {
  0% { transform: translateX(0); opacity: 1; }
  88% { opacity: 1; }
  100% { transform: translateX(380px); opacity: 0; }
}
.hero-wobble {
  transform-box: fill-box;
  transform-origin: center bottom;
  animation: hero-wobble 1.4s ease-in-out infinite alternate;
}
@keyframes hero-wobble {
  from { transform: rotate(-6deg); }
  to { transform: rotate(6deg); }
}
@keyframes hero-spin { to { transform: rotate(360deg); } }
.hero-light { animation: hero-light 1.6s ease-in-out infinite; }
@keyframes hero-light {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.hero-fill {
  transform-box: fill-box;
  transform-origin: left center;
  animation: hero-fill 3s ease-in-out infinite;
}
@keyframes hero-fill {
  0% { transform: scaleX(0.08); }
  75%, 100% { transform: scaleX(1); }
}
.hero-dial { animation: hero-dial 2.6s ease-in-out infinite alternate; }
@keyframes hero-dial {
  from { transform: rotate(-50deg); }
  to { transform: rotate(50deg); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-in, .hero-out {
    animation: none !important;
    opacity: 1;
    transform: translateX(var(--hero-x, 0px));
  }
}
`;

// Rotation pivot in scene units (for SVG parts that spin around a point).
const pivot = (x: number, y: number): CSSProperties => ({
  transformBox: "view-box",
  transformOrigin: `${x}px ${y}px`,
});

// A moving belt item. The outer group slides (CSS), the inner one is placed
// with a transform attribute so the two never fight. `rest` is where the
// item sits when motion is reduced.
function BeltItem({
  lane,
  delay,
  rest,
  baseX,
  wobble = false,
  children,
}: {
  lane: "in" | "out";
  delay: number;
  rest: number;
  baseX: number;
  wobble?: boolean;
  children: ReactNode;
}) {
  const style = {
    animationDelay: `${delay}s`,
    "--hero-x": `${rest}px`,
  } as CSSProperties;
  return (
    <g className={lane === "in" ? "hero-in" : "hero-out"} style={style}>
      <g transform={`translate(${baseX} 360)`}>
        {wobble ? (
          <g className="hero-wobble" style={{ animationDelay: `${delay / 2}s` }}>
            {children}
          </g>
        ) : (
          children
        )}
      </g>
    </g>
  );
}

// ---- belt items, drawn with the bottom-left corner at (0, 0) ------------

function MessySheet() {
  return (
    <g>
      <rect x="0" y="-70" width="52" height="66" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
      <path d="M36 -70V-56H52" fill="#DCE5FF" stroke={INK} strokeWidth="3.5" />
      <path d="M9 -60h18M9 -50h30" stroke={INK} strokeWidth="3" opacity="0.45" />
      <circle cx="17" cy="-34" r="3" fill={INK} />
      <circle cx="35" cy="-34" r="3" fill={INK} />
      <path d="M20 -20q6 -5 12 0" stroke={INK} strokeWidth="3.5" />
      <path d="M46 -47q4 6 0 9q-4 -3 0 -9z" fill="#A9CBFF" stroke={INK} strokeWidth="2" />
    </g>
  );
}

function MessyEnvelope() {
  return (
    <g>
      <rect x="0" y="-44" width="64" height="42" rx="6" fill="#FFE38A" stroke={INK} strokeWidth="4" />
      <path d="M3 -41L32 -22L61 -41" stroke={INK} strokeWidth="3.5" />
      <circle cx="22" cy="-14" r="2.6" fill={INK} />
      <circle cx="42" cy="-14" r="2.6" fill={INK} />
      <path d="M28 -8q4 -3 8 0" stroke={INK} strokeWidth="3" />
      <circle cx="60" cy="-46" r="9" fill="#FF7B7B" stroke={INK} strokeWidth="3" />
      <path d="M60 -51v4.5" stroke={INK} strokeWidth="3" />
      <circle cx="60" cy="-42" r="1.4" fill={INK} />
    </g>
  );
}

function MessyGrid() {
  return (
    <g>
      <rect x="2" y="-60" width="56" height="12" fill="#B9A7FF" />
      <rect x="21.5" y="-31.5" width="17" height="12" fill="#FF7B7B" />
      <path d="M0 -48h60M0 -33h60M0 -18h60M20 -48v44M40 -48v44" stroke={INK} strokeWidth="2.5" />
      <rect x="0" y="-62" width="60" height="58" rx="6" stroke={INK} strokeWidth="4" />
      {/* tiny worried face in the header row */}
      <circle cx="24" cy="-54" r="2.2" fill={INK} />
      <circle cx="36" cy="-54" r="2.2" fill={INK} />
    </g>
  );
}

function TidySheet({ chart = false }: { chart?: boolean }) {
  return (
    <g>
      <rect x="0" y="-64" width="50" height="60" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
      {chart ? (
        <path d="M10 -38v-8M17 -38v-14M24 -38v-11M31 -38v-17" stroke="#3B4CFF" strokeWidth="4.5" />
      ) : (
        <path d="M10 -52h22M10 -43h30" stroke="#A9CBFF" strokeWidth="3.5" />
      )}
      <circle cx="17" cy="-27" r="2.8" fill={INK} />
      <circle cx="33" cy="-27" r="2.8" fill={INK} />
      <path d="M19 -18q6 6 12 0" stroke={INK} strokeWidth="3.5" />
      <circle cx="46" cy="-62" r="12" fill="#35D6A0" stroke={INK} strokeWidth="3.5" />
      <path d="M40 -62l4 4l8 -9" stroke={INK} strokeWidth="3.5" />
    </g>
  );
}

function Sparkle({ x, y, size, delay, color = "#FFCB2E" }: { x: number; y: number; size: number; delay: string; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size / 40})`}>
      <g className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: delay }}>
        <path d={SPARKLE} fill={color} stroke={INK} strokeWidth="3.5" />
      </g>
    </g>
  );
}

export default function HeroScene() {
  return (
    <div className="relative">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* The five audit areas. A wrapped row on small screens; floating
          labels around the machine from lg up. */}
      <ul
        aria-label="What the free audit looks at"
        className="mb-6 flex flex-wrap justify-center gap-2.5 lg:absolute lg:inset-0 lg:z-10 lg:mb-0 lg:block"
      >
        {pills.map(({ label, Icon, x, y, bob }) => (
          <li
            key={label}
            className="whitespace-nowrap lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2"
            style={{ left: pct(x, W), top: pct(y, H) }}
          >
            <span className="pill animate-float" style={bob}>
              <Icon className="h-4 w-4 text-brand" strokeWidth={2.75} aria-hidden="true" />
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* The drawing. Wider than its box on phones, cropped by the hero. */}
      <div className="relative -mx-[30%] sm:-mx-[15%] md:mx-0">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          aria-hidden="true"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* connectors from each pill to the machine (lg only) */}
          <g className="hidden lg:inline" stroke={INK} strokeWidth="4" strokeDasharray="3 11" opacity="0.7">
            {pills.map((p) => (
              <path key={p.label} d={p.path} className="animate-march" />
            ))}
          </g>

          <Sparkle x={60} y={255} size={22} delay="-0.4s" color="#FFFFFF" />
          <Sparkle x={454} y={86} size={28} delay="0s" />
          <Sparkle x={690} y={60} size={22} delay="-1.1s" />
          <Sparkle x={712} y={258} size={18} delay="-1.7s" color="#FFFFFF" />

          {/* conveyor legs, belt and moving dashes */}
          {[70, 330, 770, 1014].map((x) => (
            <rect key={x} x={x} y="386" width="16" height="120" rx="6" fill="#A9CBFF" stroke={INK} strokeWidth="4" />
          ))}
          <rect x="30" y="360" width="1040" height="26" rx="13" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
          <path d="M48 373H1052" stroke={INK} strokeWidth="4" strokeDasharray="3 11" opacity="0.5" className="animate-march" />

          {/* messy work going in (hidden as it passes under the machine) */}
          <BeltItem lane="in" baseX={40} delay={0} rest={266} wobble>
            <MessySheet />
          </BeltItem>
          <BeltItem lane="in" baseX={40} delay={-3} rest={133} wobble>
            <MessyEnvelope />
          </BeltItem>
          <BeltItem lane="in" baseX={40} delay={-6} rest={0} wobble>
            <MessyGrid />
          </BeltItem>

          {/* tidy results coming out */}
          <BeltItem lane="out" baseX={620} delay={0} rest={80}>
            <TidySheet />
          </BeltItem>
          <BeltItem lane="out" baseX={620} delay={-3} rest={334}>
            <TidySheet chart />
          </BeltItem>
          <BeltItem lane="out" baseX={620} delay={-6} rest={207}>
            <TidySheet />
          </BeltItem>

          {/* gears peeking over the top of the machine */}
          <g className="animate-spin-slow" style={pivot(GEAR_L.cx, GEAR_L.cy)}>
            <path d={gearLeft} fill="#FFFFFF" stroke={INK} strokeWidth="5" />
            <circle cx={GEAR_L.cx} cy={GEAR_L.cy} r="10" fill="#B9A7FF" stroke={INK} strokeWidth="4" />
          </g>
          <g style={{ ...pivot(GEAR_R.cx, GEAR_R.cy), animation: "hero-spin 8s linear infinite reverse" }}>
            <path d={gearRight} fill="#35D6A0" stroke={INK} strokeWidth="5" />
            <circle cx={GEAR_R.cx} cy={GEAR_R.cy} r="8" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
          </g>

          {/* the workflow machine (runs off the bottom edge) */}
          <rect x="420" y="170" width="260" height="340" rx="30" fill="#FFCB2E" stroke={INK} strokeWidth="6" />
          {/* intake and outlet mouths */}
          <rect x="412" y="278" width="40" height="114" rx="12" fill={INK} />
          <rect x="648" y="278" width="40" height="114" rx="12" fill={INK} />
          <path d="M424 290v44M440 290v44M660 290v44M676 290v44" stroke="#3B4CFF" strokeWidth="5" />
          {/* bolts */}
          <circle cx="440" cy="192" r="4" fill={INK} />
          <circle cx="660" cy="192" r="4" fill={INK} />

          {/* screen: a spinning clock and a filling progress bar */}
          <rect x="458" y="196" width="184" height="70" rx="14" fill="#DCE5FF" stroke={INK} strokeWidth="4" />
          <circle cx="496" cy="231" r="22" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
          <g style={{ ...pivot(496, 231), animation: "hero-spin 3s linear infinite" }}>
            <path d="M496 231V216" stroke={INK} strokeWidth="3.5" />
          </g>
          <g style={{ ...pivot(496, 231), animation: "hero-spin 36s linear infinite" }}>
            <path d="M496 231H507" stroke={INK} strokeWidth="3.5" />
          </g>
          <circle cx="496" cy="231" r="3" fill={INK} />
          <rect x="530" y="222" width="96" height="18" rx="9" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          <rect x="534" y="226" width="88" height="10" rx="5" fill="#35D6A0" className="hero-fill" />

          {/* blinking lights */}
          {[
            { cx: 505, fill: "#FF7B7B", delay: "0s" },
            { cx: 550, fill: "#35D6A0", delay: "-0.5s" },
            { cx: 595, fill: "#FFFFFF", delay: "-1s" },
          ].map((l) => (
            <circle
              key={l.cx}
              cx={l.cx}
              cy="296"
              r="11"
              fill={l.fill}
              stroke={INK}
              strokeWidth="4"
              className="hero-light"
              style={{ animationDelay: l.delay }}
            />
          ))}

          {/* vent */}
          <path d="M492 330H608M492 344H608M492 358H608" stroke={INK} strokeWidth="4" opacity="0.8" />

          {/* dial */}
          <circle cx="550" cy="420" r="24" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
          <g className="hero-dial" style={pivot(550, 420)}>
            <path d="M550 420V403" stroke="#FF7B7B" strokeWidth="4" />
          </g>
          <circle cx="550" cy="420" r="4" fill={INK} />
        </svg>

        {/* Questy, standing on top of the machine */}
        {/* x 485..615 in scene units; feet land on the machine top (y 170) */}
        <div
          className="absolute"
          style={{ left: pct(485, W), top: pct(32, H), width: pct(130, W) }}
        >
          <Mascot wave className="block h-auto w-full" />
        </div>

        {/* clouds in the open sky at either end (cropped away on phones) */}
        <div
          className="absolute animate-drift"
          style={{ left: pct(10, W), top: pct(118, H), width: pct(86, W) }}
        >
          <Cloud className="block h-auto w-full" />
        </div>
        <div
          className="absolute animate-drift"
          style={{ left: pct(950, W), top: pct(92, H), width: pct(100, W), animationDelay: "-5s" }}
        >
          <Cloud className="block h-auto w-full" />
        </div>
      </div>
    </div>
  );
}
