import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  onDark = false,
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
      className={`mb-12 md:mb-16 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={`${eyebrow ? "mt-4" : ""} text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            onDark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
