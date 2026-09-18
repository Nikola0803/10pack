"use client";

import Link from "next/link";
import { money, useCart } from "@/lib/cart";
import { VIALS_PER_PACK } from "@/lib/products";

export function CartView() {
  const { lines, subtotal, ready, setQty, remove } = useCart();

  return (
    <main className="min-h-[60vh]">
      <section className="border-b border-ink-950/8 gradient-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-12">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-5">
            <Link href="/" className="hover:text-emerald-600 cursor-pointer">
              Home
            </Link>
            <i className="ri-arrow-right-s-line text-ink-300" />
            <span className="text-ink-950/70">Cart</span>
          </nav>
          <h1 className="headline-tight text-4xl md:text-5xl">Your cart.</h1>
          <p className="mt-3 text-ink-500">
            All items are laboratory research materials. Research use only — not for
            human or veterinary use.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            {ready && lines.length === 0 ? (
              <div className="rounded-2xl border border-ink-950/8 p-10 text-center">
                <span className="grid place-items-center w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600">
                  <i className="ri-shopping-bag-line text-2xl" />
                </span>
                <p className="mt-5 text-lg font-semibold">Your cart is empty.</p>
                <p className="mt-2 text-sm text-ink-500">
                  Every compound ships as a {VIALS_PER_PACK}-vial pack with free shipping.
                </p>
                <Link
                  href="/shop"
                  className="mt-6 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full gradient-luxe text-white text-sm font-semibold cursor-pointer"
                >
                  Browse the catalog
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl border border-ink-950/8 overflow-hidden">
                {lines.map((line) => (
                  <div
                    key={line.slug}
                    className="flex flex-col sm:flex-row gap-4 p-5 border-b border-ink-950/8 last:border-b-0"
                  >
                    <div className="relative w-full sm:w-24 h-32 sm:h-24 rounded-xl tint-sage overflow-hidden shrink-0">
                      <img
                        alt={`${line.name} research vial`}
                        src={line.image}
                        className="absolute inset-0 w-full h-full object-contain object-top p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                            Research Use Only
                          </p>
                          <Link
                            href={`/shop/${line.slug}`}
                            className="text-base font-semibold hover:text-emerald-600 cursor-pointer"
                          >
                            {line.name}
                          </Link>
                          <span className="ml-2 inline-flex items-center gap-1 rounded-full gradient-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                            10-pack
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(line.slug)}
                          aria-label={`Remove ${line.name}`}
                          className="text-ink-500 hover:text-gold-700 cursor-pointer"
                        >
                          <i className="ri-delete-bin-line" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center border border-ink-950/10 rounded-md h-9">
                            <button
                              type="button"
                              aria-label="Decrease"
                              onClick={() => setQty(line.slug, line.qty - 1)}
                              className="px-3 cursor-pointer"
                            >
                              <i className="ri-subtract-line" />
                            </button>
                            <span className="w-8 text-center text-sm">{line.qty}</span>
                            <button
                              type="button"
                              aria-label="Increase"
                              onClick={() => setQty(line.slug, line.qty + 1)}
                              className="px-3 cursor-pointer"
                            >
                              <i className="ri-add-line" />
                            </button>
                          </div>
                          <span className="text-[10px] text-ink-500">
                            × {VIALS_PER_PACK} vials
                          </span>
                        </div>
                        <p className="text-base font-semibold">
                          {money(line.qty * line.packPrice)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-50 px-5 py-4">
              <i className="ri-stack-line text-emerald-700 text-lg" />
              <p className="text-sm text-ink-700">
                Every pack is <span className="font-semibold">{VIALS_PER_PACK} vials</span>{" "}
                — priced for bulk research value. Free shipping is applied at checkout.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-ink-950/8 bg-white p-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-semibold">Order summary</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-ink-500">Subtotal</dt>
                  <dd className="font-medium">{money(subtotal)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-500">Shipping</dt>
                  <dd className="font-medium text-emerald-700">Free</dd>
                </div>
                <div className="pt-3 border-t border-ink-950/8 flex items-center justify-between text-base">
                  <dt className="font-semibold">Total</dt>
                  <dd className="font-semibold">{money(subtotal)}</dd>
                </div>
              </dl>
              <Link
                href="/auth"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 h-12 rounded-full gradient-luxe text-white text-sm font-semibold cursor-pointer"
              >
                <i className="ri-lock-2-line" />
                Secure checkout
              </Link>
              <Link
                href="/shop"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 h-11 rounded-full border border-ink-950/12 text-sm font-semibold hover:bg-sage-50 cursor-pointer"
              >
                Continue shopping
              </Link>
              <div className="mt-5 pt-5 border-t border-ink-950/8 grid grid-cols-1 gap-2 text-[11px] text-ink-500">
                <span className="inline-flex items-center gap-2">
                  <i className="ri-truck-line text-emerald-600" />
                  Free shipping on every order
                </span>
                <span className="inline-flex items-center gap-2">
                  <i className="ri-shield-check-line text-emerald-600" />
                  Shipping protection available
                </span>
                <span className="inline-flex items-center gap-2">
                  <i className="ri-forbid-2-line text-emerald-600" />
                  Research use only — not for human use
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
