// Small icons for the five values on the About page, in the site's doodle
// style: thick navy outlines, flat fills. All decorative.
//
//   <ValueIcon index={0} className="w-12" />
//
// 0 Respect (heart with a face), 1 Common sense (light bulb),
// 2 Curiosity (magnifying glass), 3 Courage (lightning bolt),
// 4 Commitment (calendar with a tick).

const INK = "#1B1D4E";

const stroke = {
  stroke: INK,
  strokeWidth: 3.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Respect() {
  return (
    <>
      <path
        d="M32 54C12 41 7 30 7 21a12 12 0 0 1 25-4 12 12 0 0 1 25 4c0 9-5 20-25 33z"
        fill="#FF7B7B"
        {...stroke}
      />
      <circle cx="25" cy="27" r="2.6" fill={INK} />
      <circle cx="39" cy="27" r="2.6" fill={INK} />
      <path d="M26 34q6 5 12 0" {...stroke} />
    </>
  );
}

function CommonSense() {
  return (
    <>
      <path
        d="M32 8a17 17 0 0 0-10 30.8c2 1.6 3 3.4 3 5.7V47h14v-2.5c0-2.3 1-4.1 3-5.7A17 17 0 0 0 32 8z"
        fill="#FFCB2E"
        {...stroke}
      />
      <rect x="24" y="47" width="16" height="9" rx="3" fill="#FFFFFF" {...stroke} />
      <circle cx="27" cy="25" r="2.4" fill={INK} />
      <circle cx="37" cy="25" r="2.4" fill={INK} />
      <path d="M28 31q4 3.5 8 0" {...stroke} />
    </>
  );
}

function Curiosity() {
  return (
    <>
      <path d="M40 40l14 14" stroke={INK} strokeWidth="7" strokeLinecap="round" />
      <circle cx="27" cy="27" r="17" fill="#A9CBFF" {...stroke} />
      <circle cx="27" cy="27" r="10" fill="#FFFFFF" {...stroke} />
      <path d="M22 23a6 6 0 0 1 5-3" {...stroke} />
    </>
  );
}

function Courage() {
  return (
    <path
      d="M36 6L14 36h14l-4 22 24-32H34l2-20z"
      fill="#B9A7FF"
      {...stroke}
    />
  );
}

function Commitment() {
  return (
    <>
      <rect x="9" y="13" width="46" height="42" rx="7" fill="#FFFFFF" {...stroke} />
      <path d="M9 24h46" {...stroke} />
      <rect x="9" y="13" width="46" height="11" rx="5" fill="#35D6A0" {...stroke} />
      <path d="M21 8v10M43 8v10" {...stroke} />
      <path d="M23 39l6 6 12-12" stroke={INK} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

const icons = [Respect, CommonSense, Curiosity, Courage, Commitment];

export default function ValueIcon({ index, className }: { index: number; className?: string }) {
  const Icon = icons[index % icons.length];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <Icon />
    </svg>
  );
}
