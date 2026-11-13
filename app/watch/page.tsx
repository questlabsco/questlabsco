import type { Metadata } from "next";
import Script from "next/script";

// Unlisted page: only reachable via direct link, not linked from nav/footer,
// and excluded from search indexing + the sitemap.
export const metadata: Metadata = {
  title: { absolute: "Quest Labs Co." },
  robots: { index: false, follow: false },
};

const WISTIA_MEDIA_ID = "hffkxr5c3a";

export default function WatchPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden px-5 py-10 text-white md:py-14"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 0%, #2b1854 0%, #150c2c 45%, #060309 100%)",
      }}
    >
      <div className="relative mx-auto w-full max-w-3xl">
        <div className="mb-6 md:mb-8">
          <div className="inline-flex size-11 items-center justify-center rounded-lg border border-accent/60 bg-white/5">
            <img
              src="/brand/logo-mark-light.webp"
              alt="Quest Labs Co"
              width={90}
              height={80}
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>

        <div className="text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-accent/50 bg-white/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              questlabsco.com
            </span>
          </div>

          <h1 className="text-3xl font-black uppercase leading-[1.1] tracking-tight text-white/95 sm:text-4xl md:text-5xl">
            Important: watch the video below
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/50 md:text-lg">
            Make sure to watch the video below before your next meeting with
            Quest Labs Co.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-accent/50 p-1.5 md:mt-8 md:p-2">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-ink">
            <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
            <Script
              src={`https://fast.wistia.com/embed/${WISTIA_MEDIA_ID}.js`}
              strategy="afterInteractive"
              type="module"
            />
            <style
              dangerouslySetInnerHTML={{
                __html: `wistia-player[media-id='${WISTIA_MEDIA_ID}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${WISTIA_MEDIA_ID}/swatch'); display: block; filter: blur(5px); }`,
              }}
            />
            <div
              className="absolute inset-0 [&>wistia-player]:block [&>wistia-player]:h-full [&>wistia-player]:w-full"
              dangerouslySetInnerHTML={{
                __html: `<wistia-player media-id="${WISTIA_MEDIA_ID}" aspect="1.7777777777777777"></wistia-player>`,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
