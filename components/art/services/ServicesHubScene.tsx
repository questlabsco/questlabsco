import Mascot from "@/components/art/Mascot";
import { Sparkle } from "@/components/art/Doodles";
import { services } from "@/lib/data/services";
import { ServiceGlyph } from "./ServiceIcon";

const INK = "#1B1D4E";
const pivot = { transformBox: "fill-box", transformOrigin: "center" } as const;

// Tile centres on a ring around Questy, clockwise from the top.
const spots = [
  [220, 50],
  [340, 91],
  [390, 190],
  [340, 289],
  [220, 330],
  [100, 289],
  [50, 190],
  [100, 91],
] as const;

const fills = ["#FFF1B8", "#FFFFFF", "#E4F0FF", "#FFF7E3"];
const T = 72; // tile size

// Hero picture for the services hub: all eight service icons as sticker
// tiles bobbing on a ring, a dashed orbit marching behind them, and Questy
// waving in the middle. Decorative. The caller sets the width.
export default function ServicesHubScene({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative mx-auto w-full ${className ?? "max-w-[460px]"}`}>
      <svg
        viewBox="0 0 440 380"
        className="block h-auto w-full"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* dashed orbit behind the tiles */}
        <ellipse
          cx="220"
          cy="190"
          rx="170"
          ry="140"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeDasharray="2 12"
          opacity="0.7"
          className="animate-march"
          style={{ animationDuration: "2.4s" }}
        />

        {services.slice(0, spots.length).map((s, i) => {
          const [cx, cy] = spots[i];
          const x = cx - T / 2;
          const y = cy - T / 2;
          return (
            <g
              key={s.slug}
              className="animate-float"
              style={{
                ...pivot,
                animationDuration: `${4 + (i % 4) * 0.7}s`,
                animationDelay: `${-i * 0.65}s`,
              }}
            >
              <rect x={x + 5} y={y + 5} width={T} height={T} rx="18" fill={INK} />
              <rect
                x={x}
                y={y}
                width={T}
                height={T}
                rx="18"
                fill={fills[i % fills.length]}
                stroke={INK}
                strokeWidth="4.5"
              />
              <svg x={x + 10} y={y + 10} width={T - 20} height={T - 20} viewBox="0 0 64 64" overflow="visible">
                <ServiceGlyph slug={s.slug} />
              </svg>
            </g>
          );
        })}
      </svg>

      <Sparkle className="absolute left-[32%] top-[16%] w-[6%] animate-twinkle" />
      <Sparkle className="absolute right-[33%] bottom-[14%] w-[5%] animate-twinkle [animation-delay:-1.2s] [animation-duration:2.9s]" />

      {/* Questy in the middle. The outer box centres him; the inner bob is separate
          so the float animation doesn't fight the centring transform. */}
      <div className="absolute left-1/2 top-1/2 w-[29%] -translate-x-1/2 -translate-y-1/2">
        <Mascot wave className="w-full animate-float [animation-duration:4.6s]" />
      </div>
    </div>
  );
}
