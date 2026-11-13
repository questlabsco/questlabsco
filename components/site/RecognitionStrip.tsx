import { Star, ClipboardCheck, ShieldCheck, Shuffle } from "lucide-react";
import { recognition, type Recognition } from "@/lib/data/recognition";
import Reveal from "./Reveal";

const icons: Record<Recognition["kind"], typeof Star> = {
  rating: Star,
  report: ClipboardCheck,
  certification: ShieldCheck,
  partner: Shuffle,
};

// Coloured icon tiles, cycled per chip.
const tiles = ["bg-sun", "bg-mint", "bg-lilac", "bg-coral"];

// Three quick proof points as sticker chips: the rating, the priced audit,
// and model-agnostic delivery.
export default function RecognitionStrip({
  className,
}: {
  className?: string;
  // Accepted for older call sites; no longer used.
  onDark?: boolean;
}) {
  return (
    <ul className={`grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 ${className ?? ""}`}>
      {recognition.map((r, i) => {
        const Icon = icons[r.kind];
        return (
          <li key={r.title}>
            <Reveal className="card-pop flex h-full items-start gap-4 p-5">
              <span
                aria-hidden="true"
                className={`grid size-11 shrink-0 place-items-center rounded-lg border-[3px] border-ink ${
                  tiles[i % tiles.length]
                }`}
              >
                <Icon className="size-5 text-ink" strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-base font-extrabold leading-snug text-ink">{r.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
