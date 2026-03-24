"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
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

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const queryClient = useQueryClient();

    // ✅ ambil dari URL
    const slug = params?.slug as string;
    const page = Number(params?.page || 1);
    const perPage = Number(searchParams.get("limit") || 12);
    const filter = slug || "";
    const sortMap: Record<string, string> = {
        terbaru: "createdAt",
        terlama: "createdAt:asc",
    };
    const sortOrigin = searchParams.get("sort") || "terbaru";
    // hasil untuk query API
    const sort = sortMap[sortOrigin] || sortOrigin;
    // untuk label UI
    const sortLabel = Object.keys(sortMap).find((key) => sortMap[key] === sort) || sortOrigin;

    const { data, isLoading, isFetching } = useProduct({
        page,
        perPage,
        sort,
        filter
    });

    const products = data?.docs ?? [];
    const currentPage = data?.page || 1;
    const totalPages = data?.totalPages || 1;

    // ✅ helper update query
    const updateQuery = (newParams: Record<string, string | number>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(newParams).forEach(([key, value]) => {
            params.set(key, String(value));
        });

        router.push(`/category/${slug}/page/1?${params.toString()}`);
    };

    // 🔥 prefetch next page
    useEffect(() => {
        if (currentPage < totalPages) {
            queryClient.prefetchQuery({
                queryKey: [
                    "productsByCategory",
                    { page: currentPage + 1, perPage, sort, filter }
                ],
                queryFn: () =>
                    getProducts({
                        page: currentPage + 1,
                        perPage,
                        sort,
                        filter,
                    }),
            });
        }
    }, [currentPage, totalPages, perPage, sort, filter, queryClient]);

    if (isLoading) return <Spinner />;
    if (!products.length) return <div>Produk tidak ditemukan</div>;

    // 🔥 pagination stabil
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    start = Math.max(1, end - maxVisible + 1);

    const visiblePages = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
    );

    return (
        <div>
            <motion.div variants={fadeLeft} initial="hidden" animate="visible">

                {/* ===== SORTING BAR ===== */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white border border-slate-200 rounded-xl p-4">

                    {/* SORT */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">Urutkan:</span>

                        <select
                            value={sort}
                            onChange={(e) => updateQuery({ sort: e.target.value })}
                            className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-e-primary"
                        >
                            <option value="terbaru">Terbaru</option>
                            <option value="terlama">Terlama</option>
                        </select>
                    </div>

                    {/* PER PAGE */}
                    <div className="text-sm text-slate-500 flex items-center gap-2">
                        View:
                        {[12, 32, 48].map((num) => (
                            <button
                                key={num}
                                onClick={() => updateQuery({ limit: num })}
                                className={`px-2 py-1 rounded-md transition cursor-pointer ${perPage === num
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
                    {isFetching && (
                        <div className="absolute right-0 -top-6 text-xs text-slate-400">
                            Loading...
                        </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((item) => (
                            <Link key={item._id} href={`/product/${item.slug}`} className="hover:underline">
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                    <div className="relative aspect-[4/5] rounded-t-xl overflow-hidden">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="h-full bg-slate-200" />
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <Paragraph className="line-clamp-2 font-medium">
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
                        {currentPage === 1 ? (
                            <div className="px-3 py-2 border border border-slate-300 text-sm text-slate-600 hover:bg-slate-100 rounded-lg opacity-50 cursor-not-allowed">
                                Prev
                            </div>
                        ) : (
                            <Link href={`/category/${slug}/page/${currentPage - 1}?sort=${sortLabel}&limit=${perPage}`}>
                                <div className="px-3 py-2 border border border-slate-300 text-sm text-slate-600 hover:bg-slate-100 rounded-lg">
                                    Prev
                                </div>
                            </Link>
                        )}

                        {/* PAGE */}
                        {visiblePages.map((p) => (
                            <Link
                                key={p}
                                href={`/category/${slug}/page/${p}?sort=${sortLabel}&limit=${perPage}`}
                            >
                                <div
                                    className={`px-3 py-2 text-sm rounded-lg border ${p === currentPage
                                        ? "border-e-primary bg-e-primary text-white border-e-primary"
                                        : "border-slate-300 text-slate-600"
                                        }`}
                                >
                                    {p}
                                </div>
                            </Link>
                        ))}

                        {/* NEXT */}
                        {currentPage === totalPages ? (
                            <div className="px-3 py-2 border border-slate-300 text-sm text-slate-600 rounded-lg opacity-50 cursor-not-allowed">
                                Next
                            </div>
                        ) : (
                            <Link href={`/category/${slug}/page/${currentPage + 1}?sort=${sortLabel}&limit=${perPage}`}>
                                <div className="px-3 py-2 border border-slate-300 text-sm text-slate-600 rounded-lg">
                                    Next
                                </div>
                            </Link>
                        )}
                    </nav>
                </div>

            </motion.div>
        </div>
    );
}