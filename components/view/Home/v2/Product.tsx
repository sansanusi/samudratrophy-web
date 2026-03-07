"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import BasicLayout from "@/components/layout/BasicLayout";
import { Heading, Paragraph } from "@/components/text";
import { ButtonPrimaryOutline } from "@/components/button/Button";

import { useProduct } from "@/hooks/useProduct";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Product() {
    const { data, isLoading } = useProduct({
        page: 1,
        perPage: 10
    });

    const products = data?.docs ?? [];

    return (
        <section className="relative py-10 md:py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-top opacity-50"
                    style={{
                        backgroundImage: "url('/images/background/bg-3.svg')",
                    }}
                />
            </div>

            <BasicLayout>
                <div className="relative z-10 flex flex-col lg:flex-row gap-5">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-1/4 space-y-6"
                    >
                        <Heading level={2} className="font-bold text-3xl text-e-gray">
                            Contoh Karya & Rekomendasi
                        </Heading>

                        <button className="flex items-center gap-2 px-6 py-3 border border-green-500 text-green-600 rounded-full hover:bg-green-100 transition">
                            <SiWhatsapp className="w-4 h-4" />
                            <span>Mulai Diskusi</span>
                        </button>
                    </motion.div>

                    {/* SLIDER */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-3/4 relative"
                    >
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            slidesPerView={1.2}
                            breakpoints={{
                                240: { slidesPerView: 2 },
                                480: { slidesPerView: 3 },
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            pagination={{
                                el: ".custom-progress",
                                type: "progressbar",
                            }}
                            className="pb-10"
                        >
                            {isLoading && (
                                <SwiperSlide>
                                    <div className="p-6 text-center">Loading...</div>
                                </SwiperSlide>
                            )}

                            {products.length === 0 && !isLoading &&
                                Array.from({ length: 4 }).map((_, i) => (
                                    <SwiperSlide key={`placeholder-${i}`}>
                                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                            {/* IMAGE */}
                                            <div className="relative w-full h-auto aspect-[4/5] rounded-t-xl overflow-hidden">
                                                <div className="h-full bg-slate-200" />
                                            </div>
                                            <div className="py-3.5 px-4">
                                                <div className="h-3 bg-slate-200 rounded animate-pulse" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                            {products.map((item) => (
                                <SwiperSlide key={item._id}>
                                    <Link href={`/product/${item.slug}`} className="hover:underline">
                                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">

                                            <div className="relative w-full h-auto aspect-[4/5] rounded-t-xl overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    sizes="(max-width:640px) 70vw, (max-width:768px) 40vw, (max-width:1024px) 30vw, 25vw"
                                                    className="object-cover object-center"
                                                />
                                            </div>

                                            <div className="py-2 px-4">
                                                <Paragraph className="text-sm font-medium line-clamp-1">
                                                    {item.name}
                                                </Paragraph>
                                            </div>

                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}

                        </Swiper>

                        {/* NAVIGATION + PROGRESS */}
                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex gap-3 shrink-0">
                                <button className="custom-prev w-10 h-10 rounded-full bg-white shadow border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition">
                                    <ChevronLeft />
                                </button>

                                <button className="custom-next w-10 h-10 rounded-full bg-white shadow border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition">
                                    <ChevronRight />
                                </button>
                            </div>

                            <div className="flex-1">
                                <div className="custom-progress h-1 bg-slate-200 rounded-full overflow-hidden" />
                            </div>

                            <div className="shrink-0">
                                <Link href="category">
                                    <ButtonPrimaryOutline
                                        className="!rounded-full flex items-center gap-2"
                                        label={
                                            <>
                                                <span>Lihat Semua</span>
                                                <ArrowRight size={16} />
                                            </>
                                        }
                                        labelClassName="font-medium flex items-center gap-2"
                                    />
                                </Link>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </BasicLayout>
        </section>
    );
}