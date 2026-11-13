// Renders a headline string with one phrase set in a highlight block.
// If `highlight` is not given (or not found), the last two words get the
// block so any title passed in still follows the house style.
export default function HighlightTitle({
  title,
  highlight,
  className = "hl-blue",
}: {
  title: string;
  highlight?: string;
  className?: string;
}) {
  let phrase = highlight && title.includes(highlight) ? highlight : "";
  if (!phrase) {
    const words = title.trim().split(/\s+/);
    if (words.length > 1) phrase = words.slice(-Math.min(2, words.length - 1)).join(" ");
  }
  if (!phrase) return <>{title}</>;
  const i = title.lastIndexOf(phrase);
  return (
    <>
      {title.slice(0, i)}
      <span className={className}>{phrase}</span>
      {title.slice(i + phrase.length)}
    </>
  );
}
