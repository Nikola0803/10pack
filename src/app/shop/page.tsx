import type { Metadata } from "next";
import Link from "next/link";
import { ShopGrid } from "@/components/ShopGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop All Compounds",
  description:
    "Every EVLV Today compound ships as a 10-vial pack with free shipping and a lot-matched certificate of analysis.",
};

export default function ShopPage() {
  return (
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
                Shop
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Full Catalog
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Reference-grade compounds, in stock.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Every compound ships as a 10-vial pack, priced for bulk research value — with free shipping on every order. All compounds remain for in-vitro research use only.
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
            <i className="ri-verified-badge-line text-gold-400"></i>
            {" "}ISO 17025 third-party tested
          </span>
          <span className="hidden sm:inline text-white/20">
            |
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="ri-truck-line text-emerald-400"></i>
            {" "}Same-day dispatch before 2pm ET
          </span>
        </div>
      </div>
      <ShopGrid products={products} />
      <section className="bg-sage-50 border-y border-ink-950/8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-10 grid sm:grid-cols-3 gap-5">
          <div className="flex items-start gap-3">
            <span
              className="grid place-items-center w-10 h-10 rounded-xl bg-white border border-ink-950/8 text-emerald-600 shrink-0"
            >
              <i className="ri-forbid-2-line"></i>
            </span>
            <div>
              <p className="text-sm font-semibold">
                Not for human use
              </p>
              <p className="text-xs text-ink-500">
                Every item is a laboratory reference material.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span
              className="grid place-items-center w-10 h-10 rounded-xl bg-white border border-ink-950/8 text-emerald-600 shrink-0"
            >
              <i className="ri-file-shield-2-line"></i>
            </span>
            <div>
              <p className="text-sm font-semibold">
                COA with every order
              </p>
              <p className="text-xs text-ink-500">
                Signed, lot-specific, ISO 17025 accredited.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span
              className="grid place-items-center w-10 h-10 rounded-xl bg-white border border-ink-950/8 text-emerald-600 shrink-0"
            >
              <i className="ri-user-star-line"></i>
            </span>
            <div>
              <p className="text-sm font-semibold">
                Researcher verified
              </p>
              <p className="text-xs text-ink-500">
                21+ and qualified researchers only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
