import { Metadata } from "next";
import Produk from "@/components/view/Produk/Product";

export const metadata: Metadata = {
  title: "Samudra Trophy: Produk",
  description:
    "Solusi Souvenir di Kota Yogyakarta",
  alternates: {
    canonical: "https://samudratrophy.com",
  },
};

export default function Home() {
  return (
    <main>
      <Produk />
    </main>
  );
}
