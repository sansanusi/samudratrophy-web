import { Metadata } from "next";
import CategoryPage from "@/components/view/Category/CategoryPage";

export const metadata: Metadata = {
  title: "Samudra Trophy: Produk Kategori",
  description:
    "Solusi Souvenir di Kota Yogyakarta",
  alternates: {
    canonical: "https://samudratrophy.com",
  },
};

export default function Category() {
  return (
    <main>
      <CategoryPage />
    </main>
  );
}
