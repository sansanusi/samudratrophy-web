"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductDetail } from "@/services/product.service";
import { Product, ProductPaginateResponse, ProductQueryParams } from "@/types/product";

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