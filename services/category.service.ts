import { api } from "@/lib/axios";
import { Product, ProductPaginateResponse, ProductQueryParams } from "@/types/product";
import { buildQuery } from "@/lib/buildQuery";

export const getProducts = async (
    params?: ProductQueryParams
): Promise<ProductPaginateResponse> => {
    const query = buildQuery(params);
    const res = await api.get(`/product?${query}`);
    return res.data;
};

export const getProductDetail = async (slug: string): Promise<Product> => {
    const res = await api.get<Product>(`/product/${slug}`);
    return res.data;
};