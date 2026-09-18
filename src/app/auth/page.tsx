import type { Metadata } from "next";
import { AuthView } from "@/components/AuthView";

export const metadata: Metadata = {
  title: "Sign In or Create Account",
  description:
    "Access your EVLV Today orders, subscriptions and lot-specific documentation.",
};

export default function AuthPage() {
  return <AuthView />;
}
