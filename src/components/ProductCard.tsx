import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col rounded-2xl bg-white overflow-hidden lift shadow-pharma border-ink-950/8 border"
    >
      <div className={`relative aspect-square overflow-hidden ${product.tint}`}>
        <img
          alt={product.imageAlt}
          title={product.imageTitle}
          src={product.image}
          className="absolute inset-0 w-full h-full object-contain object-top p-6 transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 pill bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-600 font-semibold">
          {product.purity}
        </span>
        <span className="absolute top-3 right-3 pill gradient-gold px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-luxe">
          10-PACK
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500">
          Research Use Only · Not for human use
        </p>
        <h3 className="mt-1.5 text-base font-semibold tracking-tight">
          {product.name}
        </h3>
        {product.stockNote && (
          <div className="mt-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 text-gold-700 border border-gold-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]">
              {product.stockNote}
            </span>
          </div>
        )}
        <div className="mt-3 rounded-lg border border-gold-400/40 bg-gold-50 px-3 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="flex flex-col">
              <span className="text-xs font-semibold text-gold-700">10 vials</span>
              <span className="text-[10px] text-ink-500">
                {product.perVial}/vial · bulk value
              </span>
            </span>
            <span className="text-lg font-bold text-gold-700">
              ${product.packPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] text-ink-500">
          <span>Lot · {product.lot}</span>
          <span className="inline-flex items-center gap-1">
            <i className="ri-file-shield-2-line text-emerald-600" /> COA
          </span>
        </div>
        <span className="mt-4 inline-flex w-full items-center justify-center h-10 rounded-full bg-ink-950 text-white text-xs uppercase tracking-[0.22em] group-hover:bg-emerald-600 transition-colors">
          View 10-pack
        </span>
        <p className="mt-2 text-center text-[9px] uppercase tracking-[0.16em] text-ink-500/80">
          For laboratory research only
        </p>
      </div>
    </Link>
  );
}
