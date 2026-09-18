import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates of Analysis",
  description: "Search and download signed certificates of analysis for every EVLV Today lot.",
};

export default function CoaPage() {
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
                COA
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Certificates of Analysis
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Look up any batch. Read every result.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Every lot ships with a signed, lot-specific COA from an ISO/IEC 17025 accredited third-party laboratory. Enter any lot number to pull the full certificate.
            </p>
            <form
              className="mt-8 flex items-center gap-2 rounded-full border border-ink-950/10 bg-white p-1.5 pl-5 shadow-pharma max-w-md"
            >
              <input
                placeholder="Enter lot · e.g. RB-2419-A"
                className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-ink-500/70 min-w-0"
               />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap gradient-luxe text-white rounded-full h-11 px-6 text-sm font-semibold cursor-pointer"
              >
                Verify{" "}
                <i className="ri-arrow-right-line"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow">
              Latest Releases
            </span>
            <h2 className="headline-tight mt-3 text-3xl md:text-4xl">
              Recent certificates
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-gold-600 cursor-pointer whitespace-nowrap"
            href="/shop"
          >
            Browse all compounds{" "}
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.84%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  GHK-Cu 100mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2419-A
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/ghk-cu"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.79%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  MOTS-c 10mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2411-I
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/mots-c"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.78%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  NAD+ 500mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2417-C
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/nad-plus"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.69%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  Klow 80mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2415-E
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/klow"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.71%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  RB-3 RT 10mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2418-B
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/glp3-rt"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.81%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  Glutathione 1500mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2414-F
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/glutathione"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.74%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  IGF-1 LR3 10mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2413-G
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/igf-1-lr3"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
          <div className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-950/8">
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white"
                >
                  Latest
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500"
                >
                  ISO 17025
                </span>
                <span
                  className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700"
                >
                  8× Testing
                </span>
              </div>
              <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                99.88%
              </p>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                Purity
              </p>
            </div>
            <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Variant
                </span>
                <span className="font-medium text-right">
                  Tesamorelin 10mg
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Lot #
                </span>
                <span className="font-medium text-right">
                  RB-2412-H
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-ink-500">
                  Tested
                </span>
                <span className="font-medium text-right">
                  Jul 24, 2026
                </span>
              </div>
            </div>
            <Link
              className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
              href="/shop/tesamorelin"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COA
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-sage-50 border-y border-ink-950/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">
              How To Read It
            </span>
            <h2 className="headline-tight mt-3 text-3xl md:text-4xl">
              Every field, explained.
            </h2>
            <p className="mt-4 text-ink-500">
              A COA documents identity, purity, potency, sterility, endotoxin, and lot metadata. Each value references the analytical method used.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
              >
                <i className="ri-fingerprint-line text-lg"></i>
              </span>
              <h3 className="mt-4 text-base font-semibold">
                Identity (HPLC)
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Confirms the compound matches its certified reference standard by retention time.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
              >
                <i className="ri-bar-chart-line text-lg"></i>
              </span>
              <h3 className="mt-4 text-base font-semibold">
                Purity (HPLC-UV)
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                The percentage of the peak area attributable to the target compound.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
              >
                <i className="ri-scales-3-line text-lg"></i>
              </span>
              <h3 className="mt-4 text-base font-semibold">
                Net Peptide Content
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                The actual mass of compound per vial versus the labeled amount.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
              >
                <i className="ri-drop-line text-lg"></i>
              </span>
              <h3 className="mt-4 text-base font-semibold">
                Endotoxin (LAL)
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Kinetic chromogenic assay result reported in EU/mg.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
              >
                <i className="ri-microscope-line text-lg"></i>
              </span>
              <h3 className="mt-4 text-base font-semibold">
                Sterility (USP &lt;71&gt;)
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Growth/no-growth result from the validated sterility screen.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
              <span
                className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
              >
                <i className="ri-alert-line text-lg"></i>
              </span>
              <h3 className="mt-4 text-base font-semibold">
                Fentanyl Screen
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                LC-MS/MS confirmation that no fentanyl or analog is present.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div
          className="rounded-3xl bg-ink-950 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
              Independent · Sourced · Documented
            </p>
            <h2 className="headline-tight mt-3 text-2xl md:text-3xl">
              Download the full certificate for any lot.
            </h2>
            <p className="mt-3 text-white/70 max-w-xl text-sm">
              Certificates are signed, dated, and retained permanently. If a batch fails your independent verification, we replace the lot or refund in full.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 h-12 rounded-full gradient-gold px-7 text-sm font-semibold text-white whitespace-nowrap cursor-pointer"
            href="/verify"
          >
            <i className="ri-qr-scan-2-line"></i>
            {" "}Verify a lot
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
