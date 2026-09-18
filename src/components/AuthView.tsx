"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const BENEFITS = [
  "Lot-specific COA on every order",
  "Public batch verification portal",
  "Subscription & standing orders",
  "Priority same-day dispatch",
];

type Mode = "signin" | "register";

export function AuthView() {
  const [mode, setMode] = useState<Mode>("signin");
  const isRegister = mode === "register";

  return (
    <main className="min-h-[60vh] grid lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-16 order-2 lg:order-1">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-flex items-baseline gap-1 mb-8">
            <span className="font-display font-extrabold text-2xl tracking-[-0.04em] leading-none">
              EVLV
            </span>
            <span className="font-display font-medium text-sm text-gold-600 leading-none">
              Today
            </span>
          </Link>

          <h1 className="headline-tight text-4xl">
            {isRegister ? "Create your account." : "Welcome back."}
          </h1>
          <p className="mt-3 text-ink-500">
            {isRegister
              ? "Register to track orders, manage subscriptions, and access your COAs."
              : "Sign in to access your orders, subscriptions, and documentation files."}
          </p>

          <div
            role="tablist"
            className="mt-7 inline-flex items-center rounded-full border border-ink-950/10 bg-white p-1"
          >
            {(
              [
                ["signin", "Sign in"],
                ["register", "Create account"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={mode === value}
                onClick={() => setMode(value)}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  mode === value ? "bg-emerald-600 text-white" : "text-ink-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            {isRegister && (
              <div>
                <label
                  htmlFor="a-name"
                  className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
                >
                  Full name
                </label>
                <input
                  id="a-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Dr. Jordan Reyes"
                  className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="a-email"
                className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
              >
                Email
              </label>
              <input
                id="a-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@institution.edu"
                className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label
                htmlFor="a-password"
                className="block text-xs uppercase tracking-[0.16em] text-ink-500 mb-2"
              >
                Password
              </label>
              <input
                id="a-password"
                name="password"
                type="password"
                autoComplete={isRegister ? "new-password" : "current-password"}
                placeholder="••••••••"
                className="w-full rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            {isRegister && (
              <label className="flex items-start gap-3 rounded-2xl border border-ink-950/10 bg-white px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded accent-[#7a58ea] shrink-0"
                />
                <span className="text-xs text-ink-700">
                  I confirm I am 21+ and a qualified researcher. All materials are for
                  in-vitro laboratory research use only — not for human or veterinary
                  use.
                </span>
              </label>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full gradient-luxe text-white text-sm font-semibold cursor-pointer"
            >
              {isRegister ? "Create account" : "Sign in"}{" "}
              <i className="ri-arrow-right-line" />
            </button>
          </form>

          <p className="mt-5 text-xs text-ink-500 leading-relaxed">
            Account features and secure login are enabled once a backend is connected. In
            the meantime you can browse the catalog, verify COAs, and place research
            inquiries without signing in.
          </p>
          <p className="mt-6 text-sm text-ink-500">
            Questions?{" "}
            <Link
              href="/contact"
              className="text-emerald-600 font-semibold hover:underline cursor-pointer"
            >
              Contact our team
            </Link>
          </p>
        </div>
      </div>

      <div className="relative order-1 lg:order-2 overflow-hidden tint-emerald min-h-[280px]">
        <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8 md:px-14">
          <div className="inline-flex items-center gap-2 pill bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-800 w-max">
            <i className="ri-verified-badge-line" /> ISO 17025 · 8× Tested
          </div>
          <h2 className="headline-tight text-3xl md:text-4xl text-ink-950 max-w-sm">
            Documentation-first research supply.
          </h2>
          <ul className="space-y-3 max-w-sm">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-ink-700"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-emerald-600 text-white shrink-0">
                  <i className="ri-check-line text-xs" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <p className="text-xs text-ink-500 max-w-sm">
            Report abuse: {site.abuseEmail}
          </p>
        </div>
      </div>
    </main>
  );
}
