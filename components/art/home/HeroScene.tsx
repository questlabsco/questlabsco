import type { CSSProperties, ReactNode } from "react";
import { ChartColumn, Hourglass, Workflow, Wrench, Zap } from "lucide-react";
import { Cloud } from "@/components/art/Doodles";
import HeroQuesty from "@/components/art/home/HeroQuesty";

// The homepage hero illustration: Questy standing on a chunky "workflow
// machine". Worried paperwork rides in on the left side of a conveyor, happy
// ticked sheets hop out on the right with a puff of steam. Five labelled
// pills (what the free audit looks at) float around it, joined to the
// machine by marching dashed lines.
//
// Coordinate system: one SVG, viewBox 0 0 1100 480. Everything positioned in
// HTML on top of it (Questy, pills, clouds) uses percentages of that box:
//   left% = x / 1100 * 100, top% = y / 480 * 100.
// From lg up the hero pulls this scene up under the button (negative top
// margin in Hero.tsx), so the top ~110 units are kept clear in the middle
// (x ~330..770) where the button and its small print sit. The two upper
// pills flank the button. Questy's antenna starts at y 118.
// Below lg the pills become a wrapped row above the scene and the
// connectors are hidden. On phones the scene is drawn wider than the
// container and cropped at both ends, so the machine stays a readable size.

const INK = "#1B1D4E";
const W = 1100;
const H = 480;

// Machine top edge. Questy's feet land here.
const MT = 258;
// Belt top edge. Belt items sit on it.
const BELT = 400;

const pct = (v: number, of: number) => `${((v / of) * 100).toFixed(3)}%`;

// The five things the audit looks at. (x, y) is the pill's centre in scene
// units; `path` is the connector from that centre to the machine.
const pills = [
  {
    label: "Your Tools",
    Icon: Wrench,
    x: 215,
    y: 55,
    path: "M215 55C330 60 390 170 418 272",
    bob: { animationDelay: "-1.2s", animationDuration: "5.8s" },
  },
  {
    label: "Time Sinks",
    Icon: Hourglass,
    x: 120,
    y: 170,
    path: "M120 170C230 175 340 215 418 290",
    bob: { animationDelay: "-2.6s", animationDuration: "4.6s" },
  },
  {
    label: "Your Workflows",
    Icon: Workflow,
    x: 265,
    y: 270,
    path: "M265 270C330 275 380 300 418 312",
    bob: { animationDelay: "0s", animationDuration: "5s" },
  },
  {
    label: "Quick Wins",
    Icon: Zap,
    x: 885,
    y: 55,
    path: "M885 55C770 60 710 170 682 272",
    bob: { animationDelay: "-0.7s", animationDuration: "5.4s" },
  },
  {
    label: "The Numbers",
    Icon: ChartColumn,
    x: 900,
    y: 230,
    path: "M900 230C820 240 740 262 682 292",
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

const GEAR_L = { cx: 452, cy: MT + 2 };
const GEAR_R = { cx: 650, cy: MT - 2 };
const gearLeft = gearPath(GEAR_L.cx, GEAR_L.cy, 38, 29, 10);
const gearRight = gearPath(GEAR_R.cx, GEAR_R.cy, 30, 22, 8);

const CLOCK = { cx: 496, cy: MT + 61 };
const DIAL = { cx: 550, cy: MT + 192 };

const SPARKLE = "M20 3c2 9 6 13 15 15-9 2-13 6-15 15-2-9-6-13-15-15 9-2 13-6 15-15z";

// All loops are transform / opacity / stroke-dashoffset only, 1 to 9 seconds,
// with different lengths and offsets so nothing moves in lockstep.
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
  0% { transform: rotate(-6deg); }
  40% { transform: rotate(4deg); }
  60% { transform: rotate(2deg); }
  100% { transform: rotate(7deg); }
}
.hero-hop {
  transform-box: fill-box;
  transform-origin: center bottom;
  animation: hero-hop 1.5s ease-in-out infinite;
}
@keyframes hero-hop {
  0%, 55%, 100% { transform: translateY(0) scale(1, 1); }
  62% { transform: translateY(0) scale(1.06, 0.94); }
  78% { transform: translateY(-10px) scale(0.97, 1.04); }
  92% { transform: translateY(0) scale(1.04, 0.96); }
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

/* the machine chugs: a 2-unit squash from its base, Questy and the gears ride it */
.hero-chug {
  transform-box: fill-box;
  transform-origin: center bottom;
  animation: hero-chug 1.3s ease-in-out infinite;
}
@keyframes hero-chug {
  0%, 100% { transform: scale(1, 1); }
  50% { transform: scale(1.006, 0.992); }
}
.hero-bump { animation: hero-bump 1.3s ease-in-out infinite; }
@keyframes hero-bump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px); }
}
/* Questy's HTML box: 1.4% of his own height is about 2 scene units */
.hero-ride { animation: hero-ride 1.3s ease-in-out infinite; }
@keyframes hero-ride {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(1.4%); }
}

/* steam puff and a sparkle each time a finished sheet leaves (every 3s) */
.hero-puff {
  transform-box: fill-box;
  transform-origin: center;
  animation: hero-puff 3s ease-out infinite;
}
@keyframes hero-puff {
  0% { opacity: 0; transform: translate(-6px, 6px) scale(0.3); }
  12% { opacity: 1; transform: translate(0, 0) scale(1); }
  40% { opacity: 0; transform: translate(8px, -20px) scale(1.25); }
  100% { opacity: 0; transform: translate(8px, -20px) scale(1.25); }
}
.hero-pop {
  transform-box: fill-box;
  transform-origin: center;
  animation: hero-pop 3s ease-out infinite;
}
@keyframes hero-pop {
  0%, 8% { opacity: 0; transform: scale(0) rotate(0deg); }
  18% { opacity: 1; transform: scale(1.2) rotate(20deg); }
  30% { opacity: 1; transform: scale(1) rotate(30deg); }
  45%, 100% { opacity: 0; transform: scale(0) rotate(45deg); }
}

/* clouds drift across their patch of sky */
.hero-cloud { animation: hero-cloud 9s ease-in-out infinite; }
@keyframes hero-cloud {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(40px); }
}
.hero-cloud-back { animation: hero-cloud-back 8s ease-in-out infinite; }
@keyframes hero-cloud-back {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-40px); }
}

/* Questy: breathing head, pulsing antenna light, glancing eyes */
.hero-breathe { animation: hero-breathe 3.6s ease-in-out infinite; }
@keyframes hero-breathe {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px); }
}
.hero-bulb {
  transform-box: fill-box;
  transform-origin: center;
  animation: hero-bulb 2.4s ease-in-out infinite;
}
@keyframes hero-bulb {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.18); }
}
.hero-ping {
  transform-box: fill-box;
  transform-origin: center;
  animation: hero-ping 2.4s ease-out infinite;
}
@keyframes hero-ping {
  0% { opacity: 0.9; transform: scale(1); }
  70%, 100% { opacity: 0; transform: scale(2.2); }
}
.hero-look { animation: hero-look 9s ease-in-out infinite; }
@keyframes hero-look {
  0%, 38% { transform: translateX(0); }
  42%, 52% { transform: translateX(-5px); }
  56%, 66% { transform: translateX(5px); }
  70%, 100% { transform: translateX(0); }
}
`;

// Rotation pivot in scene units (for SVG parts that spin around a point).
const pivot = (x: number, y: number): CSSProperties => ({
  transformBox: "view-box",
  transformOrigin: `${x}px ${y}px`,
});

// A moving belt item. The outer group slides (CSS), the inner one is placed
// with a transform attribute so the two never fight, and the innermost one
// wobbles (worried, going in) or hops (happy, coming out).
function BeltItem({
  lane,
  delay,
  baseX,
  bounce,
  children,
}: {
  lane: "in" | "out";
  delay: number;
  baseX: number;
  bounce: CSSProperties;
  children: ReactNode;
}) {
  return (
    <g className={lane === "in" ? "hero-in" : "hero-out"} style={{ animationDelay: `${delay}s` }}>
      <g transform={`translate(${baseX} ${BELT})`}>
        <g className={lane === "in" ? "hero-wobble" : "hero-hop"} style={bounce}>
          {children}
        </g>
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
      <path d="M9 -60h18M9 -50h22" stroke={INK} strokeWidth="3" opacity="0.45" />
      {/* worried brows, eyes, wobbly frown */}
      <path d="M11 -40l8 -3M41 -40l-8 -3" stroke={INK} strokeWidth="3" />
      <circle cx="17" cy="-33" r="3" fill={INK} />
      <circle cx="35" cy="-33" r="3" fill={INK} />
      <path d="M19 -18q3.5 -4 7 0q3.5 -4 7 0" stroke={INK} strokeWidth="3" />
      {/* sweat drop */}
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
      {/* little "oh no" mouth */}
      <ellipse cx="32" cy="-8" rx="3" ry="2.6" fill={INK} />
      {/* red alert badge */}
      <circle cx="60" cy="-46" r="9" fill="#FF7B7B" stroke={INK} strokeWidth="3" />
      <path d="M60 -51v4.5" stroke={INK} strokeWidth="3" />
      <circle cx="60" cy="-42" r="1.4" fill={INK} />
    </g>
  );
}

function MessyGrid() {
  return (
    <g>
      <rect x="0" y="-62" width="60" height="58" rx="6" fill="#FFFFFF" />
      <rect x="2" y="-60" width="56" height="12" fill="#B9A7FF" />
      <rect x="21.5" y="-31.5" width="17" height="12" fill="#FF7B7B" />
      <path d="M0 -48h60M0 -33h60M0 -18h60M20 -48v44M40 -48v44" stroke={INK} strokeWidth="2.5" />
      <rect x="0" y="-62" width="60" height="58" rx="6" stroke={INK} strokeWidth="4" />
      {/* worried face squeezed into the header row and the cell below */}
      <circle cx="24" cy="-54" r="2.2" fill={INK} />
      <circle cx="36" cy="-54" r="2.2" fill={INK} />
      <path d="M25 -38q5 -4 10 0" stroke={INK} strokeWidth="2.8" />
      {/* sweat drop */}
      <path d="M64 -58q4 6 0 9q-4 -3 0 -9z" fill="#A9CBFF" stroke={INK} strokeWidth="2" />
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
      {chart ? (
        // happy closed eyes
        <path d="M13 -26q4 -5 8 0M29 -26q4 -5 8 0" stroke={INK} strokeWidth="3" />
      ) : (
        <>
          <circle cx="17" cy="-27" r="2.8" fill={INK} />
          <circle cx="33" cy="-27" r="2.8" fill={INK} />
        </>
      )}
      <circle cx="10" cy="-19" r="3" fill="#FF7B7B" opacity="0.6" />
      <circle cx="40" cy="-19" r="3" fill="#FF7B7B" opacity="0.6" />
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
        className="relative z-10 flex flex-wrap justify-center gap-1.5 sm:gap-2.5 lg:absolute lg:inset-0 lg:block"
      >
        {pills.map(({ label, Icon, x, y, bob }) => (
          <li
            key={label}
            className="whitespace-nowrap lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2"
            style={{ left: pct(x, W), top: pct(y, H) }}
          >
            <span className="pill animate-float px-2.5 py-1 text-[11px] sm:px-4 sm:py-1.5 sm:text-sm" style={bob}>
              <Icon className="hidden h-4 w-4 text-brand sm:block" strokeWidth={2.75} aria-hidden="true" />
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* The drawing. Wider than its box on phones, cropped by the hero.
          Below lg it tucks its empty sky up under the pill row. */}
      <div className="relative -mx-[30%] -mt-8 sm:-mx-[15%] md:mx-0 md:-mt-12 lg:mt-0">
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

          <Sparkle x={60} y={110} size={22} delay="-0.4s" color="#FFFFFF" />
          <Sparkle x={420} y={150} size={28} delay="0s" />
          <Sparkle x={650} y={120} size={22} delay="-1.1s" />
          <Sparkle x={1050} y={190} size={18} delay="-1.7s" color="#FFFFFF" />

          {/* conveyor legs (run off the bottom), belt and moving dashes */}
          {[70, 330, 770, 1014].map((x) => (
            <rect key={x} x={x} y={BELT + 26} width="16" height="90" rx="6" fill="#A9CBFF" stroke={INK} strokeWidth="4" />
          ))}
          <rect x="30" y={BELT} width="1040" height="26" rx="13" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
          <path d={`M48 ${BELT + 13}H1052`} stroke={INK} strokeWidth="4" strokeDasharray="3 11" opacity="0.5" className="animate-march" />

          {/* worried work going in (hidden as it passes under the machine) */}
          <BeltItem lane="in" baseX={40} delay={0} bounce={{ animationDuration: "1.1s" }}>
            <MessySheet />
          </BeltItem>
          <BeltItem lane="in" baseX={40} delay={-3} bounce={{ animationDuration: "1.5s", animationDelay: "-0.4s" }}>
            <MessyEnvelope />
          </BeltItem>
          <BeltItem lane="in" baseX={40} delay={-6} bounce={{ animationDuration: "1.3s", animationDelay: "-0.9s" }}>
            <MessyGrid />
          </BeltItem>

          {/* happy results hopping out */}
          <BeltItem lane="out" baseX={620} delay={0} bounce={{ animationDelay: "0s" }}>
            <TidySheet />
          </BeltItem>
          <BeltItem lane="out" baseX={620} delay={-3} bounce={{ animationDelay: "-0.5s", animationDuration: "1.7s" }}>
            <TidySheet chart />
          </BeltItem>
          <BeltItem lane="out" baseX={620} delay={-6} bounce={{ animationDelay: "-1s", animationDuration: "1.3s" }}>
            <TidySheet />
          </BeltItem>

          {/* gears peeking over the top of the machine, riding its chug */}
          <g className="hero-bump">
            <g style={{ ...pivot(GEAR_L.cx, GEAR_L.cy), animation: "hero-spin 9s linear infinite" }}>
              <path d={gearLeft} fill="#FFFFFF" stroke={INK} strokeWidth="5" />
              <circle cx={GEAR_L.cx} cy={GEAR_L.cy} r="10" fill="#B9A7FF" stroke={INK} strokeWidth="4" />
            </g>
            <g style={{ ...pivot(GEAR_R.cx, GEAR_R.cy), animation: "hero-spin 6s linear infinite reverse" }}>
              <path d={gearRight} fill="#35D6A0" stroke={INK} strokeWidth="5" />
              <circle cx={GEAR_R.cx} cy={GEAR_R.cy} r="8" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
            </g>
          </g>

          {/* the workflow machine (runs off the bottom edge), chugging */}
          <g className="hero-chug">
            <rect x="420" y={MT} width="260" height="260" rx="30" fill="#FFCB2E" stroke={INK} strokeWidth="6" />
            {/* intake and outlet mouths */}
            <rect x="412" y={MT + 68} width="40" height="112" rx="12" fill={INK} />
            <rect x="648" y={MT + 68} width="40" height="112" rx="12" fill={INK} />
            <path
              d={`M424 ${MT + 80}v44M440 ${MT + 80}v44M660 ${MT + 80}v44M676 ${MT + 80}v44`}
              stroke="#3B4CFF"
              strokeWidth="5"
            />
            {/* bolts */}
            <circle cx="440" cy={MT + 22} r="4" fill={INK} />
            <circle cx="660" cy={MT + 22} r="4" fill={INK} />

            {/* screen: a ticking clock and a filling progress bar */}
            <rect x="458" y={MT + 26} width="184" height="70" rx="14" fill="#DCE5FF" stroke={INK} strokeWidth="4" />
            <circle cx={CLOCK.cx} cy={CLOCK.cy} r="22" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
            <g style={{ ...pivot(CLOCK.cx, CLOCK.cy), animation: "hero-spin 8s steps(8) infinite" }}>
              <path d={`M${CLOCK.cx} ${CLOCK.cy}V${CLOCK.cy - 15}`} stroke={INK} strokeWidth="3.5" />
            </g>
            <g style={{ ...pivot(CLOCK.cx, CLOCK.cy), animation: "hero-spin 64s steps(64) infinite" }}>
              <path d={`M${CLOCK.cx} ${CLOCK.cy}H${CLOCK.cx + 11}`} stroke={INK} strokeWidth="3.5" />
            </g>
            <circle cx={CLOCK.cx} cy={CLOCK.cy} r="3" fill={INK} />
            <rect x="530" y={MT + 52} width="96" height="18" rx="9" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <rect x="534" y={MT + 56} width="88" height="10" rx="5" fill="#35D6A0" className="hero-fill" />

            {/* blinking lights */}
            {[
              { cx: 505, fill: "#FF7B7B", delay: "0s", dur: "1.6s" },
              { cx: 550, fill: "#35D6A0", delay: "-0.5s", dur: "2.1s" },
              { cx: 595, fill: "#FFFFFF", delay: "-1s", dur: "1.3s" },
            ].map((l) => (
              <circle
                key={l.cx}
                cx={l.cx}
                cy={MT + 120}
                r="11"
                fill={l.fill}
                stroke={INK}
                strokeWidth="4"
                className="hero-light"
                style={{ animationDelay: l.delay, animationDuration: l.dur }}
              />
            ))}

            {/* vent */}
            <path d={`M492 ${MT + 145}H608M492 ${MT + 157}H608`} stroke={INK} strokeWidth="4" opacity="0.8" />

            {/* dial */}
            <circle cx={DIAL.cx} cy={DIAL.cy} r="24" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
            <g className="hero-dial" style={pivot(DIAL.cx, DIAL.cy)}>
              <path d={`M${DIAL.cx} ${DIAL.cy}V${DIAL.cy - 17}`} stroke="#FF7B7B" strokeWidth="4" />
            </g>
            <circle cx={DIAL.cx} cy={DIAL.cy} r="4" fill={INK} />
          </g>

          {/* steam puff and a sparkle as each finished sheet leaves the outlet */}
          <g className="hero-puff" style={{ animationDelay: "0.4s" }}>
            <circle cx="700" cy={MT + 64} r="8" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <circle cx="728" cy={MT + 64} r="7" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
            <circle cx="714" cy={MT + 56} r="11" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
          </g>
          <g transform={`translate(732 ${MT + 82}) scale(0.5)`}>
            <g className="hero-pop" style={{ animationDelay: "0.9s" }}>
              <path d={SPARKLE} fill="#FFCB2E" stroke={INK} strokeWidth="4" />
            </g>
          </g>
        </svg>

        {/* Questy, standing on top of the machine.
            x 485..615 in scene units; antenna at y 118, feet land on y 258.
            He rides the machine's chug. */}
        <div
          className="absolute hero-ride"
          style={{ left: pct(485, W), top: pct(118, H), width: pct(130, W) }}
        >
          <HeroQuesty className="block h-auto w-full" />
        </div>

        {/* clouds drifting in the open sky at either end (cropped away on phones) */}
        <div
          className="absolute hero-cloud"
          style={{ left: pct(15, W), top: pct(222, H), width: pct(80, W) }}
        >
          <Cloud className="block h-auto w-full" />
        </div>
        <div
          className="absolute hero-cloud-back"
          style={{ left: pct(965, W), top: pct(110, H), width: pct(96, W), animationDelay: "-3s" }}
        >
          <Cloud className="block h-auto w-full" />
        </div>
      </div>
    </div>
  );
}
