"use client";

import {
  User,
  Bell,
  Heart,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Mail,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    icon: Bell,
    label: "Mis alertas de precio",
    href: "/alertas",
    color: "text-primary-600 bg-primary-50",
  },
  {
    icon: Heart,
    label: "Favoritos",
    href: "/favoritos",
    color: "text-red-500 bg-red-50",
  },
  {
    icon: Mail,
    label: "Notificaciones por email",
    href: "#",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Shield,
    label: "Privacidad y datos",
    href: "#",
    color: "text-slate-600 bg-slate-100",
  },
  {
    icon: HelpCircle,
    label: "Ayuda y soporte",
    href: "#",
    color: "text-amber-600 bg-amber-50",
  },
];

export default function CuentaPage() {
  return (
    <div className="pb-8">
      <header className="px-4 pt-6 pb-6">
        <h1 className="text-2xl font-extrabold text-slate-900">Mi cuenta</h1>
      </header>

      <div className="px-4 mb-6">
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <User size={28} />
            </div>
            <div>
              <p className="font-bold text-lg">Usuario Indago</p>
              <p className="text-primary-100 text-sm">hola@ejemplo.cl</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">2</p>
              <p className="text-xs text-primary-100">Alertas activas</p>
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-primary-100">Favoritos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-100 hover:bg-slate-50"
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.color}`}>
              <item.icon size={18} />
            </div>
            <span className="flex-1 text-sm font-medium text-slate-800">
              {item.label}
            </span>
            <ChevronRight size={16} className="text-slate-400" />
          </Link>
        ))}
      </div>

      <div className="px-4 mt-6">
        <button className="w-full flex items-center justify-center gap-2 py-3 text-red-500 font-medium text-sm rounded-xl border border-red-100 bg-red-50">
          <LogOut size={16} />
          Cerrar sesión
        </button>
      </div>

      <p className="text-center text-xs text-slate-400 mt-8 px-4">
        Indago App v1.0 · Prototipo
        <br />
        Datos de demostración
      </p>
    </div>
  );
}
