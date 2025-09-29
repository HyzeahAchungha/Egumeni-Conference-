// src/Pages/Gallery/Gallery.jsx
import React, { useMemo, useState, useEffect, useCallback } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import Speaker1 from "../../assets/Speakers/Prudence.jpg"
import Speaker2 from "../../assets/Speakers/Doris.jpg"
import Speaker3 from "../../assets/Speakers/King.jpg"
import Speaker4 from "../../assets/Speakers/Sherin.jpg"
import Speaker5 from "../../assets/Speakers/Betty.webp"
import Speaker6 from "../../assets/Speakers/Angela.jpg"
import Speaker7 from "../../assets/Speakers/Eunice.jpg"
import Speaker8 from "../../assets/Speakers/Brenda.jpeg"
import Workshop1 from "../../assets/Workshop/FK6A0001.jpg"
import Workshop2 from "../../assets/Workshop/FK6A0003.jpg"
import Workshop3 from "../../assets/Workshop/FK6A0005.jpg"
import Workshop4 from "../../assets/Workshop/FK6A0006.jpg"
import Workshop5 from "../../assets/Workshop/FK6A0007.jpg"
import { useTranslation } from "react-i18next";

// Your raw items can keep any labels; we'll normalize to just 2 categories.
const IMAGES = [
    { id: 1, src: Speaker1, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 2, src: Speaker2, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 3, src: Speaker3, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 4, src: Speaker4, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 5, src: Speaker5, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 6, src: Speaker6, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 7, src: Speaker7, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 8, src: Speaker8, alt: "Panel discussion", caption: "Panel discussion", category: "Speaker" },
    { id: 9, src: Workshop1, alt: "Community dialogue", caption: "Community dialogue", category: "Workshop" },
    { id: 10, src: Workshop2, alt: "Community dialogue", caption: "Community dialogue", category: "Workshop" },
    { id: 11, src: Workshop3, alt: "Community dialogue", caption: "Community dialogue", category: "Workshop" },
    { id: 12, src: Workshop4, alt: "Community dialogue", caption: "Community dialogue", category: "Workshop" },
    { id: 13, src: Workshop5, alt: "Community dialogue", caption: "Community dialogue", category: "Workshop" },
];


// 🔽 Force only 2 categories
const CATEGORIES = ["All", "Workshop", "Speaker"];

// Normalize: if original category/caption includes "workshop", map to Workshops; else Speakers
const normalizeCategory = (item) => {
    const text = `${item.category ?? ""} ${item.caption ?? ""}`.toLowerCase();
    return text.includes("workshop") ? "Workshop" : "Speaker";
};

export default function Gallery() {
    const [filter, setFilter] = useState("All");
    const [activeIndex, setActiveIndex] = useState(-1);
      const { t } = useTranslation("common"); // -1 = closed

    // Build a normalized list with only the 2 categories
    const ITEMS = useMemo(
        () => IMAGES.map((i) => ({ ...i, category: normalizeCategory(i) })),
        []
    );

    const filtered = useMemo(
        () => (filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
        [filter, ITEMS]
    );

    const openLightbox = (index) => setActiveIndex(index);
    const closeLightbox = () => setActiveIndex(-1);
    const goPrev = useCallback(() => setActiveIndex((i) => (i > 0 ? i - 1 : i)), []);
    const goNext = useCallback(
        () => setActiveIndex((i) => (i < filtered.length - 1 ? i + 1 : i)),
        [filtered.length]
    );

    useEffect(() => {
        if (activeIndex < 0) return;
        const onKey = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activeIndex, goPrev, goNext]);

    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 py-8">
                <div className="flex items-center justify-between gap-3">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("gallery.title")}</h1>
                </div>

                {/* Filters: only Workshops / Speakers (+ All) */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {CATEGORIES.map((key) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={[
                                "rounded-full px-4 py-1.5 text-sm border shadow-sm",
                                filter === key
                                    ? "bg-[#2A2E6E] text-white border-transparent"
                                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50",
                            ].join(" ")}
                            aria-pressed={filter === key}
                        >
                        {t(`gallery.filters.${key}`, { defaultValue: key })}


                        </button>
                    ))}
                </div>

                {/* Grid */}
                <section
                    className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    aria-label="Image gallery"
                >
                    {filtered.map((img, idx) => (
                        <figure
                            key={img.id}
                            className="group relative overflow-hidden rounded-lg border border-black/10 bg-white"
                        >
                            <button
                                onClick={() => openLightbox(idx)}
                                className="block w-full h-full text-left"
                                aria-label={`Open image: ${img.alt}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="h-40 sm:h-44 md:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/45 text-white text-xs sm:text-sm px-2 py-1.5">
                                    {img.caption} <span className="opacity-80">• {img.category}</span>
                                </figcaption>
                            </button>
                        </figure>
                    ))}
                </section>

                {/* Lightbox */}
                {activeIndex >= 0 && (
                    <Lightbox
                        items={filtered}
                        index={activeIndex}
                        onClose={closeLightbox}
                        onPrev={goPrev}
                        onNext={goNext}
                    />
                )}
            </main>

            <Footer />
        </>
    );
}

function Lightbox({ items, index, onClose, onPrev, onNext }) {
    const item = items[index];

    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
        >
            {/* Close */}
            <button
                onClick={onClose}
                aria-label="Close lightbox"
                className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" />
                </svg>
            </button>

            {/* Prev */}
            <button
                onClick={onPrev}
                aria-label="Previous image"
                disabled={index === 0}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40"
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Next */}
            <button
                onClick={onNext}
                aria-label="Next image"
                disabled={index === items.length - 1}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40"
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                </svg>
            </button>

            {/* Image */}
            <figure className="max-w-[95vw] max-h-[85vh]">
                <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-[75vh] max-w-full object-contain rounded-md shadow-2xl"
                />
                <figcaption className="mt-3 text-center text-white/90 text-sm">
                    {item.caption} <span className="opacity-70">• {item.category}</span>
                </figcaption>
            </figure>
        </div>
    );
}
