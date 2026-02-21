"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import BasicLayout from "@/components/layout/BasicLayout";
import { Heading } from "@/components/text";
import { ButtonPrimaryOutline } from "@/components/button/Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Product() {
  return (
    <section className="my-10 md:my-20 overflow-hidden">
      <BasicLayout>
        <div className="flex flex-col lg:flex-row gap-5">

          {/* LEFT CONTENT – from left to right */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/4 space-y-6"
          >
            <Heading level={2} className="font-bold text-3xl text-e-gray">
              Contoh Karya & Rekomendasi
            </Heading>

            <button className="flex items-center gap-2 px-6 py-3 border border-green-500 text-green-600 rounded-full hover:bg-green-100 transition cursor-pointer">
              <SiWhatsapp className="w-4 h-4" />
              <span>Mulai Diskusi</span>
            </button>
          </motion.div>

          {/* RIGHT SLIDER – from right to left */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:w-3/4 relative"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{
                el: ".custom-progress",
                type: "progressbar",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-10"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition p-4">
                    <div className="h-48 bg-slate-200 rounded-lg mb-4" />
                    <p className="font-medium">Produk {i + 1}</p>
                  </div>
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
              </div>
            </div>
          </motion.div>

        </div>
      </BasicLayout>
    </section>
  );
}