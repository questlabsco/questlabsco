import type { BlogPost } from "../types";

const post: BlogPost = {
  slug: "property-management-automation",
  title: "Property Management Automation: 7 Tasks To Hand Off This Quarter",
  description:
    "Seven property management tasks to automate this quarter, from rent tracking to maintenance intake, and what a person should still decide on each one.",
  excerpt:
    "Rent tracking, maintenance intake, renewals, owner reports and four more. What each automation does, and the calls that should stay with you.",
  category: "Industry Playbooks",
  date: "2026-11-12",
  readMinutes: 6,
  art: "house",
  answer:
    "Start with the property management tasks that repeat on a calendar and follow clear rules: rent and expense tracking by property, maintenance request intake, lease renewal reminders, owner reports, tenant FAQs, vendor follow-ups and application document collection. Software gathers, sorts and reminds. People still approve repairs, set renewal terms, and make every screening decision.",
  takeaways: [
    "Automate the gathering, sorting and reminding. Keep the judgment calls.",
    "Maintenance intake and rent-by-property tracking usually pay off first.",
    "Check what your property management software already does before building anything.",
    "Screening and approval decisions stay with people, always.",
  ],
  body: [
    {
      type: "p",
      text: "It's the third of the month, mid-afternoon. A tenant is asking whether their rent went through. An owner wants to know why last month's statement shows two plumber invoices for the same house. A maintenance request just arrived as a text to your personal cell, with a blurry photo of a water heater and no unit number. And a lease you meant to start renewing two weeks ago now ends in 40 days.",
    },
    {
      type: "p",
      text: "None of that is hard work. It's just constant, and it lands on the same two or three people. We've worked with property managers and real estate teams around Dallas-Fort Worth, and the tasks below are the ones we'd hand off first. Each one comes with what the automation does and what a person still decides, because that second column is where things go wrong if you skip it.",
    },
    { type: "h2", text: "Which Property Management Tasks Should You Automate First?" },
    {
      type: "p",
      text: "Automate first the tasks that happen on a schedule, follow the same steps each time, and mostly involve moving information from one place to another. Leave anything that needs judgment about money, people or a property's condition with a person.",
    },
    {
      type: "p",
      text: "Here are seven that fit, roughly in the order we'd tackle them.",
    },
    { type: "h3", text: "1. Rent And Expense Tracking By Property" },
    {
      type: "p",
      text: "**What gets automated:** bank exports, rent records and repair invoices are standardized and combined, and each transaction is matched to a property using rules you've reviewed. A dashboard shows rent due, rent received, expenses and anything that couldn't be matched. **What a person decides:** where an odd transaction belongs, how to treat a partial payment, and whether a shared invoice gets split.",
    },
    {
      type: "p",
      text: "This is exactly what our [rental property reporting case study](/case-studies/rental-property-reporting) covers: about 25 single-family homes, built in Excel with Power Query, with every dashboard total traceable to the underlying transactions. Monthly report prep went from eight hours down to three or four. No new platform required.",
    },
    { type: "h3", text: "2. Maintenance Request Intake And Routing" },
    {
      type: "p",
      text: "**What gets automated:** every request comes in through one form or number, gets a property, a unit, photos and a category, and is routed to the right person or vendor list. The tenant gets an acknowledgement. Requests that mention words on your emergency list (water, gas, smoke, no heat) go straight to whoever's on call. **What a person decides:** whether it's really urgent, who gets sent, and whether the repair is approved.",
    },
    { type: "h3", text: "3. Lease Renewal Reminders" },
    {
      type: "p",
      text: "**What gets automated:** a reminder to your team a set number of days before each lease ends, then a scheduled notice to the tenant once you've decided what to offer, and a nudge if nobody's responded. **What a person decides:** whether to renew, the terms and the rent. The software tracks dates. It doesn't set prices.",
    },
    { type: "h3", text: "4. Monthly Owner Reports" },
    {
      type: "p",
      text: "**What gets automated:** the report assembles itself from the same data as task 1, in the format each owner expects, and lands in your drafts folder on a fixed date. **What a person decides:** a quick review before it goes out, plus a note on anything unusual. Owners can tell when nobody read their report.",
    },
    { type: "h3", text: "5. Tenant FAQs" },
    {
      type: "p",
      text: "**What gets automated:** an assistant that answers from your approved content: how to pay, where to submit a repair, trash day, parking rules, office hours. See how we build [AI chatbots](/services/ai-chatbots) for this kind of thing. **What a person decides:** disputes, complaints, deposit questions and anything about a specific lease. Those get handed over with the conversation attached.",
    },
    { type: "h3", text: "6. Vendor Follow-Ups" },
    {
      type: "p",
      text: "**What gets automated:** once a vendor is assigned, the system asks when they'll be out, reminds them if a job sits open, and asks for the invoice and a completion photo when it's done. **What a person decides:** which vendor to use, whether the work is acceptable, and whether the invoice gets paid.",
    },
    { type: "h3", text: "7. Application Document Collection" },
    {
      type: "p",
      text: "**What gets automated:** a checklist per applicant showing which documents are in and which are missing, with reminders until the file is complete. **What a person decides:** everything about the application itself. Screening and approval carry fair housing obligations, so keep the decision with people and confirm your process with your own attorney.",
    },
    {
      type: "table",
      head: ["Task", "What gets automated", "What a person still decides"],
      rows: [
        ["Rent and expense tracking", "Matching transactions to properties, flagging what doesn't match", "Odd transactions, partial payments, split invoices"],
        ["Maintenance intake", "One intake point, categorizing, routing, emergency keywords to on-call", "Urgency, who goes, repair approval"],
        ["Lease renewals", "Date reminders, scheduled notices, nudges", "Whether to renew, terms, rent"],
        ["Owner reports", "Assembling the report on a fixed date", "Final review and notes"],
        ["Tenant FAQs", "Answers from approved content", "Disputes, deposits, lease-specific questions"],
        ["Vendor follow-ups", "Scheduling asks, reminders, invoice and photo requests", "Vendor choice, quality, payment"],
        ["Application documents", "Checklist and reminders until complete", "Every screening and approval decision"],
      ],
    },
    { type: "cta", text: "Not sure which of these would save you the most time? Book a free automation audit and we'll look at your week with you." },
    { type: "h2", text: "What Should Stay With A Person?" },
    {
      type: "p",
      text: "Anything that decides who gets housed, how much someone pays, or whether a repair is safe should stay with a person. Automation can prepare the file, but a person makes the call.",
    },
    {
      type: "callout",
      title: "Rule of thumb",
      text: "If a decision could end up in a dispute, an automation can collect the facts and remind you, but it shouldn't make the decision or send it without someone looking. Screening, deposits, notices and anything with legal weight fall in that bucket. Confirm the rules for your properties with your own counsel.",
    },
    {
      type: "p",
      text: "The same goes for emergencies. A keyword list that pages your on-call person is useful. A chatbot deciding a gas smell can wait until Monday is not. Build the routing so that when in doubt, a human phone rings.",
    },
    { type: "h2", text: "Does Your Property Management Software Already Do This?" },
    {
      type: "p",
      text: "Often it does part of it, so check first. Platforms such as AppFolio and Buildium include things like tenant portals, reminders and owner statements. If you're paying for one, turn on what's there before you pay anyone to build something.",
    },
    {
      type: "p",
      text: "Custom [workflow automation](/services/workflow-automation) is worth it in the gaps: between the bank and the spreadsheet, between a tenant's text message and a work order, or for the owner who wants a report your software can't produce. Smaller operators who run on spreadsheets often don't need a platform at all. A well-built spreadsheet process, like the one in our case study, can be the right answer. We'll tell you when it is.",
    },
    { type: "h2", text: "How Much Time Could These Automations Free Up?" },
    {
      type: "p",
      text: "Here's a made-up example to show the arithmetic. Say you manage 60 doors and get about 30 maintenance requests a month. If each one takes 15 minutes of back-and-forth (finding the unit, asking for a photo, calling a vendor, updating the tenant), that's 7.5 hours a month. If cleaner intake cuts that to 5 minutes, you get roughly 5 hours back, every month, from one task.",
    },
    {
      type: "p",
      text: "Stack two or three tasks like that and you're talking about a day or more a month. Your numbers will differ, so time a normal week before you decide. Our [DIY automation audit](/blog/diy-automation-audit) walks through how.",
    },
    { type: "h2", text: "Where Should You Start This Quarter?" },
    {
      type: "p",
      text: "Pick one task with clear rules and a lot of volume. For most property managers that's maintenance intake or rent-by-property tracking. Get it running, let your team live with it for a month, then add the next.",
    },
    {
      type: "p",
      text: "Don't start with the tenant chatbot. It's the most visible piece and the easiest to get wrong, and it works better once your intake and routing are already clean. For more on how we work with brokerages and property managers, see our [real estate page](/industries/real-estate).",
    },
    { type: "cta", text: "Book a free automation audit: tell us the task that eats your week, and we'll tell you whether it's worth automating." },
  ],
  faqs: [
    {
      q: "Do I need to switch property management software to automate?",
      a: "Usually not. Most of this connects to what you already use, and some of it is already built into your platform. If a tool genuinely blocks a workflow, we'll say so, but replacing software is a last resort.",
    },
    {
      q: "Can a chatbot answer tenant questions safely?",
      a: "For routine questions with approved answers (how to pay, where to report a repair, office hours), yes. Disputes, deposits, lease terms and anything that sounds like an emergency should go to a person, with the conversation attached.",
    },
    {
      q: "How do I handle after-hours maintenance emergencies?",
      a: "Define the emergency list yourself and have any match page your on-call person right away. Don't rely on software to judge how serious something is. When in doubt, route it to a human.",
    },
    {
      q: "Is my portfolio too small for automation?",
      a: "Not necessarily. Our rental reporting case study was about 25 homes. With a small portfolio the right fix is often a better spreadsheet process rather than a new platform, and that can still save hours every month.",
    },
  ],
  related: ["diy-automation-audit", "signs-you-need-workflow-automation", "field-service-automation"],
};

export default post;
