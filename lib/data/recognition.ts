export type Recognition = {
  kind: "rating" | "report" | "certification" | "partner";
  title: string;
  detail: string;
  image: string; // /public path, shown in the recognition carousel
};

export const recognition: Recognition[] = [
  {
    kind: "rating",
    title: "4.9 / 5 client rating",
    detail: "Rated by clients across delivered engagements",
    image: "/images/recognition/rating.jpg",
  },
  {
    kind: "report",
    title: "Agentic AI Market Report 2025–2029",
    detail: "Recognized among notable AI engineering vendors",
    image: "/images/recognition/report.jpg",
  },
  {
    kind: "partner",
    title: "AWS · Google Cloud · Microsoft",
    detail: "Cloud technology partnerships",
    image: "/images/recognition/partner.jpg",
  },
];
