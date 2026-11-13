import Mascot from "@/components/art/Mascot";
import { ServiceGlyph } from "./ServiceIcon";

const INK = "#1B1D4E";
const pivot = { transformBox: "fill-box", transformOrigin: "center" } as const;

// Hero picture for a service page: a big sticker-style window with the
// service's own icon bobbing in the middle, a few floating badges around
// it, and Questy keeping watch. One scene for all eight services; only the
// central icon changes with `slug`. Decorative, desktop only (the page
// hides it on small screens).
export default function ServiceHeroScene({ slug, className }: { slug: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`relative mx-auto w-full max-w-[440px] ${className ?? ""}`}>
      <svg
        viewBox="0 0 440 400"
        className="block w-full h-auto"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* slow dashed orbit */}
        <circle
          cx="220"
          cy="196"
          r="176"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeDasharray="3 15"
          opacity="0.55"
          className="animate-spin-slow"
          style={pivot}
        />

        {/* main window: hard shadow, then the panel */}
        <rect x="110" y="88" width="236" height="230" rx="30" fill={INK} />
        <rect x="98" y="76" width="236" height="230" rx="30" fill="#FFFFFF" stroke={INK} strokeWidth="6" />
        <path d="M98 118h236" stroke={INK} strokeWidth="5" />
        <circle cx="126" cy="97" r="7" fill="#FF7B7B" stroke={INK} strokeWidth="3.5" />
        <circle cx="148" cy="97" r="7" fill="#FFCB2E" stroke={INK} strokeWidth="3.5" />
        <circle cx="170" cy="97" r="7" fill="#35D6A0" stroke={INK} strokeWidth="3.5" />

        {/* the service's own icon, bobbing */}
        <g className="animate-float" style={pivot}>
          <svg x="146" y="142" width="140" height="140" viewBox="0 0 64 64" overflow="visible">
            <ServiceGlyph slug={slug} />
          </svg>
        </g>

        {/* left badge: a ticked task */}
        <g className="animate-float" style={{ ...pivot, animationDelay: "-1.6s" }}>
          <rect x="28" y="146" width="104" height="44" rx="22" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
          <circle cx="52" cy="168" r="12" fill="#35D6A0" stroke={INK} strokeWidth="4" />
          <path d="M46 168l4.5 4.5 8-9" stroke={INK} strokeWidth="4" />
          <path d="M72 162h44M72 175h28" stroke={INK} strokeWidth="4.5" />
        </g>

        {/* right badge: little rising bar chart */}
        <g className="animate-float" style={{ ...pivot, animationDelay: "-3.2s" }}>
          <rect x="306" y="236" width="100" height="72" rx="18" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
          <rect x="324" y="280" width="14" height="14" rx="3" fill="#FF7B7B" stroke={INK} strokeWidth="3.5" />
          <rect x="349" y="268" width="14" height="26" rx="3" fill="#FFCB2E" stroke={INK} strokeWidth="3.5" />
          <rect x="374" y="254" width="14" height="40" rx="3" fill="#35D6A0" stroke={INK} strokeWidth="3.5" />
        </g>

        {/* sun badge, top right */}
        <g className="animate-wiggle" style={pivot}>
          <circle cx="362" cy="84" r="26" fill="#FFCB2E" stroke={INK} strokeWidth="5" />
          <circle cx="354" cy="80" r="3" fill={INK} />
          <circle cx="370" cy="80" r="3" fill={INK} />
          <path d="M354 90q8 7 16 0" stroke={INK} strokeWidth="4" />
        </g>

        {/* sparkles */}
        <path
          d="M70 58c2 9 6 13 15 15-9 2-13 6-15 15-2-9-6-13-15-15 9-2 13-6 15-15z"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="3.5"
          className="animate-twinkle"
          style={pivot}
        />
        <path
          d="M408 160c1.5 6 4 8.5 10 10-6 1.5-8.5 4-10 10-1.5-6-4-8.5-10-10 6-1.5 8.5-4 10-10z"
          fill="#FFCB2E"
          stroke={INK}
          strokeWidth="3"
          className="animate-twinkle"
          style={{ ...pivot, animationDelay: "-1.1s" }}
        />
        <path
          d="M250 26c1.5 6 4 8.5 10 10-6 1.5-8.5 4-10 10-1.5-6-4-8.5-10-10 6-1.5 8.5-4 10-10z"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="3"
          className="animate-twinkle"
          style={{ ...pivot, animationDelay: "-0.5s" }}
        />

        {/* dashed hand-off line from the window to Questy */}
        <path
          d="M110 300c-20 18-34 30-40 44"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeDasharray="2 10"
          className="animate-march"
        />
      </svg>

      <Mascot wave mood="wink" className="absolute left-0 bottom-[-6%] w-[22%] animate-float" />
    </div>
  );
}
