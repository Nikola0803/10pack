import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description: "Membership pricing, priority dispatch and lot reservations for recurring research programs.",
};

export default function MembershipPage() {
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
                Membership
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Membership
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Buy smarter. Ship faster. Document everything.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Membership layers volume pricing, priority dispatch, and documentation support on top of third-party testing on every lot. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex items-center gap-1 rounded-full border border-ink-950/10 bg-white p-1"
          >
            <button
              className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors bg-emerald-600 text-white"
            >
              Monthly
            </button>
            <button
              className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors text-ink-700"
            >
              Annual · save 2 months
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          <div
            className="relative rounded-3xl border p-8 flex flex-col h-full border-ink-950/8 bg-white"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Lab Access
            </p>
            <div className="mt-4 flex items-end gap-1">
              <span className="headline-tight text-4xl">
                $0
              </span>
              <span className="text-sm text-ink-500 mb-1">
                / Free forever
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-500">
              For individual researchers getting started.
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Full catalog access at list price
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Lot-specific COAs on every order
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Public batch verification portal
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Email order &amp; dispatch notifications
                </span>
              </li>
            </ul>
            <Link
              className="mt-8 inline-flex items-center justify-center gap-2 h-12 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap border border-ink-950/12 text-ink-950 hover:bg-sage-50"
              href="/auth"
            >
              Create free account
            </Link>
          </div>
          <div
            className="relative rounded-3xl border p-8 flex flex-col h-full border-emerald-500/40 shadow-luxe bg-gradient-to-b from-emerald-50 to-white"
          >
            <span
              className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white"
            >
              <i className="ri-star-fill"></i>
              {" "}Most popular
            </span>
            <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Researcher Plus
            </p>
            <div className="mt-4 flex items-end gap-1">
              <span className="headline-tight text-4xl">
                $39
              </span>
              <span className="text-sm text-ink-500 mb-1">
                / per month
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-500">
              For active labs running repeat studies.
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  10% off every order, on top of 10-pack value
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Priority same-day dispatch lane
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Early access to new lots and restocks
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Quarterly methodology &amp; stability briefs
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Dedicated compliance documentation file
                </span>
              </li>
            </ul>
            <Link
              className="mt-8 inline-flex items-center justify-center gap-2 h-12 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap gradient-luxe text-white"
              href="/auth"
            >
              Start Researcher Plus
            </Link>
          </div>
          <div
            className="relative rounded-3xl border p-8 flex flex-col h-full border-ink-950/8 bg-white"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-700 font-semibold">
              Institution
            </p>
            <div className="mt-4 flex items-end gap-1">
              <span className="headline-tight text-4xl">
                $199
              </span>
              <span className="text-sm text-ink-500 mb-1">
                / per month
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-500">
              For multi-seat labs and core facilities.
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  18% off every order, on top of 10-pack value
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Unlimited seat accounts for lab members
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Purchase-order &amp; net-30 invoicing
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Custom documentation and audit support
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                <span className="text-ink-700">
                  Dedicated account scientist
                </span>
              </li>
            </ul>
            <Link
              className="mt-8 inline-flex items-center justify-center gap-2 h-12 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap border border-ink-950/12 text-ink-950 hover:bg-sage-50"
              href="/contact"
            >
              Talk to our team
            </Link>
          </div>
        </div>
        <div
          className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-emerald-300/50 bg-emerald-50 px-6 py-4 max-w-3xl mx-auto"
        >
          <i className="ri-forbid-2-line text-emerald-700 text-lg"></i>
          <p className="text-sm text-ink-700">
            Membership benefits apply to laboratory research purchases only. All compounds remain research use only — never for human or veterinary use.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
