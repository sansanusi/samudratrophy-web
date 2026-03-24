"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import BasicLayout from "@/components/layout/BasicLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Heading, Paragraph } from "@/components/text";
import CategoryFilter from "./v2/CategoryFilter";
import CategoryProduct from "./v2/CategoryProduct";
import { useCategoryTree } from "@/hooks/useProduct";

const MotionHeading = motion(Heading);
const MotionParagraph = motion(Paragraph);

export default function CategoryPageSlug() {
    const params = useParams();
    const slug = params?.slug as string;

    const { data } = useCategoryTree();

    const findCategoryPath = (categories: any[], slug: string) => {
        for (const cat of categories) {
            // jika parent
            if (cat.slug === slug) {
                return [cat];
            }

            // jika di subcategory
            const sub = cat.subcategory?.find((s: any) => s.slug === slug);
            if (sub) {
                return [cat, sub];
            }
        }

        return [];
    };

    const findCategory = (categories: any[], slug: string) => {
        for (const cat of categories) {
            if (cat.slug === slug) return cat;

            const sub = cat.subcategory?.find((s: any) => s.slug === slug);
            if (sub) return sub;
        }
        return null;
    };

    const categoryPath = data ? findCategoryPath(data, slug) : [];

    const selectedCategory = data ? findCategory(data, slug) : null;

    const breadcrumbItems = [
        { label: "Beranda", href: "/" },
        ...categoryPath.map((item, index) => ({
            label: item.name,
            href:
                index === 0
                    ? `/category/${item.slug}`
                    : `/category/${item.slug}`, // bisa disesuaikan kalau pakai /page/1
        })),
    ];

    return (
        <>
            <div className="bg-slate-100 p-5 hidden md:block">
                <Breadcrumbs items={breadcrumbItems} />
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
                        {/* Heading */}
                        <div className="text-center mb-16">
                            <MotionHeading
                                level={2}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="font-bold"
                            >
                                {selectedCategory?.name || "Kategori"}
                            </MotionHeading>

                            <MotionParagraph
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="mt-3 max-w-2xl mx-auto"
                            >
                                {selectedCategory?.description ? selectedCategory?.description :
                                    `Produk kategori ${selectedCategory?.name} terbaik di Samudra Trophy`
                                }
                            </MotionParagraph>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">

                            <CategoryProduct />

                            <CategoryFilter />

                        </div>
                    </div>
                </BasicLayout>
            </section>
        </>
    );
}