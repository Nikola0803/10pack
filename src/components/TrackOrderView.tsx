"use client";

import Link from "next/link";
import { useState } from "react";

export function TrackOrderView() {
  const [sent, setSent] = useState(false);

  // No backend yet: the CRM endpoint drops in here.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

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
                Track Order
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Track Order
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Where is my order?
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Enter your order number and the email used at checkout to see the current status and documentation links.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 py-16">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-ink-950/8 bg-white p-6 sm:p-8 shadow-pharma">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="t-order"
                className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
              >
                Order number
              </label>
              <input
                id="t-order"
                required
                placeholder="EVLV-102938"
                className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
               />
            </div>
            <div>
              <label
                htmlFor="t-email"
                className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
              >
                Email
              </label>
              <input
                id="t-email"
                required
                autoComplete="email"
                placeholder="you@institution.edu"
                className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                type="email"
               />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 h-12 rounded-full gradient-luxe px-7 text-sm font-semibold text-white cursor-pointer"
          >
            <i className="ri-search-line"></i>
            {" "}Track order
          </button>
        {sent && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-500/20 px-4 py-2 text-sm text-emerald-700">
                <i className="ri-check-line" />
                "Looking up that order. Tracking details are emailed once dispatched."
              </p>
            )}
            </form>
        <p className="mt-6 text-xs text-ink-500">
          Orders placed before 2pm ET ship the same business day. Cold-chain requirements do not apply to lyophilized compounds.
        </p>
      </section>
    </main>
    </>
  );
}
