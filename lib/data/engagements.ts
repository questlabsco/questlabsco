// Case studies: one client project per industry. Each generates
// /case-studies/[slug].
//
// Each one covers the business, what they did by hand, what we built, how
// long it took, and the result. The owner confirmed on 2026-11-12 that the
// numbers in `target` and `measurement` are measured results from the
// projects, not goals, so the site shows them as results. (The field is
// still called `target` from when they were treated as goals.)

export type Engagement = {
  slug: string;
  industrySlug: string;
  title: string;
  summary: string; // one line for cards and the page intro
  image: string; // card image
  business: string;
  before: string;
  build: string[]; // paragraphs
  tools: string[];
  timeline: string; // short, e.g. "4–6 weeks"
  timelineDetail: string;
  target: { value: string; label: string };
  measurement: string;
  feedback: string[]; // what we check with the team after launch
};

export const engagements: Engagement[] = [
  {
    slug: "med-spa-front-desk",
    industrySlug: "healthcare",
    title: "Managing inquiries across two med spa locations",
    summary:
      "Website inquiries and missed calls from two locations land in one pipeline, with approved answers and follow-ups that stop when staff take over.",
    image: "/images/industries/healthcare.webp",
    business:
      "A two-location med spa with 12 employees, including providers and a shared front-desk team. Both locations use the same booking system but offer different appointment availability.",
    before:
      "Website inquiries arrive by email, missed calls sit in the phone system, and staff keep follow-up notes separately. Someone asking about a consultation might receive a booking link but no follow-up. Staff repeatedly answer the same questions about location, pricing ranges, opening hours, and consultation availability.",
    build: [
      "We connect website inquiries and eligible missed-call events to one HubSpot pipeline. Each record carries the requested service, preferred location, contact details, and assigned staff member. An approved FAQ assistant answers administrative questions and directs visitors to the right location's booking page.",
      "n8n coordinates the workflow and Twilio handles permitted text messages. Follow-ups stop when a person replies, opts out, or has a confirmed booking. Twilio's opt-out events are passed to the workflow, so the CRM and the messaging sequence stay in sync.",
      "Booking detection depends on the booking platform's integration; where that isn't available, staff mark the lead as booked. Questions about treatment suitability, symptoms, or adverse reactions go straight to staff.",
    ],
    tools: ["HubSpot", "n8n", "Twilio"],
    timeline: "4–6 weeks",
    timelineDetail:
      "Map inquiry sources and approve answers, build the workflow, pilot at one location, then expand after reviewing real conversations. Phone-system access and the booking integration are the main dependencies.",
    target: { value: "~6 hrs", label: "of staff time saved per week" },
    measurement:
      "About 120 routine inquiries come in each week, and average staff handling went from five minutes to two. That's about six hours a week back for the front desk. We measure staff handling time, unanswered inquiries, confirmed consultations, and weekly maintenance separately.",
    feedback: [
      "Whether staff begin the day with a clear callback list",
      "Whether people receive the correct location's booking link",
      "Whether automated messages ever continue after staff take over",
    ],
  },
  {
    slug: "bookkeeping-document-collection",
    industrySlug: "finance",
    title: "Organizing month-end document collection for a bookkeeping firm",
    summary:
      "A recurring checklist per client replaces email chasing, so the team can see which accounts are ready for month-end.",
    image: "/images/industries/finance.webp",
    business:
      "An eight-person bookkeeping firm serving about 60 small businesses. Each bookkeeper manages a recurring portfolio, with a manager reviewing month-end readiness.",
    before:
      "Staff chase bank statements, credit-card statements, payroll reports, and receipts through individual email threads. A spreadsheet records what is missing, but someone has to update it by hand. A client uploading a document does not necessarily notify the person preparing the account.",
    build: [
      "We create a recurring checklist for each client and reporting month in Microsoft Lists. Each requested item has an owner, a due date, a document link, and a status: requested, received, needs replacement, or accepted.",
      "SharePoint stores the files, Power Automate updates the checklist and sends consolidated reminders through Outlook, and a dashboard shows which accounts are ready for work. An upload becomes \"received\", not automatically \"accepted\": a bookkeeper still checks the account, the statement period, and completeness.",
      "Client upload permissions are configured before launch. Microsoft's file-request feature lets clients upload without seeing the folder's contents, though its availability depends on the organization's sharing settings.",
    ],
    tools: ["Microsoft Lists", "SharePoint", "Power Automate", "Outlook"],
    timeline: "4–6 weeks",
    timelineDetail:
      "Setup and a 10-client pilot. We evaluate performance over two month-end cycles before extending the workflow to every client.",
    target: { value: "~15 hrs", label: "of document chasing saved per month" },
    measurement:
      "Document chasing took an average of 30 minutes per client each month, about 30 team hours in all. It now takes around 15 minutes per client, which saves about 15 hours a month. We track actual staff time and the number of clients with complete documents by the agreed cutoff.",
    feedback: [
      "Whether reminders accurately reflect what is missing",
      "Whether clients receive fewer duplicate requests",
      "Whether bookkeepers spend less time checking folders",
    ],
  },
  {
    slug: "skincare-support-tickets",
    industrySlug: "retail-ecommerce",
    title: "Handling order-status questions without repeated lookups",
    summary:
      "Customers check their own order status, and anything unusual goes to staff with the details attached.",
    image: "/images/industries/retail.webp",
    business:
      "A Shopify skincare brand processing about 1,500 orders a month, with two staff members sharing customer support alongside other operational duties.",
    before:
      "Staff open Shopify to find an order, copy its tracking link, and write similar replies throughout the day. Other recurring questions cover shipping times, unopened-product returns, and product information already published on the website.",
    build: [
      "We start with Shopify's integration into Gorgias, an approved knowledge base, and customer order self-service. Customers verify access before viewing order details, and can then see order status and tracking for themselves.",
      "Clear handoffs are configured for lost packages, damaged deliveries, refund exceptions, and reported skin reactions. If tracking has not updated, the assistant reports the status it has and creates a staff ticket instead of inventing a delivery date.",
      "n8n is used only for extra routing or reporting the existing tools can't handle. A separate OpenAI integration is an optional extension, added only after a specific gap has been identified.",
    ],
    tools: ["Shopify", "Gorgias", "n8n"],
    timeline: "3–5 weeks",
    timelineDetail:
      "Review about 100 past tickets, organize the most useful help articles, test common questions, then release to a limited share of support traffic.",
    target: { value: "80–120", label: "routine contacts a month resolved without staff" },
    measurement:
      "Out of about 350 monthly inquiries, 80 to 120 routine contacts are now resolved without staff involvement. At five minutes each, that is roughly seven to ten gross staff hours a month. We subtract review and maintenance time, and check whether customers reopen the same issue.",
    feedback: [
      "Whether staff spend less time copying tracking links",
      "Whether customers resolve straightforward questions without contacting support again",
    ],
  },
  {
    slug: "freight-delivery-paperwork",
    industrySlug: "logistics",
    title: "Matching delivery paperwork to shipments",
    summary:
      "Carrier paperwork is read, matched to its shipment, and filed, with uncertain matches sent to a person.",
    image: "/images/industries/logistics.webp",
    business:
      "An 18-person regional freight brokerage coordinating about 700 shipments a month. Operations staff collect delivery paperwork before handing completed shipment files to billing.",
    before:
      "Carriers email PDFs, scanned documents, or phone photographs. Coordinators download attachments, find the load number, rename the file, and check a shipment list. Documents with missing references sit in email threads until someone investigates.",
    build: [
      "We monitor a dedicated paperwork inbox with n8n. Incoming attachments are saved, Azure Document Intelligence extracts the reference fields, and those fields are compared against a daily shipment export.",
      "A clear match places the document in the correct SharePoint shipment folder and updates a paperwork checklist. Missing references, multiple possible matches, duplicate files, and unreadable images go to a staff review queue. The original attachment and the source email reference are kept, so coordinators can trace every document.",
      "Extraction confidence helps prioritize review, but it does not establish that a document belongs to the right shipment. That is why matching runs against the shipment export and uncertain cases go to a person.",
    ],
    tools: ["n8n", "Azure Document Intelligence", "SharePoint"],
    timeline: "5–7 weeks",
    timelineDetail:
      "Begin with two or three common carrier document formats. The workflow runs alongside the existing process before supported documents are filed automatically.",
    target: { value: "~21 hrs", label: "of gross handling time saved per month" },
    measurement:
      "Across about 500 supported documents a month, average handling went from four minutes to 90 seconds, which saves about 21 gross hours. We subtract the time spent reviewing exceptions and correcting matches, and track the percentage of shipments still missing paperwork after delivery.",
    feedback: [
      "Whether coordinators can find documents faster",
      "Whether billing receives more complete files",
      "Whether exception alerts name the actual reason a document needs attention",
    ],
  },
  {
    slug: "fabrication-quote-intake",
    industrySlug: "manufacturing",
    title: "Preparing quote requests for estimator review",
    summary:
      "Each quote request arrives as an organized record with its drawings, and missing details are flagged before pricing starts.",
    image: "/images/industries/manufacturing.webp",
    business:
      "A 35-person metal fabrication shop receiving about 80 quote requests a month. Two estimators divide incoming work while coordinating with production.",
    before:
      "Requests arrive with drawings, purchase specifications, and details scattered across email chains. Estimators create folders, record quantities and delivery dates, and ask customers for missing materials or revision information before pricing can begin.",
    build: [
      "Using Outlook and Power Automate, we create a Microsoft Lists quote record and a SharePoint attachment folder for each new request. The record captures the customer, part number, quantity, requested delivery date, material, finish, and drawing revision whenever they are explicitly provided.",
      "Azure Document Intelligence assists with text extraction from supported PDFs. Missing fields are marked \"not provided\", and a draft clarification email goes to the estimator for approval. Revised drawings stay attached to the same request with a visible revision history.",
      "The workflow organizes intake. Estimators keep responsibility for interpreting drawings, tolerances, manufacturing feasibility, and pricing.",
    ],
    tools: ["Outlook", "Power Automate", "Microsoft Lists", "SharePoint", "Azure Document Intelligence"],
    timeline: "4–6 weeks",
    timelineDetail:
      "Tested with 30 to 50 previous requests covering incomplete specifications, revised drawings, multiple parts, and repeat customers.",
    target: { value: "~11 hrs", label: "of admin preparation saved per month" },
    measurement:
      "Administrative preparation went from 15 minutes to seven across about 80 requests a month, which saves about 11 hours a month. We measure the time from receipt to \"ready for estimating\" separately from the time needed to produce a quote.",
    feedback: [
      "Whether estimators open a request with the necessary files already organized",
      "Whether missing information is easier to spot",
      "Whether revised drawings are less likely to be overlooked",
    ],
  },
  {
    slug: "law-firm-client-intake",
    industrySlug: "legal",
    title: "Preparing complete intake records before consultation",
    summary:
      "Intake forms collect what attorneys need before a consultation, with duplicates and gaps flagged for staff.",
    image: "/images/industries/legal.webp",
    business:
      "A six-attorney business law firm with three administrative staff handling about 60 prospective-client inquiries a month.",
    before:
      "Staff copy contact details into the intake system, request missing company or opposing-party information, and summarize email threads for attorneys. Some prospective clients submit more than one inquiry, which creates duplicate records.",
    build: [
      "We configure Clio Grow intake forms around the firm's actual practice areas. The forms collect contact details, company names, other involved parties, a short matter description, and any deadline the prospective client states.",
      "Each inquiry is routed to the appropriate staff member and incomplete submissions are flagged. We use existing Clio fields and forms wherever possible, mapping intake questions to matching custom fields.",
      "Staff review possible duplicates, complete conflict checks, and decide whether to offer a consultation. Any generated summary links back to the submitted answers and stays a draft until reviewed. The workflow does not determine legal deadlines or tell anyone that the firm has accepted their matter.",
    ],
    tools: ["Clio Grow"],
    timeline: "4–6 weeks",
    timelineDetail:
      "Form design, field mapping, staff review, and testing with incomplete and duplicate submissions.",
    target: { value: "~10 hrs", label: "of intake preparation saved per month" },
    measurement:
      "Routine intake preparation went from 20 minutes to 10 across about 60 monthly inquiries, which saves about 10 hours a month. Conflict-check and attorney-review time are counted separately.",
    feedback: [
      "Whether attorneys receive more complete background information",
      "Whether administrative staff make fewer repeat requests for basic details",
    ],
  },
  {
    slug: "rental-property-reporting",
    industrySlug: "real-estate",
    title: "Consolidating rental cash flow by property",
    summary:
      "Bank exports, rent records, and invoices combine into one dashboard the owners can trace back to each transaction.",
    image: "/images/industries/real-estate.webp",
    business:
      "A family-owned rental operation managing about 25 single-family homes, with two people handling rent tracking, expenses, and monthly reporting.",
    before:
      "Rent records, bank exports, mortgage statements, and repair invoices sit in separate spreadsheets and folders. The owners repeatedly check transactions to work out which property an expense belongs to and whether rent has been received in full.",
    build: [
      "We build an Excel Power Query process that standardizes each source before combining transactions. It maintains a property reference table, a rent schedule, and a reviewed set of recurring transaction rules.",
      "The dashboard shows rent due, payments received, operating outflows, debt payments, and transactions awaiting review. Partial rent payments, transfers between accounts, shared invoices, and duplicate imports each get explicit handling. Owners can trace every dashboard total back to the underlying transactions.",
      "Power Query combines files that share a consistent structure, so each bank's export format gets its own preparation step before consolidation.",
    ],
    tools: ["Excel", "Power Query"],
    timeline: "3–5 weeks",
    timelineDetail:
      "Start with three months of records. Dashboard totals are reconciled against the source files before anyone relies on the monthly refresh.",
    target: { value: "8 → 3–4 hrs", label: "to prepare the monthly report" },
    measurement:
      "Monthly report preparation went from eight hours to three or four. We measure review time as well as refresh time, and the dashboard displays the count and value of unassigned transactions.",
    feedback: [
      "Whether owners can answer property-level cash-flow questions without opening several spreadsheets",
      "Whether an unusual expense can be explained quickly",
    ],
  },
  {
    slug: "tutoring-center-scheduling",
    industrySlug: "education",
    title: "Coordinating tutoring trials and parent follow-ups",
    summary:
      "Trial bookings, reminders, and follow-ups run from one record, and each follow-up depends on whether the trial was attended.",
    image: "/images/industries/education.webp",
    business:
      "A tutoring center with 14 tutors and about 180 active students, with one administrator coordinating new-parent inquiries and trial sessions.",
    before:
      "Parents ask about subjects, grade levels, prices, and availability through different channels. The administrator exchanges several messages to arrange a trial, sends reminders by hand, and follows up without a consistent record of attendance.",
    build: [
      "We create an approved FAQ assistant and a structured inquiry form that collects parent contact information. The requested subject, grade level, preferred time, and trial status are recorded in Airtable.",
      "Calendly handles designated trial slots, while n8n updates the inquiry record and coordinates additional follow-ups. We start with limited trial availability instead of trying to automate the center's full recurring tutoring schedule.",
      "Staff mark each trial attended, canceled, or missed, and follow-ups depend on that status. A parent whose child missed the session does not receive an enrollment message thanking them for attending. Calendly's reminders and its workflows for scheduling changes and marked no-shows do the triggering.",
    ],
    tools: ["Airtable", "Calendly", "n8n"],
    timeline: "3–4 weeks",
    timelineDetail:
      "One program first, then expansion once booking changes, tutor availability, and attendance updates work reliably.",
    target: { value: "~2.5 hrs", label: "of admin time saved per week" },
    measurement:
      "At about 25 inquiry-and-trial cases a week, administrative handling went from 12 minutes to six, which saves about 2.5 hours a week. We measure response time, trial attendance, and enrollment separately.",
    feedback: [
      "Whether parents receive clearer next steps",
      "Whether staff exchange fewer scheduling messages",
      "Whether every trial receives the appropriate follow-up",
    ],
  },
];

export function getEngagement(slug: string) {
  return engagements.find((e) => e.slug === slug);
}
