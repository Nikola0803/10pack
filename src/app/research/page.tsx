import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Library",
  description: "Published literature, assay methods and reference data supporting EVLV Today compounds.",
};

export default function ResearchPage() {
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
                Research
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Research Library
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Method notes, protocols, and reference material.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              A working library for laboratory researchers — analytical methods, handling guidance, and assay protocol notes covering our reference compounds for in-vitro study.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-ink-950 text-white/85">
        <div
          className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] uppercase tracking-[0.2em]"
        >
          <span className="inline-flex items-center gap-2">
            <i className="ri-forbid-2-line text-emerald-400"></i>
            {" "}Research use only
          </span>
          <span className="hidden sm:inline text-white/20">
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-flask-line text-gold-400"></i>
            {" "}In-vitro &amp; analytical use
          </span>
          <span className="hidden sm:inline text-white/20">
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-book-open-line text-emerald-400"></i>
            {" "}For qualified researchers
          </span>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-14">
        <article
          className="relative overflow-hidden rounded-3xl border border-ink-950/8 gradient-hero"
        >
          <div className="relative grid lg:grid-cols-12 gap-8 items-center p-7 sm:p-10 lg:p-12">
            <div className="lg:col-span-8">
              <span
                className="inline-flex items-center gap-2 pill bg-white/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-700 font-semibold"
              >
                <i className="ri-bookmark-line"></i>
                {" "}Featured Note
              </span>
              <h2 className="headline-tight mt-5 text-3xl sm:text-4xl md:text-5xl">
                Reading an HPLC-UV Purity Trace
              </h2>
              <p className="mt-4 max-w-2xl text-base text-ink-500 leading-relaxed">
                How to interpret peak integration, baseline stability, and the reported purity percentage on a reference-material chromatogram.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-ink-500">
                <span className="inline-flex items-center gap-2">
                  <i className="ri-price-tag-3-line"></i>
                  {" "}Analytical Methods
                </span>
                <span className="inline-flex items-center gap-2">
                  <i className="ri-time-line"></i>
                  {" "}6 min read
                </span>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
                <span
                  className="w-12 h-12 rounded-xl bg-sage-50 grid place-items-center text-emerald-600"
                >
                  <i className="ri-line-chart-line text-xl"></i>
                </span>
                <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                  Method notes are written for laboratory workflows. Nothing here constitutes dosing, administration, or human-use guidance of any kind.
                </p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-gold-600 cursor-pointer whitespace-nowrap"
                  href="/coa"
                >
                  Browse certificates{" "}
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-14">
        <div className="flex flex-col gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow">
              Browse the Library
            </span>
            <h2 className="headline-tight mt-3 text-3xl sm:text-4xl">
              Reference notes, by topic.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              aria-pressed="true"
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap border-emerald-600 bg-emerald-600 text-white"
            >
              All topics
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap border-ink-950/10 hover:border-emerald-500/50"
            >
              Analytical Methods
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap border-ink-950/10 hover:border-emerald-500/50"
            >
              Handling &amp; Storage
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap border-ink-950/10 hover:border-emerald-500/50"
            >
              Assay Protocols
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap border-ink-950/10 hover:border-emerald-500/50"
            >
              Quality &amp; Compliance
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-emerald flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-temp-cold-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Handling &amp; Storage
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                Lyophilized Storage &amp; Stability Windows
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                Recommended temperature, humidity, and light conditions to preserve lyophilized reference compounds across the stated shelf life.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}4 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-gold flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-drop-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Assay Protocols
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                Reconstitution Solvents for In-Vitro Assays
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                Selecting compatible diluents and limiting hydrolysis during reconstitution in standard laboratory workflows.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}5 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-mint flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-scales-3-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Analytical Methods
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                Net Peptide Content vs. Label Mass
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                Why the filled mass on the label and the quantified peptide content can differ, and how counter-ions and moisture are accounted for.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}7 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-cream flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-microscope-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Analytical Methods
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                ICP-MS Heavy-Metal Screening Explained
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                What the Pb, As, Cd, and Hg screen reports, how detection limits are established, and how results map to USP &lt;232&gt; limits.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}5 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-stone flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-bar-chart-box-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Assay Protocols
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                Designing a Dose–Response Curve
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                Plate setup, serial dilution strategy, and positive controls for reproducible in-vitro potency experiments.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}8 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-sage flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-file-list-3-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Quality &amp; Compliance
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                Batch-to-Batch Tolerance Windows
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                How release specifications define acceptable variation between production lots and why consistency is a measurable deliverable.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}4 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-emerald flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-shield-check-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Handling &amp; Storage
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                Endotoxin Limits in Cell-Culture Work
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                Interpreting LAL kinetic results and EU/mg thresholds for sensitive in-vitro model systems.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}6 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
          <article
            className="flex flex-col rounded-2xl bg-white border border-ink-950/8 lift overflow-hidden"
          >
            <div className="relative h-28 tint-gold flex items-center justify-center">
              <span
                className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur grid place-items-center text-emerald-600"
              >
                <i className="ri-book-2-line text-xl"></i>
              </span>
              <span
                className="absolute top-3 left-3 pill bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-700 font-semibold"
              >
                Quality &amp; Compliance
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold tracking-tight">
                Glossary of Reference-Material Terms
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-500 leading-relaxed">
                CRM, traceability, certificate of analysis, and the other terms that recur across our documentation and COAs.
              </p>
              <div
                className="mt-4 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-950/8 pt-3"
              >
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line"></i>
                  {" "}3 min read
                </span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-[0.14em]">
                  <i className="ri-shield-check-line text-emerald-600"></i>
                  {" "}RUO
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-sage-50 border-y border-ink-950/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">
              Handling &amp; Storage
            </span>
            <h2 className="headline-tight mt-3 text-3xl sm:text-4xl">
              Quick reference for the bench.
            </h2>
            <p className="mt-4 text-ink-500">
              Conditions validated across our stability program. Always follow your institution's handling procedures.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-sage-100 grid place-items-center text-emerald-700"
              >
                <i className="ri-temp-cold-line text-lg"></i>
              </span>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-ink-500">
                Lyophilized, sealed
              </p>
              <p className="mt-1 font-display text-2xl font-bold tracking-tight">
                -20 °C
              </p>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Store desiccated, protected from light. Stability validated for 24 months in this state.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-sage-100 grid place-items-center text-emerald-700"
              >
                <i className="ri-truck-line text-lg"></i>
              </span>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-ink-500">
                In transit
              </p>
              <p className="mt-1 font-display text-2xl font-bold tracking-tight">
                Ambient
              </p>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Lyophilized compounds ship at ambient temperature across a validated 7-day window.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-sage-100 grid place-items-center text-emerald-700"
              >
                <i className="ri-drop-line text-lg"></i>
              </span>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-ink-500">
                Reconstituted
              </p>
              <p className="mt-1 font-display text-2xl font-bold tracking-tight">
                2–8 °C
              </p>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Hold at refrigeration temperature and consume within the assay window for best stability.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-sage-100 grid place-items-center text-emerald-700"
              >
                <i className="ri-loop-right-line text-lg"></i>
              </span>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-ink-500">
                Avoid
              </p>
              <p className="mt-1 font-display text-2xl font-bold tracking-tight">
                Freeze–thaw
              </p>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Aliquot before freezing to prevent repeated freeze–thaw cycling of the working solution.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">
            Reference
          </span>
          <h2 className="headline-tight mt-3 text-3xl sm:text-4xl">
            Glossary of terms.
          </h2>
          <p className="mt-4 text-ink-500">
            Plain-language definitions for the vocabulary used across our documentation and certificates of analysis.
          </p>
        </div>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              Reference Material
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              A substance of sufficiently homogeneous and stable character, established for use in a measurement or examination.
            </dd>
          </div>
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              Certified Reference Material (CRM)
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              A reference material accompanied by a certificate stating one or more property values, traceable and with stated uncertainty.
            </dd>
          </div>
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              Certificate of Analysis (COA)
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              A lot-specific document reporting identity, purity, potency, and contamination screens with the associated analytical methods.
            </dd>
          </div>
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              Traceability
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              The property of a measurement result whereby it can be related to a stated reference through an unbroken chain of calibrations.
            </dd>
          </div>
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              Net Peptide Content
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              The quantified mass of the target peptide per vial, exclusive of counter-ions, water, and residual solvents.
            </dd>
          </div>
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              Endotoxin
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              A lipopolysaccharide component of certain bacterial cell walls, quantified by LAL assay and reported in EU/mg.
            </dd>
          </div>
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              LAL Assay
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              Limulus amebocyte lysate test used to detect and quantify bacterial endotoxin in a sample.
            </dd>
          </div>
          <div className="border-t border-ink-950/8 pt-5">
            <dt className="text-base font-semibold tracking-tight">
              Lyophilization
            </dt>
            <dd className="mt-1.5 text-sm text-ink-500 leading-relaxed">
              Freeze-drying; removal of solvent under vacuum to yield a stable, readily reconstituted powder.
            </dd>
          </div>
        </dl>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pb-20">
        <div
          className="relative overflow-hidden rounded-3xl border border-emerald-500/15 gradient-luxe p-6 sm:p-10 lg:p-12 text-white"
        >
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
          <div
            className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="max-w-xl">
              <span
                className="inline-flex items-center gap-2 pill bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.22em] font-semibold"
              >
                Documentation
              </span>
              <h2 className="headline-tight mt-4 text-2xl sm:text-3xl md:text-4xl">
                Back every note with a certified result.
              </h2>
              <p className="mt-3 text-white/85">
                Pull the lot-specific certificate of analysis for any reference compound in the catalog.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 rounded-full bg-white text-ink-950 px-7 text-sm font-semibold hover:bg-white/90 cursor-pointer"
                href="/coa"
              >
                <i className="ri-file-shield-2-line"></i>
                {" "}View COAs
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 rounded-full border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 cursor-pointer"
                href="/shop"
              >
                Browse catalog{" "}
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
