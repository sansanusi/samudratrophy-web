"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search } from "lucide-react";

import { ButtonPrimary } from "../button/Button";

const menu = [
  { name: "Profil", path: "#" },
  { name: "Galeri", path: "#" },
  { name: "Kontak", path: "#" },
];

export default function Navbar() {
  const path = usePathname();
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white backdrop-blur shadow-sm">
      <nav className="mx-auto max-w-7xl flex h-[5.5rem] items-center gap-4 px-4 text-slate-700">
        {/* LEFT: LOGO + SEARCH */}
        <div className="flex items-center gap-5 md:gap-10 flex-1">
          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logos/app-logo.png"
              alt="Samudra Logo"
              width={60}
              height={60}
              priority
              className="object-contain"
            />
          </Link>

          {/* SEARCH (desktop & mobile) */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari produk di sini…"
              className="w-full rounded-full border border-slate-400 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-e-primary/30"
            />
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="relative block h-10 w-10 lg:hidden"
          onClick={() => setIsToggleOpen(!isToggleOpen)}
          aria-label="Toggle navigation"
        >
          <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2">
            {/* TOP */}
            <span
              className={`absolute block h-0.5 rounded-full bg-slate-900 transition-all duration-300
                ${isToggleOpen ? "rotate-45 translate-y-0 w-full" : "-translate-y-2 w-9/12"}`}
            />
            {/* MIDDLE */}
            <span
              className={`absolute block h-0.5 rounded-full bg-slate-900 transition-all duration-300
                ${isToggleOpen ? "opacity-0 scale-x-0" : "opacity-100 w-6"}`}
            />
            {/* BOTTOM */}
            <span
              className={`absolute block h-0.5 rounded-full bg-slate-900 transition-all duration-300
                ${isToggleOpen ? "-rotate-45 translate-y-0 w-full" : "translate-y-2 w-1/2"}`}
            />
          </div>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-6">
          {menu.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className={`hover:text-e-primary transition ${path === item.path ? "text-e-primary" : ""
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <ButtonPrimary
              className="!rounded-full"
              label="Tanya Kami di WhatsApp"
              labelClassName="font-medium"
            />
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      <ul
        className={`lg:hidden bg-white shadow-sm transition-all duration-300
          ${isToggleOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        {menu.map((item, i) => (
          <li key={i}>
            <Link
              href={item.path}
              className="block px-6 py-4 border-b border-slate-100 hover:text-e-primary"
              onClick={() => setIsToggleOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="p-4">
          <ButtonPrimary
            className="w-full !rounded-full"
            label="Tanya Kami di WhatsApp"
            labelClassName="font-medium"
          />
        </li>
      </ul>
    </header>
  );
}