"use client";

import { motion } from "framer-motion";
import {
  Send,
  FileText,
  CheckCircle,
  PackageCheck,
} from "lucide-react";

import BasicLayout from "@/components/layout/BasicLayout";
import { Heading, Paragraph } from "@/components/text";

const MotionHeading = motion(Heading);
const MotionParagraph = motion(Paragraph);

const steps = [
  {
    title: "Kirim Permintaan",
    desc: "Sampaikan kebutuhan, referensi, atau konsep produk sesuai acara Anda.",
    icon: Send,
  },
  {
    title: "Terima Desain & Penawaran",
    desc: "Kami siapkan desain awal dan penawaran sesuai spesifikasi Anda.",
    icon: FileText,
  },
  {
    title: "Setujui & Produksi Dimulai",
    desc: "Setelah disetujui, proses produksi dimulai sesuai jadwal.",
    icon: CheckCircle,
  },
  {
    title: "Pengiriman & Serah Terima",
    desc: "Produk dikemas rapi dan dikirim hingga ke lokasi Anda.",
    icon: PackageCheck,
  },
];

export default function StepSection() {
  return (
    <section className="relative bg-slate-100 overflow-hidden">
      <BasicLayout>
        <div className="max-w-7xl mx-auto py-10">
          {/* Heading */}
          <div className="text-center mb-10">
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
              Dari Ide ke Produk, Dalam 4 Langkah
            </MotionHeading>

            <MotionParagraph
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 max-w-xl mx-auto"
            >
              Proses sederhana dan transparan untuk memastikan hasil terbaik
              bagi setiap kebutuhan Anda.
            </MotionParagraph>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line (desktop only) */}

            <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-2 border-dashed border-yellow-300 -translate-x-1/2" />

            <div className="space-y-10">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const stepNumber = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  >
                    {/* Center Icon (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-e-primary text-white items-center justify-center z-10">
                      <step.icon size={18} />
                    </div>

                    {/* Animated Card */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isLeft ? -60 : 60,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className={`relative w-full md:w-[46%] rounded-2xl bg-white p-8 shadow-lg border border-slate-100 ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                    >
                      {/* Mobile Icon */}
                      <div className="md:hidden w-12 h-12 mb-4 rounded-xl bg-e-primary text-white flex items-center justify-center">
                        <step.icon size={20} />
                      </div>

                      {/* NUMBERING (DESKTOP ONLY) */}
                      <div
                        className="absolute top-14 md:top-1/2 -translate-y-1/2 text-4xl font-bold text-e-warning/50 select-none right-8 text-right"
                      >
                        {stepNumber}
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </BasicLayout>
    </section>
  );
}