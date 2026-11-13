// Two small friends who stand beside the audit quiz on /free-audit:
// a stopwatch (the quiz takes under a minute) and a stack of paperwork
// (the stuff we want to take off your desk). Both blink, bob and fidget
// on their own. Decorative.

const INK = "#1B1D4E";
const pivot = { transformBox: "fill-box", transformOrigin: "center" } as const;

const keyframes = `
@keyframes qf-tick { to { transform: rotate(360deg); } }
@keyframes qf-hop {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-8px) rotate(2deg); }
}
@keyframes qf-shuffle {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  50% { transform: translateX(5px) rotate(1.5deg); }
}
@keyframes qf-flutter {
  0%, 100% { transform: translate(0, 0) rotate(10deg); }
  50% { transform: translate(-6px, -10px) rotate(-6deg); }
}
@keyframes qf-press {
  0%, 80%, 100% { transform: translateY(0); }
  88% { transform: translateY(4px); }
}
`;

export function QuizFriendStyles() {
  return <style>{keyframes}</style>;
}

export function StopwatchBuddy({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div style={{ animation: "qf-hop 3.6s ease-in-out infinite" }}>
        <svg
          viewBox="0 0 160 196"
          className="w-full"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* crown, pressed now and then */}
          <g style={{ ...pivot, animation: "qf-press 3.2s ease-in-out infinite" }}>
            <rect x="66" y="6" width="28" height="14" rx="5" fill="#FFCB2E" stroke={INK} strokeWidth="5" />
          </g>
          <rect x="74" y="20" width="12" height="14" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
          {/* side button */}
          <rect
            x="120"
            y="30"
            width="20"
            height="12"
            rx="4"
            fill="#35D6A0"
            stroke={INK}
            strokeWidth="5"
            transform="rotate(40 130 36)"
          />

          {/* legs and feet */}
          <path d="M58 166l-6 18M102 166l6 18" stroke={INK} strokeWidth="6" />
          <ellipse cx="48" cy="186" rx="12" ry="6" fill={INK} />
          <ellipse cx="112" cy="186" rx="12" ry="6" fill={INK} />

          {/* body and face */}
          <circle cx="80" cy="104" r="66" fill="#FFFFFF" stroke={INK} strokeWidth="6" />
          <circle cx="80" cy="104" r="51" fill="#FFF7E3" stroke={INK} strokeWidth="4" />
          <path
            d="M80 57v8M127 104h-8M80 151v-8M33 104h8"
            stroke={INK}
            strokeWidth="5"
          />

          {/* the hand goes round */}
          <g
            style={{
              transformBox: "view-box",
              transformOrigin: "80px 104px",
              animation: "qf-tick 6s linear infinite",
            }}
          >
            <path d="M80 104V70" stroke="#FF7B7B" strokeWidth="6" />
          </g>
          <circle cx="80" cy="104" r="6" fill={INK} />

          {/* eyes, cheeks, smile */}
          <g style={pivot} className="animate-blink [animation-delay:-1.3s]">
            <ellipse cx="60" cy="118" rx="5.5" ry="7" fill={INK} />
            <ellipse cx="100" cy="118" rx="5.5" ry="7" fill={INK} />
          </g>
          <circle cx="50" cy="132" r="5" fill="#FF7B7B" opacity="0.7" />
          <circle cx="110" cy="132" r="5" fill="#FF7B7B" opacity="0.7" />
          <path d="M72 132q8 8 16 0" stroke={INK} strokeWidth="5" />
        </svg>
      </div>
    </div>
  );
}

export function PaperStackBuddy({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="animate-float [animation-duration:4.4s] [animation-delay:-2s]">
        <svg
          viewBox="0 0 176 200"
          className="w-full overflow-visible"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* a loose sheet that never quite settles */}
          <g style={{ ...pivot, animation: "qf-flutter 4.8s ease-in-out infinite" }}>
            <rect x="126" y="4" width="38" height="46" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="5" />
            <path d="M135 18h20M135 28h14" stroke="#D5DCF7" strokeWidth="4" />
          </g>

          {/* feet */}
          <ellipse cx="58" cy="190" rx="13" ry="6" fill={INK} />
          <ellipse cx="118" cy="190" rx="13" ry="6" fill={INK} />

          {/* sheets underneath */}
          <rect
            x="24"
            y="72"
            width="128"
            height="108"
            rx="10"
            fill="#A9CBFF"
            stroke={INK}
            strokeWidth="5"
            transform="rotate(-5 88 126)"
          />
          <rect
            x="22"
            y="62"
            width="128"
            height="110"
            rx="10"
            fill="#F3F6FF"
            stroke={INK}
            strokeWidth="5"
            transform="rotate(4 86 117)"
          />

          {/* top sheet, fidgeting */}
          <g style={{ ...pivot, animation: "qf-shuffle 3.4s ease-in-out infinite" }}>
            <rect x="20" y="50" width="134" height="124" rx="12" fill="#FFFFFF" stroke={INK} strokeWidth="6" />
            <path d="M40 74h92M40 88h64" stroke="#D5DCF7" strokeWidth="6" />
            {/* paperclip */}
            <path
              d="M40 40v30a8 8 0 0 0 16 0V44a5 5 0 0 0-10 0v22"
              stroke="#3B4CFF"
              strokeWidth="5"
            />
            <g style={pivot} className="animate-blink [animation-delay:-2.7s] [animation-duration:5.2s]">
              <ellipse cx="66" cy="124" rx="5.5" ry="7" fill={INK} />
              <ellipse cx="108" cy="124" rx="5.5" ry="7" fill={INK} />
            </g>
            <circle cx="54" cy="140" r="5" fill="#FF7B7B" opacity="0.7" />
            <circle cx="120" cy="140" r="5" fill="#FF7B7B" opacity="0.7" />
            {/* a slightly worried little mouth */}
            <path d="M78 146q9-6 18 0" stroke={INK} strokeWidth="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
