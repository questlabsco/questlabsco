// A short statement set very large. In browsers with scroll-driven
// animations each line brightens as it reaches the middle of the screen;
// everywhere else the lines are simply shown at full strength.
export default function ScrollStatement({ lines }: { lines: string[] }) {
  return (
    <p className="h-section max-w-5xl text-white">
      {lines.map((line) => (
        <span key={line} className="lit-line block mt-[0.45em] first:mt-0">
          {line}
        </span>
      ))}
    </p>
  );
}
