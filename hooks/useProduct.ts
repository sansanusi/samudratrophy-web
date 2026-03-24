"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductDetail, getCategoryTree } from "@/services/product.service";
import { Product, ProductQueryParams } from "@/types/product";
import { CategoryTree } from "@/types/category";

export const useProduct = (params?: ProductQueryParams) => {
    return useQuery({
        queryKey: ["products", params],
        queryFn: () => getProducts(params),
        //   keepPreviousData: true, // 🔥 anti flicker
        staleTime: 1000 * 60 * 5, // 🔥 cache 5 menit
    });
};

export const useProductDetail = (slug?: string) => {
    return useQuery<Product>({
        queryKey: ["product-detail", slug],
        queryFn: () => getProductDetail(slug as string),
        enabled: !!slug,
    });
};

export const useCategoryTree = () => {
    return useQuery<CategoryTree[]>({
        queryKey: ["category-tree"],
        queryFn: getCategoryTree,
        staleTime: 1000 * 60 * 10, // 10 menit (jarang berubah)
    });
};