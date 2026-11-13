// "Questy", the site mascot: a small friendly robot. Thick navy outlines,
// flat fills, blinking eyes and an optional wave. Shared by every section
// so the character stays the same everywhere.
//
// Usage: <Mascot className="w-40" wave mood="happy" />
export default function Mascot({
  className,
  wave = false,
  mood = "happy",
}: {
  className?: string;
  wave?: boolean;
  mood?: "happy" | "wow" | "wink";
}) {
  const INK = "#1B1D4E";
  return (
    <svg
      viewBox="0 0 200 224"
      className={className}
      role="img"
      aria-label="Questy, the Quest Labs robot"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* antenna */}
      <path d="M100 38V20" stroke={INK} strokeWidth="6" />
      <circle cx="100" cy="14" r="9" fill="#FFCB2E" stroke={INK} strokeWidth="5" />

      {/* ears */}
      <rect x="24" y="70" width="16" height="30" rx="7" fill="#35D6A0" stroke={INK} strokeWidth="5" />
      <rect x="160" y="70" width="16" height="30" rx="7" fill="#35D6A0" stroke={INK} strokeWidth="5" />

      {/* head */}
      <rect x="40" y="38" width="120" height="94" rx="24" fill="#FFFFFF" stroke={INK} strokeWidth="6" />
      {/* face screen */}
      <rect x="54" y="52" width="92" height="66" rx="16" fill="#DCE5FF" stroke={INK} strokeWidth="4" />

      {/* eyes */}
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }} className="animate-blink">
        {mood === "wink" ? (
          <path d="M72 84q8-8 16 0" stroke={INK} strokeWidth="5" />
        ) : (
          <ellipse cx="80" cy="82" rx="7.5" ry={mood === "wow" ? 10.5 : 9} fill={INK} />
        )}
        <ellipse cx="120" cy="82" rx="7.5" ry={mood === "wow" ? 10.5 : 9} fill={INK} />
      </g>
      {mood !== "wink" && <circle cx="82.5" cy="78.5" r="2.4" fill="#FFFFFF" />}
      <circle cx="122.5" cy="78.5" r="2.4" fill="#FFFFFF" />

      {/* cheeks */}
      <circle cx="66" cy="98" r="5.5" fill="#FF7B7B" opacity="0.7" />
      <circle cx="134" cy="98" r="5.5" fill="#FF7B7B" opacity="0.7" />

      {/* mouth */}
      {mood === "wow" ? (
        <ellipse cx="100" cy="103" rx="7" ry="8" fill={INK} />
      ) : (
        <path d="M86 99q14 13 28 0" stroke={INK} strokeWidth="5" />
      )}

      {/* neck */}
      <path d="M92 132v10M108 132v10" stroke={INK} strokeWidth="6" />

      {/* left arm */}
      <path d="M56 162q-22 4-26 24" stroke={INK} strokeWidth="6" />
      <circle cx="29" cy="190" r="9" fill="#FFFFFF" stroke={INK} strokeWidth="5" />

      {/* right arm: raised, waves when asked */}
      <g
        style={{ transformBox: "view-box", transformOrigin: "144px 160px" }}
        className={wave ? "animate-wave" : undefined}
      >
        <path d="M144 160q22-6 30-30" stroke={INK} strokeWidth="6" />
        <circle cx="175" cy="124" r="9" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
      </g>

      {/* body */}
      <rect x="56" y="140" width="88" height="62" rx="20" fill="#3B4CFF" stroke={INK} strokeWidth="6" />
      {/* chest panel with a bolt */}
      <rect x="78" y="154" width="44" height="30" rx="8" fill="#FFFFFF" stroke={INK} strokeWidth="4" />
      <path d="M103 158l-9 12h8l-4 10 11-13h-8l2-9z" fill="#FFCB2E" stroke={INK} strokeWidth="2.5" />

      {/* feet */}
      <rect x="68" y="202" width="26" height="14" rx="7" fill={INK} />
      <rect x="106" y="202" width="26" height="14" rx="7" fill={INK} />
    </svg>
  );
}
