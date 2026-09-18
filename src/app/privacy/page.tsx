import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How EVLV Today collects, uses, shares and retains personal information.",
};

export default function PrivacyPage() {
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
                Privacy Policy
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Legal
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              How EVLV Today collects, uses, and protects information when you browse the site or place a research order.
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
                  href="#information-we-collect"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Information We Collect
                </a>
              </li>
              <li>
                <a
                  href="#how-we-use-information"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  How We Use Information
                </a>
              </li>
              <li>
                <a
                  href="#sharing-disclosure"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Sharing &amp; Disclosure
                </a>
              </li>
              <li>
                <a
                  href="#data-retention"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Data Retention
                </a>
              </li>
              <li>
                <a
                  href="#your-rights"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Your Rights
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="text-sm text-ink-700 hover:text-emerald-600 cursor-pointer"
                >
                  Security
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
          <section id="information-we-collect" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Information We Collect
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We collect information you provide directly, such as your name, email address, institution, shipping address, and order details, together with the content of any messages you send us.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We also collect limited technical data automatically, including device and browser information and pages visited, to operate and improve the site.
              </p>
            </div>
          </section>
          <section id="how-we-use-information" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              How We Use Information
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We use your information to process orders, verify research credentials, provide documentation, respond to inquiries, and maintain compliance records.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We may send transactional messages about your orders. Promotional messages, such as our research brief, are sent only if you subscribe and can be unsubscribed at any time.
              </p>
            </div>
          </section>
          <section id="sharing-disclosure" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Sharing &amp; Disclosure
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We do not sell your personal information. We share data only with service providers necessary to fulfill your order, such as payment processors and carriers, and where required by law.
              </p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Payment card details are handled by our payment processors and are never stored on our servers.
              </p>
            </div>
          </section>
          <section id="data-retention" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Data Retention
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Order and lot records are retained to satisfy documentation and compliance obligations. Marketing preferences are retained until you unsubscribe.
              </p>
            </div>
          </section>
          <section id="your-rights" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Your Rights
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to certain processing. To exercise these rights, contact our support team.
              </p>
            </div>
          </section>
          <section id="security" className="mb-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full gradient-luxe"></span>
              Security
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-[15px] text-ink-700 leading-relaxed">
                We use industry-standard safeguards, including encryption in transit, to protect your information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
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
