import Link from "next/link";
import { footerNav, paymentMarks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#0b0b12] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="font-display font-extrabold text-2xl tracking-[-0.04em] leading-none">
                EVLV
              </span>
              <span className="font-display font-medium text-sm text-gold-400 leading-none">
                Today
              </span>
            </Link>
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              Reference-grade research compounds. Independently tested. Discreetly
              delivered. For laboratory research use only.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                <i className="ri-verified-badge-line text-gold-400" />
                ISO 17025
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                <i className="ri-shield-check-line text-emerald-400" />
                8× Tested
              </span>
            </div>
          </div>

          {footerNav.map((column) => (
            <div key={column.title}>
              <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-4 text-white/90">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/55 leading-relaxed">
          <p>
            Report illegal content or abuse:{" "}
            <a
              href={`mailto:${site.abuseEmail}`}
              className="underline hover:text-white"
            >
              {site.abuseEmail}
            </a>{" "}
            ·{" "}
            <Link href="/report-abuse" className="underline hover:text-white">
              file a complaint
            </Link>
            . Acknowledged within 1 business day; resolved within 7 business days.
          </p>
          <p className="mt-3">
            Billing descriptor: card and bank statements will show{" "}
            <span className="font-semibold text-white">
              {site.billingDescriptor}
            </span>
            . Don&apos;t recognize a charge? Email{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="underline hover:text-white"
            >
              {site.supportEmail}
            </a>{" "}
            before disputing — we respond within 1 business day.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between text-xs text-white/55">
          <p>© 2026 EVLV Today. All rights reserved. Research use only.</p>
          <div className="flex flex-wrap gap-2">
            {paymentMarks.map((mark) => (
              <span
                key={mark}
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide"
              >
                {mark}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
