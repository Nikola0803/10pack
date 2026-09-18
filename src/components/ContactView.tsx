"use client";

import Link from "next/link";
import { useState } from "react";

export function ContactView() {
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
                Contact us
              </span>
            </span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">
              Contact Us
            </span>
            <h1 className="headline-tight mt-3 text-4xl sm:text-5xl md:text-6xl text-ink-950">
              Talk to the team.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-2xl">
              Technical, documentation, order, and compliance questions are answered by our research support team, typically within one business day.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink-950/8 bg-white p-6 sm:p-8 shadow-pharma"
            >
              <h2 className="text-xl font-semibold">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-ink-500">
                Fields marked required must be completed.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="c-name"
                    className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
                  >
                    Full name *
                  </label>
                  <input
                    id="c-name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                    placeholder="Dr. Jordan Reyes"
                    name="name"
                   />
                </div>
                <div>
                  <label
                    htmlFor="c-email"
                    className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="c-email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                    placeholder="you@institution.edu"
                    type="email"
                    name="email"
                   />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="c-org"
                    className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
                  >
                    Institution / organization
                  </label>
                  <input
                    id="c-org"
                    autoComplete="organization"
                    className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                    placeholder="Optional"
                    name="organization"
                   />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="c-topic"
                    className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
                  >
                    Topic *
                  </label>
                  <select
                    id="c-topic"
                    name="topic"
                    required
                    className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Product question" selected>
                      Product question
                    </option>
                    <option value="Order status">
                      Order status
                    </option>
                    <option value="COA / documentation">
                      COA / documentation
                    </option>
                    <option value="Partner program">
                      Partner program
                    </option>
                    <option value="Report abuse">
                      Report abuse
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="c-message"
                    className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
                  >
                    Message * (500 characters max)
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 resize-none"
                    placeholder="Tell us how we can help."
                  ></textarea>
                </div>
              </div>
              <input
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="hp-field"
                type="text"
                name="contact_alt"
               />
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-12 rounded-full gradient-luxe px-7 text-sm font-semibold text-white cursor-pointer disabled:opacity-70 whitespace-nowrap"
                >
                  Send message
                  <i className="ri-send-plane-line"></i>
                </button>
              </div>
            {sent && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-500/20 px-4 py-2 text-sm text-emerald-700">
                <i className="ri-check-line" />
                "Message sent. We reply within one business day."
              </p>
            )}
            </form>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-ink-950/8 bg-white p-5 flex items-start gap-4">
              <span
                className="grid place-items-center w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 shrink-0"
              >
                <i className="ri-mail-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-semibold">
                  Support &amp; orders
                </p>
                <a
                  href="mailto:support@evlvtoday.com"
                  className="text-sm text-emerald-700 hover:underline cursor-pointer"
                >
                  support@evlvtoday.com
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-ink-950/8 bg-white p-5 flex items-start gap-4">
              <span
                className="grid place-items-center w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 shrink-0"
              >
                <i className="ri-shield-cross-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-semibold">
                  Report abuse
                </p>
                <a
                  href="mailto:abuse@evlvtoday.com"
                  className="text-sm text-emerald-700 hover:underline cursor-pointer"
                >
                  abuse@evlvtoday.com
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-ink-950/8 bg-white p-5 flex items-start gap-4">
              <span
                className="grid place-items-center w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 shrink-0"
              >
                <i className="ri-time-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-semibold">
                  Response time
                </p>
                <p className="text-sm text-ink-500">
                  Within 1 business day, Mon–Fri
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-ink-950/8 bg-white p-5 flex items-start gap-4">
              <span
                className="grid place-items-center w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 shrink-0"
              >
                <i className="ri-map-pin-line text-lg"></i>
              </span>
              <div>
                <p className="text-sm font-semibold">
                  Headquarters
                </p>
                <p className="text-sm text-ink-500">
                  EVLV Today Research Labs · United States
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-300/50 bg-emerald-50 p-5">
              <p className="text-sm text-ink-700 leading-relaxed flex items-start gap-2">
                <i className="ri-forbid-2-line text-emerald-700 mt-0.5"></i>
                <span>
                  All products are for laboratory research use only. We cannot provide dosing, medical, or human-use guidance for any compound.
                </span>
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-gold-600 cursor-pointer"
              href="/report-abuse"
            >
              File an abuse complaint{" "}
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
