import { Star, FileBarChart, ShieldCheck, Handshake } from "lucide-react";
import { recognition, type Recognition } from "@/lib/data/recognition";
import Reveal from "./Reveal";

const icons: Record<Recognition["kind"], typeof Star> = {
  rating: Star,
  report: FileBarChart,
  certification: ShieldCheck,
  partner: Handshake,
};

// EDIT-ME: badges come from lib/data/recognition.ts
export default function RecognitionStrip({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
      {recognition.map((r, i) => {
        const Icon = icons[r.kind];
        return (
          <Reveal
            key={r.title}
            delay={i * 0.08}
            className="flex items-start gap-3 max-w-[240px]"
          >
            <Icon
              className={`size-5 shrink-0 mt-0.5 ${
                onDark ? "text-accent" : "text-primary"
              }`}
            />
            <div>
              <p
                className={`text-sm font-bold leading-snug ${
                  onDark ? "text-white" : "text-ink"
                }`}
              >
                {r.title}
              </p>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  onDark ? "text-white/50" : "text-muted-foreground"
                }`}
              >
                {r.detail}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
