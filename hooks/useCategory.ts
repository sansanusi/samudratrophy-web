"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories, getCategoryDetail } from "@/services/category.service";
import { Category, CategoryQueryParams } from "@/types/category";

export const useCategory = (params?: CategoryQueryParams) => {
    return useQuery({
        queryKey: ["categories", params],
        queryFn: () => getCategories(params),
        staleTime: 1000 * 60 * 5, // 🔥 cache 5 menit
    });
};

export const useCategoryDetail = (slug?: string) => {
    return useQuery<Category>({
        queryKey: ["category-detail", slug],
        queryFn: () => getCategoryDetail(slug as string),
        enabled: !!slug,
    });
};