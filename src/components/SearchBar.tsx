"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

interface Props {
  initialQuery?: string;
  autoFocus?: boolean;
}

export function SearchBar({ initialQuery = "", autoFocus = false }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/buscar");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar producto, marca o tienda..."
          autoFocus={autoFocus}
          className="w-full h-12 pl-11 pr-10 rounded-2xl bg-white border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </form>
  );
}
