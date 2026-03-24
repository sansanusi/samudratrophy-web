"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  MoveRight
} from "lucide-react";

import { Heading, Paragraph } from "@/components/text";
import BasicLayout from "@/components/layout/BasicLayout";

import { useCategory } from "@/hooks/useCategory";

export default function Category() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const { data, isLoading } = useCategory({
    page: 1,
    perPage: 11
  });

  const categories = data?.docs ?? [];

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

        {isLoading && (
          <div className="h-44" />
        )}

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

              {categories.map((cat, i) => (
                <Link key={i} href={`/category/${cat.slug}`} className="hover:underline">
                  <div className="h-20 flex items-center gap-4 p-4 rounded-2xl bg-white backdrop-blur border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    {/* ICON */}
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition">
                      <Star className="w-5 h-5 text-e-primary" />
                    </div>
                    {/* TEXT */}
                    <Paragraph level={2}>
                      {cat.name}
                    </Paragraph>
                  </div>
                </Link>
              ))}

              {categories?.length > 0 && !isLoading && (
                <Link href="/category" className="hover:underline">
                  <div className="h-20 flex items-center gap-4 p-4 rounded-2xl bg-white backdrop-blur border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <Paragraph level={2} className="text-center">
                      Kategori Lainnya
                    </Paragraph>
                    <MoveRight className="w-6 h-6 text-e-primary" />
                  </div>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </BasicLayout>
    </section>
  );
}