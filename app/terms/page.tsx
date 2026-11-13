import type { Metadata } from "next";
import Zigzag from "@/components/site/Zigzag";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: "Terms governing the use of the Quest Labs Co. website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="hidden md:block absolute right-[8%] top-10 w-24 animate-drift" />
        <Sparkle className="hidden md:block absolute left-[8%] bottom-8 w-8 animate-twinkle" />
        <div className="container-site page-hero relative pb-12 md:pb-16 text-center">
          <h1 className="h-page">Terms of Service</h1>
          <p className="mt-4 text-sm md:text-base font-semibold text-white/85">
            Effective date: January 1, 2026 · Last updated: November 12, 2026
          </p>
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      <div className="bg-white">
      <div className="container-site py-14 md:py-20 max-w-3xl space-y-10 text-base md:text-lg leading-relaxed text-ink/80">
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Who we are</h2>
          <p>
            This website is operated by {siteConfig.legalName || siteConfig.name}
            {siteConfig.location && `, based in ${siteConfig.location}`}. On
            this site we refer to ourselves as &quot;{siteConfig.name}&quot;,
            &quot;we&quot;, and &quot;us&quot;.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Use of this website</h2>
          <p>
            This website is provided for general information about Quest Labs
            Co. and its services. You may browse and contact us freely; you may
            not misuse the site, attempt to disrupt it, or use its content to
            misrepresent your relationship with us.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">No professional advice</h2>
          <p>
            Content on this site, including example projects, estimates, and
            descriptions of typical results, is informational and does not
            constitute a guarantee of outcomes. Every engagement is governed by
            its own written agreement.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Intellectual property</h2>
          <p>
            The content, design, and branding of this website belong to Quest
            Labs Co. Third-party trademarks referenced here belong to their
            respective owners.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Limitation of liability</h2>
          <p>
            This website is provided &quot;as is.&quot; To the maximum extent
            permitted by law, Quest Labs Co. is not liable for damages arising
            from your use of the site or reliance on its contents.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Changes</h2>
          <p>
            We may update these terms from time to time; the last-updated
            date above reflects the latest revision. Continued use of the site
            constitutes acceptance of the current terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Contact</h2>
          <p>
            Questions:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand font-semibold underline underline-offset-2">
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
      </div>
    </main>
  );
}
