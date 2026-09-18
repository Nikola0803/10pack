import Link from "next/link";
import { site } from "@/lib/site";

const REPEATS = 8;

/**
 * Scrolling promo strip. The message is duplicated because `.marquee-track`
 * translates the track by -50%, so the second half seamlessly takes over.
 */
export function AnnouncementBar() {
  return (
    <Link
      href="/shop"
      className="block overflow-hidden bg-gradient-to-r from-[#1c1446] via-[#3b1c6e] to-[#241445] text-white"
    >
      <div className="flex w-max whitespace-nowrap py-1.5 marquee-track">
        {Array.from({ length: REPEATS }, (_, i) => (
          <span
            key={i}
            className="px-6 text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs"
          >
            <span className="bogo-gradient-text">{site.announcement}</span>
            <span className="ml-6 text-white/40">✦</span>
          </span>
        ))}
      </div>
    </Link>
  );
}
