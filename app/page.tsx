import { Metadata } from "next";
// import WhatsApp from "@/components/layout/WhatsApp";
import Hero from "@/components/view/Home/Hero";
import Category from "@/components/view/Home/Category";
import Product from "@/components/view/Home/Product";
import WhyUs from "@/components/view/Home/WhyUs";
import Step from "@/components/view/Home/Step";
import ClientSection from "@/components/view/Home/ClientSection";
import Testimoni from "@/components/view/Home/Testimoni";

export const metadata: Metadata = {
  title: "Samudra Trophy",
  description:
    "Solusi Souvenir di Kota Yogyakarta",
  alternates: {
    canonical: "https://samudratrophy.com",
  },
};

export default function Home() {
  return (
    <main>
      {/* <WhatsApp /> */}
      <Hero />
      <Category />
      <Product />
      <WhyUs />
      <Step />
      <ClientSection />
      <Testimoni />
    </main>
  );
}
