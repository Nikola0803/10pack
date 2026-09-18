"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-ink-950/10 border-y border-ink-950/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold cursor-pointer"
            >
              <span>{item.question}</span>
              <i
                className={`ri-arrow-down-s-line text-xl shrink-0 transition-transform ${
                  isOpen ? "rotate-180 text-emerald-600" : "text-ink-500"
                }`}
              />
            </button>
            {isOpen && (
              <p className="pb-5 text-sm text-ink-500 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
