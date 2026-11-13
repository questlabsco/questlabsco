// Schema.org JSON-LD builders. Everything here comes from the data files;
// nothing is invented. Fields with no real value yet (address, phone) are
// only emitted once they are filled in lib/data/site.ts.

import { siteConfig } from "@/lib/data/site";
import { services, type Service } from "@/lib/data/services";

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
        // The topics the site covers, so search and AI tools can tell what
        // the company is a source for.
        knowsAbout: services.map((s) => s.name),
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

// Blog article, with the organisation as author and publisher.
export function articleSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": abs(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: abs(`/blog/${post.slug}`),
    ...(post.category ? { articleSection: post.category } : {}),
    isPartOf: { "@id": SITE_ID },
    image: abs("/og.png"),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

// Questions and answers that are visible on the page.
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
