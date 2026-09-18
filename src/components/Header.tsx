"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/site";
import { useCart } from "@/lib/cart";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-ink-950/8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex h-16 md:h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="font-display font-extrabold text-2xl tracking-[-0.04em] text-ink-950 leading-none">
            EVLV
          </span>
          <span className="font-display font-medium text-sm tracking-[-0.01em] text-gold-600 leading-none">
            Today
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 mx-auto">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                isActive(item.href)
                  ? "text-emerald-600"
                  : "text-ink-950/85 hover:text-emerald-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/auth"
            aria-label="Account"
            className="hidden md:flex w-9 h-9 items-center justify-center rounded-md hover:bg-emerald-50 cursor-pointer"
          >
            <i className="ri-user-line text-ink-950/70" />
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-emerald-50 cursor-pointer relative"
          >
            <i className="ri-shopping-bag-line text-ink-950/70" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-gold-500 text-white text-[9px] font-bold grid place-items-center">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md hover:bg-emerald-50 cursor-pointer"
          >
            <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-xl text-ink-950`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-950/8 bg-white">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-sm font-semibold border-b border-ink-950/5 last:border-b-0 ${
                  isActive(item.href) ? "text-emerald-600" : "text-ink-950/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/auth"
              className="mt-4 inline-flex items-center justify-center h-11 rounded-full gradient-luxe text-white text-sm font-semibold"
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
