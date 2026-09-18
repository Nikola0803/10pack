import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program",
  description: "Partner terms for laboratories, distributors and institutional research buyers.",
};

export default function PartnerProgramPage() {
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
                Partner Program
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Partner Program
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Built for labs that buy at scale.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Wholesale pricing, priority inventory, and audit-ready documentation for universities, contract research organizations, and independent labs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-2 h-12 rounded-full gradient-luxe px-7 text-sm font-semibold text-white cursor-pointer whitespace-nowrap"
                href="/contact"
              >
                Apply to the program{" "}
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link
                className="inline-flex items-center gap-2 h-12 rounded-full border border-ink-950/12 px-7 text-sm font-semibold hover:bg-sage-50 cursor-pointer whitespace-nowrap"
                href="/quality"
              >
                Review our quality protocol
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">
            Partner Benefits
          </span>
          <h2 className="headline-tight mt-3 text-3xl md:text-4xl">
            Everything a high-volume lab needs.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-ink-950/8 bg-white p-6 lift">
            <span
              className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
            >
              <i className="ri-percent-line text-lg"></i>
            </span>
            <h3 className="mt-4 text-base font-semibold">
              Wholesale pricing tier
            </h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              Up to 30% off list on volume commitments, layered on top of our 10-pack pricing.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white p-6 lift">
            <span
              className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
            >
              <i className="ri-stack-line text-lg"></i>
            </span>
            <h3 className="mt-4 text-base font-semibold">
              Priority inventory
            </h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              Reserved lots and first access to new releases and restocks before public listing.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white p-6 lift">
            <span
              className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
            >
              <i className="ri-file-list-3-line text-lg"></i>
            </span>
            <h3 className="mt-4 text-base font-semibold">
              Documentation pack
            </h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              Consolidated COA, SDS, and chain-of-custody files delivered for every shipment.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white p-6 lift">
            <span
              className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
            >
              <i className="ri-truck-line text-lg"></i>
            </span>
            <h3 className="mt-4 text-base font-semibold">
              Dedicated dispatch
            </h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              Same-day cut-off extended, plus scheduled standing orders for repeat protocols.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white p-6 lift">
            <span
              className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
            >
              <i className="ri-customer-service-2-line text-lg"></i>
            </span>
            <h3 className="mt-4 text-base font-semibold">
              Named account scientist
            </h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              A single point of contact for technical and compliance questions.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white p-6 lift">
            <span
              className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
            >
              <i className="ri-shield-check-line text-lg"></i>
            </span>
            <h3 className="mt-4 text-base font-semibold">
              Audit-ready records
            </h3>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed">
              Permanent, retrievable lot records aligned to institutional QC requirements.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-sage-50 border-y border-ink-950/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">
              How It Works
            </span>
            <h2 className="headline-tight mt-3 text-3xl md:text-4xl">
              From application to first order.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="relative rounded-2xl bg-white border border-ink-950/8 p-6 h-full">
              <p className="headline-tight text-3xl text-emerald-700/70">
                01
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Apply
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Tell us about your lab, research focus, and expected volume.
              </p>
            </div>
            <div className="relative rounded-2xl bg-white border border-ink-950/8 p-6 h-full">
              <p className="headline-tight text-3xl text-emerald-700/70">
                02
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Verify
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                We confirm research credentials and set up your partner account.
              </p>
            </div>
            <div className="relative rounded-2xl bg-white border border-ink-950/8 p-6 h-full">
              <p className="headline-tight text-3xl text-emerald-700/70">
                03
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Onboard
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Pricing, standing orders, and documentation preferences are configured.
              </p>
            </div>
            <div className="relative rounded-2xl bg-white border border-ink-950/8 p-6 h-full">
              <p className="headline-tight text-3xl text-emerald-700/70">
                04
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Order
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Order through your dashboard with partner pricing applied automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div
          className="rounded-3xl gradient-luxe text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h2 className="headline-tight text-2xl md:text-3xl">
              Ready to set up a partner account?
            </h2>
            <p className="mt-3 text-white/85 max-w-xl text-sm">
              Send us your lab details and expected volume. Our team responds within one business day.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 h-12 rounded-full bg-white text-ink-950 px-7 text-sm font-semibold whitespace-nowrap cursor-pointer"
            href="/contact"
          >
            <i className="ri-mail-send-line"></i>
            {" "}Contact our team
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
