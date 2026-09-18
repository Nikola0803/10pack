import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description: "Return window, verification guarantee, restocking fees and how to start a return.",
};

export default function ReturnsPage() {
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
                Returns &amp; Refunds
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Support
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Returns &amp; Refunds
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Straightforward returns on unopened materials, and a full verification guarantee on every lot we ship.
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-14 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-28 rounded-2xl border border-ink-950/8 bg-sage-50 p-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold">
              On this page
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#returns-window"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Returns Window
                </a>
              </li>
              <li>
                <a
                  href="#verification-guarantee"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Verification Guarantee
                </a>
              </li>
              <li>
                <a
                  href="#damaged-or-incorrect-items"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Damaged or Incorrect Items
                </a>
              </li>
              <li>
                <a
                  href="#how-to-start-a-return"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  How to Start a Return
                </a>
              </li>
              <li>
                <a
                  href="#restocking-fees"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Restocking Fees
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-ink-950/8">
              <p className="text-[11px] text-ink-500">
                Last updated
              </p>
              <p className="text-sm font-semibold">
                September 2026
              </p>
            </div>
            <div className="mt-4 rounded-xl bg-white border border-emerald-500/20 p-3">
              <p className="text-[11px] text-ink-700 leading-relaxed flex items-start gap-2">
                <i className="ri-forbid-2-line text-emerald-600 mt-0.5"></i>
                <span>
                  All EVLV Today materials are sold for in-vitro laboratory research use only.
                </span>
              </p>
            </div>
          </div>
        </aside>
        <article className="lg:col-span-9 max-w-3xl">
          <section id="returns-window" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Returns Window
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Unopened, undamaged vials may be returned within 14 days of delivery for a refund or store credit, provided the tamper seal is intact.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Opened or reconstituted materials cannot be returned for safety and traceability reasons.
              </p>
            </div>
          </section>
          <section id="verification-guarantee" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Verification Guarantee
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                If any batch fails your independent verification against the accompanying Certificate of Analysis, we will replace the lot or issue a full refund at no cost to you.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                To initiate a verification claim, provide your order number, the lot number, and a copy of your independent analytical result.
              </p>
            </div>
          </section>
          <section id="damaged-or-incorrect-items" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Damaged or Incorrect Items
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                If your order arrives damaged or does not match your invoice, contact us within seven days of delivery. We will arrange a replacement or refund and, where applicable, a prepaid return label.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Please retain all packaging and paperwork until the claim is resolved.
              </p>
            </div>
          </section>
          <section id="how-to-start-a-return" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              How to Start a Return
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Email our support team with your order number and reason for return. Approved returns receive instructions and, if applicable, a return label.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Refunds are issued to the original payment method within 5–10 business days of receiving and inspecting the returned material.
              </p>
            </div>
          </section>
          <section id="restocking-fees" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Restocking Fees
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Returns outside the 14-day window, or items returned without prior authorization, may be subject to a restocking fee of up to 20%.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Custom or made-to-order materials are non-returnable.
              </p>
            </div>
          </section>
          <div
            className="mt-12 rounded-2xl bg-ink-950 text-white/85 px-6 py-6 text-sm leading-relaxed"
          >
            <p className="flex items-start gap-3">
              <i className="ri-error-warning-line text-gold-400 text-lg mt-0.5"></i>
              <span>
                <span className="font-semibold text-white">
                  Research Use Only.
                </span>
                {" "}All products are sold exclusively as research reagents for in-vitro laboratory use by qualified researchers. They are not drugs, supplements, or cosmetics, and are not intended for human or veterinary use.
              </span>
            </p>
          </div>
        </article>
      </div>
    </main>
    </>
  );
}
