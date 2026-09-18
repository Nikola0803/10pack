import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing purchases from and use of the EVLV Today website.",
};

export default function TermsPage() {
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
                Terms of Service
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Legal
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Terms of Service
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              The rules that govern access to this website and the purchase of EVLV Today research materials.
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
                  href="#acceptance-of-terms"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Acceptance of Terms
                </a>
              </li>
              <li>
                <a
                  href="#eligibility-verification"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Eligibility &amp; Verification
                </a>
              </li>
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
                  href="#orders-pricing-payment"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Orders, Pricing &amp; Payment
                </a>
              </li>
              <li>
                <a
                  href="#intellectual-property"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Intellectual Property
                </a>
              </li>
              <li>
                <a
                  href="#limitation-of-liability"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Limitation of Liability
                </a>
              </li>
              <li>
                <a
                  href="#governing-law"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Governing Law
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
          <section id="acceptance-of-terms" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Acceptance of Terms
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                By accessing this website or purchasing from EVLV Today, you agree to these Terms of Service. If you do not agree, do not use the site or our products.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>
          </section>
          <section id="eligibility-verification" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Eligibility &amp; Verification
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                You must be at least 21 years of age and a qualified researcher, laboratory, or institution to purchase. You agree to provide accurate information and to comply with our verification requirements.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We may refuse or cancel any order at our discretion, including where research use cannot be reasonably confirmed.
              </p>
            </div>
          </section>
          <section id="research-use-only" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Research Use Only
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                All products are sold strictly for in-vitro laboratory research use by qualified professionals and are not for human or veterinary use.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                You agree not to administer any product to humans or animals, not to use products in food, drug, cosmetic, or household applications, and not to resell or relabel for any such purpose.
              </p>
            </div>
          </section>
          <section id="orders-pricing-payment" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Orders, Pricing &amp; Payment
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Prices, promotions, and availability are subject to change without notice. Promotional codes carry no cash value and may be modified or withdrawn.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Orders are subject to acceptance and may be cancelled for verification, inventory, or compliance reasons.
              </p>
            </div>
          </section>
          <section id="intellectual-property" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Intellectual Property
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                All site content, including text, graphics, logos, and documentation, is owned by or licensed to EVLV Today and may not be reproduced without permission.
              </p>
            </div>
          </section>
          <section id="limitation-of-liability" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Limitation of Liability
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Products are sold "as is" for research purposes only, without warranties of any kind. To the maximum extent permitted by law, EVLV Today is not liable for any indirect, incidental, or consequential damages arising from use of the site or products.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Buyer assumes all responsibility for the safe handling, storage, and lawful use of materials purchased.
              </p>
            </div>
          </section>
          <section id="governing-law" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Governing Law
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                These terms are governed by the laws of the United States and the jurisdiction in which EVLV Today operates, without regard to conflict-of-law principles.
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
