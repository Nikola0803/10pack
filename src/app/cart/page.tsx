import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = {
  title: "Your Cart",
  description:
    "Review your EVLV Today research materials before checkout. Free shipping on every order.",
};

export default function CartPage() {
  return <CartView />;
}
