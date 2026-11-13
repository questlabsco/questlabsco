import { booking } from "@/lib/data/site";

// The questions people ask before they book, shown on the homepage.
export const homeFaqs = [
  {
    q: "What happens on the free audit call?",
    a: `First you answer a short quiz, about 60 seconds, so we know what your business does. Then it's ${booking.duration} with the people who'd actually build the thing. You tell us which workflow eats the most time. We tell you what can be automated, roughly what it would take, and whether it's worth doing at all. No obligation, and no string of sales emails afterwards.`,
  },
  {
    q: "Is the audit really free?",
    a: "Yes. The quiz and the call cost nothing, and you're not signing up for anything. If there's a project worth doing, the next step is a written roadmap with prices on it. You decide from there.",
  },
  {
    q: "How much does a project cost?",
    a: "Honestly, it depends on the workflow, and we'd rather not guess. Every build starts with a priced roadmap: a written plan with the cost and the expected return for each piece, so you see the numbers before you commit to a build.",
  },
  {
    q: "How long until something is live?",
    a: "Usually 4 to 8 weeks from kickoff to a production build. You'll see a working prototype on your own data well before that, so you're deciding based on something real, not a slide deck.",
  },
  {
    q: "What if AI isn't the right answer for us?",
    a: "Then we'll tell you before you spend anything. We test every AI idea against simpler options and recommend the simplest thing that works. Sometimes that's a smaller project. Sometimes it's a spreadsheet.",
  },
  {
    q: "Is our data safe?",
    a: "We build on your own data and keep it locked down: permissions, audit trails, and a person reviewing anything that matters. 86% of our client work is in regulated industries, so this is just how we build.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. It's documented, tested and handed over. A lot of clients keep us around to run and improve it, but that's up to you.",
  },
];
