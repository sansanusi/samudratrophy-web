import { api } from "@/lib/axios";
import { Category, CategoryPaginateResponse, CategoryQueryParams } from "@/types/category";
import { buildQuery } from "@/lib/buildQuery";

export const getCategories = async (
    params?: CategoryQueryParams
): Promise<CategoryPaginateResponse> => {
    const query = buildQuery(params);
    const res = await api.get(`/category?${query}`);
    return res.data;
};

export const getCategoryDetail = async (slug: string): Promise<Category> => {
    const res = await api.get<Category>(`/category/${slug}`);
    return res.data;
};