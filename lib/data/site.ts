// Central site configuration.

export const siteConfig = {
  name: "Quest Labs Co.",
  shortName: "Quest Labs",
  url: "https://questlabsco.com",
  // One-line definition used in metadata, the footer, and structured data.
  description:
    "Quest Labs Co. is an AI automation and web development agency. We build AI agents, workflow automation, and fast websites that take manual work off your team.",
  // Displayed publicly across the site (footer, contact page, legal pages).
  email: "info@questlabsco.com",
  calendlyUrl: "https://calendly.com/questlabsco/questlabs",
  // Web3Forms routes submissions by this access key's registered inbox
  // (questlabsco@gmail.com) regardless of the public-facing email above.
  web3formsKey: "4aa5d74b-02ad-462b-be9e-c00d0a7aa5ba",
  // Where the company is based. Shown in the footer and on the About page.
  // Leave empty to hide.
  location: "Dallas–Fort Worth, Texas",
  // The same place in the form structured data expects.
  address: { locality: "Dallas-Fort Worth", region: "TX", country: "US" },
  // Registered company name. Leave empty to hide.
  legalName: "Quest Labs",
  social: {
    linkedin: "https://www.linkedin.com/company/quest-labs-co",
    youtube: "https://www.youtube.com/@questlabsco",
  },
};

// The primary action across the site: the free automation audit, booked as
// a short call.
export const booking = {
  label: "Get Your Free Audit",
  // Longer form for hero buttons.
  labelLong: "Get Your Free Automation Audit",
  // How the offer is named in running text.
  offer: "free automation audit",
  // Every page that ends with the booking section exposes it at #book.
  anchor: "#book",
  page: "/contact",
  // Must match the length of the Calendly event behind calendlyUrl.
  duration: "15 minutes",
  durationAdjective: "15-minute",
};

// Headline proof numbers, shown on the homepage and in the booking section.
export const stats = [
  { value: "25", suffix: "+", label: "active clients" },
  { value: "10,000", suffix: "s", label: "of hours of manual work saved" },
  { value: "4.9", suffix: " / 5", label: "average client rating" },
  { value: "4–8", suffix: " wks", label: "typical time from kickoff to a production build" },
];

// Team and delivery numbers, shown on the About page.
export const teamStats = [
  { value: "25", suffix: "+", label: "active clients" },
  { value: "23", suffix: "+ years", label: "combined engineering experience across the team" },
  { value: "86", suffix: "%", label: "of client work is in regulated industries" },
  { value: "4–8", suffix: " wks", label: "typical time from kickoff to a production build" },
];

export const values = [
  {
    title: "Respect",
    body: "We treat every client, colleague, and codebase with care. Strong opinions, low egos, and honest conversations at every step.",
  },
  {
    title: "Common sense",
    body: "We recommend the simplest thing that works, not the most billable one. If automation isn't the answer, we'll say so.",
  },
  {
    title: "Curiosity",
    body: "The AI landscape changes monthly. We evaluate new models, tools, and techniques constantly so our clients don't have to.",
  },
  {
    title: "Courage",
    body: "We give direct advice, flag risks early, and take ownership of outcomes, even when it's uncomfortable.",
  },
  {
    title: "Commitment",
    body: "We measure ourselves on engagements that last years, not invoices that last a month.",
  },
];
