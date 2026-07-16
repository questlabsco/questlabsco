export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  tech: string[];
  image: string; // hero/card image
  secondImage: string; // in-body image
  summary: string; // card + hero paragraph
  aboutClient: string;
  challenge: string[];
  solution: string[];
  features: { title: string; body: string }[];
  results: { value: string; label: string }[];
  resultsNarrative: string;
  quote: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-rcm-analytics",
    title: "Claims analytics and denial automation for a healthcare network",
    client: "Confidential",
    industry: "Healthcare",
    services: ["Workflow Automation", "AI Consulting"],
    tech: ["Python", "Claude", "PostgreSQL", "Power BI"],
    image: "/images/case/healthcare-rcm.jpg",
    secondImage: "/images/industries/healthcare.jpg",
    summary:
      "A multi-clinic healthcare network was losing revenue to claim denials that staff had no time to analyze or appeal. We automated denial triage and appeal drafting, and built the analytics to stop denials at the source.",
    aboutClient:
      "The client is a regional healthcare network operating a dozen outpatient clinics with a central billing office. Their billing team of nine handled every payer interaction manually, from claim submission through denial follow-up, using a mainstream practice-management system supplemented by spreadsheets.",
    challenge: [
      "Denied claims piled up faster than the billing team could work them. Each denial required reading payer correspondence, cross-referencing the original claim, finding the root cause, and drafting an appeal: 40 or more minutes of skilled work per claim. With hundreds of denials arriving monthly, the team triaged by dollar value and simply wrote off the long tail.",
      "Leadership had no visibility into why denials happened. The same preventable errors (expired authorizations, mismatched codes, missing modifiers) recurred month after month because nobody had time to analyze patterns, let alone feed fixes back to the front desk and coding staff.",
      "An earlier attempt to outsource denial management had failed: the vendor worked only the high-value claims, quality was inconsistent, and the network's data left its control. The client wanted the capability in-house, but hiring more billers only scaled the cost of the problem.",
    ],
    solution: [
      "We started with a two-week audit of the denial workflow, sampling six months of payer correspondence to quantify root causes and appeal outcomes. The audit showed 68% of denials fell into eight repeatable categories, and that appeals in those categories succeeded four times out of five when they were actually filed. That made the business case: the network wasn't losing to hard denials, it was losing to unworked ones.",
      "We then built an AI pipeline that reads each denial as it arrives, classifies its root cause against the eight categories, pulls the matching claim record, and drafts a complete appeal letter with supporting documentation attached. Every draft lands in a review queue where a biller approves, edits, or rejects it. The system never files anything on its own.",
      "Alongside the pipeline we delivered a denial-analytics dashboard that ranks root causes by dollar impact per clinic, per payer, and per procedure code. The revenue-cycle director now runs a monthly review with front-desk and coding leads, working down the top of that list. Prevention, not just recovery.",
      "Rollout was deliberately staged: two clinics for the first month with every AI draft double-checked, then network-wide once the approval rate stabilized above 90%. The billing team was involved from the first workshop, which is why adoption never became a fight.",
    ],
    features: [
      {
        title: "Automatic denial classification",
        body: "Incoming payer correspondence is parsed and categorized by root cause within minutes of arrival, with a confidence score on every classification.",
      },
      {
        title: "AI-drafted appeals with citations",
        body: "Each appeal cites the specific claim data, payer policy language, and clinical documentation that supports it, assembled from the network's own systems.",
      },
      {
        title: "Human review queue",
        body: "Billers approve or edit every draft before filing. Rejections feed back into the system as training signal, so draft quality improves monthly.",
      },
      {
        title: "Root-cause analytics dashboard",
        body: "Denial causes ranked by dollar impact across clinics, payers, and codes: the agenda for a monthly prevention review.",
      },
      {
        title: "Write-off guardrails",
        body: "No claim is written off until the system confirms it was either appealed or genuinely unappealable, ending silent revenue leakage.",
      },
      {
        title: "Full audit trail",
        body: "Every classification, draft, edit, and filing is logged, ready for payer disputes and compliance review.",
      },
    ],
    results: [
      { value: "3×", label: "more denials worked per biller per day" },
      { value: "41%", label: "reduction in write-offs within two quarters" },
      { value: "9 min", label: "average biller time per appeal, from 40+" },
    ],
    resultsNarrative:
      "Within two quarters the network recovered revenue it had previously written off as a cost of doing business, while the billing team shrank its backlog to zero for the first time in years. The prevention loop is now cutting denials before they happen: front-end fixes driven by the dashboard reduced new denials 18% in the first six months.",
    quote: {
      text: "We assumed we needed more billers. What we needed was for the work each biller could do to count three times as much.",
      author: "Jane Doe",
      role: "Revenue Cycle Director",
    },
  },
  {
    slug: "fintech-trading-automation",
    title: "Post-trade reconciliation automation for a trading platform",
    client: "Confidential",
    industry: "Finance",
    services: ["AI Agents", "AI Integration"],
    tech: ["Python", "Temporal", "PostgreSQL", "AWS"],
    image: "/images/case/fintech-trading.jpg",
    secondImage: "/images/industries/finance.jpg",
    summary:
      "A brokerage's operations team spent every morning manually reconciling trades across three systems. An automated pipeline with an exception-handling agent now clears the day's book before the team's first coffee.",
    aboutClient:
      "The client is a mid-sized brokerage offering multi-asset trading to retail and professional clients. Its operations desk of six reconciled every trading day across an order management system, a custodian feed, and the internal ledger: three systems with three different identifier schemes and three different ideas of when a day ends.",
    challenge: [
      "Trades landed in the three systems with mismatched identifiers, timing differences, and occasional partial fills that split one economic trade into several records. Matching them was a spreadsheet exercise that consumed the desk's entire morning: roughly four hours of concentrated, error-prone work before any real operations could start.",
      "The stakes were asymmetric: a routine day produced a handful of legitimate breaks, but missing a single genuine discrepancy meant a mis-stated client position and a potential compliance incident. The desk was forced to treat every one of thousands of rows with the same suspicion, because the process had no way to concentrate attention where it mattered.",
      "Volume was growing 30% year over year. The choice was to keep adding headcount to a process nobody trusted, or to rebuild it.",
    ],
    solution: [
      "We built a reconciliation engine that ingests all three sources continuously and matches trades on a configurable rule cascade: exact identifier matches first, then fuzzy matches on instrument, quantity, price, and timestamp windows, with every rule's tolerance explicit and auditable rather than buried in a spreadsheet formula.",
      "The engine auto-clears the overwhelming majority of the book. What remains are true breaks, and those go to an AI agent that investigates each one before a human sees it. The agent pulls context from all three systems, checks for the known break patterns (partial fills, late settlement, fee differences, corporate actions), classifies the likely cause, and drafts the correcting entry.",
      "Every agent conclusion arrives in a morning review queue as a one-paragraph explanation with linked evidence. The operations analyst approves, amends, or escalates; nothing posts to the ledger without a human decision, and every decision is logged against the evidence the agent assembled.",
      "The system runs on durable workflows, so a mid-run failure resumes instead of restarting: an operational requirement the client's compliance team specified after their previous automation attempt produced silent gaps during outages.",
    ],
    features: [
      {
        title: "Three-way continuous matching",
        body: "OMS, custodian, and ledger records matched on an explicit, auditable rule cascade instead of overnight batch spreadsheets.",
      },
      {
        title: "AI break investigation",
        body: "Each unmatched item is investigated by an agent that gathers evidence across systems and classifies the cause before a human sees it.",
      },
      {
        title: "Drafted corrections with approval gates",
        body: "The agent proposes the correcting entry; an analyst approves or amends. Nothing touches the ledger autonomously.",
      },
      {
        title: "Pattern library",
        body: "Known break causes are codified and versioned, so institutional knowledge stops living in one senior analyst's head.",
      },
      {
        title: "Durable, resumable runs",
        body: "Workflow-engine execution guarantees no silent gaps after infrastructure failures.",
      },
      {
        title: "Complete audit trail",
        body: "Every match, classification, and correction is reconstructable for compliance: evidence attached.",
      },
    ],
    results: [
      { value: "98.6%", label: "of trades auto-matched daily" },
      { value: "4 hrs", label: "of manual work removed per day" },
      { value: "100%", label: "audit trail coverage on corrections" },
    ],
    resultsNarrative:
      "The desk's morning reconciliation now takes under twenty minutes of review instead of four hours of matching. Breaks get attention proportional to risk, volume growth no longer drives hiring, and the compliance team gained a better audit trail than the manual process ever produced.",
    quote: {
      text: "The agent doesn't just flag breaks. It shows up with the evidence and a proposed fix. My team makes decisions now instead of hunting through systems.",
      author: "John Smith",
      role: "Head of Operations",
    },
  },
  {
    slug: "retail-support-chatbot",
    title: "AI support assistant for a growing e-commerce brand",
    client: "Confidential",
    industry: "Retail & E-commerce",
    services: ["AI Chatbots", "AI Integration"],
    tech: ["Claude", "Next.js", "Shopify API", "Zendesk"],
    image: "/images/case/retail-chatbot.jpg",
    secondImage: "/images/industries/retail.jpg",
    summary:
      "A D2C retailer's support queue doubled every holiday season. A grounded AI assistant now resolves the routine majority (order status, returns, product questions) and hands the rest to agents with full context.",
    aboutClient:
      "The client is a direct-to-consumer retailer selling through Shopify with a support team of eight on Zendesk. Support volume tracked revenue growth all year and then doubled every November: a seasonal spike the team could never staff for economically.",
    challenge: [
      "Hiring seasonal agents meant training people for six weeks so they could help for eight, and quality suffered anyway: seasonal staff answered from incomplete knowledge, creating escalations that consumed the permanent team's time. In peak season, first response slipped past 24 hours and one-star reviews said so explicitly.",
      "Roughly two-thirds of tickets were variations of the same three questions: where is my order, how do I return this, does this product fit my case, each answerable from data that already existed in Shopify and the brand's policy pages. The team's expertise was being spent on questions that didn't need it.",
      "The founders had tested an off-the-shelf chatbot the previous year and pulled it within weeks: it answered confidently from nothing, invented a return policy, and generated more complaints than it resolved. Any new attempt had to be provably grounded before it faced a customer.",
    ],
    solution: [
      "We built an assistant grounded exclusively in the brand's real policy pages, product catalog, and FAQ, with retrieval citations on every answer, so both the customer and the support team can see which policy an answer came from. Questions outside the approved knowledge get a polite handoff, never an improvisation.",
      "The assistant connects to Shopify with scoped read permissions, so 'where is my order' gets a real tracking answer, and to the returns system with a narrow write permission that lets it initiate standard returns within policy. Anything nonstandard (damaged items, exceptions, disputes) routes to a human with the conversation summarized and the relevant order attached.",
      "Escalation is confidence-based and deliberately conservative: below a threshold, the assistant hands off rather than guesses. We tested against a corpus of adversarial transcripts (angry customers, ambiguous requests, deliberate manipulation attempts) before the assistant met a real one.",
      "Launch was staged behind the existing contact form for a month, answering in a review mode where agents approved outbound responses. Only after the approval rate held above 95% did it go fully live: first on chat, then on email.",
    ],
    features: [
      {
        title: "Grounded answers with citations",
        body: "Every response cites the policy or product page it came from. No source, no answer: the assistant hands off instead.",
      },
      {
        title: "Live order lookups",
        body: "Scoped Shopify access turns tracking questions into instant, accurate answers at any hour.",
      },
      {
        title: "In-policy return processing",
        body: "Standard returns initiated end-to-end by the assistant; anything exceptional goes to a human.",
      },
      {
        title: "Context-rich handoffs",
        body: "Escalations arrive with the conversation summarized and the order attached: customers never repeat themselves.",
      },
      {
        title: "Adversarial test suite",
        body: "A growing corpus of hard transcripts runs against every change before it ships.",
      },
      {
        title: "Multichannel deployment",
        body: "One assistant, consistent answers across website chat and email.",
      },
    ],
    results: [
      { value: "64%", label: "of tickets resolved without an agent" },
      { value: "<1 min", label: "median first response, from 9 hours" },
      { value: "+18", label: "point CSAT improvement in peak season" },
    ],
    resultsNarrative:
      "The following holiday season was the brand's largest ever and the first with no seasonal support hires. The permanent team now works exceptions and high-touch cases, response-time complaints disappeared from reviews, and the assistant's resolution rate keeps climbing as its knowledge base grows.",
    quote: {
      text: "Last Black Friday broke our support queue. This one, the bot handled two-thirds of it and my team went home on time.",
      author: "Jane Doe",
      role: "Co-founder",
    },
  },
  {
    slug: "logistics-document-ai",
    title: "Freight document automation for a logistics provider",
    client: "Confidential",
    industry: "Logistics",
    services: ["Workflow Automation", "AI Agents", "Generative AI"],
    tech: ["Python", "Claude", "n8n", "TMS API"],
    image: "/images/case/logistics-documents.jpg",
    secondImage: "/images/industries/logistics.jpg",
    summary:
      "A freight forwarder's team re-keyed BOLs, PODs, and carrier invoices into their TMS by hand. Document AI now handles every standard format, and an agent chases the missing paperwork.",
    aboutClient:
      "The client is a freight forwarding company coordinating shipments across a large carrier network. Every shipment generated a file of documents (bills of lading, proof-of-delivery slips, carrier invoices, customs paperwork) arriving by email in every imaginable format: clean PDFs, phone photos of paper forms, spreadsheets, and scans of scans.",
    challenge: [
      "Four full-time staff did nothing but read incoming documents and re-key their contents into the transportation management system. The work was mind-numbing, turnover in the role was constant, and every new hire meant weeks of training on document quirks.",
      "Manual entry errors surfaced downstream as billing disputes: a transposed weight or wrong reference number meant a carrier invoice that didn't match the shipment record, hours of investigation, and sometimes a written-off difference. Month-end close regularly stalled for days on incomplete files.",
      "Missing paperwork was its own workflow. When a POD or invoice never arrived, someone had to notice, find the carrier contact, write the chase email, and remember to follow up: a process that lived in inbox flags and failed quietly all the time.",
    ],
    solution: [
      "We built an extraction pipeline that watches the operations inbox, classifies each incoming document by type, and extracts its fields regardless of format: modern LLM-based document understanding handles the phone photos and messy scans that defeated the client's earlier OCR attempt.",
      "Extracted data is validated against the shipment record before anything is written: quantities, weights, references, and rates must reconcile with what the TMS expects. Clean documents post automatically; discrepancies land in an exception queue with the difference highlighted, so a human resolves in seconds what used to take an investigation.",
      "For incomplete files, a follow-up agent takes over: it knows which documents each shipment still needs, drafts the carrier chase emails, tracks responses, and escalates to a human after two unanswered attempts. Month-end no longer depends on someone remembering.",
      "The whole pipeline is built on the client's existing tools (their inbox, their TMS, an orchestration layer we added) so operations staff kept their working environment and simply stopped doing the re-keying part of it.",
    ],
    features: [
      {
        title: "Format-agnostic extraction",
        body: "BOLs, PODs, invoices, and customs forms parsed from PDFs, photos, and scans alike: no carrier onboarding required.",
      },
      {
        title: "Validation before entry",
        body: "Every extracted field reconciles against the shipment record before posting; mismatches go to an exception queue, not into the TMS.",
      },
      {
        title: "Automatic document chasing",
        body: "An agent tracks each shipment's missing paperwork, emails carriers, and escalates only after real follow-up fails.",
      },
      {
        title: "Exception queue with highlights",
        body: "Humans see exactly which field disagrees and by how much: resolution in seconds, not investigations.",
      },
      {
        title: "Dispute-ready records",
        body: "Original document images stay linked to every TMS entry, ending the hunt through inboxes during billing disputes.",
      },
      {
        title: "Volume elasticity",
        body: "Peak-season document surges process at the same speed as a quiet Tuesday.",
      },
    ],
    results: [
      { value: "92%", label: "of documents processed with no human touch" },
      { value: "4 FTEs", label: "of manual entry redeployed to operations" },
      { value: "2 days", label: "faster month-end close" },
    ],
    resultsNarrative:
      "Data entry as a job function no longer exists at the company: the four staff who did it moved into customer-facing operations roles that had been chronically understaffed. Billing disputes dropped with entry errors, and month-end close now finishes on schedule with complete files.",
    quote: {
      text: "We used to hire for data entry and lose people every six months. That whole job just doesn't exist here anymore.",
      author: "John Smith",
      role: "Operations Director",
    },
  },
  {
    slug: "legal-contract-intelligence",
    title: "Contract review acceleration for a corporate legal team",
    client: "Confidential",
    industry: "Legal",
    services: ["Generative AI", "AI Consulting", "UI/UX Design"],
    tech: ["Claude", "React", "pgvector", "Azure"],
    image: "/images/case/legal-contracts.jpg",
    secondImage: "/images/industries/legal.jpg",
    summary:
      "An in-house legal team reviewed hundreds of vendor agreements a year against the same playbook. A review workspace we designed and built flags deviations, cites clauses, and drafts fallback language: lawyers make the calls.",
    aboutClient:
      "The client is the in-house legal department of a mid-sized enterprise, a team of five lawyers supporting procurement across the whole business. Vendor agreements were their highest-volume work: hundreds per year, most reviewed against the same 40-point playbook of required terms, forbidden clauses, and preferred fallbacks.",
    challenge: [
      "Every agreement got a manual read against the full playbook regardless of length or risk. Turnaround stretched to two weeks at busy times, and the business noticed: procurement teams began routing around legal for 'small' contracts, which is exactly how risk enters an organization: through the side door, in volume.",
      "Playbook application was inconsistent by nature. Five lawyers applied 40 points with five levels of experience and five sets of habits; the same clause could pass one review and get negotiated in another. New team members took months to internalize positions that existed mostly as institutional memory.",
      "The team had evaluated legal-tech review platforms but found them rigid: built around someone else's playbook taxonomy, priced per seat for the whole department, and impossible to adapt to the specific fallback language the team had refined over years.",
    ],
    solution: [
      "We ran a short consulting phase first, turning the informal playbook into an explicit, versioned artifact: every position, its rationale, its severity, and its approved fallback language. That document alone, before any software, improved consistency, and it became the specification the system enforces.",
      "We then designed and built a review workspace around the team's actual workflow. A lawyer drops in a contract; the system checks it clause-by-clause against the playbook and presents every deviation with the source text cited, the severity ranked, and the approved fallback drafted and ready to insert.",
      "The lawyer works down the deviation list accepting, editing, or rejecting each point: never reading a raw 60-page agreement cold. When review finishes, the system assembles the redlined document and the cover email summarizing the negotiation position. UX was half the project: the interface had to feel like a sharper way to lawyer, not a form to feed a machine.",
      "Every accepted or overridden point feeds an analytics view that shows how the playbook performs in the real world (which positions vendors always accept, which always get negotiated) so the playbook itself now improves on evidence.",
    ],
    features: [
      {
        title: "Clause-by-clause playbook checking",
        body: "Every agreement checked against all 40 positions with cited source text: nothing skipped on a busy day.",
      },
      {
        title: "Drafted fallback language",
        body: "Deviations arrive with the team's own approved alternative wording ready to insert, not a generic suggestion.",
      },
      {
        title: "Severity-ranked review queue",
        body: "Lawyers see deal-breakers first and boilerplate last, matching attention to risk.",
      },
      {
        title: "One-click redline assembly",
        body: "The finished review becomes a tracked-changes document and a summary email automatically.",
      },
      {
        title: "Versioned playbook",
        body: "Positions, rationales, and fallbacks live in one governed artifact: onboarding material and system spec at once.",
      },
      {
        title: "Position analytics",
        body: "Acceptance and negotiation rates per playbook point turn playbook maintenance into an evidence-based exercise.",
      },
    ],
    results: [
      { value: "72%", label: "reduction in review turnaround time" },
      { value: "100%", label: "playbook coverage on every contract" },
      { value: "0", label: "off-process contracts since rollout" },
    ],
    resultsNarrative:
      "Standard vendor agreements now turn around in days, and the business stopped routing around legal: the fast path is the official path. Junior lawyers apply the full playbook from their first week, and the team's negotiating positions are strengthening as the analytics reveal what actually works.",
    quote: {
      text: "It reads every contract the way our most careful lawyer reads on her best day, and then lets the humans do the actual lawyering.",
      author: "Jane Doe",
      role: "General Counsel",
    },
  },
  {
    slug: "ecommerce-personalization",
    title: "Website rebuild with AI personalization for an online retailer",
    client: "Confidential",
    industry: "Retail & E-commerce",
    services: ["Web Development", "UI/UX Design"],
    tech: ["Next.js", "TypeScript", "Tailwind", "Cloudflare"],
    image: "/images/case/ecommerce-personalization.jpg",
    secondImage: "/images/company/laptop-website.jpg",
    summary:
      "A specialty retailer's aging site was slow, hard to edit, and converted poorly on mobile. We redesigned and rebuilt it end to end, adding recommendation and search intelligence the team can tune themselves.",
    aboutClient:
      "The client is a specialty online retailer with a catalog of several thousand SKUs and a loyal repeat-customer base. The existing site had grown over seven years on an aging platform: every content change required a developer, page speed had decayed with each added plugin, and mobile (now most of their traffic) was clearly an afterthought.",
    challenge: [
      "Mobile conversion ran at half of desktop. Sessions were there; sales weren't. Page loads exceeded four seconds on median mobile connections, product discovery relied on exact-match search that returned nothing for natural phrasings, and checkout required pinch-zooming on a form designed for a mouse.",
      "The marketing team was hostage to a developer queue for every banner, landing page, and copy change: a multi-day cycle for edits that should take minutes, which meant campaigns launched late or not at all.",
      "Product discovery wasted the catalog's depth. Search returned literal matches only, category pages were static, and the 'related products' block showed the same manually-chosen items to everyone. Customers who would have bought more simply never saw the products they'd have bought.",
    ],
    solution: [
      "We began with a UX research phase: session recordings, funnel analysis, and interviews with repeat customers. The redesign that followed was mobile-first at every decision (navigation, product pages, and a checkout rebuilt around thumbs rather than cursors) with a design system so every future page inherits the same standards.",
      "Engineering rebuilt the site on a modern edge-deployed stack, with the catalog served statically for speed and personalized elements hydrated client-side. Median mobile page load dropped from 4.2 seconds to under one second: a change customers feel on the first tap.",
      "Product discovery got two intelligence layers: semantic search that understands natural phrasing and attribute intent, and a recommendation model trained on the store's own browsing and purchase history. Recommendations render in real time and the merchandising team can inspect, weight, and override them from an admin view: machine suggestions, human control.",
      "Content management moved to a headless CMS with preview environments, so marketing edits pages, banners, and landing pages directly. The developer queue for content changes is gone; engineering time goes to features now.",
    ],
    features: [
      {
        title: "Mobile-first redesign",
        body: "Navigation, product pages, and checkout designed for thumbs first, validated in user testing before build.",
      },
      {
        title: "Sub-second edge delivery",
        body: "Static catalog pages served from the edge worldwide; personalization hydrates without blocking the paint.",
      },
      {
        title: "Semantic product search",
        body: "Natural phrasings and attribute intent return the right products: no more zero-result searches on obvious queries.",
      },
      {
        title: "Behavior-trained recommendations",
        body: "A model trained on the store's own data drives related-product and cross-sell placements in real time.",
      },
      {
        title: "Merchandiser controls",
        body: "The team inspects and overrides algorithmic suggestions from an admin view: automation with a steering wheel.",
      },
      {
        title: "Headless CMS ownership",
        body: "Marketing edits content with previews and publishes in minutes, no developer required.",
      },
    ],
    results: [
      { value: "+38%", label: "mobile conversion rate after relaunch" },
      { value: "0.9 s", label: "median page load, from 4.2 s" },
      { value: "+24%", label: "average order value with recommendations" },
    ],
    resultsNarrative:
      "The relaunch paid for itself within the first quarter on mobile conversion alone. Average order value climbed as the recommendation model matured, campaign velocity roughly tripled once marketing owned its own pages, and the design system has since absorbed two catalog expansions without a redesign.",
    quote: {
      text: "Same traffic, same products. The site just stopped getting in the way of people buying.",
      author: "John Smith",
      role: "Chief Executive Officer",
    },
  },
];

// Filter option lists derived from the data
export const caseStudyIndustries = Array.from(
  new Set(caseStudies.map((c) => c.industry))
);
export const caseStudyServices = Array.from(
  new Set(caseStudies.flatMap((c) => c.services))
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
