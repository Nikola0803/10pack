"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { SHOP_CATEGORIES, type Product } from "@/lib/products";

const SORTS = [
  ["featured", "Featured"],
  ["price-asc", "Price: Low to High"],
  ["price-desc", "Price: High to Low"],
  ["purity", "Highest Purity"],
] as const;

type Sort = (typeof SORTS)[number][0];

const purityValue = (p: Product) => parseFloat(p.purity);

export function ShopGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");
  const [category, setCategory] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const matchesCategory = !category || p.categories.includes(category);
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.lot.toLowerCase().includes(q) ||
        p.slug.includes(q);
      return matchesCategory && matchesQuery;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.packPrice - b.packPrice);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.packPrice - a.packPrice);
    if (sort === "purity") list = [...list].sort((a, b) => purityValue(b) - purityValue(a));
    return list;
  }, [products, query, sort, category]);

  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-12">
      <div className="flex flex-col gap-5 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="relative flex-1 max-w-xl">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-ink-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search compounds, lot numbers, or COAs"
              className="w-full rounded-full bg-white border border-ink-950/10 pl-11 pr-5 py-3 text-sm placeholder:text-ink-500/70 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-xs uppercase tracking-[0.18em] text-ink-500 whitespace-nowrap"
            >
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-full border border-ink-950/10 bg-white px-4 py-3 text-sm cursor-pointer focus:outline-none focus:border-emerald-500"
            >
              {SORTS.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap ${
              category === null
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-ink-950/10 hover:border-emerald-500/50"
            }`}
          >
            All products
          </button>
          {SHOP_CATEGORIES.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCategory(name)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                category === name
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-ink-950/10 hover:border-emerald-500/50"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <p className="text-sm text-ink-500">
          {visible.length} {visible.length === 1 ? "compound" : "compounds"} available
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-2xl border border-ink-950/8 py-16 text-center">
          <p className="text-lg font-semibold">No compounds match that filter.</p>
          <p className="mt-2 text-sm text-ink-500">
            Try a different category, or clear the search to see the full catalog.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
