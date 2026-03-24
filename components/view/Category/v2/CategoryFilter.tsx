"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ChevronDown, FileText, Lock, ShieldCheck, AlertTriangle, Video } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Spinner from "@/components/layout/Spinner";
import { Heading, Paragraph } from "@/components/text";
import { useCategoryTree } from "@/hooks/useProduct";

const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
};

const standard = [
    { label: "Mendukung kebutuhan administrasi & faktur pajak instansi.", icon: <FileText className="w-4 h-4" /> },
    { label: "Kerahasiaan data dan informasi klien terjamin.", icon: <Lock className="w-4 h-4" /> },
    { label: "Revisi dan penggantian produk sesuai standar kualitas dan kesepakatan.", icon: <ShieldCheck className="w-4 h-4" /> },
    { label: "Perubahan pesanan tidak dapat dilakukan setelah proses produksi berjalan.", icon: <AlertTriangle className="w-4 h-4" /> },
    { label: "Dokumentasi unboxing diperlukan sebagai bagian dari proses klaim garansi.", icon: <Video className="w-4 h-4" /> },
];

export default function CategoryFilter() {
    const router = useRouter();
    const params = useParams();
    const currentSlug = params?.slug as string;

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // 🔥 ambil data dari API
    const { data, isLoading } = useCategoryTree();

    useEffect(() => {
        if (!data) return;

        const foundIndex = data.findIndex(
            (cat) =>
                cat.slug === currentSlug ||
                cat.subcategory?.some((sub) => sub.slug === currentSlug)
        );

        if (foundIndex !== -1) {
            setOpenIndex(foundIndex);
        }
    }, [currentSlug, data]);

    return (
        <div>
            {/* ===== FILTER SIDEBAR ===== */}
            <motion.aside
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 h-fit"
            >
                <Heading level={5} className="font-semibold mb-4">
                    Kategori Produk
                </Heading>

                {/* LOADING */}
                {isLoading && <Spinner className="!min-h-full" />}

                <div className="space-y-3 text-sm">
                    {data?.map((cat, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={cat.slug}>
                                {/* CATEGORY */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation(); // biar tidak redirect
                                        setOpenIndex(isOpen ? null : index);
                                    }}
                                    className="w-full flex items-center gap-2 text-left"
                                >
                                    <input
                                        type="checkbox"
                                        className="accent-e-primary cursor-pointer"
                                        checked={currentSlug === cat.slug}
                                        onChange={() => router.push(`/category/${cat.slug}`)}
                                    />

                                    <span className="flex-1 font-medium">
                                        {cat.name}
                                    </span>

                                    <span className="text-gray-400 text-xs">
                                        ({cat.total})
                                    </span>

                                    {cat.subcategory?.length > 0 && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform cursor-pointer ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    )}
                                </button>

                                {/* SUBCATEGORY */}
                                {cat.subcategory?.length > 0 && isOpen && (
                                    <div className="mt-2 ml-6 space-y-2">
                                        {cat.subcategory.map((sub) => (
                                            <label
                                                key={sub.slug}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="accent-e-primary cursor-pointer"
                                                    checked={currentSlug === sub.slug}
                                                    onChange={() => router.push(`/category/${sub.slug}`)}
                                                />
                                                <span className="flex-1">
                                                    {sub.name}
                                                </span>
                                                <span className="text-gray-400 text-xs">
                                                    ({sub.total})
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </motion.aside>

            {/* ===== STANDAR ===== */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 bg-white border border-slate-200 rounded-xl p-5"
            >
                <Heading level={5} className="font-semibold mb-4">
                    Standar Layanan SAMUDRA
                </Heading>

                <div className="space-y-4">
                    {standard.map((item, i) => (
                        <div key={i} className="space-y-4">
                            <motion.div
                                custom={1}
                                variants={fadeUp}
                                className="flex gap-2 items-center"
                            >
                                <span className="w-8 h-8 rounded-full bg-e-primary/10 text-e-primary flex items-center justify-center">
                                    {item.icon}
                                </span>
                                <Paragraph level={1} className="text-slate-600">
                                    {item.label}
                                </Paragraph>
                            </motion.div>

                            {i !== standard.length - 1 && (
                                <div className="border-t border-dashed border-slate-200" />
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}