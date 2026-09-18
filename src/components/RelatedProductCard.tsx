import Link from "next/link";
import type { Product } from "@/lib/products";

export function RelatedProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group shrink-0 snap-start w-[68%] sm:w-auto rounded-2xl border border-ink-950/8 bg-white overflow-hidden flex flex-col hover:border-emerald-500/60 transition-colors cursor-pointer"
    >
      <div className={`relative aspect-square overflow-hidden ${product.tint}`}>
        <img
          alt={product.imageAlt}
          title={product.imageTitle}
          src={product.image}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 pill bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-600 font-semibold">
          {product.purity}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-[9px] uppercase tracking-[0.16em] text-ink-500">
          Research Use Only
        </p>
        <p className="mt-1 text-sm font-semibold tracking-tight">{product.name}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm">
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-500 mr-1">
              10-pack
            </span>
            <span className="font-semibold">${product.packPrice.toFixed(2)}</span>
          </p>
          <span className="grid place-items-center w-8 h-8 rounded-full bg-ink-950 text-white group-hover:bg-emerald-600 transition-colors">
            <i className="ri-arrow-right-line" />
          </span>
        </div>
      </div>
    </Link>
  );
}
