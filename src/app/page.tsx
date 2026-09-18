import Link from "next/link";
import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { faqs } from "@/lib/faq";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "EVLV Today | Reference-Grade Research Compounds",
  description: "Reference-grade research compounds with eight-stage independent testing, verified purity, and transparent COAs.",
};

/** The homepage rail shows the first eight compounds from the catalogue. */
const featuredProducts = products.slice(0, 8);

export default function HomePage() {
  return (
    <>
    <section className="bogo-hero-bg relative overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display font-extrabold leading-none tracking-[-0.06em] text-[30vw] md:text-[20vw] text-white/[0.04]"
      >
        10×
      </div>
      <div
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-20 lg:px-10 lg:py-24"
      >
        <div className="text-center md:text-left">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300 animate-pulse"></span>
            Free Shipping · Every Order
          </span>
          <h1 className="headline-tight mt-5 text-5xl sm:text-6xl lg:text-7xl">
            <span className="block">
              10 vials.
            </span>
            <span className="bogo-gradient-text block pb-1">
              One smart price.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm text-white/75 sm:text-base md:mx-0">
            Every compound ships as a 10-vial research pack, priced for bulk value — with free shipping on every order.
          </p>
          <div
            className="mx-auto mt-8 flex w-full max-w-[320px] flex-col gap-3 sm:max-w-none sm:flex-row md:justify-start"
          >
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 rounded-full gradient-gold px-7 text-sm font-semibold text-white shadow-luxe hover:opacity-95 cursor-pointer"
              href="/shop"
            >
              Shop 10-Packs{" "}
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 rounded-full border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 cursor-pointer"
              href="/coa"
            >
              <i className="ri-file-shield-2-line"></i>
              {" "}View COAs
            </Link>
          </div>
          <ul className="mt-9 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
                <i className="ri-truck-line text-white/90"></i>
              </span>
              <span>
                <span className="block text-sm font-semibold leading-tight">
                  Free Shipping
                </span>
                <span className="block text-xs text-white/60">
                  On every order
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
                <i className="ri-shield-check-line text-white/90"></i>
              </span>
              <span>
                <span className="block text-sm font-semibold leading-tight">
                  99%+ Purity
                </span>
                <span className="block text-xs text-white/60">
                  Lab Tested
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
                <i className="ri-stack-line text-white/90"></i>
              </span>
              <span>
                <span className="block text-sm font-semibold leading-tight">
                  Bulk Value
                </span>
                <span className="block text-xs text-white/60">
                  10 vials per pack
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="relative mx-auto aspect-[3/2] w-full max-w-md md:max-w-[480px]">
          <div className="absolute inset-[8%] rounded-full bg-gold-500/20 blur-3xl"></div>
          <div
            className="absolute left-[6%] top-[20%] z-0 w-[32%] md:-left-[6%] md:top-[18%] md:w-[48%] lg:-left-[18%]"
          >
            <img
              alt=""
              aria-hidden="true"
              className="float-b w-full drop-shadow-[0_24px_30px_rgba(0,0,0,0.45)]"
              src="/products/vial-evlv-h2o-cut.webp"
             />
          </div>
          <div
            className="absolute right-[4%] top-[14%] z-0 w-[45%] md:-right-[10%] md:top-[12%] md:w-[68%] lg:-right-[24%]"
          >
            <img
              alt=""
              aria-hidden="true"
              className="float-c w-full drop-shadow-[0_24px_30px_rgba(0,0,0,0.45)]"
              src="/products/vial-evlv-h2o-cut.webp"
             />
          </div>
          <div
            className="absolute left-1/2 top-[45%] z-10 w-[71%] -translate-x-1/2 -translate-y-1/2 md:w-full"
          >
            <img
              alt="EVLV Refined H2O research vial"
              className="float-a w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
              src="/products/vial-evlv-h2o-cut.webp"
             />
          </div>
          <span
            className="absolute bottom-[2%] right-[4%] z-20 rotate-6 rounded-2xl gradient-gold px-4 py-2 text-center font-display font-extrabold leading-none shadow-luxe"
          >
            <span className="block text-2xl">
              10×
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em]">
              Pack
            </span>
          </span>
        </div>
      </div>
    </section>
    <section
      id="catalog"
      className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-20 pb-8"
      data-product-shop="true"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
        <div>
          <span className="eyebrow">
            Catalog · Featured
          </span>
          <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
            Reference-grade compounds, in stock.
          </h2>
        </div>
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-gold-600 cursor-pointer whitespace-nowrap"
          href="/shop"
        >
          Browse full catalog{" "}
          <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
      <p className="mb-10 max-w-3xl text-sm text-ink-500">
        Every compound ships as a 10-vial pack, priced for bulk research value — with free shipping on every order.{" "}
        <span className="font-semibold text-ink-950">
          All compounds remain for in-vitro research use only.
        </span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
    <section className="relative overflow-hidden mt-14">
      <div aria-hidden="true" className="absolute inset-0 gradient-hero"></div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              Quality Protocol
            </span>
            <h2 className="headline-tight mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Every batch,{" "}
              <span
                className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-gold-500 bg-clip-text text-transparent"
              >
                8× tested.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-500 max-w-md leading-relaxed">
              No in-house rubber stamps. Eight separate analytical assays, performed by accredited third-party laboratories, signed onto the COA tied to every lot number we ship.
            </p>
            <div className="relative mt-12 w-[260px] h-[260px] hidden md:block">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/15 via-transparent to-gold-500/15 blur-2xl"
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="eyebrow">
                  Tested
                </span>
                <span
                  className="headline-tight text-[88px] leading-none bg-gradient-to-br from-emerald-600 to-gold-500 bg-clip-text text-transparent"
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
          <div className="lg:col-span-7">
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
            <Link
              className="mt-5 flex items-center justify-between gap-6 rounded-2xl gradient-luxe text-white px-6 md:px-8 py-5 shadow-luxe cursor-pointer"
              href="/coa"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">
                  Proof, on demand
                </p>
                <p className="mt-1 text-lg md:text-xl font-semibold tracking-tight">
                  Verify any lot — full COA, signed and dated.
                </p>
              </div>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap"
              >
                Verify a lot{" "}
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="relative mt-20 overflow-hidden border-y border-ink-950/8 py-5">
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
      </div>
    </section>
    <section className="bg-sage-50 border-y border-ink-950/8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">
            Discovery
          </span>
          <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
            Find the compound your protocol needs.
          </h2>
          <p className="mt-5 text-ink-500">
            Browse by category or search the catalog directly.
          </p>
          <div className="mt-7 relative max-w-md mx-auto">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"></i>
            <input
              placeholder="Search compounds, lot numbers, or COAs"
              className="w-full rounded-full bg-white border border-ink-950/10 pl-11 pr-5 py-3 text-sm placeholder:text-ink-500/70 focus:outline-none focus:border-emerald-500"
              type="search"
             />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link
            className="group block rounded-2xl bg-white border border-ink-950/8 p-6 lift cursor-pointer"
            href="/shop"
          >
            <div className="w-12 h-12 rounded-xl tint-sage grid place-items-center text-emerald-600">
              <i className="ri-flask-line text-xl"></i>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Reference Compounds
            </h3>
            <div className="mt-2 flex items-center justify-between text-sm text-ink-500">
              <span>
                3 compounds
              </span>
              <i className="ri-arrow-right-up-line text-emerald-600"></i>
            </div>
          </Link>
          <Link
            className="group block rounded-2xl bg-white border border-ink-950/8 p-6 lift cursor-pointer"
            href="/shop"
          >
            <div
              className="w-12 h-12 rounded-xl tint-emerald grid place-items-center text-emerald-600"
            >
              <i className="ri-capsule-line text-xl"></i>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Lyophilized Powders
            </h3>
            <div className="mt-2 flex items-center justify-between text-sm text-ink-500">
              <span>
                7 compounds
              </span>
              <i className="ri-arrow-right-up-line text-emerald-600"></i>
            </div>
          </Link>
          <Link
            className="group block rounded-2xl bg-white border border-ink-950/8 p-6 lift cursor-pointer"
            href="/shop"
          >
            <div className="w-12 h-12 rounded-xl tint-gold grid place-items-center text-emerald-600">
              <i className="ri-test-tube-line text-xl"></i>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Research Blends
            </h3>
            <div className="mt-2 flex items-center justify-between text-sm text-ink-500">
              <span>
                2 compounds
              </span>
              <i className="ri-arrow-right-up-line text-emerald-600"></i>
            </div>
          </Link>
          <Link
            className="group block rounded-2xl bg-white border border-ink-950/8 p-6 lift cursor-pointer"
            href="/shop"
          >
            <div className="w-12 h-12 rounded-xl tint-mint grid place-items-center text-emerald-600">
              <i className="ri-microscope-line text-xl"></i>
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              Laboratory Accessories
            </h3>
            <div className="mt-2 flex items-center justify-between text-sm text-ink-500">
              <span>
                0 compounds
              </span>
              <i className="ri-arrow-right-up-line text-emerald-600"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20">
      <div className="max-w-2xl mb-14">
        <span className="eyebrow">
          Why We're Different
        </span>
        <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
          A higher standard, documented end-to-end.
        </h2>
        <p className="mt-5 text-ink-500">
          Most research suppliers ask for trust. We hand you the proof.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div
          className="relative rounded-2xl border border-ink-950/8 bg-white p-8 lg:p-10 lift overflow-hidden"
        >
          <div
            className="absolute -right-12 -top-12 w-44 h-44 rounded-full gradient-luxe opacity-[0.08] blur-2xl"
          ></div>
          <div
            className="relative w-12 h-12 rounded-xl bg-sage-50 grid place-items-center text-emerald-600 mb-6"
          >
            <i className="ri-shield-star-line text-xl"></i>
          </div>
          <h3 className="relative text-2xl tracking-tight font-display font-bold">
            Eight-stage testing
          </h3>
          <p className="relative mt-3 text-ink-500 leading-relaxed">
            Identity, potency, purity, fentanyl screen, stability, sterility, endotoxin, and batch consistency — every lot, no exceptions.
          </p>
        </div>
        <div
          className="relative rounded-2xl border border-ink-950/8 bg-white p-8 lg:p-10 lift overflow-hidden"
        >
          <div
            className="absolute -right-12 -top-12 w-44 h-44 rounded-full gradient-luxe opacity-[0.08] blur-2xl"
          ></div>
          <div
            className="relative w-12 h-12 rounded-xl bg-sage-50 grid place-items-center text-emerald-600 mb-6"
          >
            <i className="ri-file-list-3-line text-xl"></i>
          </div>
          <h3 className="relative text-2xl tracking-tight font-display font-bold">
            Transparent documentation
          </h3>
          <p className="relative mt-3 text-ink-500 leading-relaxed">
            Every order arrives with a downloadable COA. Look up any batch from the public verification portal.
          </p>
        </div>
        <div
          className="relative rounded-2xl border border-ink-950/8 bg-white p-8 lg:p-10 lift overflow-hidden"
        >
          <div
            className="absolute -right-12 -top-12 w-44 h-44 rounded-full gradient-luxe opacity-[0.08] blur-2xl"
          ></div>
          <div
            className="relative w-12 h-12 rounded-xl bg-sage-50 grid place-items-center text-emerald-600 mb-6"
          >
            <i className="ri-map-pin-line text-xl"></i>
          </div>
          <h3 className="relative text-2xl tracking-tight font-display font-bold">
            US-based 8× testing
          </h3>
          <p className="relative mt-3 text-ink-500 leading-relaxed">
            Every lot is independently analyzed by accredited US laboratories, with full chain-of-custody records on the COA.
          </p>
        </div>
        <div
          className="relative rounded-2xl border border-ink-950/8 bg-white p-8 lg:p-10 lift overflow-hidden"
        >
          <div
            className="absolute -right-12 -top-12 w-44 h-44 rounded-full gradient-luxe opacity-[0.08] blur-2xl"
          ></div>
          <div
            className="relative w-12 h-12 rounded-xl bg-sage-50 grid place-items-center text-emerald-600 mb-6"
          >
            <i className="ri-verified-badge-line text-xl"></i>
          </div>
          <h3 className="relative text-2xl tracking-tight font-display font-bold">
            Independent third-party verification
          </h3>
          <p className="relative mt-3 text-ink-500 leading-relaxed">
            We don't test ourselves. Every batch is verified by an accredited external laboratory partner.
          </p>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20">
      <div className="max-w-2xl mb-14">
        <span className="eyebrow">
          The Testing Protocol
        </span>
        <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
          Eight stages before a vial leaves the building.
        </h2>
        <p className="mt-5 text-ink-500">
          A documented, repeatable verification pipeline applied to every single lot.
        </p>
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
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Link
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-ink-950 text-white hover:bg-emerald-600 rounded-full h-12 px-7 text-sm font-semibold cursor-pointer"
          href="/quality"
        >
          Read the full protocol{" "}
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
    </section>
    <section id="verify" className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">
            Verification Center
          </span>
          <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
            Look up any batch. Read every result.
          </h2>
          <p className="mt-5 text-ink-500 text-lg">
            Type any lot number from an EVLV Today vial to pull the full certificate of analysis — identity, purity, sterility, endotoxin, and stability data, signed by the testing laboratory.
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
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <li className="inline-flex items-start gap-2 text-ink-950/80">
              <i className="ri-check-line text-emerald-600 mt-0.5"></i>
              Independent third-party laboratory
            </li>
            <li className="inline-flex items-start gap-2 text-ink-950/80">
              <i className="ri-check-line text-emerald-600 mt-0.5"></i>
              Signed digital COA per lot
            </li>
            <li className="inline-flex items-start gap-2 text-ink-950/80">
              <i className="ri-check-line text-emerald-600 mt-0.5"></i>
              Public batch verification portal
            </li>
            <li className="inline-flex items-start gap-2 text-ink-950/80">
              <i className="ri-check-line text-emerald-600 mt-0.5"></i>
              Permanent record retention
            </li>
          </ul>
        </div>
        <div className="relative rounded-3xl border border-ink-950/8 bg-white shadow-luxe p-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                Certificate of Analysis
              </p>
              <p className="mt-1 headline-tight text-2xl">
                RB-2419-A · GHK-Cu
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 pill bg-sage-100 px-3 py-1 text-[11px] font-semibold text-emerald-700"
            >
              <i className="ri-verified-badge-line"></i>
              {" "}Verified
            </span>
          </div>
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-ink-950/10 to-transparent"></div>
          <dl className="grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Identity (HPLC)
              </dt>
              <dd className="mt-1 font-semibold">
                Confirmed
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Purity (HPLC)
              </dt>
              <dd className="mt-1 font-semibold">
                99.84%
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Sterility (PCR)
              </dt>
              <dd className="mt-1 font-semibold">
                No Growth
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Endotoxin
              </dt>
              <dd className="mt-1 font-semibold">
                &lt; 0.05 EU/mL
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Fentanyl Screen
              </dt>
              <dd className="mt-1 font-semibold">
                Not Detected
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Net Peptide
              </dt>
              <dd className="mt-1 font-semibold">
                100.23 mg
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Tested by
              </dt>
              <dd className="mt-1 font-semibold">
                ILS Laboratories
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Test date
              </dt>
              <dd className="mt-1 font-semibold">
                Jul 24, 2026
              </dd>
            </div>
          </dl>
          <div className="mt-7 flex items-center justify-between gap-4">
            <Link
              className="text-sm font-semibold text-emerald-600 inline-flex items-center gap-1 cursor-pointer"
              href="/coa"
            >
              <i className="ri-download-2-line"></i>
              {" "}Download PDF
            </Link>
            <p className="text-[10px] text-ink-500 text-right">
              Signed · ILS Laboratories, ISO/IEC 17025
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-sage-50 border-y border-ink-950/8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">
            Verified Researchers
          </span>
          <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
            Trusted in labs that don't tolerate guesswork.
          </h2>
          <div className="mt-6 inline-flex items-center gap-2">
            <div className="flex text-gold-400">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <span className="text-sm text-ink-500">
              4.9 / 5 · 1,284 verified reviews
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <figure className="h-full rounded-2xl bg-white border border-ink-950/8 p-7 shadow-pharma">
            <div className="flex text-gold-400 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <blockquote className="mt-4 text-ink-950 leading-relaxed">
              Lot-to-lot consistency that we can actually plot. The COAs are the most thorough I have seen from a private supplier.
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">
                  Dr. Marin K.
                </p>
                <p className="text-xs text-ink-500">
                  Postdoc, Cell Biology
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-emerald-600 font-semibold"
              >
                <i className="ri-verified-badge-line"></i>
                {" "}Verified
              </span>
            </figcaption>
          </figure>
          <figure className="h-full rounded-2xl bg-white border border-ink-950/8 p-7 shadow-pharma">
            <div className="flex text-gold-400 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <blockquote className="mt-4 text-ink-950 leading-relaxed">
              Ordering, verification, and shipping are seamless. The verification portal saved me a half-day of paperwork.
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">
                  Lena Q.
                </p>
                <p className="text-xs text-ink-500">
                  Independent Researcher
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-emerald-600 font-semibold"
              >
                <i className="ri-verified-badge-line"></i>
                {" "}Verified
              </span>
            </figcaption>
          </figure>
          <figure className="h-full rounded-2xl bg-white border border-ink-950/8 p-7 shadow-pharma">
            <div className="flex text-gold-400 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <blockquote className="mt-4 text-ink-950 leading-relaxed">
              I trust the documentation. That is the whole game. EVLV Today treats QC like the deliverable, not the afterthought.
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">
                  Dr. P. Okafor
                </p>
                <p className="text-xs text-ink-500">
                  Principal Investigator
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-emerald-600 font-semibold"
              >
                <i className="ri-verified-badge-line"></i>
                {" "}Verified
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-20 pb-24">
      <div
        className="relative overflow-hidden rounded-3xl border border-emerald-500/15 gradient-luxe p-6 sm:p-10 lg:p-14 text-white"
      >
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 pill bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.22em] font-semibold"
            >
              Lab Brief
            </span>
            <h2 className="headline-tight mt-5 text-2xl sm:text-4xl md:text-5xl">
              New lots. New literature. First in your inbox.
            </h2>
            <p className="mt-4 text-white/85 max-w-md">
              A monthly dispatch — restocks, methodology notes, and verification updates. No marketing fluff.
            </p>
          </div>
          <div className="">
            <form
              data-readdy-form="true"
              id="newsletter-form-1"
              className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-3xl sm:rounded-full p-3 sm:p-1.5 sm:pl-5 bg-white"
            >
              <input
                required
                autoComplete="email"
                placeholder="researcher@institution.edu"
                className="flex-1 min-w-0 bg-transparent text-sm text-ink-950 focus:outline-none placeholder:text-ink-500/70 py-2 sm:py-0 px-2"
                type="email"
                name="email"
               />
              <input
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="hp-field"
                type="text"
                name="website_alt"
               />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap gradient-luxe text-white rounded-full h-11 px-7 text-sm font-semibold cursor-pointer disabled:opacity-70"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 pb-24">
      <div className="text-center">
        <span className="eyebrow">
          Common Questions
        </span>
        <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
          Frequently asked.
        </h2>
      </div>
      <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
    </section>
    <section id="compliance" className="bg-sage-50 border-y border-ink-950/8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              Compliance
            </span>
            <h2 className="headline-tight mt-3 text-3xl sm:text-4xl md:text-5xl">
              Research Use Only. No exceptions.
            </h2>
            <p className="mt-6 text-ink-500 leading-relaxed">
              Every compound we sell is a laboratory reference material. It is{" "}
              <span className="font-semibold text-ink-950">
                not a drug, supplement, cosmetic, or food
              </span>
              , and it is never intended for human or veterinary application. Nothing on this site should be read as a health, efficacy, or dosing claim.
            </p>
            <div
              className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-300/60 bg-white px-5 py-4"
            >
              <span
                className="w-11 h-11 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"
              >
                <i className="ri-user-star-line text-lg"></i>
              </span>
              <p className="text-sm text-ink-950/80 leading-relaxed">
                Purchasing confirms you are{" "}
                <span className="font-semibold">
                  21 or older
                </span>
                {" "}and a qualified researcher acquiring material solely for laboratory work.
              </p>
            </div>
            <Link
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-gold-600 cursor-pointer whitespace-nowrap"
              href="/research-use"
            >
              Read the full Research Use Only policy{" "}
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
                <span
                  className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
                >
                  <i className="ri-forbid-2-line text-lg"></i>
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  Not for human or animal use
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  Products are sold exclusively for in-vitro laboratory research and analytical testing.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
                <span
                  className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
                >
                  <i className="ri-prohibited-2-line text-lg"></i>
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  No medical or dosing guidance
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  We do not provide dosage, administration, or therapeutic information of any kind.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
                <span
                  className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
                >
                  <i className="ri-user-star-line text-lg"></i>
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  Verified researcher purchase only
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  Buyers must confirm they are 21+ and a qualified researcher acquiring material for laboratory work.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-ink-950/8 p-6">
                <span
                  className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700"
                >
                  <i className="ri-file-shield-2-line text-lg"></i>
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  Documented chain of custody
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  Every lot ships with a third-party COA; we make no health, efficacy, or safety claims for human use.
                </p>
              </div>
            </div>
            <p
              className="mt-5 rounded-2xl bg-ink-950 text-white/85 px-6 py-5 text-xs leading-relaxed"
            >
              <span className="font-semibold text-white">
                Notice:
              </span>
              {" "}By purchasing you agree that all products are for in-vitro research and analytical use only, are not for human or animal consumption, and will not be resold or relabeled for human use. Buyer assumes full responsibility for safe handling, storage, and lawful use under applicable regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
