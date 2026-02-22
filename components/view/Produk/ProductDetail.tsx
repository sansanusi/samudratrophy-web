"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import BasicLayout from "@/components/layout/BasicLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Heading, Paragraph } from "@/components/text";
import ProductGallery from "./ProductGallery";
import OrderInfo from "./OrderInfo";


const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1], // easeOut
        },
    },
};

const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function ProductDetailPage() {
    const images: string[] = [
        "https://1souvenir.com/wp-content/uploads/2026/02/PL374-Plakat-Logam-Bulat-PHE-NSO-Aceh.webp",
        "https://1souvenir.com/wp-content/uploads/2026/02/DETAIL-PL374-Plakat-Logam-Bulat-PHE-NSO-Aceh.webp",
        "https://1souvenir.com/wp-content/uploads/2026/02/DETAIL2-PL374-Plakat-Logam-Bulat-PHE-NSO-Aceh.webp",
    ];

    return (
        <>
            <div className="bg-slate-100 p-5 hidden md:block">
                <Breadcrumbs
                    items={[
                        { label: "Beranda", href: "/" },
                        { label: "Plakat", href: "/" },
                        { label: "Plakat Logam", href: "/" },
                        { label: "Plakat Logam Bulat Kenang-kenangan dari Pertamina Hulu Energi North Sumatera Offshore (PHE NSO) Provinsi Aceh" },
                    ]}
                />
            </div>
            <section className="relative w-full md:pt-0 pb-10 overflow-hidden">
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
                    <div className="relative z-10 mx-auto py-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* GALLERY */}
                            <motion.div
                                variants={fadeLeft}
                                initial="hidden"
                                animate="visible"
                            >
                                <ProductGallery images={images} />
                            </motion.div>

                            {/* PRODUCT INFO */}
                            <motion.div
                                variants={fadeLeft}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.1 }}
                                className="space-y-6"
                            >
                                <Heading level={3} className="font-bold leading-snug">
                                    Plakat Logam Bulat Kenang-kenangan dari Pertamina Hulu
                                    Energi North Sumatera Offshore
                                </Heading>

                                <Paragraph>
                                    ⭐ 4.8 · Lihat Ulasan Google
                                </Paragraph>

                                <div className="divide-y divide-dashed divide-gray-200">
                                    <div className="flex gap-4 py-2">
                                        <Paragraph className="w-24 font-semibold">Ukuran</Paragraph>
                                        <Paragraph>20 × 14 × 5 cm</Paragraph>
                                    </div>

                                    <div className="flex gap-4 py-2">
                                        <Paragraph className="w-24 font-semibold">Bahan</Paragraph>
                                        <Paragraph>Logam, Kayu</Paragraph>
                                    </div>

                                    <div className="flex gap-4 py-2">
                                        <Paragraph className="w-24 font-semibold">Teknik</Paragraph>
                                        <Paragraph>Kuningan etsa, krom emas</Paragraph>
                                    </div>

                                    <div className="flex gap-4 py-2">
                                        <Paragraph className="w-24 font-semibold">Deskripsi</Paragraph>
                                        <Paragraph>Bludru hitam</Paragraph>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ORDER INFO */}
                            <motion.div
                                variants={fadeRight}
                                initial="hidden"
                                animate="visible"
                            >
                                <OrderInfo />
                            </motion.div>

                        </div>
                    </div>
                </BasicLayout>
            </section>
        </>
    );
}