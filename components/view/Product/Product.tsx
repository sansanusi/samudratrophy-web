"use client";

import { motion } from "framer-motion";
import BasicLayout from "@/components/layout/BasicLayout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Heading, Paragraph } from "@/components/text";
import CategoryFilter from "../Category/v2/CategoryFilter";
import ProductData from "./ProductData";

const MotionHeading = motion(Heading);
const MotionParagraph = motion(Paragraph);

export default function ProductPage() {
  return (
    <>
      <div className="bg-slate-100 p-5 hidden md:block">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Product", href: "#" },
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
            {/* Heading */}
            <div className="text-center mb-16">
              <MotionHeading
                level={1}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bold"
              >
                Produk
              </MotionHeading>

              <MotionParagraph
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-3 max-w-2xl mx-auto"
              >
                Temukan produk yang sesuai dengan kebutuhan Anda
              </MotionParagraph>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">

              <ProductData />

              <CategoryFilter />

            </div>
          </div>
        </BasicLayout>
      </section>
    </>
  );
}