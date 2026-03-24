"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Paragraph } from "@/components/text";

const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function CategoryProduct() {

    return (
        <div>
            {/* ===== PRODUK GRID ===== */}
            <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* ===== SORTING BAR ===== */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white border border-slate-200 rounded-xl p-4">

                    {/* LEFT: SORT */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">
                            Urutkan:
                        </span>

                        <select
                            className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-e-primary"
                            defaultValue="terbaru"
                        >
                            <option value="tren">Urutkan berdasar tren</option>
                            <option value="terbaru">Urutkan menurut yang terbaru</option>
                            <option value="termurah">Urutkan dari termurah</option>
                            <option value="termahal">Urutkan dari termahal</option>
                        </select>
                    </div>

                    {/* RIGHT: VIEW INFO (OPSIONAL) */}
                    <div className="text-sm text-slate-500">
                        View: <span className="font-medium">16</span> / 32 / 48
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <Link key={i} href={`/product/product-${i + 1}`} className="hover:underline">
                            <div
                                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition"
                            >
                                {/* IMAGE */}
                                <div className="relative aspect-[4/5] rounded-t-xl overflow-hidden">
                                    {/* <img
                                        src="/images/dummy/product.jpg"
                                        alt="Produk"
                                        className="w-full h-full object-cover"
                                    /> */}
                                    <div className="h-full bg-slate-200" />
                                </div>

                                {/* INFO */}
                                <div className="p-4">
                                    <Paragraph level={2} className="font-medium leading-snug line-clamp-2">
                                        Plakat Akrilik Penghargaan Custom
                                    </Paragraph>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ===== PAGINATION ===== */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center gap-2">

                        {/* PREV */}
                        <button
                            className="cursor-pointer px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-600 hover:bg-slate-100"
                        >
                            Prev
                        </button>

                        {/* PAGE NUMBERS */}
                        {[1, 2, 3, 4].map((page) => (
                            <button
                                key={page}
                                className={`cursor-pointer px-3 py-2 rounded-lg border text-sm ${page === 1 ? "bg-e-primary text-white border-e-primary" : "border-slate-300 text-slate-600 hover:bg-slate-100"}`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* NEXT */}
                        <button
                            className="cursor-pointer px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-600 hover:bg-slate-100"
                        >
                            Next
                        </button>

                    </nav>
                </div>
            </motion.div>
        </div>
    );
}