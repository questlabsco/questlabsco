// Questy, the site's robot, peeking over a newspaper for the blog hub.
// Same head, ears, antenna and eyes as components/art/Mascot.tsx so the
// character stays consistent. The eyes read along the lines and flick back,
// the paper rustles, the antenna glows. Decorative only.

const INK = "#1B1D4E";
const box = { transformBox: "fill-box", transformOrigin: "center" } as const;

const keyframes = `
@keyframes qr-read{0%,8%{transform:translateX(-7px)}62%,72%{transform:translateX(7px)}80%,100%{transform:translateX(-7px)}}
@keyframes qr-rustle{0%,100%{transform:rotate(-1.2deg)}50%{transform:rotate(1.4deg)}}
@keyframes qr-peek{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes qr-steam{0%{transform:translateY(4px);opacity:0}30%{opacity:.9}100%{transform:translateY(-16px);opacity:0}}
`;

export default function QuestyReading({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 262"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <style>{keyframes}</style>

      {/* Questy's head, bobbing up from behind the paper */}
      <g style={{ ...box, animation: "qr-peek 5.2s ease-in-out infinite" }}>
        <path d="M160 38V20" stroke={INK} strokeWidth="6" />
        <circle
          cx="160"
          cy="14"
          r="9"
          fill="#FFCB2E"
          stroke={INK}
          strokeWidth="5"
          className="animate-twinkle"
          style={{ ...box, animationDuration: "2.8s" }}
        />
        <rect x="84" y="70" width="16" height="30" rx="7" fill="#35D6A0" stroke={INK} strokeWidth="5" />
        <rect x="220" y="70" width="16" height="30" rx="7" fill="#35D6A0" stroke={INK} strokeWidth="5" />
        <rect x="100" y="38" width="120" height="94" rx="24" fill="#FFFFFF" stroke={INK} strokeWidth="6" />
        <rect x="114" y="52" width="92" height="66" rx="16" fill="#DCE5FF" stroke={INK} strokeWidth="4" />
        {/* reading eyes */}
        <g style={{ ...box, animation: "qr-read 4.6s ease-in-out infinite" }}>
          <g className="animate-blink" style={{ ...box, animationDuration: "5.4s", animationDelay: "-1.3s" }}>
            <ellipse cx="140" cy="84" rx="7.5" ry="9" fill={INK} />
            <ellipse cx="180" cy="84" rx="7.5" ry="9" fill={INK} />
            <circle cx="142.5" cy="80.5" r="2.4" fill="#FFFFFF" />
            <circle cx="182.5" cy="80.5" r="2.4" fill="#FFFFFF" />
          </g>
        </g>
      </g>

      {/* the newspaper */}
      <g style={{ transformBox: "view-box", transformOrigin: "160px 240px", animation: "qr-rustle 3.6s ease-in-out infinite" }}>
        <rect x="40" y="102" width="240" height="140" rx="8" fill="#FFFFFF" stroke={INK} strokeWidth="6" />
        <path d="M160 108V236" stroke={INK} strokeWidth="3" opacity="0.35" />

        {/* left page: masthead, lines and a little chart */}
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          letterSpacing="1"
          fill={INK}
          fontFamily="system-ui, sans-serif"
        >
          THE QUEST POST
        </text>
        <path d="M54 137H146" stroke={INK} strokeWidth="3" />
        <path d="M54 151H146M54 164H138M54 177H146" stroke="#C9D3F5" strokeWidth="5" />
        <rect x="54" y="190" width="44" height="38" rx="5" fill="#E4ECFF" stroke={INK} strokeWidth="3.5" />
        <path d="M64 220v-8M76 220v-14M88 220v-20" stroke={INK} strokeWidth="5" />
        <path d="M108 196H146M108 208H140M108 220H146" stroke="#C9D3F5" strokeWidth="5" />

        {/* right page: a headline and a sunny photo */}
        <path d="M174 124H266" stroke={INK} strokeWidth="7" />
        <path d="M174 138H240" stroke={INK} strokeWidth="7" />
        <rect x="174" y="152" width="92" height="40" rx="5" fill="#FFE38A" stroke={INK} strokeWidth="3.5" />
        <circle cx="194" cy="168" r="7" fill="#FFCB2E" stroke={INK} strokeWidth="3" />
        <path d="M206 188l16-16 12 10 10-8 18 14" stroke={INK} strokeWidth="3.5" />
        <path d="M174 206H266M174 219H252" stroke="#C9D3F5" strokeWidth="5" />

        {/* hands holding it */}
        <circle cx="42" cy="170" r="12" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
        <circle cx="278" cy="170" r="12" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
      </g>

      {/* coffee on the side, steaming */}
      <g>
        {[0, -1.4].map((d, i) => (
          <path
            key={d}
            d={i === 0 ? "M290 214q-5-6 0-12t0-12" : "M302 216q-5-6 0-12t0-12"}
            stroke={INK}
            strokeWidth="3.5"
            style={{ ...box, animation: `qr-steam 2.8s ease-in-out ${d}s infinite` }}
          />
        ))}
        <path d="M282 222h30v22a10 10 0 0 1-10 10h-10a10 10 0 0 1-10-10z" fill="#FF7B7B" stroke={INK} strokeWidth="4.5" />
        <path d="M312 228a7 7 0 0 1 0 14" stroke={INK} strokeWidth="4" />
      </g>
    </svg>
  );
}
