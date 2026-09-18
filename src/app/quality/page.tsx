import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Testing",
  description: "The eight-stage independent testing protocol behind every EVLV Today batch.",
};

export default function QualityPage() {
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
                Quality
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Quality Protocol
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              A higher standard, documented end-to-end.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              No in-house rubber stamps. Eight separate analytical assays, performed by accredited third-party laboratories, signed onto the COA tied to every lot number we ship.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="eyebrow">
              The Testing Protocol
            </span>
            <h2 className="headline-tight mt-3 text-3xl md:text-4xl">
              Eight stages, every lot.
            </h2>
            <p className="mt-5 text-ink-500 leading-relaxed">
              Every batch passes a repeatable verification pipeline before it is released. Nothing ships on a sample-only basis.
            </p>
            <div className="relative mt-10 w-[240px] h-[240px] hidden md:block">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/15 via-transparent to-gold-500/15 blur-2xl"
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="eyebrow">
                  Tested
                </span>
                <span
                  className="headline-tight text-[80px] leading-none bg-gradient-to-br from-emerald-600 to-gold-500 bg-clip-text text-transparent"
                >
                  8
                  <span className="text-ink-950/80">
                    ×
                  </span>
                </span>
                <span
                  className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-ink-500 whitespace-nowrap"
                >
                  <i className="ri-verified-badge-line text-emerald-600"></i>
                  {" "}ISO 17025 Verified
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ul
              className="relative rounded-3xl border border-ink-950/8 bg-white/70 backdrop-blur-xl shadow-pharma overflow-hidden"
            >
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  01
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-flask-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Purity
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    HPLC-UV quantification against certified reference material.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  02
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-scales-3-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Content Verification
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    Mass and concentration verified to labeled potency.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  03
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-fingerprint-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Identity Confirmation
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    Mass spectrometry confirms exact molecular structure.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  04
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-shield-check-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Heavy Metals Screening
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    ICP-MS screen for Pb, As, Cd, Hg below USP &lt;232&gt; limits.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  05
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-microscope-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Sterility Testing
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    USP &lt;71&gt; compliant sterility screen on every fill.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  06
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-drop-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Endotoxin Testing
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    LAL kinetic chromogenic assay, &lt; 0.5 EU/mg.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  07
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-file-list-3-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Batch Conformity Verification
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    Independent review confirming every lot matches its release specification and COA.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
              <li
                className="group relative flex items-center gap-5 px-6 md:px-8 py-5 md:py-6 border-b border-ink-950/6 last:border-b-0 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="font-display text-xs tracking-[0.3em] text-ink-500/70 w-8">
                  08
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-gold-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0"
                >
                  <i className="ri-alert-line text-lg"></i>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    Fentanyl Screen
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-500 leading-relaxed">
                    LC-MS/MS screen confirms no fentanyl or fentanyl analog contamination.
                  </p>
                </div>
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-semibold"
                >
                  <i className="ri-check-line"></i>
                  {" "}Pass
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative mt-16 overflow-hidden border-y border-ink-950/8 py-5">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              HPLC-UV
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Mass Spec
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              ICP-MS
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              LAL Kinetic
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              USP &lt;71&gt;
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              LC-MS/MS
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              ISO 17025
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Fentanyl Screen
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              HPLC-UV
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Mass Spec
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              ICP-MS
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              LAL Kinetic
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              USP &lt;71&gt;
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              LC-MS/MS
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              ISO 17025
            </span>
            <span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-ink-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Fentanyl Screen
            </span>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">
            Release Pipeline
          </span>
          <h2 className="headline-tight mt-3 text-3xl md:text-4xl">
            Eight stages before a vial leaves the building.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="relative rounded-2xl tint-sage p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              01
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Synthesis
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Solid-phase synthesis in our US facility.
            </p>
          </div>
          <div className="relative rounded-2xl tint-emerald p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              02
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Identity (LC-MS)
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Mass spectrometry confirms molecular weight and sequence.
            </p>
          </div>
          <div className="relative rounded-2xl tint-gold p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              03
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Purity (HPLC)
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Quantitative analysis verifies ≥99% chromatographic purity.
            </p>
          </div>
          <div className="relative rounded-2xl tint-mint p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              04
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Sterility &amp; Endotoxin
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Validated screens guard against contamination.
            </p>
          </div>
          <div className="relative rounded-2xl tint-cream p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              05
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Stability
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Accelerated and real-time stability across the shelf life.
            </p>
          </div>
          <div className="relative rounded-2xl tint-stone p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              06
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Consistency
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Tolerance windows enforced batch-to-batch.
            </p>
          </div>
          <div className="relative rounded-2xl tint-sage p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              07
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Documentation
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Every result published in a lot-specific COA.
            </p>
          </div>
          <div className="relative rounded-2xl tint-emerald p-6 h-full border border-ink-950/5">
            <p className="headline-tight text-3xl text-emerald-700/70">
              08
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              Release
            </h3>
            <p className="mt-2 text-sm text-ink-950/70 leading-relaxed">
              Independent sign-off before any lot leaves the building.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-sage-50 border-y border-ink-950/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-ink-950/8 p-7">
              <span
                className="w-12 h-12 rounded-xl bg-emerald-100 grid place-items-center text-emerald-700"
              >
                <i className="ri-shield-star-line text-xl"></i>
              </span>
              <h3 className="mt-5 text-xl font-display font-bold tracking-tight">
                US-based 8× testing
              </h3>
              <p className="mt-3 text-ink-500 leading-relaxed">
                Every lot is independently analyzed by accredited US laboratories, with full chain-of-custody records on the COA.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-7">
              <span
                className="w-12 h-12 rounded-xl bg-emerald-100 grid place-items-center text-emerald-700"
              >
                <i className="ri-file-list-3-line text-xl"></i>
              </span>
              <h3 className="mt-5 text-xl font-display font-bold tracking-tight">
                Transparent documentation
              </h3>
              <p className="mt-3 text-ink-500 leading-relaxed">
                Every order arrives with a downloadable COA. Look up any batch from the public verification portal.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-7">
              <span
                className="w-12 h-12 rounded-xl bg-emerald-100 grid place-items-center text-emerald-700"
              >
                <i className="ri-verified-badge-line text-xl"></i>
              </span>
              <h3 className="mt-5 text-xl font-display font-bold tracking-tight">
                Independent verification
              </h3>
              <p className="mt-3 text-ink-500 leading-relaxed">
                We do not test ourselves. Every batch is verified by an accredited external laboratory partner.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-ink-950 text-white hover:bg-emerald-600 rounded-full h-12 px-7 text-sm font-semibold cursor-pointer"
              href="/coa"
            >
              Browse certificates{" "}
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link
              className="text-sm font-semibold text-emerald-600 hover:text-gold-600 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              href="/verify"
            >
              <i className="ri-qr-scan-2-line"></i>
              {" "}Verify a batch by lot number
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
