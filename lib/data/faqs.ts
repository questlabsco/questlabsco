import { booking } from "@/lib/data/site";

// The questions people ask before they book, shown on the homepage.
export const homeFaqs = [
  {
    q: "What happens on the free audit call?",
    a: `It's ${booking.duration} with the team that would do the work. You describe the workflow that takes the most time, and we tell you what is automatable, roughly what it would take, and whether it's worth doing. There's no obligation and no sales sequence afterwards.`,
  },
  {
    q: "Is the audit really free?",
    a: "Yes. The first call costs nothing and commits you to nothing. If there's a project worth doing, the next step is a priced, written roadmap, and you decide on the numbers.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on the workflow, so we don't guess. Every build starts with a priced roadmap: a scoped, written plan with the cost and expected return itemized, so you can decide on the numbers before committing to a build.",
  },
  {
    q: "How long until something is live?",
    a: "Typically four to eight weeks from kickoff to a production build. You see a working prototype on your own data well before that, so decisions are made on evidence.",
  },
  {
    q: "What if AI isn't the right answer for us?",
    a: "Then we say so before you spend. We benchmark every AI approach against simpler alternatives and recommend the simplest thing that works, even when that means a smaller project.",
  },
  {
    q: "Is our data safe?",
    a: "Models are grounded in your own data and wrapped in permissions, audit trails, and human review on anything that matters. 86% of our client work is in regulated industries, so this is how we build by default.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Everything is documented, tested, and handed over. Many clients keep us on to run and improve what we built, but that's their choice.",
  },
];
