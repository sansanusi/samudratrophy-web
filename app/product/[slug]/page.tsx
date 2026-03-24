import { Suspense } from "react";
import { Metadata } from "next";
import ProductDetail from "@/components/view/Product/ProductDetail";
import Spinner from "@/components/layout/Spinner";
import { getProductDetail } from "@/services/product.service";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // WAJIB di Next terbaru

  const product = await getProductDetail(slug);
  const name = product?.name || "Produk";

  const keywords = [
    name,
    `${name} murah`,
    `${name} custom`,
    `jual ${name}`,
    `${name} berkualitas`,
    "trophy",
    "plakat",
    "piala",
    "souvenir",
    "samudra trophy",
  ];

  return {
    title: `${name} - Samudra Trophy`,
    description: `Produk kategori ${name} terbaik di Samudra Trophy`,
    keywords,
    alternates: {
      canonical: `https://samudratrophy.com/product/${slug}`,
    },
    openGraph: {
      title: `${name} - Samudra Trophy`,
      description: `Produk kategori ${name} terbaik dan custom di Samudra Trophy`,
      url: `https://samudratrophy.com/product/${slug}`,
      siteName: "Samudra Trophy",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <ProductDetail />
      </Suspense>
    </main>
  );
}
