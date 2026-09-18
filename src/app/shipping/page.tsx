import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping",
  description: "Dispatch cut-offs, cold-chain handling, rates and international order requirements.",
};

export default function ShippingPage() {
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
                Shipping
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Support
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Shipping
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              How EVLV Today dispatches, protects, and documents every research shipment.
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
                  href="#dispatch-cut-off"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Dispatch &amp; Cut-off
                </a>
              </li>
              <li>
                <a
                  href="#shipping-methods-rates"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Shipping Methods &amp; Rates
                </a>
              </li>
              <li>
                <a
                  href="#cold-chain-requirements"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Cold-Chain Requirements
                </a>
              </li>
              <li>
                <a
                  href="#international-orders"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  International Orders
                </a>
              </li>
              <li>
                <a
                  href="#shipping-protection"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Shipping Protection
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
          <section id="dispatch-cut-off" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Dispatch &amp; Cut-off
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Orders placed before 2:00 PM ET on a business day are dispatched the same business day. Orders placed after the cut-off, on weekends, or on US holidays ship the next business day.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Every shipment is discreetly packaged with no external indication of the contents beyond the carrier label and any documentation required by law.
              </p>
            </div>
          </section>
          <section id="shipping-methods-rates" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Shipping Methods &amp; Rates
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Standard insured shipping is complimentary on every order within the continental United States — there is no minimum. We absorb the cost on every shipment.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Expedited and overnight options are available at checkout for time-sensitive research. Overnight availability depends on destination and carrier coverage.
              </p>
            </div>
          </section>
          <section id="cold-chain-requirements" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Cold-Chain Requirements
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Lyophilized (powder) compounds ship at ambient temperature. Stability is validated across a seven-day transit window, so cold-chain shipping is not required for standard orders.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Reconstituted solutions should be handled according to the storage guidance on the product page and are not eligible for standard shipping.
              </p>
            </div>
          </section>
          <section id="international-orders" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              International Orders
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                International availability is limited and subject to local regulations. It is the buyer’s responsibility to confirm that importation of research reagents is lawful in the destination jurisdiction.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Orders that are refused by customs or returned for regulatory reasons may be subject to restocking fees.
              </p>
            </div>
          </section>
          <section id="shipping-protection" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Shipping Protection
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Optional shipping protection covers loss or damage in transit. Claims must be filed within seven days of the expected delivery date with the order number and photos of any damaged packaging.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Without protection, orders are shipped at the buyer’s risk once the carrier confirms delivery.
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
