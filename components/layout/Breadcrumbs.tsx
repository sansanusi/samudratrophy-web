"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import BasicLayout from "./BasicLayout";

interface BreadcrumbsItem {
    label: string;
    href?: string; // jika tidak ada = current page
}

interface BreadcrumbsProps {
    items: BreadcrumbsItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <div className="bg-slate-100">
            <BasicLayout>
                <nav aria-label="Breadcrumbs" className="w-full">
                    <ol className="flex flex-wrap items-center text-sm text-gray-500">
                        {items.map((item, index) => {
                            const isLast = index === items.length - 1;

                            return (
                                <li key={index} className="flex items-center">
                                    {!isLast && item.href ? (
                                        <Link
                                            href={item.href}
                                            className="text-e-primary hover:underline font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-600">
                                            {item.label}
                                        </span>
                                    )}

                                    {!isLast && (
                                        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </BasicLayout>
        </div>
    );
}