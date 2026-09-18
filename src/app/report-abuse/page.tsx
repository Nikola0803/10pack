import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report Abuse",
  description: "Report illegal content, misuse or product-safety concerns to the EVLV Today compliance team.",
};

export default function ReportAbusePage() {
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
                Report Abuse
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Compliance
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Report Abuse
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              EVLV Today takes misuse and misrepresentation seriously. Here is how to report it, and what we commit to in return.
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
                  href="#what-to-report"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  What to Report
                </a>
              </li>
              <li>
                <a
                  href="#how-to-file-a-complaint"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  How to File a Complaint
                </a>
              </li>
              <li>
                <a
                  href="#our-response-commitments"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Our Response Commitments
                </a>
              </li>
              <li>
                <a
                  href="#product-safety-concerns"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Product Safety Concerns
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
          <section id="what-to-report" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              What to Report
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Report any suspected misuse of EVLV Today products, including resale or relabeling for human consumption, misleading marketing, or any activity that violates our Research Use Only policy.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Also report fraudulent websites, phishing, or unauthorized sellers claiming to represent EVLV Today.
              </p>
            </div>
          </section>
          <section id="how-to-file-a-complaint" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              How to File a Complaint
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Email our compliance team with the subject line "Abuse Report", including any relevant order numbers, links, screenshots, or documentation.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Reports may be submitted anonymously, though providing contact details allows us to follow up if clarification is needed.
              </p>
            </div>
          </section>
          <section id="our-response-commitments" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Our Response Commitments
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Reports of illegal content or abuse are acknowledged within one business day and resolved within seven business days.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Where appropriate, we cooperate fully with regulators and law enforcement and will terminate accounts that violate our terms.
              </p>
            </div>
          </section>
          <section id="product-safety-concerns" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Product Safety Concerns
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                If you believe a product presents an immediate safety risk, contact us immediately and, where required, notify the relevant authorities in your jurisdiction.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We retain permanent lot records to support any investigation.
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
