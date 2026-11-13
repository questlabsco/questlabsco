// Fade-and-rise on scroll, done in CSS (see `.reveal` in globals.css).
//
// The content is fully visible in the HTML: browsers that support
// scroll-driven animations add the motion, everything else (older browsers,
// reduced-motion users, crawlers, no JavaScript) just sees the content.
// This used to be a framer-motion wrapper that served everything at
// opacity 0 until JavaScript ran, which hid headlines and slowed first paint.
export default function Reveal({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  // Kept so existing call sites still type-check; scroll position now sets
  // the timing, so a stagger delay has no effect.
  delay?: number;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={className ? `reveal ${className}` : "reveal"}>
      {children}
    </div>
  );
}
