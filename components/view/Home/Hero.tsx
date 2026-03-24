"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Heading } from "@/components/text";
import BasicLayout from "@/components/layout/BasicLayout";

export default function Hero() {
  return (
    <section className="relative w-full pb-10 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-50"
          style={{
            backgroundImage: "url('/images/background/bg-6.svg')",
          }}
        />
      </div>
      <BasicLayout>
        <div className="relative z-10 h-full flex flex-col-reverse items-center justify-center gap-10 lg:flex-row">

          {/* LEFT - TEXT (from left to right) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left lg:w-1/2"
          >
            <Heading
              level={1}
              className="font-bold !text-e-primary"
            >
              Dirancang untuk Diberikan <br className="hidden md:block" />
              dengan Percaya Diri
            </Heading>

            <Heading
              level={4}
              className="font-medium text-e-gray"
            >
              Souvenir custom untuk momen yang layak dikenang.
            </Heading>
          </motion.div>

          {/* RIGHT - IMAGE (from right to left) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="flex justify-center lg:w-1/2"
          >
            <Image
              src="/images/background/hero.webp"
              alt="Hero Image"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </motion.div>

        </div>
      </BasicLayout>
    </section>
  );
}