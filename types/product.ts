import { CategoryRef, SubcategoryRef } from "./category";
import { GalleryImage } from "./gallery";
import { PaginateResult } from "./paginate";

export interface Product {
    _id: string;

    name: string;
    slug: string;

    image: string;
    imageId: string;
    imageProvider: string;

    gallery: GalleryImage[];

    price: number;

    size: string;
    material: string;
    productionTech: string;
    description: string;

    rating: number;

    categoryRef: CategoryRef[];
    subcategoryRef: SubcategoryRef[];

    isAvailable: boolean;
    listNumber: number;

    createdAt: string;
    updatedAt: string;
}

export interface ProductQueryParams {
    page?: number;
    perPage?: number;
    search?: string;
    category?: string;
    subcategory?: string;
    isAvailable?: boolean;
    sort?: string;
}

export type ProductPaginateResponse = PaginateResult<Product>;