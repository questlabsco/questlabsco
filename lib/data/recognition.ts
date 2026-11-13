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
    detail: "From the feedback clients give us after each project is delivered.",
    image: "/images/recognition/rating.webp",
  },
  {
    kind: "report",
    title: "Every build starts with a priced roadmap",
    detail: "A written, scoped plan with a price on it before we write any code. No guesswork dressed up as a proposal.",
    image: "/images/recognition/report.webp",
  },
  {
    kind: "partner",
    title: "Model-agnostic on purpose",
    detail: "We've shipped production work on Claude, GPT and Gemini, and we use whichever suits the job.",
    image: "/images/recognition/partner.webp",
  },
];
