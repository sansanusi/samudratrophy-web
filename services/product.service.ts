import { api } from "@/lib/axios";
import { Product, ProductPaginateResponse, ProductQueryParams } from "@/types/product";
import { CategoryTree } from "@/types/category";
import { buildQuery } from "@/lib/buildQuery";

// ======================
// GET PRODUCTS
// ======================
export const getProducts = async (
    params?: ProductQueryParams
): Promise<ProductPaginateResponse> => {
    const query = buildQuery(params);
    const res = await api.get(`/product?${query}`);
    return res.data;
};

// ======================
// GET PRODUCT DETAIL
// ======================
export const getProductDetail = async (slug: string): Promise<Product> => {
    const res = await api.get<Product>(`/product/${slug}`);
    return res.data;
};

// ======================
// GET CATEGORY TREE
// ======================

export const getCategoryTree = async (): Promise<CategoryTree[]> => {
    const res = await api.get<CategoryTree[]>(`/product/category-tree`);
    return res.data;
};