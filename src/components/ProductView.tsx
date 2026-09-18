"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart, money } from "@/lib/cart";
import {
  SUBSCRIPTION_DISCOUNT,
  VIALS_PER_PACK,
  relatedProducts,
  type Product,
} from "@/lib/products";
import { RelatedProductCard } from "@/components/RelatedProductCard";
import { NewsletterCta } from "@/components/NewsletterCta";

/** Same-day-processing cut-off used by the countdown: 2 PM America/New_York. */
const CUTOFF_HOUR_ET = 14;

function useCutoffCountdown() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const et = new Date(
        now.toLocaleString("en-US", { timeZone: "America/New_York" }),
      );
      const cutoff = new Date(et);
      cutoff.setHours(CUTOFF_HOUR_ET, 0, 0, 0);
      if (cutoff <= et) cutoff.setDate(cutoff.getDate() + 1);
      const ms = cutoff.getTime() - et.getTime();
      const pad = (n: number) => String(n).padStart(2, "0");
      setLabel(
        `${pad(Math.floor(ms / 3_600_000))}:${pad(
          Math.floor(ms / 60_000) % 60,
        )}:${pad(Math.floor(ms / 1000) % 60)}`,
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return label;
}

function arrivalLabel() {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function ProductView({ product }: { product: Product }) {
  const detail = product.detail;
  const sizes = detail?.sizes ?? [];
  const [size, setSize] = useState(sizes[0] ?? "");
  const [packs, setPacks] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  const countdown = useCutoffCountdown();
  const related = useMemo(() => relatedProducts(product.slug), [product.slug]);

  const price = money(product.packPrice);
  const subscriptionPrice = money(product.packPrice * (1 - SUBSCRIPTION_DISCOUNT));

  const addToCart = () => {
    add(
      {
        slug: product.slug,
        name: product.name,
        image: product.image,
        packPrice: product.packPrice,
      },
      packs,
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <main className="min-h-[60vh]">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10 pt-8 pb-28 lg:pb-12 overflow-x-clip">
          <nav className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-8">
            <Link href="/" className="hover:text-emerald-600 cursor-pointer">
              Home
            </Link>
            <i className="ri-arrow-right-s-line text-ink-300" />
            <Link href="/shop" className="hover:text-emerald-600 cursor-pointer">
              Shop
            </Link>
            <i className="ri-arrow-right-s-line text-ink-300" />
            <span className="text-ink-950/70">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="min-w-0 relative rounded-2xl border border-ink-950/8 bg-white overflow-hidden lg:sticky lg:top-28">
              <div className="absolute -inset-6 gradient-luxe opacity-10 blur-3xl rounded-full pointer-events-none" />
              <div
                className={`relative aspect-square w-full lg:aspect-auto lg:h-[calc(100vh-9rem)] lg:min-h-[560px] ${product.tint}`}
              >
                <img
                  alt={product.imageAlt}
                  title={product.imageTitle}
                  src={product.image}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <span className="pointer-events-none absolute top-4 left-4 z-10 inline-flex items-center rounded-full gradient-gold px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-luxe">
                  10-PACK
                </span>
                <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 pill bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-emerald-600">
                  <i className="ri-verified-badge-line" />
                  {product.purity} Purity
                </span>
                <span className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 pill bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-700">
                  <i className="ri-forbid-2-line text-emerald-600" />
                  Research use only
                </span>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl bg-white p-5 sm:p-8 border border-ink-950/8">
              <div className="flex items-start justify-between gap-3">
                <h1 className="mt-1 min-w-0 break-words headline-tight text-3xl sm:text-4xl md:text-5xl">
                  {product.name}
                </h1>
                <div className="text-right shrink-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    10-Pack
                  </p>
                  <p className="text-2xl sm:text-3xl font-semibold">{price}</p>
                  <p className="text-[10px] text-ink-500">≈ {product.perVial}/vial</p>
                </div>
              </div>

              {detail && (
                <>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {detail.badges.map((badge) =>
                      badge === "Research Use Only" ? (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold text-emerald-700"
                        >
                          <i className="ri-forbid-2-line" />
                          {badge}
                        </span>
                      ) : (
                        <span
                          key={badge}
                          className="inline-flex items-center rounded-full border border-ink-950/10 bg-white px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink-950/80"
                        >
                          {badge}
                        </span>
                      ),
                    )}
                  </div>
                  <p className="mt-5 text-sm text-ink-500 leading-relaxed">
                    {detail.description}
                  </p>
                </>
              )}

              <p className="mt-3 text-xs text-ink-500">
                For research use only. Not for human or veterinary consumption.
              </p>

              {detail && (
                <div className="mt-3 flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-gold-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className="ri-star-fill" />
                    ))}
                  </span>
                  <span className="text-ink-500">{detail.rating}</span>
                  <span className="text-ink-300">·</span>
                  <span className="text-ink-500">Lot {product.lot}</span>
                </div>
              )}

              {sizes.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-ink-500">
                      Vial Size (per vial)
                    </p>
                    <span className="text-[11px] text-ink-500">In stock</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((option) => (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={option === size}
                        onClick={() => setSize(option)}
                        className={`relative inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                          option === size
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-ink-950/10 bg-white hover:border-emerald-500/50"
                        }`}
                      >
                        <span>{option}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-4">
                <p className="text-xs uppercase tracking-[0.22em] text-ink-500">Packs</p>
                <div className="inline-flex items-center border border-ink-950/10 rounded-md h-10">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setPacks((n) => Math.max(1, n - 1))}
                    className="px-3 text-lg cursor-pointer"
                  >
                    <i className="ri-subtract-line" />
                  </button>
                  <span className="w-10 text-center text-sm">{packs}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setPacks((n) => n + 1)}
                    className="px-3 text-lg cursor-pointer"
                  >
                    <i className="ri-add-line" />
                  </button>
                </div>
                <span className="text-[11px] text-ink-500">
                  × {VIALS_PER_PACK} vials per pack
                </span>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-50 p-4">
                <span className="w-9 h-9 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <i className="ri-stack-line text-base" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-950">
                    {VIALS_PER_PACK} vials, one smart price.
                  </p>
                  <p className="text-xs text-ink-500 mt-0.5">
                    Priced for bulk value — roughly{" "}
                    <span className="font-semibold text-emerald-700">
                      {product.perVial}/vial
                    </span>
                    . Free shipping on every order.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse sm:flex-row items-stretch gap-2">
                <a
                  href="#coa"
                  className="inline-flex shrink-0 items-center justify-center px-5 h-12 rounded-full border border-ink-950/10 text-xs uppercase tracking-[0.22em] hover:border-emerald-500/60 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-file-shield-2-line mr-2" /> CoA
                </a>
                <button
                  type="button"
                  onClick={addToCart}
                  className="inline-flex items-center justify-center gap-2 h-12 w-full sm:flex-1 rounded-full gradient-luxe text-white text-base font-semibold tracking-wide hover:opacity-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className={added ? "ri-check-line" : "ri-shopping-bag-line"} />{" "}
                  {added ? "Added to cart" : `Add 10-pack · ${price}`}
                </button>
              </div>

              <div className="mt-6">
                <section className="rounded-2xl border border-gold-400/50 bg-gold-50 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-gold-700 inline-flex items-center gap-1.5 font-semibold">
                        <i className="ri-loop-left-line" /> Subscribe &amp; Save 15%
                      </p>
                      <p className="text-xs text-ink-500 mt-1">
                        Ships every 30 days · Cancel anytime
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                        Per shipment
                      </p>
                      <p className="text-sm">
                        <span className="line-through text-ink-500 mr-2">{price}</span>
                        <span className="font-semibold">{subscriptionPrice}</span>
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/auth"
                    className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full border text-xs uppercase tracking-[0.22em] font-semibold transition-colors cursor-pointer border-ink-950/10 hover:border-gold-500/60 hover:bg-gold-100"
                  >
                    Subscribe &amp; Save · {subscriptionPrice}
                  </Link>
                  <p className="text-[11px] text-ink-500 text-center">
                    Login required. Manage anytime from Account → Subscriptions.
                  </p>
                </section>
              </div>

              <div className="mt-6 rounded-xl bg-emerald-50 border border-ink-950/8 p-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                    <i className="ri-time-line" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Order within{" "}
                      <span className="text-gold-700 tabular-nums font-semibold">
                        {countdown ?? "--:--:--"}
                      </span>{" "}
                      for same-day processing
                    </p>
                    <p className="text-xs text-ink-500 mt-1">
                      Cutoff 2 PM EST Mon–Fri, 12 PM EST Sat–Sun · Arrives{" "}
                      {arrivalLabel()}
                    </p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-ink-950/8">
                  <div className="flex items-center justify-center gap-2 text-[11px] text-ink-500">
                    <i className="ri-truck-line text-emerald-600" />
                    <span>Free shipping on every order</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[11px] text-ink-500">
                    <i className="ri-rocket-2-line text-emerald-600" />
                    <span>Overnight shipping available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["ri-truck-line", "Free shipping", "on every order"],
              ["ri-shield-check-line", "Shipping protection", "optional add-on at checkout"],
              ["ri-lock-2-line", "Secure checkout", "256-bit SSL"],
            ].map(([icon, title, sub]) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-xl border border-ink-950/8 bg-white/60 px-4 py-3"
              >
                <span className="grid place-items-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                  <i className={icon} />
                </span>
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-[11px] text-ink-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {detail && detail.coas.length > 0 && (
          <section
            id="coa"
            className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10 py-14 scroll-mt-28"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 border border-emerald-300/40">
                <i className="ri-file-shield-2-line text-lg" />
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Certificate of Analysis
                </h2>
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500 mt-0.5">
                  Third Party Tested · ISO/IEC 17025 Accredited
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {detail.coas.map((coa) => (
                <div
                  key={coa.summary.find(([k]) => k === "Lot #")?.[1] ?? coa.purity}
                  className="rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col"
                >
                  <div className="p-4 border-b border-ink-950/8">
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {coa.latest && (
                        <span className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap gradient-gold text-white">
                          Latest
                        </span>
                      )}
                      <span className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium whitespace-nowrap border border-ink-950/10 text-ink-500">
                        ISO 17025
                      </span>
                      <span className="inline-flex items-center h-5 px-2 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold whitespace-nowrap bg-emerald-500/15 text-emerald-700">
                        8× Testing
                      </span>
                    </div>
                    <p className="text-center text-3xl font-semibold tracking-tight text-emerald-700">
                      {coa.purity}
                    </p>
                    <p className="text-center text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">
                      Purity
                    </p>
                    <p className="mt-3 text-center text-[11px] text-emerald-700 flex items-center justify-center gap-1">
                      <i className="ri-check-double-line" /> Passed full QC panel
                    </p>
                  </div>
                  <div className="p-4 space-y-1.5 text-xs border-b border-ink-950/8">
                    {coa.summary.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-3">
                        <span className="text-ink-500">{label}</span>
                        <span
                          className={`font-medium text-right${
                            label === "Actual" ? " text-emerald-700" : ""
                          }`}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 space-y-1.5 text-[11px] bg-sage-50 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-ink-500">
                        Full QC Panel
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-emerald-700">
                        8× tested
                      </span>
                    </div>
                    {coa.panel.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-3">
                        <span className="text-ink-500">{label}</span>
                        <span className="font-medium text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 text-center text-[9px] uppercase tracking-[0.2em] text-ink-500 border-b border-ink-950/8">
                    ISO/IEC 17025 Accredited
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 h-11 bg-ink-950 text-white hover:bg-emerald-600 transition-colors text-xs uppercase tracking-[0.22em] font-medium cursor-pointer"
                  >
                    <i className="ri-download-2-line" /> View COA
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {detail && detail.spec.length > 0 && (
          <section
            id="research"
            className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10 py-14 scroll-mt-28"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 border border-emerald-300/40">
                <i className="ri-flask-line text-lg" />
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Compound Information
                </h2>
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500 mt-0.5">
                  Technical specifications
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-ink-950/8 bg-white p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-700 font-semibold flex items-center gap-2">
                  <i className="ri-hexagon-line" /> Molecular Profile
                </p>
                <h3 className="mt-2 text-lg font-semibold">What is {product.name}?</h3>
                <div className="mt-4 rounded-xl border border-ink-950/8 divide-y divide-ink-950/8">
                  {detail.profile.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between px-4 py-2.5 text-sm"
                    >
                      <span className="text-ink-500">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <h4 className="mt-5 text-sm font-semibold text-ink-950">
                  Full specification table
                </h4>
                <dl className="mt-3 divide-y divide-ink-950/8">
                  {detail.spec.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-6 py-2.5 text-sm"
                    >
                      <dt className="text-ink-500">{label}</dt>
                      <dd className="font-medium text-right break-words">{value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={`https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(
                    product.name.replace(/\s+\d+\w*$/, ""),
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:underline cursor-pointer"
                >
                  <i className="ri-external-link-line" /> PubChem Database
                </a>
              </div>

              <div className="rounded-2xl border border-ink-950/8 bg-white p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-700 font-semibold flex items-center gap-2">
                  <i className="ri-snowflake-line" /> Storage Requirements
                </p>
                <h3 className="mt-2 text-lg font-semibold">Stability Information</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Avoid freeze/thaw cycles", "Protect from light", "Sealed until use"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-emerald-50 border border-ink-950/8 px-3 py-1 text-[11px] text-ink-950/80"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 rounded-xl border border-ink-950/8 bg-sage-50 p-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 border border-emerald-300/40 shrink-0">
                      <i className="ri-snowflake-line text-lg" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Lyophilized (powder)</p>
                      <p className="text-xs text-ink-500">
                        <span className="text-ink-950 font-medium">-20°C</span> · 24+ months
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-ink-950/8 p-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 border border-emerald-300/40 shrink-0">
                      <i className="ri-temp-cold-line text-lg" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Reconstituted (solution)</p>
                      <p className="text-xs text-ink-500">
                        <span className="text-ink-950 font-medium">2–8°C</span> · use within
                        28 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-ink-950/8 p-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 border border-emerald-300/40 shrink-0">
                      <i className="ri-shield-star-line text-lg" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Handling</p>
                      <p className="text-xs text-ink-500">
                        For in-vitro use only · follow institutional lab safety protocols
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10 py-14 pb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 border border-emerald-300/40">
              <i className="ri-flask-line text-lg" />
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Frequently Researched Together
              </h2>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500 mt-0.5">
                Commonly studied alongside this compound
              </p>
            </div>
          </div>
          <div className="-mx-5 sm:mx-0 flex gap-3 overflow-x-auto px-5 sm:px-0 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:gap-4 no-scrollbar">
            {related.map((item) => (
              <RelatedProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10 pb-16">
          <div className="rounded-2xl border border-ink-950/8 bg-sage-50 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-emerald-700">
              <i className="ri-alert-line" />
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold">
                Important Research Notice
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              <span className="font-semibold">Not for human consumption.</span> This
              product is sold exclusively as a research reagent for in vitro and
              laboratory use by qualified researchers. It is not a drug, supplement, or
              cosmetic, is not intended for human or veterinary use, and is not intended
              to diagnose, treat, cure, or prevent any disease. No dosing, administration,
              or benefit claims are made or implied.
            </p>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed">
              Published literature referenced on this page describes third-party studies
              of the compound class and is provided for scientific context only. It is not
              a claim about this product and not evidence of safety or efficacy in any
              organism.
            </p>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed">
              By purchasing this product, you confirm that you are a qualified researcher
              and will use it in accordance with all applicable laws and regulations.
            </p>
          </div>
        </section>
      </main>

      {/* Mobile buy bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-ink-950/8 bg-white/95 backdrop-blur">
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center justify-between gap-4">
            <p className="min-w-0 truncate text-[15px] font-semibold">{product.name}</p>
            <p className="shrink-0 text-[15px] font-semibold">{price}</p>
          </div>
          {sizes.length > 0 && (
            <div className="mt-2.5 -mx-4 px-4 flex gap-2 overflow-x-auto no-scrollbar">
              {sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  className={`shrink-0 h-10 px-4 rounded-full border text-[13px] font-semibold transition-colors cursor-pointer ${
                    option === size
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-ink-950/10 bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
              <span className="shrink-0 inline-flex items-center h-10 px-3 rounded-full bg-gold-100 text-[11px] font-semibold text-gold-700 uppercase tracking-[0.12em]">
                10-PACK
              </span>
            </div>
          )}
          <button
            type="button"
            onClick={addToCart}
            className="mt-2.5 w-full h-12 rounded-full gradient-luxe text-white text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className={added ? "ri-check-line" : "ri-shopping-bag-line"} />{" "}
            {added ? "Added to cart" : `Add 10-pack · ${price}`}
          </button>
        </div>
      </div>

      <NewsletterCta />
    </>
  );
}
