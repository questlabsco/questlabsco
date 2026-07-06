// EDIT-ME: testimonial carousel content. Company names mirror the reference
// site's testimonial slots so you know which to replace; quote text is
// original placeholder wording. Replace every entry with real client quotes.

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  photo?: string; // EDIT-ME: drop real headshots into /public/images/people
                  // and set the path; initials avatar shows until then
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They took the time to understand how our revenue cycle actually works before writing a line of code. The automation they delivered paid for itself within the first quarter.",
    author: "Jane Doe", // EDIT-ME
    role: "VP of Operations", // EDIT-ME
    company: "TruBridge", // EDIT-ME
  },
  {
    quote:
      "What stood out was the honesty. When a workflow wasn't worth automating, they told us, and pointed the budget at the ones that were.",
    author: "John Smith", // EDIT-ME
    role: "Chief Technology Officer", // EDIT-ME
    company: "Plato", // EDIT-ME
  },
  {
    quote:
      "We've worked with them across three releases now. Communication is precise, estimates hold, and the delivered systems simply keep running.",
    author: "Jane Doe", // EDIT-ME
    role: "Head of Digital", // EDIT-ME
    company: "Maersk", // EDIT-ME
  },
  {
    quote:
      "The team shipped an AI assistant our support staff actually trust. Deflection is up, response times are down, and escalations finally make sense.",
    author: "John Smith", // EDIT-ME
    role: "Product Director", // EDIT-ME
    company: "Adventr", // EDIT-ME
  },
  {
    quote:
      "From the first workshop to production, everything was documented and handed over cleanly. No black boxes, no lock-in: exactly as promised.",
    author: "Jane Doe", // EDIT-ME
    role: "Managing Director", // EDIT-ME
    company: "City Index", // EDIT-ME
  },
  {
    quote:
      "Their designers rebuilt our platform's UX while the engineers automated the back office. Having both under one roof saved us months.",
    author: "John Smith", // EDIT-ME
    role: "Chief Executive Officer", // EDIT-ME
    company: "Axure", // EDIT-ME
  },
];
