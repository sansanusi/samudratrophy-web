import { Suspense } from "react";
import { Metadata } from "next";
import Produk from "@/components/view/Product/Product";
import Spinner from "@/components/layout/Spinner";

export const metadata: Metadata = {
  title: "Produk - Samudra Trophy",
  description:
    "Solusi Souvenir di Kota Yogyakarta",
  alternates: {
    canonical: "https://samudratrophy.com",
  },
};

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <Produk />
      </Suspense>
    </main>
  );
}
