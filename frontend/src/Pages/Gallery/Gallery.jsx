// src/Pages/Gallery/Gallery.jsx
import React, { useMemo, useState, useEffect, useCallback } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";

// TODO: Replace these with your real images (local /assets or URLs)
const IMAGES = [
  { id: 1, src: "/assets/gallery/egumeni-001.jpg", alt: "Plenary session", caption: "Plenary session", category: "Plenary" },
  { id: 2, src: "/assets/gallery/egumeni-002.jpg", alt: "Breakout workshop", caption: "Breakout workshop", category: "Workshops" },
  { id: 3, src: "/assets/gallery/egumeni-003.jpg", alt: "Community dialogue", caption: "Community dialogue", category: "Community" },
  { id: 4, src: "/assets/gallery/egumeni-004.jpg", alt: "Panel discussion", caption: "Panel discussion", category: "Plenary" },
  { id: 5, src: "/assets/gallery/egumeni-005.jpg", alt: "CoP networking", caption: "CoP networking", category: "Networking" },
  { id: 6, src: "/assets/gallery/egumeni-006.jpg", alt: "Team planning", caption: "Team planning", category: "Workshops" },
];

const CATEGORIES = ["All", ...Array.from(new Set(IMAGES.map(i => i.category)))];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(-1); // -1 = closed

  const filtered = useMemo(
    () => (filter === "All" ? IMAGES : IMAGES.filter(i => i.category === filter)),
    [filter]
  );

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(-1);
  const goPrev = useCallback(() => setActiveIndex(i => (i > 0 ? i - 1 : i)), []);
  const goNext = useCallback(() => setActiveIndex(i => (i < filtered.length - 1 ? i + 1 : i)), [filtered.length]);

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
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Gallery</h1>
          
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={[
                "rounded-full px-4 py-1.5 text-sm border shadow-sm",
                filter === cat
                  ? "bg-[#2A2E6E] text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50",
              ].join(" ")}
              aria-pressed={filter === cat}
            >
              {cat}
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
                  {img.caption}
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
          {item.caption} {item.category ? <span className="opacity-70">• {item.category}</span> : null}
        </figcaption>
      </figure>
    </div>
  );
}
