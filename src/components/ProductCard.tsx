"use client";

import Link from "next/link";
import { formatPrice, Product } from "@/data/mock";
import { TrendingDown } from "lucide-react";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="product-card block bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md"
    >
      <div className="relative aspect-square bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discountPercent >= 40 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <TrendingDown size={12} />
            -{product.discountPercent}%
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-xs text-slate-500 mb-1 capitalize">{product.category}</p>
        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-snug mb-2">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary-600">
            {formatPrice(product.lowestPrice)}
          </span>
          {product.highestPrice > product.lowestPrice && (
            <span className="text-xs text-slate-400 line-through">
              {formatPrice(product.highestPrice)}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500 mt-1">
          en {product.stores.filter((s) => s.inStock).length} tiendas
        </p>
      </div>
    </Link>
  );
}
