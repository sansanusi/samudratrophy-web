"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Heading, Paragraph } from "@/components/text";
import BasicLayout from "@/components/layout/BasicLayout";

export default function Category() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const dummyData = Array.from({ length: 12 }, () => ({
    title: "Nama Kategori",
  }));

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeftFade(el.scrollLeft > 10);
    setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className="relative py-10 bg-slate-100 overflow-hidden">
      <BasicLayout>
        {/* TITLE – from top to bottom */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Heading
            level={3}
            className="font-semibold text-center"
          >
            Pilih Kategori Sesuai Kebutuhan Anda
          </Heading>
        </motion.div>

        <div className="relative mt-10">
          {/* Fade Left */}
          {showLeftFade && (
            <div className="absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none lg:hidden" />
          )}

          {/* Fade Right */}
          {showRightFade && (
            <div className="absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none lg:hidden" />
          )}

          {/* Scroll Wrapper */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory lg:overflow-visible scrollbar-hide"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex gap-5 min-w-max lg:grid lg:grid-cols-5 xl:grid-cols-6 lg:min-w-0"
            >
              {dummyData.map((row, i) => (
                <Link key={i} href={`/category/category-${i + 1}`} className="hover:underline">
                  <div
                    className="flex-shrink-0 w-52 snap-start lg:w-auto p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                  >
                    <div className="flex items-center justify-between h-10 gap-1">
                      <div className="w-14 h-14 bg-slate-300 rounded-full" />
                      <Paragraph level={2} className="text-center">
                        {row.title}
                      </Paragraph>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </BasicLayout>
    </section>
  );
}