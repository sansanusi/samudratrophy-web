"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductDetail } from "@/services/product.service";
import { Product, ProductPaginateResponse, ProductQueryParams } from "@/types/product";

export const useProduct = (params?: ProductQueryParams) => {
    return useQuery<ProductPaginateResponse>({
        queryKey: ["products", params],
        queryFn: () => getProducts(params),
    });
};

export const useProductDetail = (slug?: string) => {
    return useQuery<Product>({
        queryKey: ["product-detail", slug],
        queryFn: () => getProductDetail(slug as string),
        enabled: !!slug,
    });
};