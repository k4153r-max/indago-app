"use client";

import { Heart, Plus } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/mock";
import { ProductCard } from "@/components/ProductCard";

const favorites = [products[1], products[3], products[5]];

export default function FavoritosPage() {
  return (
    <div className="pb-4">
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-extrabold text-slate-900">Favoritos</h1>
        <p className="text-sm text-slate-500 mt-1">
          Productos que estás siguiendo
        </p>
      </header>

      <div className="px-4 grid grid-cols-2 gap-3">
        {favorites.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
