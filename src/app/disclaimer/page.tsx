import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Research-use-only disclaimer covering the scope, limits and intended audience of EVLV Today materials.",
};

export default function DisclaimerPage() {
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
                Disclaimer
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Legal
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Disclaimer
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Important limitations on the nature of EVLV Today products and the information published on this site.
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
                  href="#research-use-only"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Research Use Only
                </a>
              </li>
              <li>
                <a
                  href="#no-medical-or-health-claims"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  No Medical or Health Claims
                </a>
              </li>
              <li>
                <a
                  href="#literature-references"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Literature &amp; References
                </a>
              </li>
              <li>
                <a
                  href="#not-drugs-supplements-or-cosmetics"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Not Drugs, Supplements, or Cosmetics
                </a>
              </li>
              <li>
                <a
                  href="#buyer-responsibility"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Buyer Responsibility
                </a>
              </li>
              <li>
                <a
                  href="#accuracy-of-information"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Accuracy of Information
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
          <section id="research-use-only" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Research Use Only
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                All products sold by EVLV Today are intended exclusively for in-vitro laboratory research and analytical testing by qualified professionals. They are not for human or veterinary use.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Nothing on this website should be interpreted as a recommendation, endorsement, or instruction for the use of any product in or on humans or animals.
              </p>
            </div>
          </section>
          <section id="no-medical-or-health-claims" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              No Medical or Health Claims
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                EVLV Today does not provide medical advice and makes no claims regarding the diagnosis, treatment, cure, or prevention of any disease or condition.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Statements on this site have not been evaluated by the U.S. Food and Drug Administration or any comparable authority.
              </p>
            </div>
          </section>
          <section id="literature-references" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Literature &amp; References
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Any scientific literature, citations, or study references provided are for educational and context purposes only. They describe third-party research of the compound class and do not constitute claims about our products.
              </p>
            </div>
          </section>
          <section id="not-drugs-supplements-or-cosmetics" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Not Drugs, Supplements, or Cosmetics
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Our products are not drugs, dietary supplements, food, cosmetics, or medical devices, and they are not manufactured under pharmaceutical GMP conditions for human use.
              </p>
            </div>
          </section>
          <section id="buyer-responsibility" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Buyer Responsibility
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Buyers are solely responsible for the safe handling, storage, use, and lawful disposal of all materials, and for compliance with all applicable laws, regulations, and institutional policies.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                By purchasing, you affirm that you are a qualified researcher and that you will use materials only for lawful research purposes.
              </p>
            </div>
          </section>
          <section id="accuracy-of-information" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Accuracy of Information
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Product data, specifications, and COA values are provided in good faith and believed accurate at the time of publication. Specifications may be updated as new analytical data becomes available.
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
