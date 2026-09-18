import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Use Only",
  description: "Scope of use, eligibility and handling requirements for EVLV Today research materials.",
};

export default function ResearchUsePage() {
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
                Research Use Only
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Compliance
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Research Use Only
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              EVLV Today compounds are laboratory reference materials — not drugs, supplements, or consumer products. This policy defines exactly how our materials may and may not be used.
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
                  href="#scope-of-use"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Scope of Use
                </a>
              </li>
              <li>
                <a
                  href="#who-may-purchase"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Who May Purchase
                </a>
              </li>
              <li>
                <a
                  href="#no-medical-dosing-or-health-claims"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  No Medical, Dosing, or Health Claims
                </a>
              </li>
              <li>
                <a
                  href="#not-for-human-or-veterinary-use"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Not for Human or Veterinary Use
                </a>
              </li>
              <li>
                <a
                  href="#handling-storage-disposal"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Handling, Storage &amp; Disposal
                </a>
              </li>
              <li>
                <a
                  href="#returns-restocking"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Returns &amp; Restocking
                </a>
              </li>
              <li>
                <a
                  href="#reporting-compliance"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Reporting &amp; Compliance
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
          <section id="scope-of-use" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Scope of Use
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                All products offered by EVLV Today are supplied strictly as research reagents for in-vitro laboratory experimentation and analytical testing by qualified professionals. They are intended exclusively for research and development applications carried out in a controlled laboratory environment.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Products may not be administered to humans or animals, may not be used in food, drug, cosmetic, or household applications, and may not be resold, relabeled, or repackaged for any such purpose.
              </p>
            </div>
          </section>
          <section id="who-may-purchase" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Who May Purchase
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Purchasers must be at least 21 years of age and must represent that they are a qualified researcher, laboratory, or institution acquiring material solely for laboratory research.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We reserve the right to request documentation confirming research credentials or institutional affiliation, and to refuse or cancel any order that does not satisfy our verification requirements.
              </p>
            </div>
          </section>
          <section id="no-medical-dosing-or-health-claims" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              No Medical, Dosing, or Health Claims
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                EVLV Today does not provide dosage, administration, reconstitution-for-use, or therapeutic guidance of any kind. Nothing on this website constitutes medical advice, a health claim, or a statement of safety or efficacy in any organism.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Any published literature referenced on product pages describes third-party studies of the compound class and is provided for scientific context only. It is not a claim about our product.
              </p>
            </div>
          </section>
          <section id="not-for-human-or-veterinary-use" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Not for Human or Veterinary Use
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Our products are not drugs, dietary supplements, cosmetics, or medical devices. They have not been evaluated, approved, or reviewed by the U.S. Food and Drug Administration or any comparable regulatory authority for human or veterinary use.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                By purchasing, you accept full responsibility for the safe handling, storage, use, and lawful disposal of all materials in accordance with applicable regulations and your institutional safety policies.
              </p>
            </div>
          </section>
          <section id="handling-storage-disposal" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Handling, Storage &amp; Disposal
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Handle all materials using appropriate laboratory safety practices, including gloves, eye protection, and a controlled work environment. Store lyophilized compounds at -20°C in a dry, light-protected location unless otherwise stated on the COA.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Dispose of unused material and containers in accordance with institutional and local environmental regulations.
              </p>
            </div>
          </section>
          <section id="returns-restocking" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Returns &amp; Restocking
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Unopened vials may be returned within 14 days of delivery. If any batch fails your independent verification against the accompanying COA, we will replace the lot or issue a full refund.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Opened or reconstituted materials cannot be returned for safety and traceability reasons.
              </p>
            </div>
          </section>
          <section id="reporting-compliance" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Reporting &amp; Compliance
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                To report misuse, resale for human use, or any suspected illegal activity associated with our products, contact our compliance team. Reports are acknowledged within one business day and resolved within seven business days.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                EVLV Today cooperates fully with regulators and law enforcement and will terminate accounts that violate these terms.
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
