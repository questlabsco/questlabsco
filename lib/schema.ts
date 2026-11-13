// Schema.org JSON-LD builders. Everything here comes from the data files;
// nothing is invented. Fields with no real value yet (address, phone) are
// only emitted once they are filled in lib/data/site.ts.

import { siteConfig } from "@/lib/data/site";
import type { Service } from "@/lib/data/services";

const abs = (path: string) => `${siteConfig.url}${path}`;
const ORG_ID = abs("/#organization");
const SITE_ID = abs("/#website");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        ...(siteConfig.legalName ? { legalName: siteConfig.legalName } : {}),
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        logo: {
          "@type": "ImageObject",
          url: abs("/logo-mark.png"),
          width: 556,
          height: 493,
        },
        image: abs("/og.png"),
        ...(siteConfig.location
          ? {
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.region,
                addressCountry: siteConfig.address.country,
              },
            }
          : {}),
        sameAs: Object.values(siteConfig.social),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.email,
          url: abs("/contact"),
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": abs(`/services/${service.slug}#service`),
    name: service.title,
    serviceType: service.name,
    description: service.intro,
    url: abs(`/services/${service.slug}`),
    provider: { "@id": ORG_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} services`,
      itemListElement: service.offerings.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o.title, description: o.body },
      })),
    },
  };
}
