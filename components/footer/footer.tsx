import Image from "next/image";
import Link from "next/link";
import {
    Clock,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import {
    SiInstagram,
    SiFacebook,
    SiTiktok,
} from "react-icons/si";

import BasicLayout from "@/components/layout/BasicLayout";
import Paragraph from "@/components/text/Paragraph";

export default function Footer() {
    const formatPhoneNumber = (phone: string) => {
        if (!phone) return "";
        let formatted = phone.startsWith("62")
            ? "0" + phone.slice(2)
            : phone;
        return formatted.replace(/(.{4})/g, "$1-").replace(/-$/, "");
    };

    return (
        <footer className="relative bg-slate-900 text-white">
            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-top opacity-50"
                    style={{
                        backgroundImage: "url('/images/background/bg-4.svg')",
                    }}
                />
            </div>
            <BasicLayout>
                <div className="relative z-10">
                    {/* TOP */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-14">
                        {/* LOGO  */}
                        <div className="space-y-4">
                            <Image
                                src="/images/logos/app-logo-2.png"
                                alt="Samudra Logo"
                                width={50}
                                height={80}
                                priority
                                className="object-contain hidden"
                            />

                            <Paragraph level={3} className="font-semibold text-white">
                                Tentang Kami
                            </Paragraph>
                            <Paragraph level={2} className="text-white/90 leading-relaxed">
                                Solusi profesional pembuatan trophy dan souvenir custom, menghadirkan desain eksklusif, kualitas terbaik, dan layanan terpercaya untuk meningkatkan nilai setiap acara Anda.
                            </Paragraph>

                            {/* SOCIAL  */}
                            <div className="flex gap-3">
                                {[
                                    { icon: SiInstagram, label: "Instagram" },
                                    { icon: SiFacebook, label: "Facebook" },
                                    { icon: SiTiktok, label: "TikTok" },
                                ].map(({ icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href="#"
                                        aria-label={label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>


                        {/* KONTAK */}
                        <div className="space-y-4">
                            <Paragraph level={3} className="font-semibold text-white">
                                Kontak
                            </Paragraph>

                            <a
                                href="mailto:samudratrophy@gmail.com"
                                className="flex gap-3 items-center text-white/90 hover:text-white transition"
                            >
                                <Mail className="w-5 h-5" />
                                <Paragraph level={2} className="text-white/90">
                                    samudratrophy@gmail.com
                                </Paragraph>
                            </a>

                            <a
                                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ADMIN}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-3 items-center text-white/90 hover:text-white transition"
                            >
                                <Phone className="w-5 h-5" />
                                <Paragraph level={2} className="text-white/90">
                                    {formatPhoneNumber(
                                        process.env.NEXT_PUBLIC_WHATSAPP_ADMIN || ""
                                    )}
                                </Paragraph>
                            </a>

                            <div className="flex gap-3 items-start text-white/90">
                                <MapPin className="w-5 h-5 shrink-0" />
                                <Paragraph level={2} className="text-white/90 leading-relaxed">
                                    Jl. Menteri Supeno No.45, Pandeyan, Kec. Umbulharjo,
                                    Kota Yogyakarta, DI Yogyakarta 55162
                                </Paragraph>
                            </div>
                        </div>

                        {/* JAM BUKA */}
                        <div className="space-y-4">
                            <Paragraph level={3} className="font-semibold text-white">
                                Jam Operasional
                            </Paragraph>

                            <div className="flex gap-3 items-center text-white/90">
                                <Clock className="w-5 h-5" />
                                <Paragraph level={2} className="text-white/90">
                                    Senin – Sabtu <br />
                                    09:00 – 19:00 WIB
                                </Paragraph>
                            </div>
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="h-px w-full bg-white/20" />

                    {/* BOTTOM */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 text-white/80">
                        <Paragraph level={2} className="text-white/80">
                            &copy; 2026 Samudra. All rights reserved
                        </Paragraph>

                        <div className="flex items-center gap-3 text-xs md:text-sm">
                            <Link href="/" className="hover:text-white">
                                Syarat & Ketentuan
                            </Link>
                            <span className="opacity-40">|</span>
                            <Link href="/" className="hover:text-white">
                                Privasi
                            </Link>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </footer>
    );
}