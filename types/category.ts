import { PaginateResult } from "./paginate";

export interface Category {
    _id: string;

    name: string;
    slug: string;

    image: string;
    imageId: string;
    imageProvider: string;

    listNumber: number;

    createdAt: string;
    updatedAt: string;
}

export interface CategoryQueryParams {
    page?: number;
    perPage?: number;
    search?: string;
    category?: string;
    subcategory?: string;
    isAvailable?: boolean;
    sort?: string;
}

export type CategoryPaginateResponse = PaginateResult<Category>;

export interface CategoryRef {
    _id: string;
    name: string;
    slug: string;
}

export interface SubcategoryRef {
    _id: string;
    name: string;
    slug: string;
}