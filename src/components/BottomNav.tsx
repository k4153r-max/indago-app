"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Bell, Heart, User } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/buscar", label: "Buscar", icon: Search },
  { href: "/alertas", label: "Alertas", icon: Bell },
  { href: "/favoritos", label: "Favoritos", icon: Heart },
  { href: "/cuenta", label: "Cuenta", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 safe-bottom">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-2">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-colors",
                active ? "text-primary-600" : "text-slate-400"
              )}
            >
              <Icon
                size={22}
                strokeWidth={active ? 2.5 : 2}
                className={active ? "text-primary-600" : ""}
              />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
