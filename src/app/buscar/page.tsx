"use client";

import { useSearchParams } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { searchProducts, products, categories } from "@/data/mock";
import { Suspense } from "react";
import Link from "next/link";

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const cat = searchParams.get("cat") || "";
  const sort = searchParams.get("sort") || "";

  let results = q ? searchProducts(q) : [...products];

  if (cat) {
    results = results.filter((p) => p.category === cat);
  }

  if (sort === "discount") {
    results = results.sort((a, b) => b.discountPercent - a.discountPercent);
  } else if (sort === "price_asc") {
    results = results.sort((a, b) => a.lowestPrice - b.lowestPrice);
  }

  return (
    <div className="pb-4">
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 px-4 pt-4 pb-3">
        <SearchBar initialQuery={q} autoFocus={!q} />
        {q && (
          <p className="text-xs text-slate-500 mt-2">
            {results.length} resultado{results.length !== 1 ? "s" : ""} para “{q}”
          </p>
        )}
      </header>

      <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
        <Link
          href="/buscar?sort=discount"
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border ${
            sort === "discount"
              ? "bg-primary-600 text-white border-primary-600"
              : "bg-white text-slate-600 border-slate-200"
          }`}
        >
          Mayor descuento
        </Link>
        <Link
          href="/buscar?sort=price_asc"
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border ${
            sort === "price_asc"
              ? "bg-primary-600 text-white border-primary-600"
              : "bg-white text-slate-600 border-slate-200"
          }`}
        >
          Menor precio
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/buscar?cat=${c.id}`}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border ${
              cat === c.id
                ? "bg-primary-600 text-white border-primary-600"
                : "bg-white text-slate-600 border-slate-200"
            }`}
          >
            {c.icon} {c.name}
          </Link>
        ))}
      </div>

      <div className="px-4">
        {results.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-semibold text-slate-700">No encontramos resultados</p>
            <p className="text-sm text-slate-500 mt-1">Prueba con otro término</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuscarPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Cargando...</div>}>
      <SearchContent />
    </Suspense>
  );
}
