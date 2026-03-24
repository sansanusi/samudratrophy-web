"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { GalleryImage } from "@/types/gallery";

import "swiper/css";
import "yet-another-react-lightbox/styles.css";

interface ProductGalleryProps {
    images: GalleryImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [mainSwiper, setMainSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">

            <div className="relative bg-white border border-gray-300 rounded-xl overflow-hidden">
                <div className="relative aspect-[3/4]">
                    <Swiper
                        onSwiper={setMainSwiper}
                        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
                        className="absolute inset-0 h-full"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide
                                key={i}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={img?.image}
                                    alt={`Product ${i + 1}`}
                                    fill
                                    priority={i === 0}
                                    sizes="(max-width: 1024px) 100vw, 420px"
                                    className="object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ZOOM */}
                <button
                    onClick={() => setOpen(true)}
                    className="z-10 absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow cursor-pointer"
                >
                    <ZoomIn className="w-5 h-5" />
                </button>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setActiveIndex(i);
                            mainSwiper?.slideTo(i);
                        }}
                        className={`cursor-pointer border rounded-lg p-1 ${i === activeIndex ? "border-blue-600" : "border-gray-200"}`}
                    >
                        <Image
                            src={img?.image}
                            alt={`Thumb ${i + 1}`}
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* LIGHTBOX */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={activeIndex}
                slides={images.map((src) => ({ src: src?.image || "-" }))}
                plugins={[Zoom]}
            />
        </div>
    );
}