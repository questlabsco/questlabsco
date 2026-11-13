import { Check } from "lucide-react";

// A tappable answer in the audit quiz. A real button with aria-pressed.
// `multi` chips show a little tick box so it's clear you can pick several.
export default function Chip({
  label,
  pressed,
  onClick,
  multi = false,
  size = "md",
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
  multi?: boolean;
  size?: "sm" | "md";
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`group inline-flex min-h-[44px] max-w-full items-center gap-2.5 rounded-xl border-[3px] border-ink text-left font-bold leading-snug text-ink transition-[transform,box-shadow,background-color] duration-150 ${
        size === "sm" ? "px-3 py-1.5 text-sm" : "px-3.5 py-2 text-[15px] sm:px-4 sm:text-base"
      } ${
        pressed
          ? "translate-x-[2px] translate-y-[2px] bg-sun shadow-none"
          : "bg-white shadow-pop-sm hover:-translate-y-0.5 hover:bg-surface active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      }`}
    >
      {multi && (
        <span
          aria-hidden="true"
          className={`flex size-5 shrink-0 items-center justify-center rounded-md border-[2.5px] border-ink transition-colors ${
            pressed ? "bg-ink text-white" : "bg-white text-transparent"
          }`}
        >
          <Check className="size-3.5" strokeWidth={4} />
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}
