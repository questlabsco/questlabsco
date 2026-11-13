import type { CSSProperties } from "react";

// One small drawing per service, on a 64-unit canvas. `ServiceGlyph`
// returns the bare shapes so the hero scenes can drop the same drawing into
// a larger picture; `ServiceIcon` wraps it in its own <svg> for cards.
//
// Every glyph has a little idle loop of its own (blinking eyes, a spinning
// gear, lines being written, dots popping), staggered so a grid of icons
// never moves in lockstep. Hover reactions are added by the caller on top.

const INK = "#1B1D4E";

const eye = { fill: INK, stroke: "none" } as const;

// Pivot an SVG part around its own centre (or another point of its box).
function pv(extra?: CSSProperties, origin = "center"): CSSProperties {
  return { transformBox: "fill-box", transformOrigin: origin, ...extra };
}

// Keyframes for the glyph loops. Prefixed so they can't clash. Distances
// are in canvas units (the canvas is 64 wide), so they stay small.
const css = `
@keyframes svc-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
@keyframes svc-write{0%{transform:scaleX(.15)}40%,80%{transform:scaleX(1)}100%{transform:scaleX(.15)}}
@keyframes svc-pop{0%,100%{transform:scale(1)}50%{transform:scale(1.22)}}
@keyframes svc-left{0%,100%{transform:translateX(0)}50%{transform:translateX(-2px)}}
@keyframes svc-right{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}
@keyframes svc-flash{0%,100%{opacity:1}50%{opacity:.2}}
@keyframes svc-tilt{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
.svc-bob{animation:svc-bob 3.2s ease-in-out infinite}
.svc-write{animation:svc-write 3.6s ease-in-out infinite}
.svc-pop{animation:svc-pop 2.8s ease-in-out infinite}
.svc-left{animation:svc-left 2.4s ease-in-out infinite}
.svc-right{animation:svc-right 2.4s ease-in-out infinite}
.svc-flash{animation:svc-flash 2.6s ease-in-out infinite}
.svc-tilt{animation:svc-tilt 5.5s ease-in-out infinite}
`;

function glyph(slug: string) {
  switch (slug) {
    // Lightbulb with a face: ideas, strategy. Rays flicker, the bulb bobs.
    case "ai-consulting":
      return (
        <>
          <path d="M8 22h4M52 22h4M14 7l3 3M50 7l-3 3" className="svc-flash" />
          <g className="svc-bob" style={pv({ animationDuration: "3.8s" })}>
            <rect x="24" y="38" width="16" height="15" rx="4" fill="#FFFFFF" />
            <path d="M27 47h10" />
            <circle cx="32" cy="25" r="17" fill="#FFCB2E" />
            <g className="animate-blink" style={pv({ animationDelay: "-0.6s" })}>
              <circle cx="26.5" cy="23" r="2.3" {...eye} />
              <circle cx="37.5" cy="23" r="2.3" {...eye} />
            </g>
            <path d="M27 30q5 4 10 0" />
          </g>
        </>
      );
    // Busy little gear with a face: an agent doing the work. The teeth turn.
    case "ai-agents":
      return (
        <>
          <path
            d="M32 32L32 9M32 32L48.3 15.7M32 32L55 32M32 32L48.3 48.3M32 32L32 55M32 32L15.7 48.3M32 32L9 32M32 32L15.7 15.7"
            strokeWidth="9"
            className="animate-spin-slow"
            style={pv({ animationDuration: "9s" })}
          />
          <circle cx="32" cy="32" r="17" fill="#35D6A0" />
          <g className="animate-blink" style={pv({ animationDelay: "-2.1s" })}>
            <circle cx="26.5" cy="29" r="2.3" {...eye} />
            <circle cx="37.5" cy="29" r="2.3" {...eye} />
          </g>
          <path d="M27 36q5 4 10 0" />
        </>
      );
    // A page being written, with a sparkle.
    case "generative-ai":
      return (
        <>
          <rect x="10" y="7" width="34" height="47" rx="5" fill="#FFFFFF" />
          <path d="M17 19h20" className="svc-write" style={pv(undefined, "left center")} />
          <path
            d="M17 27h20"
            className="svc-write"
            style={pv({ animationDelay: "-0.5s" }, "left center")}
          />
          <path
            d="M17 35h12"
            className="svc-write"
            style={pv({ animationDelay: "-1s" }, "left center")}
          />
          <path
            d="M46 31c1.5 6 4 8.5 10 10-6 1.5-8.5 4-10 10-1.5-6-4-8.5-10-10 6-1.5 8.5-4 10-10z"
            fill="#FFCB2E"
            className="animate-twinkle"
            style={pv({ animationDuration: "2.6s" })}
          />
        </>
      );
    // Speech bubble with a face, bobbing as if mid-sentence.
    case "ai-chatbots":
      return (
        <g className="svc-bob" style={pv({ animationDuration: "2.9s", animationDelay: "-1s" })}>
          <path
            d="M20 10h24a12 12 0 0 1 12 12v10a12 12 0 0 1-12 12H30l-12 10v-10a12 12 0 0 1-10-12V22a12 12 0 0 1 12-12z"
            fill="#B9A7FF"
          />
          <g className="animate-blink" style={pv({ animationDelay: "-3.3s" })}>
            <circle cx="25" cy="25" r="2.4" {...eye} />
            <circle cx="39" cy="25" r="2.4" {...eye} />
          </g>
          <path d="M26 31q6 5 12 0" />
        </g>
      );
    // Three steps joined up: a workflow. Dashes march, each step pops in turn.
    case "workflow-automation":
      return (
        <>
          <path d="M14 23v9h11M39 32h11v8" strokeDasharray="1 5" className="animate-march" />
          <path d="M46 37l4 4 4-4" />
          <circle cx="14" cy="16" r="7" fill="#FF7B7B" className="svc-pop" style={pv()} />
          <rect
            x="25"
            y="25"
            width="14"
            height="14"
            rx="3.5"
            fill="#FFCB2E"
            className="svc-pop"
            style={pv({ animationDelay: "-1.9s" })}
          />
          <circle
            cx="50"
            cy="48"
            r="7"
            fill="#35D6A0"
            className="svc-pop"
            style={pv({ animationDelay: "-0.9s" })}
          />
        </>
      );
    // Friendly plug: connects to what you already run. Sparks fizz.
    case "ai-integration":
      return (
        <>
          <path d="M32 50v11" />
          <path d="M18 9l-3-3M46 9l3-3M32 6V2" className="svc-flash" style={{ animationDuration: "1.9s" }} />
          <g className="svc-bob" style={pv({ animationDuration: "3.5s", animationDelay: "-0.4s" })}>
            <path d="M26 24V12M38 24V12" strokeWidth="4.5" />
            <rect x="19" y="24" width="26" height="27" rx="7" fill="#A9CBFF" />
            <g className="animate-blink" style={pv({ animationDelay: "-1.4s" })}>
              <circle cx="27" cy="35" r="2.3" {...eye} />
              <circle cx="37" cy="35" r="2.3" {...eye} />
            </g>
            <path d="M28 41q4 3 8 0" />
          </g>
        </>
      );
    // Browser window with code brackets that breathe in and out.
    case "web-development":
      return (
        <>
          <rect x="6" y="10" width="52" height="43" rx="6" fill="#FFFFFF" />
          <path d="M6 20h52" />
          <circle cx="12.5" cy="15" r="1.8" {...eye} className="svc-flash" />
          <circle
            cx="18.5"
            cy="15"
            r="1.8"
            {...eye}
            className="svc-flash"
            style={{ animationDelay: "-1.3s" }}
          />
          <path d="M23 30l-6 6 6 6" stroke="#3B4CFF" className="svc-left" style={pv()} />
          <path d="M41 30l6 6-6 6" stroke="#3B4CFF" className="svc-right" style={pv()} />
          <path d="M35 28l-6 16" />
        </>
      );
    // Paint palette, rocking gently while the paint dots pop.
    case "ui-ux-design":
      return (
        <g className="svc-tilt" style={pv()}>
          <path
            d="M32 8C16 8 6 19 6 32s10 24 22 24c5 0 6-3 4-6s0-7 5-7h7c9 0 14-5 14-12C58 18 47 8 32 8z"
            fill="#FFE38A"
          />
          <circle cx="19" cy="27" r="4" fill="#FF7B7B" strokeWidth="2.5" className="svc-pop" style={pv()} />
          <circle
            cx="30"
            cy="18"
            r="4"
            fill="#3B4CFF"
            strokeWidth="2.5"
            className="svc-pop"
            style={pv({ animationDelay: "-0.7s" })}
          />
          <circle
            cx="43"
            cy="22"
            r="4"
            fill="#35D6A0"
            strokeWidth="2.5"
            className="svc-pop"
            style={pv({ animationDelay: "-1.4s" })}
          />
          <circle
            cx="18"
            cy="40"
            r="4"
            fill="#B9A7FF"
            strokeWidth="2.5"
            className="svc-pop"
            style={pv({ animationDelay: "-2.1s" })}
          />
        </g>
      );
    default:
      return (
        <path
          d="M32 6c3 14 9 20 23 23-14 3-20 9-23 23-3-14-9-20-23-23 14-3 20-9 23-23z"
          fill="#FFCB2E"
          className="animate-twinkle"
          style={pv()}
        />
      );
  }
}

// Bare shapes on a 64x64 canvas, for use inside another <svg>.
export function ServiceGlyph({ slug }: { slug: string }) {
  return (
    <g stroke={INK} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <style>{css}</style>
      {glyph(slug)}
    </g>
  );
}

// Standalone icon. Decorative: the service name sits next to it.
export default function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <ServiceGlyph slug={slug} />
    </svg>
  );
}
