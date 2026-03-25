"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import BasicLayout from "@/components/layout/BasicLayout";
import { Heading, Paragraph } from "@/components/text";

const MotionHeading = motion(Heading);
const MotionParagraph = motion(Paragraph);

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Nada Widyanto Rizki",
    date: "5 Februari 2026",
    rating: 5,
    text: "Sesuai req, pelayanan ramah, responsif, dan selalu solutif :) Plakat2 yg dibuat jg selalu bagus dan aman pengiriman.",
  },
  {
    name: "Octa Satria Cakra",
    date: "5 Februari 2026",
    rating: 5,
    text: "Terbaik kualitas oke. Selalu repeat order.",
  },
  {
    name: "BMH Yogyakarta",
    date: "5 Februari 2026",
    rating: 5,
    text: "Hasilnya bagus. Terima kasih banyak, recommended.",
  },
  {
    name: "Client Korporat",
    date: "2 Februari 2026",
    rating: 5,
    text: "Kualitas produk konsisten dan pengiriman tepat waktu.",
  },
];

export default function TestimonialSection() {
  const duplicatedTestimonials = Array(2)
    .fill(testimonials)
    .flat();

  return (
    <section className="relative bg-slate-100 py-10 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-50"
          style={{
            backgroundImage: "url('/images/background/bg-5.svg')",
          }}
        />
      </div>
      <BasicLayout>
        <div className="relative z-10 mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-e-warning mx-auto mb-6"
            />
            <MotionHeading
              level={2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-bold"
            >
              Dipercaya oleh Pelanggan Kami
            </MotionHeading>

            <MotionParagraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 max-w-2xl mx-auto"
            >
              Pengalaman nyata pelanggan yang telah mempercayakan kebutuhan
              souvenir dan plakat kepada kami.
            </MotionParagraph>
          </div>

          {/* Swiper + Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Navigation Buttons */}
            <button className="cursor-pointer testimonial-prev absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition">
              <ChevronLeft />
            </button>

            <button className="cursor-pointer testimonial-next absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition">
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              spaceBetween={20}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {duplicatedTestimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-e-primary text-white flex items-center justify-center font-semibold uppercase">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm capitalize">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500">{item.date}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </BasicLayout>
    </section>
  );
}