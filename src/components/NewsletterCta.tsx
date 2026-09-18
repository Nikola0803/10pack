"use client";

import Link from "next/link";
import { useState } from "react";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden tint-emerald">
      <div className="hidden md:block absolute left-[3%] top-1/2 -translate-y-1/2 w-44 lg:w-52 pointer-events-none select-none">
        <img alt="" aria-hidden="true" className="w-full float-b" src="/products/vial-glp3rt.webp" />
      </div>
      <div className="hidden md:block absolute right-[3%] top-1/2 -translate-y-1/2 w-44 lg:w-52 pointer-events-none select-none">
        <img alt="" aria-hidden="true" className="w-full float-c" src="/products/vial-ghkcu.webp" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24 text-center">
        <h2 className="headline-tight text-3xl md:text-4xl">
          All the research compounds you need, with the peace of mind and research
          community at your fingertips.
        </h2>
        <div className="mt-7">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-full bg-ink-950 px-6 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            <i className="ri-shopping-bag-3-line" /> Shop Now
          </Link>
        </div>
        <div className="mt-14 pt-10 border-t border-ink-950/10">
          <h3 className="font-display text-xl md:text-2xl font-bold text-ink-950">
            Research updates from EVLV Today
          </h3>
          <p className="mt-2 text-sm text-ink-500">
            Subscribe for catalog updates, new research compounds, and quality
            documentation news.
          </p>
          <div className="mt-5 mx-auto max-w-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-3xl sm:rounded-full p-3 sm:p-1.5 sm:pl-5 bg-white border border-ink-950/10 shadow-pharma"
            >
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="researcher@institution.edu"
                className="flex-1 min-w-0 bg-transparent text-sm text-ink-950 focus:outline-none placeholder:text-ink-500/70 py-2 sm:py-0 px-2"
              />
              {/* Honeypot: bots fill this, humans never see it. */}
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
                {sent ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>
          <p className="mt-3 text-xs text-ink-500">
            For researchers and labs. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
