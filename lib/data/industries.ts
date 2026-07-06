// Industry definitions. Each entry generates /industries/[slug].
// Copy is original; use cases are researched per industry.

export type Industry = {
  slug: string;
  name: string;
  summary: string; // one-liner for hub cards and mega-menu
  title: string; // page hero headline
  intro: string; // page hero paragraph
  image: string; // /public path
  useCases: { title: string; body: string }[];
  outcomes: string[]; // short result-style bullets
  caseStudySlugs: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Documentation, claims, and patient-flow automation.",
    title: "AI solutions for healthcare",
    intro:
      "Healthcare teams drown in documentation and administrative work that never touches a patient. We build AI systems that take on the paperwork (coding, claims, scheduling, and records) while keeping clinicians and compliance in control.",
    image: "/images/industries/healthcare.jpg",
    useCases: [
      {
        title: "Clinical documentation support",
        body: "Visit notes, referral letters, and discharge summaries drafted from dictation or structured data for clinician review.",
      },
      {
        title: "Revenue cycle & claims automation",
        body: "Coding suggestions, claim scrubbing, denial triage, and appeal drafting that shorten the path from service to payment.",
      },
      {
        title: "Patient intake & scheduling",
        body: "Digital intake, insurance verification, appointment reminders, and no-show reduction handled automatically.",
      },
      {
        title: "Prior authorization workflows",
        body: "Requirement lookups, form population, and status chasing: the least loved work in the clinic, automated.",
      },
      {
        title: "Records summarization",
        body: "Long patient histories condensed into structured, cited summaries before each encounter.",
      },
      {
        title: "Compliance-first architecture",
        body: "HIPAA-aligned data handling, audit trails, and human sign-off wherever clinical judgment is involved.",
      },
    ],
    outcomes: [
      "Hours of documentation returned to clinical staff every week",
      "Cleaner claims and fewer denials",
      "Shorter intake and lower no-show rates",
    ],
    caseStudySlugs: ["healthcare-rcm-analytics"],
  },
  {
    slug: "finance",
    name: "Finance & Fintech",
    summary: "Reconciliation, risk, reporting, and client operations.",
    title: "AI solutions for finance and fintech",
    intro:
      "Financial firms run on high-volume, high-stakes information work: exactly where AI pays for itself fastest. We build automation for reconciliation, monitoring, reporting, and client operations, engineered for audit trails from day one.",
    image: "/images/industries/finance.jpg",
    useCases: [
      {
        title: "Reconciliation & exception handling",
        body: "Transactions matched across systems automatically, with only true exceptions escalated to people.",
      },
      {
        title: "Document & KYC processing",
        body: "Onboarding documents, statements, and IDs extracted, verified, and filed with full traceability.",
      },
      {
        title: "Risk & fraud monitoring",
        body: "Automated anomaly scoring that flags risk consistently and explains its reasoning for compliance review.",
      },
      {
        title: "Regulatory reporting",
        body: "Recurring reports assembled from source systems on schedule, with human approval before filing.",
      },
      {
        title: "Client communication drafting",
        body: "Portfolio summaries, market commentary, and service responses drafted for advisor review.",
      },
      {
        title: "Trading operations support",
        body: "Order lifecycle monitoring, settlement chasing, and desk reporting automated end to end.",
      },
    ],
    outcomes: [
      "Reconciliation cycles cut from days to hours",
      "Faster onboarding with a complete audit trail",
      "Analyst time moved from assembly to analysis",
    ],
    caseStudySlugs: ["fintech-trading-automation"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    summary: "Support, personalization, and catalog operations at scale.",
    title: "AI solutions for retail and e-commerce",
    intro:
      "Margins in retail are won operationally. We build AI that answers customers instantly, keeps catalogs clean, forecasts demand, and personalizes without being creepy, so growth doesn't require growing headcount at the same rate.",
    image: "/images/industries/retail.jpg",
    useCases: [
      {
        title: "Customer support automation",
        body: "Order status, returns, and product questions resolved by assistants grounded in your real policies and systems.",
      },
      {
        title: "Catalog & content operations",
        body: "Product descriptions, attributes, and translations generated and maintained at catalog scale.",
      },
      {
        title: "Demand forecasting",
        body: "Inventory and purchasing decisions backed by data-driven forecasts instead of last year's spreadsheet.",
      },
      {
        title: "Personalization & recommendations",
        body: "On-site recommendations and email content matched to real browsing behavior.",
      },
      {
        title: "Review & feedback intelligence",
        body: "Thousands of reviews distilled into ranked product and operations issues monthly.",
      },
      {
        title: "Marketplace operations",
        body: "Listing sync, repricing inputs, and channel exception handling automated across marketplaces.",
      },
    ],
    outcomes: [
      "Majority of routine tickets resolved without an agent",
      "Catalog updates in hours instead of weeks",
      "Forecast-driven inventory with fewer stockouts",
    ],
    caseStudySlugs: ["retail-support-chatbot", "ecommerce-personalization"],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    summary: "Documents, tracking, and exception management automated.",
    title: "AI solutions for logistics and supply chain",
    intro:
      "Logistics is a document business wearing a transportation costume: BOLs, PODs, customs forms, rate confirmations. We automate the paperwork and the status-chasing so your ops team manages exceptions, not inboxes.",
    image: "/images/industries/logistics.jpg",
    useCases: [
      {
        title: "Freight document processing",
        body: "Bills of lading, PODs, and invoices extracted and entered into your TMS automatically, whatever format they arrive in.",
      },
      {
        title: "Shipment tracking & notifications",
        body: "Status pulled across carriers and pushed to customers proactively, before they email asking.",
      },
      {
        title: "Exception management",
        body: "Delays, damages, and discrepancies detected, categorized, and routed with recommended next actions.",
      },
      {
        title: "Quote & rate operations",
        body: "Rate requests parsed, quotes drafted from your tariffs, and follow-ups tracked automatically.",
      },
      {
        title: "Customs & compliance paperwork",
        body: "Classification suggestions and document preparation with human review before filing.",
      },
      {
        title: "Carrier & vendor scorecards",
        body: "Performance reporting assembled continuously from your operational data.",
      },
    ],
    outcomes: [
      "Document entry near-eliminated for standard formats",
      "Customer status queries answered before they're asked",
      "Ops time concentrated on true exceptions",
    ],
    caseStudySlugs: ["logistics-document-ai"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "Quality, maintenance, and production-floor intelligence.",
    title: "AI solutions for manufacturing",
    intro:
      "Manufacturers sit on years of production data that nobody has time to use. We turn it into working systems (quality inspection, maintenance prediction, and planning support) that integrate with the MES and ERP you already run.",
    image: "/images/industries/manufacturing.jpg",
    useCases: [
      {
        title: "Visual quality inspection",
        body: "Camera-based defect detection that inspects every unit consistently, not a sampled fraction.",
      },
      {
        title: "Predictive maintenance",
        body: "Sensor and log data turned into failure predictions, so maintenance happens before downtime.",
      },
      {
        title: "Production planning support",
        body: "Demand forecasts and constraint-aware scheduling suggestions for planners to approve.",
      },
      {
        title: "Work instruction & SOP assistance",
        body: "Floor staff query procedures in plain language and get cited answers from your own documentation.",
      },
      {
        title: "Supplier document automation",
        body: "Certs, POs, and delivery paperwork processed automatically with exceptions flagged.",
      },
      {
        title: "Energy & scrap analytics",
        body: "Consumption and waste patterns surfaced with ranked, costed reduction opportunities.",
      },
    ],
    outcomes: [
      "Defects caught at the line, not at the customer",
      "Unplanned downtime reduced by predicted failures",
      "Tribal knowledge captured and queryable",
    ],
    caseStudySlugs: ["logistics-document-ai"],
  },
  {
    slug: "legal",
    name: "Legal",
    summary: "Contract review, research, and matter operations.",
    title: "AI solutions for legal teams",
    intro:
      "Legal work is reading, comparing, and drafting at volume: a natural fit for AI with a lawyer in the loop. We build systems for firms and in-house teams that accelerate review and drafting while keeping privilege and confidentiality intact.",
    image: "/images/industries/legal.jpg",
    useCases: [
      {
        title: "Contract review & extraction",
        body: "Key terms, obligations, and deviations from your playbook flagged across entire contract sets.",
      },
      {
        title: "Document drafting support",
        body: "First drafts of standard agreements and correspondence generated from your templates and matter data.",
      },
      {
        title: "Legal research assistance",
        body: "Internal knowledge and precedent files searched semantically, with cited answers.",
      },
      {
        title: "Due diligence acceleration",
        body: "Data-room documents classified, summarized, and issue-flagged for attorney review.",
      },
      {
        title: "Matter intake & conflicts",
        body: "Intake information structured, conflicts pre-checked, and engagement letters drafted automatically.",
      },
      {
        title: "Confidentiality-first deployment",
        body: "Private deployments and strict data boundaries designed for privileged material.",
      },
    ],
    outcomes: [
      "Contract review hours cut dramatically per matter",
      "Consistent playbook application across reviewers",
      "Faster intake-to-engagement turnaround",
    ],
    caseStudySlugs: ["legal-contract-intelligence"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    summary: "Listings, leases, and client communication automated.",
    title: "AI solutions for real estate",
    intro:
      "Real estate teams juggle listings, leases, showings, and a relentless inbox. We automate the document and communication load (for brokerages, property managers, and proptech products) so agents spend their time with clients.",
    image: "/images/industries/real-estate.jpg",
    useCases: [
      {
        title: "Lease & contract abstraction",
        body: "Key dates, terms, and obligations extracted from leases into your management system with citations.",
      },
      {
        title: "Listing content generation",
        body: "Listing descriptions and marketing variants produced on-brand from property data.",
      },
      {
        title: "Inquiry response & scheduling",
        body: "Prospect questions answered instantly and showings booked straight into agent calendars.",
      },
      {
        title: "Tenant & owner communication",
        body: "Maintenance requests triaged, updates drafted, and recurring notices sent automatically.",
      },
      {
        title: "Document & compliance workflows",
        body: "Transaction paperwork checked for completeness and deadlines tracked automatically.",
      },
      {
        title: "Portfolio reporting",
        body: "Owner statements and portfolio summaries assembled from your systems monthly.",
      },
    ],
    outcomes: [
      "Lease data extracted in minutes, not afternoons",
      "Every inquiry answered within seconds",
      "Deadlines tracked without spreadsheet heroics",
    ],
    caseStudySlugs: ["legal-contract-intelligence", "ecommerce-personalization"],
  },
  {
    slug: "education",
    name: "Education & eLearning",
    summary: "Content operations, admissions, and learner support.",
    title: "AI solutions for education and eLearning",
    intro:
      "Education organizations serve more learners than staff can personally support. We build AI for course operations, admissions, and learner assistance, designed to support educators' judgment, never to replace it.",
    image: "/images/industries/education.jpg",
    useCases: [
      {
        title: "Learner support assistants",
        body: "Enrollment, schedule, and course questions answered from official sources around the clock.",
      },
      {
        title: "Course content operations",
        body: "Summaries, quizzes, glossaries, and alternative formats generated from existing materials for instructor review.",
      },
      {
        title: "Admissions & enrollment workflows",
        body: "Application documents processed, checklists tracked, and applicant communication automated.",
      },
      {
        title: "Feedback & assessment support",
        body: "First-pass feedback on structured assignments, with educators making every final call.",
      },
      {
        title: "Accessibility & translation",
        body: "Captions, transcripts, and translations produced at course scale.",
      },
      {
        title: "Institutional reporting",
        body: "Retention and engagement reporting assembled automatically each term.",
      },
    ],
    outcomes: [
      "Learner questions answered around the clock",
      "Course production time cut substantially",
      "Admissions processing without seasonal backlogs",
    ],
    caseStudySlugs: ["retail-support-chatbot"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
