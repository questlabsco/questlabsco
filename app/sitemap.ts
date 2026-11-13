import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { engagements } from "@/lib/data/engagements";
import { siteConfig } from "@/lib/data/site";

// Generated at build time from the data files, so it cannot drift from the
// real routes. URLs have no trailing slash because that is the form the
// site serves with a 200.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/industries",
    ...industries.map((i) => `/industries/${i.slug}`),
    "/examples",
    ...engagements.map((e) => `/examples/${e.slug}`),
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return paths.map((path) => ({ url: `${siteConfig.url}${path}` }));
}
