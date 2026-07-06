// EDIT-ME: industry recognition strip. All entries are placeholders
// mirroring the reference site's badge types. Replace with Quest Labs'
// real ratings, certifications, and analyst mentions (or delete rows).

export type Recognition = {
  kind: "rating" | "report" | "certification" | "partner";
  title: string;
  detail: string;
  image: string; // /public path, shown in the recognition carousel
};

export const recognition: Recognition[] = [
  {
    kind: "rating",
    title: "4.9 / 5 client rating", // EDIT-ME: real review-platform rating
    detail: "19 verified client reviews", // EDIT-ME
    image: "/images/recognition/rating.jpg",
  },
  {
    kind: "report",
    title: "Agentic AI Market Report 2025–2029", // EDIT-ME: real analyst mention
    detail: "Recognized among notable AI engineering vendors", // EDIT-ME
    image: "/images/recognition/report.jpg",
  },
  {
    kind: "certification",
    title: "ISO/IEC 27001:2022", // EDIT-ME: real certification
    detail: "Information security management certified", // EDIT-ME
    image: "/images/recognition/certification.jpg",
  },
  {
    kind: "partner",
    title: "AWS · Google Cloud · Microsoft", // EDIT-ME: real partnerships
    detail: "Cloud technology partnerships", // EDIT-ME
    image: "/images/recognition/partner.jpg",
  },
];
