"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import BasicLayout from "@/components/layout/BasicLayout";
import { Heading, Paragraph } from "@/components/text";
import { ButtonPrimaryOutline } from "@/components/button/Button";

const MotionHeading = motion(Heading);
const MotionParagraph = motion(Paragraph);

import "swiper/css";

const clients = Array.from({ length: 12 });

export default function ClientSection() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <BasicLayout>
        <div className="mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-e-primary mx-auto mb-6"
            />

            <MotionHeading
              level={2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-bold"
            >
              Dipercaya oleh Ratusan Instansi, Perusahaan, dan
              <br className="hidden md:block" />
              Lembaga di Seluruh Indonesia
            </MotionHeading>

            <MotionParagraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl mx-auto text-slate-600 text-sm md:text-base"
            >
              Berdiri sejak tahun XXXX, SAMUDRA TROPHY terus berkembang dan dipercaya
              oleh berbagai instansi serta perusahaan nasional.
            </MotionParagraph>
          </div>
        </div>
      </BasicLayout>

      {/* ROW 1 – geser ke kanan */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.2}
        spaceBetween={16}
        loop
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          1024: { slidesPerView: 6 },
        }}
      // className="mb-8"
      >
        {clients.map((_, i) => (
          <SwiperSlide key={`top-${i}`}>
            <ClientCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ROW 2 – geser ke kiri */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.2}
        spaceBetween={16}
        loop
        speed={6000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {clients.map((_, i) => (
          <SwiperSlide key={`bottom-${i}`}>
            <ClientCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <ButtonPrimaryOutline
          className="!rounded-full"
          label="Lihat lebih banyak"
          labelClassName="font-medium"
        />
      </motion.div>

    </section>
  );
}

/* Client Card – Lazy Load Ready */
function ClientCard() {
  return (
    <div className="mb-8 h-24 rounded-xl border border-slate-200 bg-white flex items-center justify-center drop-shadow-md hover:shadow-md transition">
      {/* Placeholder sekarang, logo nanti */}
      CLIENT LOGO
    </div>
  );
}