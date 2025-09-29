// src/Pages/Gallery/Gallery.jsx
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";

import Gallery1 from "../../assets/gallery1.png";
import Gallery2 from "../../assets/gallery2.png";
import Gallery3 from "../../assets/gallery3.png";
import Gallery4 from "../../assets/gallery4.png"


// Just the images, no categories/filters
const IMAGES = [
  { id: 1, src: Gallery1, alt: "Speaker"  },
  { id: 2, src: Gallery2, alt: "Speaker" },
  { id: 3, src: Gallery3, alt: "Speaker" },
  { id: 4, src: Gallery4, alt: "Speaker" },
  
];

export default function Gallery() {
  const { t } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState(-1); // -1 = closed

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(-1);
  const goPrev = useCallback(() => setActiveIndex((i) => (i > 0 ? i - 1 : i)), []);
  const goNext = useCallback(
    () => setActiveIndex((i) => (i < IMAGES.length - 1 ? i + 1 : i)),
    []
  );

  // Keyboard nav for lightbox
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
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t("gallery.title", { defaultValue: "Gallery" })}
          </h1>
        </div>

        {/* Grid (no filters) */}
        <section
          className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          aria-label="Image gallery"
        >
          {IMAGES.map((img, idx) => (
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
                  {img.caption}
                </figcaption>
              </button>
            </figure>
          ))}
        </section>

        {/* Lightbox */}
        {activeIndex >= 0 && (
          <Lightbox
            items={IMAGES}
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
          {item.caption}
        </figcaption>
      </figure>
    </div>
  );
}
