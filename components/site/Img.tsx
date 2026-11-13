import { imageDims } from "@/lib/image-dims";

// Plain <img> with intrinsic width and height filled in from
// lib/image-dims.ts, so the browser reserves space before the file loads.
// Below-the-fold images lazy-load; pass `priority` for the first image on a
// page.
export default function Img({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const dims = imageDims[src];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={dims?.[0]}
      height={dims?.[1]}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className ? `photo ${className}` : "photo"}
    />
  );
}
