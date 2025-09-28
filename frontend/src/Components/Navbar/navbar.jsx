import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  // --- open/close helpers
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-[#f5f5f5] border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-4 h-12 flex items-center gap-4 text-[13px]">
          <Link
            to="/"
            className="flex items-center font-extrabold text-[28px] tracking-tight text-[#ff7c3b] leading-none"
          >
            SHINE
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-gray-800">
            <Link to="/community" className="hover:underline">
              Communities | Themes
            </Link>
            <Link to="/partners" className="hover:underline">
              Partners ▾
            </Link>
            <Link to="/explore" className="hover:underline">
              Explore ▾
            </Link>
            <Link to="/about-us" className="hover:underline">
              About Us▾
            </Link>
            <Link to="/contact-form" className="hover:underline">
              Contact Us
            </Link>

            {/* Search icon button */}
            <button
              onClick={openSearch}
              aria-label="Open search"
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-black/5"
            >
              {/* magnifier */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>

            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              English ▾
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Link to="/signup" className="hover:underline">
              Sign up
            </Link>
            <Link to="/login" className="hover:underline">
              Log in
            </Link>
            <a href="#" className="hidden sm:flex items-center gap-1 hover:underline">
              <span>Select your language ▾</span>
            </a>

            {/* Mobile search icon too */}
            <button
              onClick={openSearch}
              aria-label="Open search"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN SEARCH OVERLAY */}
      {searchOpen && <SearchOverlay onClose={closeSearch} />}
    </>
  );
}

/* ---------- Overlay Component ---------- */

function SearchOverlay({ onClose }) {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // autofocus + lock scroll + ESC to close
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const onSubmit = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim() || "";
    onClose();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      {/* Close button (top-right) */}
      <button
        onClick={onClose}
        aria-label="Close search"
        className="absolute right-6 top-6 h-10 w-10 rounded-full hover:bg-black/5 flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Centered search row */}
      <div className="mx-auto max-w-[900px] px-6 pt-24 sm:pt-28">
        <form onSubmit={onSubmit} className="flex items-center gap-6">
          <div className="flex-1">
            <input
              ref={inputRef}
              name="q"
              type="search"
              placeholder="What are you looking for ?"
              className="w-full bg-transparent text-[20px] sm:text-[22px] outline-none border-b border-black placeholder:text-gray-500 pb-2"
            />
          </div>

          {/* Large magnifier icon */}
          <button
            type="submit"
            aria-label="Search"
            className="shrink-0 h-12 w-12 rounded-full hover:bg-black/5 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
