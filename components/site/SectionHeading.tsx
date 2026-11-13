import Reveal from "./Reveal";

// Section opener: optional monospace label, a large light headline, and an
// optional lede. `onDark` is accepted for older call sites; the whole site
// is dark now, so it no longer changes anything.
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-12 md:mb-20 max-w-4xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`${eyebrow ? "mt-5" : ""} h-section text-white`}>{title}</h2>
      {lede && <p className="lede mt-6 max-w-2xl">{lede}</p>}
    </Reveal>
  );
}
