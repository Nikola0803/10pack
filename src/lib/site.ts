export const site = {
  name: "EVLV Today",
  tagline: "Reference-Grade Research Compounds",
  supportEmail: "support@evlvtoday.com",
  abuseEmail: "abuse@evlvtoday.com",
  billingDescriptor: "EVLV TODAY",
  announcement: "FREE SHIPPING ON EVERY ORDER · 10-PACK VALUE",
  complianceBar:
    "Research Use Only · Not For Human Or Animal Consumption · 21+ Only",
} as const;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Products", href: "/shop" },
  { label: "COA", href: "/coa" },
  { label: "Research", href: "/research" },
  { label: "Quality", href: "/quality" },
  { label: "Membership", href: "/membership" },
  { label: "Partner Program", href: "/partner-program" },
  { label: "Contact us", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Reference Compounds", href: "/shop" },
      { label: "Research Blends", href: "/shop" },
      { label: "Lab Supplies", href: "/shop" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Research Library", href: "/research" },
      { label: "Quality", href: "/quality" },
      { label: "Certificates of Analysis", href: "/coa" },
      { label: "Research Use Only", href: "/research-use" },
      { label: "Membership", href: "/membership" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Track Order", href: "/track-order" },
      { label: "Report Abuse", href: "/report-abuse" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export const paymentMarks = ["Visa", "Amex", "Discover", "Apple Pay", "Google Pay"];
