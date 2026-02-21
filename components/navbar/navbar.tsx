"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { ButtonPrimary } from "../button/Button";

const menu = [
  { name: "Profil", path: "/" },
  { name: "Galeri", path: "/" },
  { name: "Kontak", path: "/" },
];

export default function Navbar() {
  const path = usePathname();
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white backdrop-blur shadow-sm">
      <nav className="mx-auto max-w-7xl flex h-[5.5rem] items-center justify-between px-4 text-slate-700">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/app-logo.png"
            alt="Samudra Logo"
            width={50}
            height={80}
            priority
            className="object-contain"
          />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="relative block h-10 w-10 lg:hidden"
          onClick={() => setIsToggleOpen(!isToggleOpen)}
          aria-label="Toggle navigation"
        >
          <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            {/* TOP */}
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 rounded-full bg-slate-900 transition-all duration-300 ${isToggleOpen
                ? "rotate-45 translate-y-0 w-full"
                : "-translate-y-2 w-9/12"
                }`}
            />

            {/* MIDDLE */}
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 rounded-full bg-slate-900 transition-all duration-300 ${isToggleOpen
                ? "opacity-0 scale-x-0 w-full"
                : "opacity-100 scale-x-100 w-6"
                }`}
            />

            {/* BOTTOM */}
            <span
              aria-hidden="true"
              className={`absolute block h-0.5 rounded-full bg-slate-900 transition-all duration-300 ${isToggleOpen
                ? "-rotate-45 translate-y-0 w-full"
                : "translate-y-2 w-1/2"
                }`}
            />
          </div>
        </button>

        {/* MENU */}
        <ul
          className={`absolute top-full left-0 w-full bg-white lg:static lg:flex lg:w-auto lg:bg-transparent transition-all duration-300
            ${isToggleOpen ? "opacity-100 visible backdrop-blur shadow-sm" : "opacity-0 invisible lg:opacity-100 lg:visible"}`}
        >
          {menu.map((item, i) => (
            <li key={i} className="flex items-center">
              <Link
                href={item.path}
                className={`block px-6 py-4 lg:py-0 text-slate-800 hover:text-e-primary transition
                  ${path === item.path ? "text-e-primary" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li className="flex items-center px-6 py-4 lg:py-0">
            <ButtonPrimary
              className="!rounded-full"
              label="Tanya Kami di WhatsApp"
              labelClassName="font-medium"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}