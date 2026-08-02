export type Recognition = {
  kind: "rating" | "report" | "certification" | "partner";
  title: string;
  detail: string;
  image: string; // /public path, shown in the recognition carousel
};

export const recognition: Recognition[] = [
  {
    kind: "rating",
    title: "4.9 / 5 average client rating",
    detail: "Based on post-project feedback across delivered engagements",
    image: "/images/recognition/rating.jpg",
  },
  {
    kind: "report",
    title: "Every build starts with a priced audit",
    detail: "A scoped, written roadmap before a line of code, not a guess dressed up as a proposal",
    image: "/images/recognition/report.jpg",
  },
  {
    kind: "partner",
    title: "Model-agnostic by design",
    detail: "Production experience across Claude, GPT, and Gemini: whichever fits the task",
    image: "/images/recognition/partner.jpg",
  },
];
