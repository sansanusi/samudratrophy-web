"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Wallet,
  Palette,
  Handshake,
} from "lucide-react";

import BasicLayout from "@/components/layout/BasicLayout";
import { Heading, Paragraph } from "@/components/text";

const MotionHeading = motion(Heading);

export default function WhyUs() {
  return (
    <section className="relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage: "url('/images/background/why-us.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <BasicLayout>
        <div className="relative z-10 max-w-7xl mx-auto py-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-e-primary mx-auto mb-6"
          />

          <MotionHeading
            level={2}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white font-bold mb-16"
          >
            Kenapa Harus Kami ?
          </MotionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-200 border border-e-primary text-e-primary mb-4">
                  {/* <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-e-warning text-slate-700 mb-4"> */}
                  <item.icon size={22} />
                </div>

                <Heading level={4} className="font-semibold text-white mb-2">
                  {item.title}
                </Heading>

                <Paragraph className="text-sm text-white/90 leading-relaxed">
                  {item.desc}
                </Paragraph>
              </motion.div>
            ))}
          </div>
        </div>
      </BasicLayout>
    </section>
  );
}

const items = [
  {
    title: "Legalitas Terjamin",
    desc: "Setiap transaksi didukung legalitas lengkap dan terpercaya.",
    icon: ShieldCheck,
  },
  {
    title: "Komitmen Waktu",
    desc: "Ketepatan waktu adalah komitmen utama kami di setiap proyek.",
    icon: Clock,
  },
  {
    title: "Kesesuaian Anggaran",
    desc: "Solusi fleksibel sesuai kebutuhan dan anggaran Anda.",
    icon: Wallet,
  },
  {
    title: "Desain Yang Menceritakan",
    desc: "Setiap produk membawa cerita dan identitas brand Anda.",
    icon: Palette,
  },
  {
    title: "Better Engagement",
    desc: "Souvenir yang membangun hubungan dan kesan jangka panjang.",
    icon: Handshake,
  },
];