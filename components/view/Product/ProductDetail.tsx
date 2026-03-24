"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import BasicLayout from "@/components/layout/BasicLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Spinner from "@/components/layout/Spinner";
import { Heading, Paragraph } from "@/components/text";
import { useProductDetail } from "@/hooks/useProduct";
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
    const params = useParams();
    const slug = params?.slug as string;

    const { data: product, isLoading } = useProductDetail(slug);

    if (isLoading) return <Spinner />;
    if (!product) return <div>Produk tidak ditemukan</div>;

    return (
        <>
            <div className="bg-slate-100 p-5 hidden md:block">
                <Breadcrumbs
                    items={[
                        { label: "Beranda", href: "/" },
                        { label: product?.categoryRef?.[0]?.name || "Kategori", href: `/category/${product?.categoryRef?.[0]?.slug}` },
                        { label: product?.name || "-" },
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
                                <ProductGallery
                                    images={[
                                        ...(product?.image
                                            ? [{
                                                image: product?.image || "-",
                                                imageId: product?.imageId || "-",
                                                imageProvider: product?.imageProvider || "-",
                                            }]
                                            : []),
                                        ...(product?.gallery || []),
                                    ]}
                                />
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
                                    {product?.name || "-"}
                                </Heading>

                                <Paragraph>
                                    ⭐ {product?.rating || 0} · Lihat Ulasan
                                </Paragraph>

                                <div className="divide-y divide-dashed divide-gray-200">
                                    <Item label="Ukuran" value={product?.size} />
                                    <Item label="Bahan" value={product?.material} />
                                    <Item label="Teknik" value={product?.productionTech} />
                                    <Item label="Deskripsi" value={product?.description} />
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

const Item = ({ label, value }: { label: string; value?: string }) => (
    <div className="flex gap-4 py-2">
        <Paragraph className="w-24 shrink-0 font-semibold">{label}</Paragraph>
        <Paragraph className="flex-1">{value || "-"}</Paragraph>
    </div>
);