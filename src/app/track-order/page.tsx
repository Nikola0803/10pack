import type { Metadata } from "next";
import { TrackOrderView } from "@/components/TrackOrderView";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "Look up dispatch and delivery status for an EVLV Today order.",
};

export default function Page() {
  return <TrackOrderView />;
}
