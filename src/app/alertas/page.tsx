"use client";

import { Bell, Plus } from "lucide-react";
import Link from "next/link";
import { products, formatPrice } from "@/data/mock";

const mockAlerts = [
  {
    product: products[2],
    targetPrice: 650000,
    created: "2026-07-18",
  },
  {
    product: products[0],
    targetPrice: 3990,
    created: "2026-07-20",
  },
];

export default function AlertasPage() {
  return (
    <div className="pb-4">
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-extrabold text-slate-900">Mis Alertas</h1>
        <p className="text-sm text-slate-500 mt-1">
          Te avisamos cuando el precio baje
        </p>
      </header>

      <div className="px-4 space-y-3">
        {mockAlerts.map((alert) => (
          <Link
            key={alert.product.id}
            href={`/producto/${alert.product.slug}`}
            className="block bg-white rounded-2xl border border-slate-100 p-4 shadow-sm"
          >
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={alert.product.image}
                  alt={alert.product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 line-clamp-2">
                  {alert.product.name}
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                    Alerta: {formatPrice(alert.targetPrice)}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Actual: {formatPrice(alert.product.lowestPrice)}
                </p>
              </div>
            </div>
          </Link>
        ))}

        <Link
          href="/buscar"
          className="flex items-center justify-center gap-2 mt-4 py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 text-sm font-medium hover:border-primary-300 hover:text-primary-600"
        >
          <Plus size={16} />
          Agregar nueva alerta
        </Link>
      </div>
    </div>
  );
}
