import React, { useState } from "react";
import { Link } from "react-router-dom";
import EagerLogo from "../../assets/eager-logo.png"

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openSearch = () => {
    setSearchOpen(true);
    setMobileOpen(false); // close mobile menu if open
  };
  const closeSearch = () => setSearchOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-[#f5f5f5] border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-4 h-14 flex items-center gap-3">
          {/* Left: Logo */}
         <Link to="/" className="flex items-center gap-2" aria-label="EAGER Home">
  <img
    src={EagerLogo}
    alt="EAGER — East Africa Girls’ Empowerment and Resilience"
    className="h-8 sm:h-9 md:h-10 w-auto object-contain -my-1"
  />
</Link>


          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-[14px] text-gray-800">
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
              About Us ▾
            </Link>
            <Link to="/contact-form" className="hover:underline">
              Contact Us
            </Link>

            {/* Search icon */}
            <button
              onClick={openSearch}
              aria-label="Open search"
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-black/5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>

            <span className="text-gray-300">|</span>
            <button className="hover:underline">English ▾</button>
          </nav>

          {/* Right: Auth + mobile search/hamburger */}
          <div className="ml-auto hidden md:flex items-center gap-4 text-[14px]">
            <Link to="/register" className="hover:underline">
              Sign up
            </Link>
            <Link to="/login" className="hover:underline">
              Log in
            </Link>
            <button className="hidden sm:flex items-center gap-1 hover:underline">
              <span>Select your language ▾</span>
            </button>
          </div>

          {/* Mobile actions */}
          <div className="ml-auto md:hidden flex items-center gap-2">
            {/* Mobile search */}
            <button
              onClick={openSearch}
              aria-label="Open search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5"
            >
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (slide-down) */}
        <div
          className={[
            "md:hidden overflow-hidden border-t border-black/10 bg-white transition-[max-height] duration-300",
            mobileOpen ? "max-h-[420px]" : "max-h-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-[1200px] px-4 py-3">
            <div className="grid gap-1 text-[15px]">
              <Link onClick={() => setMobileOpen(false)} to="/community" className="rounded-md px-2 py-2 hover:bg-gray-50">
                Communities | Themes
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/partners" className="rounded-md px-2 py-2 hover:bg-gray-50">
                Partners
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/explore" className="rounded-md px-2 py-2 hover:bg-gray-50">
                Explore
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/about-us" className="rounded-md px-2 py-2 hover:bg-gray-50">
                About Us
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/contact-form" className="rounded-md px-2 py-2 hover:bg-gray-50">
                Contact Us
              </Link>
            </div>

            <div className="my-3 h-px bg-black/10" />

            <div className="grid gap-2">
              <Link onClick={() => setMobileOpen(false)} to="/signup" className="rounded-md border px-3 py-2 hover:bg-gray-50">
                Sign up
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                to="/login"
                className="rounded-md bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
              >
                Log in
              </Link>

              <label className="mt-2 text-xs text-gray-500">Language</label>
              <select className="rounded-md border px-3 py-2">
                <option>English</option>
                <option>Français</option>
                <option>Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN SEARCH OVERLAY */}
      {searchOpen && <SearchOverlay onClose={closeSearch} />}
    </>
  );
}
