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
        <footer className="bg-slate-900 text-white">
            <BasicLayout>
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

                        <Paragraph level={2} className="font-semibold text-white">
                            Tentang Kami
                        </Paragraph>
                        <Paragraph level={1} className="text-white/90 leading-relaxed">
                            Lorem ipsum sit amet dolor. Lorem ipsum sit amet dolor.  Lorem ipsum sit amet dolor. Lorem ipsum sit amet dolor.
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
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                                >
                                    <Icon className="w-4 h-4 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* KONTAK */}
                    <div className="space-y-4">
                        <Paragraph level={2} className="font-semibold text-white">
                            Kontak
                        </Paragraph>

                        <a
                            href="mailto:samudratrophy@gmail.com"
                            className="flex gap-3 items-center text-white/90 hover:text-white transition"
                        >
                            <Mail className="w-5 h-5" />
                            <Paragraph level={1} className="text-white/90">
                                samudratrophy@gmail.com
                            </Paragraph>
                        </a>

                        <a
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ADMIN}`}
                            target="_blank"
                            className="flex gap-3 items-center text-white/90 hover:text-white transition"
                        >
                            <Phone className="w-5 h-5" />
                            <Paragraph level={1} className="text-white/90">
                                {formatPhoneNumber(
                                    process.env.NEXT_PUBLIC_WHATSAPP_ADMIN || ""
                                )}
                            </Paragraph>
                        </a>

                        <div className="flex gap-3 items-start text-white/90">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <Paragraph level={1} className="text-white/90 leading-relaxed">
                                Jl. Menteri Supeno No.45, Pandeyan, Kec. Umbulharjo,
                                Kota Yogyakarta, DI Yogyakarta 55162
                            </Paragraph>
                        </div>
                    </div>

                    {/* JAM BUKA */}
                    <div className="space-y-4">
                        <Paragraph level={2} className="font-semibold text-white">
                            Jam Operasional
                        </Paragraph>

                        <div className="flex gap-3 items-center text-white/90">
                            <Clock className="w-5 h-5" />
                            <Paragraph level={1} className="text-white/90">
                                Senin – Sabtu <br />
                                09:00 – 19:00 WIB
                            </Paragraph>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="h-px w-full bg-white/20" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 text-sm text-white/80">
                    <Paragraph className="text-white/80">
                        &copy; 2026 Samudra. All rights reserved
                    </Paragraph>

                    <div className="flex items-center gap-3">
                        <Link href="/" className="hover:text-white">
                            Syarat & Ketentuan
                        </Link>
                        <span className="opacity-40">|</span>
                        <Link href="/" className="hover:text-white">
                            Privasi
                        </Link>
                    </div>
                </div>
            </BasicLayout>
        </footer>
    );
}