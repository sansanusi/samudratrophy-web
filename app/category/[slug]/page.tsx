import { Metadata } from "next";
import CategoryPageSlug from "@/components/view/Category/CategoryPageSlug";

export const metadata: Metadata = {
  title: "Samudra Trophy: Produk Kategori",
  description:
    "Solusi Souvenir di Kota Yogyakarta",
  alternates: {
    canonical: "https://samudratrophy.com",
  },
};

export default function CateggoryBySlug() {
  return (
    <main>
      <CategoryPageSlug />
    </main>
  );
}
