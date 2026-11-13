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
  caseStudySlugs: string[]; // slugs of example engagements in engagements.ts
  answer?: { q: string; a: string[] }; // Plain definition shown under the hero; written so it can be quoted on its own.
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Notes, claims and patient flow, off your staff's plate.",
    title: "AI solutions for healthcare",
    intro:
      "We take the paperwork off healthcare teams: notes, coding, claims, scheduling and records. Most of it never touches a patient anyway. Clinicians and your compliance people still sign off on anything that needs judgment.",
    image: "/images/industries/healthcare.webp",
    useCases: [
      {
        title: "Clinical documentation support",
        body: "Visit notes, referral letters and discharge summaries drafted from dictation or structured data. The clinician reads it, fixes what needs fixing and signs.",
      },
      {
        title: "Claims and revenue cycle",
        body: "Coding suggestions, claim scrubbing, denial triage and first drafts of appeals, so the money arrives sooner after the visit.",
      },
      {
        title: "Patient intake and scheduling",
        body: "Digital intake, insurance verification and appointment reminders that go out on their own, which is how you bring no-shows down.",
      },
      {
        title: "Prior authorizations",
        body: "Looking up what the payer wants, filling in the forms, chasing the status. Nobody got into healthcare for this part, so we automate it.",
      },
      {
        title: "Records summaries",
        body: "A long patient history boiled down to a structured summary, with citations back to the source, ready before the appointment.",
      },
      {
        title: "Built around compliance",
        body: "HIPAA-aligned data handling, audit trails, and a human sign-off anywhere clinical judgment comes into it.",
      },
    ],
    outcomes: [
      "Clinical staff get back the hours each week that used to go on documentation",
      "Claims go out cleaner, so fewer come back denied",
      "Intake takes less time, and reminders help keep no-shows down",
    ],
    caseStudySlugs: ["med-spa-front-desk"],
    answer: {
      q: "How is AI automation used in healthcare?",
      a: [
        "In healthcare, AI automation is mostly used for the administrative work around patient care, not for clinical decisions. Common examples are drafting visit notes and referral letters for a clinician to review, scrubbing claims and drafting denial appeals, and handling intake, insurance checks and appointment reminders. Practices also use AI to summarize long patient histories before an appointment, with citations back to the source records. Healthcare automation suits clinics, specialty practices, dermatology offices and med spas where staff spend much of the day on paperwork and phones.",
        "Quest Labs Co. builds healthcare automations with permissions, audit trails and a human sign-off anywhere clinical judgment comes into it. Quest Labs Co. doesn't build software that diagnoses patients or makes treatment decisions on its own. AI automation is a poor fit for a practice whose real bottleneck is clinical capacity, because automation frees up staff time but doesn't add clinicians.",
      ],
    },
  },
  {
    slug: "finance",
    name: "Finance & Fintech",
    summary: "Reconciliation, risk checks, reporting and client ops.",
    title: "AI solutions for finance and fintech",
    intro:
      "We automate the high-volume work finance teams can't afford to get wrong: reconciliation, monitoring, reporting and client operations. Every step leaves an audit trail from day one, because someone will ask for it.",
    image: "/images/industries/finance.webp",
    useCases: [
      {
        title: "Reconciliation and exceptions",
        body: "Transactions matched across your systems automatically. People only see the ones that really don't line up.",
      },
      {
        title: "Document and KYC processing",
        body: "IDs, statements and onboarding documents read, checked and filed, with a record of every step.",
      },
      {
        title: "Risk and fraud monitoring",
        body: "Anomaly scoring that flags risk the same way every time and says why, so compliance can review the reasoning.",
      },
      {
        title: "Regulatory reporting",
        body: "Recurring reports built from your source systems on schedule. A person approves each one before it's filed.",
      },
      {
        title: "Client communication drafts",
        body: "Portfolio summaries, market commentary and service replies drafted for an advisor to check before they go out.",
      },
      {
        title: "Trading operations support",
        body: "Order lifecycle monitoring, settlement chasing and desk reports, automated from start to finish.",
      },
    ],
    outcomes: [
      "Reconciliation takes hours instead of days",
      "New clients get onboarded faster, with a complete audit trail behind them",
      "Analysts spend their time on analysis instead of assembling the numbers",
    ],
    caseStudySlugs: ["bookkeeping-document-collection"],
    answer: {
      q: "How is AI automation used in finance and fintech?",
      a: [
        "In finance and fintech, AI automation is mostly used for high-volume, rules-heavy back-office work where mistakes are expensive. Typical tasks include matching transactions across systems so staff only review the real exceptions, reading and filing KYC and onboarding documents, and building recurring reports on a schedule. Firms also use AI to draft portfolio summaries for an advisor to check. Finance automation suits accounting firms, bookkeepers, lenders, wealth managers and fintech companies with growing transaction or client volumes.",
        "Quest Labs Co. builds finance automations with an audit trail on every step and a person approving anything that gets filed or sent to a client. When a Quest Labs Co. risk model flags something, the model also records why, so compliance can review the reasoning. AI automation doesn't replace a controller or a compliance officer, and judgment calls on risk and reporting stay with people.",
      ],
    },
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    summary: "Support, personalization and catalog upkeep for busy stores.",
    title: "AI solutions for retail and e-commerce",
    intro:
      "We build AI that answers your customers right away, keeps the catalog clean, forecasts demand and personalizes without being creepy. Retail margin is won in operations, and this lets you grow without hiring at the same rate.",
    image: "/images/industries/retail.webp",
    useCases: [
      {
        title: "Customer support automation",
        body: "\"Where's my order?\", returns and product questions answered by an assistant that works from your actual policies and systems.",
      },
      {
        title: "Catalog and content",
        body: "Product descriptions, attributes and translations written and kept up to date across the whole catalog.",
      },
      {
        title: "Demand forecasting",
        body: "Buying and inventory decisions based on a real forecast instead of last year's spreadsheet.",
      },
      {
        title: "Personalization and recommendations",
        body: "On-site recommendations and email content that follow what people actually browse.",
      },
      {
        title: "Reviews and feedback",
        body: "Thousands of reviews turned into a monthly, ranked list of product and operations problems worth fixing.",
      },
      {
        title: "Marketplace operations",
        body: "Listing sync, repricing inputs and channel exceptions handled automatically on every marketplace you sell on.",
      },
    ],
    outcomes: [
      "Most routine tickets get resolved without an agent touching them",
      "Catalog updates go live in hours, not weeks",
      "Inventory follows a forecast, so you run out of things less often",
    ],
    caseStudySlugs: ["skincare-support-tickets"],
    answer: {
      q: "How is AI used in retail and e-commerce?",
      a: [
        "In retail and e-commerce, AI is mostly used to answer customers quickly and keep store operations running without hiring at the same rate as sales grow. Common uses include an assistant that answers order and return questions from the store's real policies, product descriptions kept current across a whole catalog, and demand forecasts that guide buying. Stores also use AI to turn thousands of reviews into a ranked list of problems worth fixing. Retail AI suits online stores and multichannel sellers with a big catalog or a heavy support inbox.",
        "Quest Labs Co. builds retail assistants that work from a store's own policies and hand tricky cases to a person with the full conversation attached. A small store with a short catalog and a quiet inbox usually doesn't need custom AI, because the built-in tools on platforms like Shopify cover most of that need.",
      ],
    },
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    summary: "Freight paperwork, tracking and exceptions, handled.",
    title: "AI solutions for logistics and supply chain",
    intro:
      "We automate the BOLs, PODs, customs forms, rate confirmations and status-chasing behind every load. Logistics is a document business in a transportation costume, and your ops team should be working exceptions, not inboxes.",
    image: "/images/industries/logistics.webp",
    useCases: [
      {
        title: "Freight document processing",
        body: "Bills of lading, PODs and invoices read and entered into your TMS automatically, in whatever format they show up.",
      },
      {
        title: "Tracking and notifications",
        body: "Status pulled from every carrier and sent to the customer before they email to ask where it is.",
      },
      {
        title: "Exception management",
        body: "Delays, damage and discrepancies spotted, sorted and sent to the right person with a suggested next step.",
      },
      {
        title: "Quotes and rates",
        body: "Rate requests read, quotes drafted from your tariffs, and follow-ups tracked so none of them go quiet.",
      },
      {
        title: "Customs and compliance paperwork",
        body: "Classification suggestions and prepared documents, with a person reviewing them before anything is filed.",
      },
      {
        title: "Carrier and vendor scorecards",
        body: "Performance reports that keep themselves current from your own operations data.",
      },
    ],
    outcomes: [
      "Standard-format paperwork barely needs typing in by hand",
      "Customers hear where their shipment is before they think to ask",
      "Your ops team spends the day on the loads that actually need a person",
    ],
    caseStudySlugs: ["freight-delivery-paperwork"],
    answer: {
      q: "How is AI automation used in logistics and supply chain?",
      a: [
        "In logistics and supply chain, AI automation is mostly used to process the paperwork behind every load and keep customers updated without anyone chasing status. Typical tasks include reading bills of lading, PODs and carrier invoices into a TMS, sending customers tracking updates before they ask, and drafting quotes from rate requests. Delays, damage and discrepancies get sorted and sent to the right person with a suggested next step. Logistics automation suits freight brokers, 3PLs, carriers and distributors whose ops teams live in their inboxes.",
        "Quest Labs Co. builds logistics automations that read documents in whatever format they arrive and send anything unclear to a person. Customs classifications and filings always get human review before submission. AI automation won't fix a weak carrier network or a pricing problem, because automation removes the typing and the chasing while decisions about loads, lanes and customers stay with the ops team.",
      ],
    },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "Quality checks, maintenance and what's happening on the floor.",
    title: "AI solutions for manufacturing",
    intro:
      "We turn your production data into systems for quality inspection, maintenance prediction and planning that plug into your existing MES and ERP. Most plants have years of that data. What they don't have is time to use it.",
    image: "/images/industries/manufacturing.webp",
    useCases: [
      {
        title: "Visual quality inspection",
        body: "Cameras check every unit for defects, the same way every time, instead of a sample pulled off the line.",
      },
      {
        title: "Predictive maintenance",
        body: "Sensor and log data turned into failure predictions, so the machine gets fixed before it stops the line.",
      },
      {
        title: "Production planning support",
        body: "Demand forecasts and schedule suggestions that respect your constraints. Your planners approve them.",
      },
      {
        title: "Work instructions and SOPs",
        body: "Floor staff ask a question in plain language and get an answer from your own procedures, with the source cited.",
      },
      {
        title: "Supplier paperwork",
        body: "Certs, POs and delivery paperwork processed automatically, with anything odd flagged for a person.",
      },
      {
        title: "Energy and scrap analytics",
        body: "Where energy and material are going to waste, with the fixes ranked and costed.",
      },
    ],
    outcomes: [
      "Defects get caught at the line, not by your customer",
      "Fewer surprise breakdowns, because likely failures show up ahead of time",
      "What your veterans know gets written down, and anyone can look it up",
    ],
    caseStudySlugs: ["fabrication-quote-intake"],
    answer: {
      q: "How is AI used in manufacturing?",
      a: [
        "In manufacturing, AI is mostly used to turn production data a plant already collects into quality checks, maintenance warnings and planning support. Common examples include camera-based visual inspection of every unit on the line, predicting equipment failures from sensor and log data, and processing supplier certs, POs and delivery paperwork. Plants also use AI assistants that answer floor staff questions from the plant's own SOPs, with the source cited. Manufacturing AI suits plants and fabrication shops with years of production data and no time to use it.",
        "Quest Labs Co. builds manufacturing systems that plug into an existing MES and ERP, and planners approve every schedule suggestion before it takes effect. Quest Labs Co. can also start smaller, with supplier paperwork or quote intake, before any sensor work. Predictive maintenance needs a solid history of sensor or log data, so a plant without that history should start somewhere else.",
      ],
    },
  },
  {
    slug: "legal",
    name: "Legal",
    summary: "Contract review, research and matter admin.",
    title: "AI solutions for legal teams",
    intro:
      "We build AI that speeds up contract review, research and drafting for law firms and in-house teams, with a lawyer checking the work. Legal work is mostly reading, comparing and drafting at volume, which suits AI well. Privilege and confidentiality stay intact.",
    image: "/images/industries/legal.webp",
    useCases: [
      {
        title: "Contract review and extraction",
        body: "Key terms, obligations and departures from your playbook flagged across a whole set of contracts.",
      },
      {
        title: "Drafting support",
        body: "First drafts of standard agreements and letters, built from your templates and the matter details.",
      },
      {
        title: "Research assistance",
        body: "Your own knowledge base and precedent files searched by meaning, not just keywords, with cited answers.",
      },
      {
        title: "Due diligence",
        body: "Data-room documents sorted, summarized and flagged so an attorney can go straight to the issues.",
      },
      {
        title: "Matter intake and conflicts",
        body: "Intake details structured, conflicts pre-checked and the engagement letter drafted automatically.",
      },
      {
        title: "Confidentiality first",
        body: "Private deployments and strict data boundaries, set up for privileged material.",
      },
    ],
    outcomes: [
      "Reviewers start from flagged terms instead of reading every page cold",
      "Your playbook gets applied the same way, whoever is reviewing",
      "New matters get from intake to engagement letter faster",
    ],
    caseStudySlugs: ["law-firm-client-intake"],
    answer: {
      q: "How is AI used in law firms and legal teams?",
      a: [
        "In legal work, AI is mostly used for the reading, comparing and drafting that lawyers do at volume, with a lawyer checking every result. Typical tasks include flagging key terms and departures from a firm's playbook across a set of contracts, drafting standard agreements and letters from templates, and searching precedent files by meaning with cited answers. Firms also use AI to pre-check conflicts and draft engagement letters. Legal AI suits law firms and in-house legal teams with heavy contract review, due diligence or intake volume.",
        "Quest Labs Co. builds legal AI on private deployments with strict data boundaries, set up for privileged material. Every output from a Quest Labs Co. legal system goes to an attorney before anyone relies on it. Legal AI doesn't replace an attorney's judgment, and a firm that handles a few matters a month with little repeat paperwork usually gets more from better templates.",
      ],
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    summary: "Listings, leases and the inbox that never stops.",
    title: "AI solutions for real estate",
    intro:
      "We automate the paperwork and messages that bury real estate teams: listings, leases, showings and an inbox that never stops. We build it for brokerages, property managers and proptech products, so agents can spend their time with clients.",
    image: "/images/industries/real-estate.webp",
    useCases: [
      {
        title: "Lease and contract abstraction",
        body: "Key dates, terms and obligations pulled out of leases and into your management system, with citations back to the page.",
      },
      {
        title: "Listing content",
        body: "Listing descriptions and marketing versions written from the property data, in your brand's voice.",
      },
      {
        title: "Inquiry replies and showings",
        body: "Prospect questions answered straight away, and showings booked right into the agent's calendar.",
      },
      {
        title: "Tenant and owner communication",
        body: "Maintenance requests triaged, updates drafted, and recurring notices sent without anyone having to remember.",
      },
      {
        title: "Documents and compliance",
        body: "Transaction paperwork checked for missing pieces, and deadlines tracked automatically.",
      },
      {
        title: "Portfolio reporting",
        body: "Owner statements and portfolio summaries pulled together from your systems every month.",
      },
    ],
    outcomes: [
      "Lease data comes out in minutes, not a whole afternoon",
      "Every inquiry gets an answer within seconds",
      "Deadlines get tracked without anyone babysitting a spreadsheet",
    ],
    caseStudySlugs: ["rental-property-reporting"],
    answer: {
      q: "How is AI automation used in real estate and property management?",
      a: [
        "In real estate and property management, AI automation is mostly used to handle the paperwork and the nonstop messages that bury agents and managers. Common tasks include pulling key dates and terms out of leases into a management system, answering prospect inquiries and booking showings straight into an agent's calendar, and triaging tenant maintenance requests. Property managers also use automation to put together monthly owner statements and portfolio summaries. Real estate automation suits brokerages, property management companies and proptech products with more inquiries and documents than staff.",
        "Quest Labs Co. builds real estate automations around the systems a team already uses, with a citation back to the lease page for every extracted term. Real estate and property management are among the businesses Quest Labs Co. knows well. Automation shouldn't stand in for an agent in a negotiation or a sensitive tenant conversation, and those moments stay with people.",
      ],
    },
  },
  {
    slug: "education",
    name: "Education & eLearning",
    summary: "Course ops, admissions and help for learners.",
    title: "AI solutions for education and eLearning",
    intro:
      "We build AI for course operations, admissions and learner support, so a small staff can look after a lot of learners. It backs up educators' judgment. It doesn't replace it.",
    image: "/images/industries/education.webp",
    useCases: [
      {
        title: "Learner support assistants",
        body: "Questions about enrollment, schedules and courses answered from your official sources, at any hour.",
      },
      {
        title: "Course content operations",
        body: "Summaries, quizzes, glossaries and other formats made from materials you already have, for instructors to review.",
      },
      {
        title: "Admissions and enrollment",
        body: "Application documents processed, checklists tracked and applicants kept in the loop automatically.",
      },
      {
        title: "Feedback and assessment support",
        body: "A first pass of feedback on structured assignments. The educator makes every final call.",
      },
      {
        title: "Accessibility and translation",
        body: "Captions, transcripts and translations for every course, not just the ones someone found time for.",
      },
      {
        title: "Institutional reporting",
        body: "Retention and engagement reports put together automatically each term.",
      },
    ],
    outcomes: [
      "Learners get answers at any hour, including the ones your staff sleep through",
      "Instructors review course materials instead of building every piece from scratch",
      "Admissions keeps up in the busy season instead of falling behind",
    ],
    caseStudySlugs: ["tutoring-center-scheduling"],
    answer: {
      q: "How is AI used in education and eLearning?",
      a: [
        "In education and eLearning, AI is mostly used to help a small staff support a large number of learners, with educators keeping the final say. Common uses include an assistant that answers enrollment, schedule and course questions from official sources, processing admissions documents and tracking application checklists, and producing captions, transcripts and translations for courses. Instructors also use AI to turn existing materials into quizzes and summaries. Education AI suits tutoring centers, training providers, online course businesses and schools with lean admin teams.",
        "Quest Labs Co. builds education tools that answer only from an institution's approved sources and send all generated course content to an instructor before learners see it. Feedback on assignments from a Quest Labs Co. system is a first pass, and the educator makes every final call. AI isn't the right tool for grading high-stakes work on its own or for replacing the teaching itself.",
      ],
    },
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
