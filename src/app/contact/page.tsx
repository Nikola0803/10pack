import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach the EVLV Today research support desk for orders, COAs and compliance questions.",
};

export default function Page() {
  return <ContactView />;
}
