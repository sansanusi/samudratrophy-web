"use client";

import Image from "next/image";
import { Check, Phone } from "lucide-react";

export default function OrderInfoCard() {
    return (
        <aside className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">

            {/* LOGO */}
            <div className="flex justify-center mb-4">
                <Image
                    src="/images/logos/app-logo.png"
                    alt="samudra trophy"
                    width={60}
                    height={60}
                    priority
                />
            </div>

            {/* DIVIDER */}
            <hr className="border-dashed border-gray-300 my-4" />

            {/* FEATURES */}
            <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                    <Check className="text-green-600 w-4 h-4 mt-0.5" />
                    <span>Desain bisa disesuaikan 100%</span>
                </li>
                <li className="flex gap-3">
                    <Check className="text-green-600 w-4 h-4 mt-0.5" />
                    <span>Konsultasi gratis & respon cepat</span>
                </li>
                <li className="flex gap-3">
                    <Check className="text-green-600 w-4 h-4 mt-0.5" />
                    <span>Material Premium & Bergaransi</span>
                </li>
                <li className="flex gap-3">
                    <Check className="text-green-600 w-4 h-4 mt-0.5" />
                    <span>Pengiriman aman ke seluruh Indonesia</span>
                </li>
                <li className="flex gap-3">
                    <Check className="text-green-600 w-4 h-4 mt-0.5" />
                    <span>Berpengalaman untuk instansi & event</span>
                </li>
            </ul>

            {/* DIVIDER */}
            <hr className="border-dashed border-gray-300 my-6" />

            {/* CTA BUTTON */}
            <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ADMIN}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition"
            >
                <Phone className="w-4 h-4" />
                Pesan via WhatsApp
            </a>

            {/* FOOT NOTE */}
            <p className="text-xs text-center text-gray-500 mt-4 italic">
                Kami bantu dari desain sampai jadi.
            </p>
        </aside>
    );
}