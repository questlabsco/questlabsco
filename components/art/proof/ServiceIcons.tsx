// One small icon per service, keyed by service slug. 64 x 64 canvas,
// thick navy outlines, flat fills. Decorative only. Parts move when the
// surrounding card (`group`) is hovered.

const INK = "#1B1D4E";
const SW = 3.5;

type Props = { className?: string };

const fillBox = { transformBox: "fill-box", transformOrigin: "center" } as const;

function Frame({ className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function RobotIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <path d="M32 10v7" stroke={INK} strokeWidth={SW} />
      <circle cx="32" cy="8" r="4" fill="#FF7B7B" stroke={INK} strokeWidth="3" className="group-hover:animate-twinkle" style={fillBox} />
      <rect x="5" y="29" width="7" height="13" rx="3" fill="#35D6A0" stroke={INK} strokeWidth="3" />
      <rect x="52" y="29" width="7" height="13" rx="3" fill="#35D6A0" stroke={INK} strokeWidth="3" />
      <rect x="12" y="17" width="40" height="36" rx="10" fill="#A9CBFF" stroke={INK} strokeWidth={SW} />
      <g className="animate-blink" style={fillBox}>
        <circle cx="24" cy="32" r="3.5" fill={INK} />
        <circle cx="40" cy="32" r="3.5" fill={INK} />
      </g>
      <path d="M25 42q7 5 14 0" stroke={INK} strokeWidth="3" />
    </Frame>
  );
}

function ChatIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <path d="M18 40L14 56L32 42z" fill="#35D6A0" stroke={INK} strokeWidth={SW} />
      <rect x="6" y="10" width="52" height="34" rx="13" fill="#35D6A0" stroke={INK} strokeWidth={SW} />
      <g className="group-hover:animate-float">
        <circle cx="21" cy="27" r="3.2" fill={INK} />
        <circle cx="32" cy="27" r="3.2" fill={INK} />
        <circle cx="43" cy="27" r="3.2" fill={INK} />
      </g>
    </Frame>
  );
}

function GearsIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <g className="group-hover:animate-spin-slow" style={{ transformBox: "view-box", transformOrigin: "25px 37px" }}>
        <path d="M6 37h38M25 18v38M11.6 23.6l26.8 26.8M38.4 23.6L11.6 50.4" stroke={INK} strokeWidth="7" />
        <circle cx="25" cy="37" r="13" fill="#FFCB2E" stroke={INK} strokeWidth={SW} />
        <circle cx="25" cy="37" r="4.5" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
      </g>
      <g
        className="group-hover:animate-spin-slow [animation-direction:reverse]"
        style={{ transformBox: "view-box", transformOrigin: "46px 20px" }}
      >
        <path d="M34 20h24M46 8v24M37.5 11.5l17 17M54.5 11.5l-17 17" stroke={INK} strokeWidth="6" />
        <circle cx="46" cy="20" r="8" fill="#B9A7FF" stroke={INK} strokeWidth={SW} />
        <circle cx="46" cy="20" r="2.5" fill={INK} />
      </g>
    </Frame>
  );
}

function CompassIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <circle cx="32" cy="32" r="25" fill="#FFFFFF" stroke={INK} strokeWidth={SW} />
      <path d="M32 9v4M32 51v4M9 32h4M51 32h4" stroke={INK} strokeWidth="3" />
      <g className="group-hover:animate-wiggle" style={{ transformBox: "view-box", transformOrigin: "32px 32px" }}>
        <path d="M32 14L38.5 32H25.5z" fill="#FF7B7B" stroke={INK} strokeWidth="3" />
        <path d="M25.5 32H38.5L32 50z" fill="#A9CBFF" stroke={INK} strokeWidth="3" />
      </g>
      <circle cx="32" cy="32" r="3" fill={INK} />
    </Frame>
  );
}

function PlugIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <path d="M32 46v4q0 8-8 8H10" stroke={INK} strokeWidth={SW} />
      <path d="M25 8v14M39 8v14" stroke={INK} strokeWidth="5" />
      <rect x="16" y="20" width="32" height="26" rx="7" fill="#FF7B7B" stroke={INK} strokeWidth={SW} />
      <circle cx="26" cy="31" r="2.6" fill={INK} />
      <circle cx="38" cy="31" r="2.6" fill={INK} />
      <path d="M28 37q4 3 8 0" stroke={INK} strokeWidth="2.8" />
      <path
        d="M54 10l-4 7h6l-4 7"
        stroke={INK}
        strokeWidth="3"
        className="group-hover:animate-twinkle"
        style={fillBox}
      />
    </Frame>
  );
}

function WandIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <path d="M12 54L38 28" stroke={INK} strokeWidth="10" />
      <path d="M12 54L38 28" stroke="#B9A7FF" strokeWidth="3.5" />
      <path
        d="M45 6c1.5 7 5 10.5 12 12-7 1.5-10.5 5-12 12-1.5-7-5-10.5-12-12 7-1.5 10.5-5 12-12z"
        fill="#FFCB2E"
        stroke={INK}
        strokeWidth="3"
        className="group-hover:animate-spin-slow"
        style={fillBox}
      />
      <circle cx="16" cy="16" r="3" fill="#35D6A0" stroke={INK} strokeWidth="2.5" className="animate-twinkle" style={fillBox} />
      <circle cx="54" cy="42" r="2.5" fill="#FF7B7B" stroke={INK} strokeWidth="2.5" className="animate-twinkle [animation-delay:1s]" style={fillBox} />
    </Frame>
  );
}

function BrowserIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <rect x="6" y="10" width="52" height="44" rx="8" fill="#A9CBFF" />
      <path d="M6 23h52v23a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8z" fill="#FFFFFF" />
      <rect x="6" y="10" width="52" height="44" rx="8" stroke={INK} strokeWidth={SW} />
      <path d="M6 23h52" stroke={INK} strokeWidth={SW} />
      <circle cx="13" cy="16.5" r="2" fill={INK} />
      <circle cx="20" cy="16.5" r="2" fill={INK} />
      <g className="group-hover:animate-wiggle" style={fillBox}>
        <path d="M23 32l-6 6 6 6M41 32l6 6-6 6" stroke={INK} strokeWidth="3.5" />
        <path d="M35 30l-6 16" stroke="#3B4CFF" strokeWidth="3.5" />
      </g>
    </Frame>
  );
}

function DesignIcon({ className }: Props) {
  return (
    <Frame className={className}>
      <rect x="6" y="8" width="20" height="20" rx="4" fill="#FFCB2E" stroke={INK} strokeWidth={SW} />
      <circle cx="47" cy="18" r="10" fill="#35D6A0" stroke={INK} strokeWidth={SW} />
      <g className="group-hover:animate-wiggle" style={{ transformBox: "view-box", transformOrigin: "32px 58px" }}>
        <path d="M32 58L21 40L32 27L43 40z" fill="#B9A7FF" stroke={INK} strokeWidth={SW} />
        <path d="M32 58V43" stroke={INK} strokeWidth="3" />
        <circle cx="32" cy="40" r="2.6" fill={INK} />
      </g>
    </Frame>
  );
}

const icons: Record<string, (p: Props) => JSX.Element> = {
  "ai-agents": RobotIcon,
  "ai-chatbots": ChatIcon,
  "workflow-automation": GearsIcon,
  "ai-consulting": CompassIcon,
  "ai-integration": PlugIcon,
  "generative-ai": WandIcon,
  "web-development": BrowserIcon,
  "ui-ux-design": DesignIcon,
};

export default function ServiceIcon({ slug, className }: Props & { slug: string }) {
  const Icon = icons[slug] ?? GearsIcon;
  return <Icon className={className} />;
}
