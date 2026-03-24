"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";

import Spinner from "@/components/layout/Spinner";
import { Paragraph } from "@/components/text";
import { useProduct } from "@/hooks/useProduct";
import { getProducts } from "@/services/product.service";

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
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [sort, setSort] = useState("createdAt");

    const { data, isLoading, isFetching } = useProduct({
        page,
        perPage,
        sort,
    });

    const products = data?.docs ?? [];
    const currentPage = data?.page || 1;
    const totalPages = data?.totalPages || 1;

    // 🔥 Prefetch next page
    useEffect(() => {
        if (currentPage < totalPages) {
            queryClient.prefetchQuery({
                queryKey: ["products", { page: currentPage + 1, perPage, sort }],
                queryFn: () =>
                    getProducts({ page: currentPage + 1, perPage, sort }),
            });
        }
    }, [currentPage, perPage, sort, totalPages, queryClient]);

    if (isLoading) return <Spinner />;
    if (!products.length) return <div>Produk tidak ditemukan</div>;

    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    // adjust biar tetap 5 item kalau bisa
    start = Math.max(1, end - maxVisible + 1);

    const visiblePages = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
    );

    return (
        <div>
            <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* ===== SORTING BAR ===== */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white border border-slate-200 rounded-xl p-4">
                    {/* SORT */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">Urutkan:</span>

                        <select
                            className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-e-primary"
                            value={sort}
                            onChange={(e) => {
                                setPage(1);
                                setSort(e.target.value);
                            }}
                        >
                            <option value="createdAt">Terbaru</option>
                            <option value="createdAt:asc">Terlama</option>
                            {/* <option value="rating">Rating</option> */}
                        </select>
                    </div>

                    {/* PER PAGE */}
                    <div className="text-sm text-slate-500 flex items-center gap-2">
                        View:
                        {[12, 32, 48].map((num) => (
                            <button
                                key={num}
                                onClick={() => {
                                    setPage(1);
                                    setPerPage(num);
                                }}
                                className={`px-2 py-1 rounded-md transition ${perPage === num
                                    ? "bg-e-primary text-white scale-105"
                                    : "hover:bg-slate-100"
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ===== GRID ===== */}
                <div className="relative">
                    {/* loading kecil */}
                    {isFetching && (
                        <div className="absolute right-0 -top-6 text-xs text-slate-400">
                            Loading...
                        </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((item) => (
                            <Link
                                key={item._id}
                                href={`/product/${item.slug}`}
                            >
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                    <div className="relative aspect-[4/5] rounded-t-xl overflow-hidden">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-full bg-slate-200" />
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <Paragraph className="font-medium line-clamp-2">
                                            {item.name}
                                        </Paragraph>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ===== PAGINATION ===== */}
                <div className="mt-12 flex justify-center">
                    <nav className="flex items-center gap-2">
                        {/* PREV */}
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-600 hover:bg-slate-100 text-sm disabled:opacity-50 cursor-pointer disabled:cursor-default"
                        >
                            Prev
                        </button>

                        {/* PAGE NUMBERS */}
                        {visiblePages.map((p) => (
                            <button
                                key={p}
                                onClick={() => {
                                    if (p !== currentPage) {
                                        setPage(p)
                                    }
                                }}
                                className={`px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-600 hover:bg-slate-100 text-sm cursor-pointer ${p === currentPage
                                    ? "bg-e-primary text-white border-e-primary"
                                    : "border-slate-300"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}

                        {/* NEXT */}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            className="px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-600 hover:bg-slate-100 text-sm disabled:opacity-50 cursor-pointer disabled:cursor-default"
                        >
                            Next
                        </button>
                    </nav>
                </div>
            </motion.div>
        </div>
    );
}