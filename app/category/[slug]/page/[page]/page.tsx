import { Suspense } from "react";
import { Metadata } from "next";
import CategoryPageSlug from "@/components/view/Category/CategoryPageSlug";
import Spinner from "@/components/layout/Spinner";
import { getCategoryTree } from "@/services/product.service";

type Props = {
    params: { slug: string };
};

const findCategory = (categories: any[], slug: string) => {
    for (const cat of categories) {
        if (cat.slug === slug) return cat;

        const sub = cat.subcategory?.find((s: any) => s.slug === slug);
        if (sub) return sub;
    }
    return null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // WAJIB di Next terbaru

    const categories = await getCategoryTree();
    const category = findCategory(categories, slug);

    const name = category?.name || "Kategori Produk";

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
            canonical: `https://samudratrophy.com/category/${slug}`,
        },
        openGraph: {
            title: `${name} - Samudra Trophy`,
            description: `Produk kategori ${name} terbaik dan custom di Samudra Trophy`,
            url: `https://samudratrophy.com/category/${slug}`,
            siteName: "Samudra Trophy",
            type: "website",
        },
    };
}

export default function CateggoryBySlug() {
    return (
        <main>
            <Suspense fallback={<Spinner />}>
                <CategoryPageSlug />
            </Suspense>
        </main>
    );
}
