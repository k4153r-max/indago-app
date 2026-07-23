"use client";

import { useParams, useRouter } from "next/navigation";
import { getProductBySlug, formatPrice } from "@/data/mock";
import { PriceChart } from "@/components/PriceChart";
import {
  ArrowLeft,
  Bell,
  Heart,
  ExternalLink,
  Star,
  TrendingDown,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProductoPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [alertSet, setAlertSet] = useState(false);
  const [fav, setFav] = useState(false);
  const [targetPrice, setTargetPrice] = useState("");

  if (!product) {
    return (
      <div className="p-8 text-center">
        <p className="text-lg font-semibold">Producto no encontrado</p>
        <Link href="/" className="text-primary-600 mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const handleAlert = () => {
    if (!targetPrice) {
      setTargetPrice(String(Math.round(product.lowestPrice * 0.9)));
    }
    setAlertSet(true);
  };

  return (
    <div className="pb-8">
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100 px-4 h-14 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-1">
          <button
            onClick={() => setFav(!fav)}
            className={`p-2 rounded-full ${fav ? "text-red-500" : "text-slate-500"}`}
          >
            <Heart size={20} fill={fav ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      <div className="aspect-square bg-slate-100 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discountPercent >= 30 && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
            <TrendingDown size={14} />
            -{product.discountPercent}%
          </span>
        )}
      </div>

      <div className="px-4 pt-4">
        <p className="text-xs text-slate-500 capitalize mb-1">{product.category}</p>
        <h1 className="text-xl font-bold text-slate-900 leading-snug mb-2">
          {product.name}
        </h1>

        {product.rating && (
          <div className="flex items-center gap-1.5 mb-3">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-slate-400">
              ({product.reviews} reseñas)
            </span>
          </div>
        )}

        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-extrabold text-primary-600">
            {formatPrice(product.lowestPrice)}
          </span>
          {product.highestPrice > product.lowestPrice && (
            <span className="text-base text-slate-400 line-through">
              {formatPrice(product.highestPrice)}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-500 mb-6">
          Mejor precio entre {product.stores.length} tiendas
        </p>

        <div className="bg-white rounded-2xl border border-slate-100 p-4 mb-5">
          <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            📈 Historial de precios
          </h2>
          <PriceChart data={product.priceHistory} />
          <p className="text-xs text-slate-500 mt-2 text-center">
            Últimos {product.priceHistory.length} registros · 365 días disponibles
          </p>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-slate-800 mb-3">
            Precios por tienda
          </h2>
          <div className="space-y-2">
            {product.stores
              .sort((a, b) => a.price - b.price)
              .map((store, i) => (
                <div
                  key={store.store}
                  className={`flex items-center justify-between p-3.5 rounded-xl border ${
                    i === 0
                      ? "bg-primary-50 border-primary-200"
                      : "bg-white border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                      {store.store.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">
                        {store.store}
                      </p>
                      <div className="flex items-center gap-1 text-xs">
                        {store.inStock ? (
                          <>
                            <CheckCircle2 size={12} className="text-primary-500" />
                            <span className="text-primary-600">En stock</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={12} className="text-slate-400" />
                            <span className="text-slate-400">Agotado</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">
                      {formatPrice(store.price)}
                    </p>
                    {store.oldPrice && (
                      <p className="text-xs text-slate-400 line-through">
                        {formatPrice(store.oldPrice)}
                      </p>
                    )}
                    {store.inStock && (
                      <a
                        href={store.url}
                        className="text-xs text-primary-600 font-medium flex items-center gap-0.5 justify-end mt-0.5"
                      >
                        Ir a tienda <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-4 mb-6">
          <h2 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Bell size={16} className="text-primary-600" />
            Crear alerta de precio
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            Te avisamos cuando baje al precio que tú defines. 100% gratis.
          </p>
          {alertSet ? (
            <div className="bg-primary-50 text-primary-700 rounded-xl p-3 text-sm font-medium text-center">
              ✅ Alerta activada para {formatPrice(Number(targetPrice) || product.lowestPrice)}
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value)}
                placeholder={`Ej: ${Math.round(product.lowestPrice * 0.85)}`}
                className="flex-1 h-11 px-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleAlert}
                className="h-11 px-5 bg-primary-600 text-white font-semibold rounded-xl text-sm hover:bg-primary-700 active:scale-95 transition"
              >
                Activar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
