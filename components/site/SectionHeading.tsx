import Reveal from "./Reveal";
import { HandArrow } from "@/components/art/Doodles";

// Section opener in the site's house style: a heavy Title Case headline
// with one phrase set in a solid block, a short lede, and optionally a
// handwritten side note with a curly arrow.
//
//   <SectionHeading
//     title="We Automate The Work Your Team Hates Doing"
//     highlight="Your Team Hates"
//     lede="..."
//     note="This is the bit people ask about first"
//   />
//
// Centred by default; pass align="left" inside a column.
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  lede,
  note,
  noteSide = "left",
  align = "center",
  onColor = false,
}: {
  eyebrow?: string;
  title: string;
  // A substring of `title` to set in the highlight block.
  highlight?: string;
  lede?: React.ReactNode;
  // Handwritten margin note (desktop only).
  note?: string;
  noteSide?: "left" | "right";
  align?: "left" | "center";
  // Set on blue sections: white text and a darker-blue highlight.
  onColor?: boolean;
  // Accepted for older call sites; no longer used.
  onDark?: boolean;
}) {
  const centered = align === "center";
  const i = highlight ? title.indexOf(highlight) : -1;
  const hlClass = onColor ? "hl-blue" : "hl";

  return (
    <Reveal
      className={`relative mb-10 md:mb-14 ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      {note && (
        <div
          aria-hidden="true"
          className={`hidden xl:flex absolute top-0 w-44 flex-col ${
            noteSide === "left"
              ? "-left-48 items-end text-right"
              : "-right-48 items-start text-left"
          }`}
        >
          <span className={`note-hand ${noteSide === "left" ? "-rotate-3" : "rotate-3"} ${onColor ? "!text-white" : ""}`}>
            {note}
          </span>
          <HandArrow
            className={`mt-1 w-12 ${noteSide === "left" ? "" : "-scale-x-100"} ${
              onColor ? "[&_path]:stroke-white" : ""
            }`}
          />
        </div>
      )}

      {eyebrow && <p className={`eyebrow ${onColor ? "!text-white/90" : ""}`}>{eyebrow}</p>}
      <h2 className={`${eyebrow ? "mt-3" : ""} h-section ${onColor ? "text-white" : "text-ink"}`}>
        {i >= 0 && highlight ? (
          <>
            {title.slice(0, i)}
            <span className={hlClass}>{highlight}</span>
            {title.slice(i + highlight.length)}
          </>
        ) : (
          title
        )}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            onColor ? "text-white/90" : "text-ink/80"
          } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
