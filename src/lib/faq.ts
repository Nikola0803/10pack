export type FaqItem = {
  question: string;
  answer: string;
  /**
   * The source export captured only the first (expanded) answer in the DOM;
   * collapsed answers were not present. Items marked `reconstructed` were
   * rewritten from the site's own Shipping, Returns, Quality, Research-Use and
   * product-page copy and should be confirmed against the original wording.
   */
  reconstructed?: true;
};

export const faqs: FaqItem[] = [
  {
    question: "What purity level are your compounds and how is it verified?",
    answer:
      "All research compounds are tested at ≥99% purity via HPLC-UV against certified reference materials. Every lot ships with a signed COA from an ISO/IEC 17025 accredited third-party laboratory.",
  },
  {
    question: "What is a Certificate of Analysis (COA) and how do I read it?",
    answer:
      "A COA is the signed, dated report from the accredited third-party laboratory that tested your specific lot. It records purity by HPLC, net peptide content, identity confirmation, HPLC conformity, heavy metals, sterility, endotoxin and the fentanyl screen — the full eight-stage panel. Match the lot number on your vial to the lot number on the certificate; every value on the panel should read as a pass.",
    reconstructed: true,
  },
  {
    question: "How should I store the lyophilized product?",
    answer:
      "Store lyophilized powder at -20°C, dry and light-protected, sealed until use. Avoid freeze/thaw cycles. Reconstituted solutions should be held at 2–8°C. All handling is for in-vitro use only and should follow your institutional laboratory safety protocols.",
    reconstructed: true,
  },
  {
    question: "How long is the lyophilized product stable?",
    answer:
      "Lyophilized powder is stable for 24+ months at -20°C. Once reconstituted, solutions should be used within 28 days when held at 2–8°C.",
    reconstructed: true,
  },
  {
    question: "How fast do you ship and is cold shipping required?",
    answer:
      "Orders placed before 2:00 PM ET on a business day are dispatched the same business day; orders after the cut-off, on weekends or on US holidays ship the next business day. Lyophilized compounds ship at ambient temperature — stability is validated across a seven-day transit window, so cold-chain shipping is not required for standard orders. Standard insured shipping is complimentary on every order, with no minimum.",
    reconstructed: true,
  },
  {
    question: "Are these compounds for human use?",
    answer:
      "No. Every product is sold exclusively as a research reagent for in-vitro and laboratory use by qualified researchers. Nothing here is a drug, supplement or cosmetic, nothing is intended for human or veterinary use, and no dosing, administration or benefit claims are made or implied.",
    reconstructed: true,
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "Unopened, undamaged vials may be returned within 14 days of delivery for a refund or store credit, provided the tamper seal is intact; opened or reconstituted materials cannot be returned. If a batch fails your independent verification against its COA, we replace the lot or refund in full. Returns outside the 14-day window, or without prior authorization, may carry a restocking fee of up to 20%.",
    reconstructed: true,
  },
];
