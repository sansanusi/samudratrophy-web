import { Metadata } from "next";
import ProductDetail from "@/components/view/Produk/ProductDetail";

export const metadata: Metadata = {
  title: "Samudra Trophy: Produk Detail",
  description:
    "Solusi Souvenir di Kota Yogyakarta",
  alternates: {
    canonical: "https://samudratrophy.com",
  },
};

export default function Home() {
  return (
    <main>
      <ProductDetail />
    </main>
  );
}
