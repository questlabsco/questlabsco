// Tilted yellow "FREE" sticker for the audit offer. Decorative.
export default function FreeBadge({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block -rotate-6 rounded-md border-[3px] border-ink bg-sun px-3 py-0.5 text-sm font-extrabold uppercase tracking-[0.14em] text-ink shadow-pop-sm ${className}`}
    >
      Free
    </span>
  );
}
