import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/mock";
import { TrendingDown, Sparkles, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const bajaronHoy = [...products]
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, 6);

  return (
    <div className="pb-4">
      <header className="bg-gradient-to-br from-primary-600 to-primary-700 text-white px-4 pt-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">indago</h1>
            <p className="text-primary-100 text-sm">Busca. Compara. Ahorra.</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-medium">
            Chile 🇨🇱
          </div>
        </div>
        <SearchBar />
      </header>

      <div className="px-4 -mt-4 mb-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-bold text-slate-800">7K+</p>
            <p className="text-[11px] text-slate-500">Productos</p>
          </div>
          <div className="border-x border-slate-100">
            <p className="text-lg font-bold text-slate-800">55+</p>
            <p className="text-[11px] text-slate-500">Tiendas</p>
          </div>
          <div>
            <p className="text-lg font-bold text-primary-600">365</p>
            <p className="text-[11px] text-slate-500">Días historial</p>
          </div>
        </div>
      </div>

      <section className="px-4 mb-6">
        <h2 className="text-base font-bold text-slate-800 mb-3">Categorías</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/buscar?cat=${cat.id}`}
              className={`flex-shrink-0 flex flex-col items-center gap-1.5 px-3 py-2 rounded-2xl ${cat.color} min-w-[72px]`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-[11px] font-semibold">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <TrendingDown size={18} className="text-red-500" />
            Bajaron hoy
          </h2>
          <Link href="/buscar?sort=discount" className="text-sm text-primary-600 font-medium">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {bajaronHoy.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="bg-gradient-to-br from-slate-800 to-navy-900 rounded-2xl p-5 text-white">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-primary-400" />
            Así funciona Indago
          </h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Busca", d: "Comparamos +50 tiendas al instante" },
              { n: "2", t: "Analiza", d: "Historial de 365 días para detectar ofertas reales" },
              { n: "3", t: "Alerta", d: "Te avisamos cuando baje al precio que quieres" },
              { n: "4", t: "Ahorra", d: "Compra en el momento exacto" },
            ].map((step) => (
              <div key={step.n} className="flex gap-3 items-start">
                <span className="bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold text-sm">{step.t}</p>
                  <p className="text-slate-300 text-xs">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 mb-8">
        <div className="flex items-center gap-3 bg-primary-50 border border-primary-100 rounded-2xl p-4">
          <ShieldCheck className="text-primary-600 flex-shrink-0" size={24} />
          <div>
            <p className="text-sm font-semibold text-primary-800">100% gratuito</p>
            <p className="text-xs text-primary-700">
              No vendemos nada. Solo te ayudamos a ahorrar con datos reales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
