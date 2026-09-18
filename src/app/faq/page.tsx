import Link from "next/link";
import type { Metadata } from "next";
import { faqs } from "@/lib/faq";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers on testing, shipping, COAs, returns and research-use-only compliance.",
};

export default function FaqPage() {
  return (
    <>
    <main className="min-h-[60vh]">
      <section className="relative overflow-hidden border-b border-ink-950/8">
        <div aria-hidden="true" className="absolute inset-0 gradient-hero"></div>
        <div
          className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-12 pb-14 md:pt-16 md:pb-20"
        >
          <nav
            className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-6"
          >
            <span className="inline-flex items-center gap-2">
              <Link className="hover:text-emerald-600 cursor-pointer" href="/">
                Home
              </Link>
              <i className="ri-arrow-right-s-line text-ink-300"></i>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-ink-950/70">
                FAQ
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Common Questions
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Frequently asked.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Everything on purity, documentation, storage, shipping, and the research use only policy — in one place.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 py-16">
        <FaqAccordion items={faqs} />
        <div className="mt-12 rounded-2xl border border-ink-950/8 bg-sage-50 p-8 text-center">
          <span
            className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center mx-auto"
          >
            <i className="ri-customer-service-2-line text-xl"></i>
          </span>
          <h2 className="mt-4 text-xl font-semibold">
            Still have a question?
          </h2>
          <p className="mt-2 text-sm text-ink-500">
            Our team responds to technical and compliance questions within one business day.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 h-11 rounded-full gradient-luxe px-6 text-sm font-semibold text-white cursor-pointer"
            href="/contact"
          >
            <i className="ri-mail-send-line"></i>
            {" "}Contact us
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
