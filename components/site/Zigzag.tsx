import { useId } from "react";

// Zigzag edge between two sections. The strip takes the colour of the
// section above, and its teeth take the colour of the section below.
const fill = {
  white: "#FFFFFF",
  pale: "#F3F6FF",
  hero: "#5F95FF", // the bottom of the blue hero gradient
  ink: "#12143A",
} as const;

type Tone = keyof typeof fill;

export default function Zigzag({ from, to }: { from: Tone; to: Tone }) {
  // Unique per strip, so a page with several strips has no repeated ids.
  const id = `zz-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <div aria-hidden="true" className="relative -mb-px" style={{ background: fill[from] }}>
      <svg
        className="block w-full"
        height="16"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={id} width="28" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 16 L14 2 L28 16 Z" fill={fill[to]} />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
