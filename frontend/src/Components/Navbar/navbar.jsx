// src/Components/Navbar/navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGS } from "../../i18n";
import Egumeni from "../../assets/egumeni.png";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const openSearch = () => {
    setSearchOpen(true);
    setMobileOpen(false);
  };
  const closeSearch = () => setSearchOpen(false);

  const handleLangChange = (e) => {
    const code = e.target.value;
    i18n.changeLanguage(code);
    // i18next-browser-languagedetector will persist to localStorage automatically
    // If you want explicit control, uncomment: localStorage.setItem("i18nextLng", code);
  };

  const currentLng = i18n.resolvedLanguage || i18n.language || "en";

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-[#f5f5f5] border-b border-black/10">
        <div className="mx-auto max-w-[1200px] px-4 h-14 flex items-center gap-3">
          {/* Left: Logo */}
<Link to="/" className="flex items-center gap-2" aria-label="EAGER Home">
  <img
    src={Egumeni}
    alt="EAGER — East Africa Girls’ Empowerment and Resilience"
    className="h-8 sm:h-9 md:h-10 w-auto object-contain"
  />
</Link>




          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-[14px] text-gray-800">
            <Link to="/community" className="hover:underline">
              {t("nav.communities")}
            </Link>
            <Link to="/partner" className="hover:underline">
              {t("nav.partner")} ▾
            </Link>
            <Link to="/courses" className="hover:underline">
              {t("nav.courses")} ▾
            </Link>
            <Link to="/gallery" className="hover:underline">
              {t("nav.gallery")}
            </Link>
            <Link to="/about-us" className="hover:underline">
              {t("nav.about")} ▾
            </Link>
            <Link to="/contact-form" className="hover:underline">
              {t("nav.contact")}
            </Link>
            

            {/* Search icon */}
            {/* <button
              onClick={openSearch}
              aria-label="Open search"
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-black/5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button> */}

            <span className="text-gray-300">|</span>

            {/* Language dropdown */}
            <label htmlFor="lang" className="sr-only">{t("nav.selectYourLanguage")}</label>
            <select
              id="lang"
              value={currentLng}
              onChange={handleLangChange}
              className="rounded-md border px-2 py-1 bg-white"
            >
              {Object.entries(LANGS).map(([code, { label }]) => (
                <option key={code} value={code}>{label}</option>
              ))}
            </select>
          </nav>

          {/* Right: Auth */}
          <div className="ml-auto hidden md:flex items-center gap-4 text-[14px]">
            <Link to="/register" className="hover:underline">
              {t("nav.signup")}
            </Link>
            <Link to="/login" className="hover:underline">
              {t("nav.login")}
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="ml-auto md:hidden flex items-center gap-2">
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

        {/* Mobile menu */}
        <div
          className={[
            "md:hidden overflow-hidden border-t border-black/10 bg-white transition-[max-height] duration-300",
            mobileOpen ? "max-h-[520px]" : "max-h-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-[1200px] px-4 py-3">
            <div className="grid gap-1 text-[15px]">
              <Link onClick={() => setMobileOpen(false)} to="/community" className="rounded-md px-2 py-2 hover:bg-gray-50">
                {t("nav.communities")}
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/partners" className="rounded-md px-2 py-2 hover:bg-gray-50">
                {t("nav.partner")}
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/courses" className="rounded-md px-2 py-2 hover:bg-gray-50">
                {t("nav.courses")}
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/about-us" className="rounded-md px-2 py-2 hover:bg-gray-50">
                {t("nav.about")}
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/contact-form" className="rounded-md px-2 py-2 hover:bg-gray-50">
                {t("nav.contact")}
              </Link>
            </div>

            <div className="my-3 h-px bg-black/10" />

            <div className="grid gap-2">
              <Link onClick={() => setMobileOpen(false)} to="/register" className="rounded-md border px-3 py-2 hover:bg-gray-50">
                {t("nav.signup")}
              </Link>
              <Link
                onClick={() => setMobileOpen(false)}
                to="/login"
                className="rounded-md bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
              >
                {t("nav.login")}
              </Link>

              <label className="mt-2 text-xs text-gray-500">{t("nav.language")}</label>
              <select
                className="rounded-md border px-3 py-2"
                value={currentLng}
                onChange={(e) => {
                  handleLangChange(e);
                  setMobileOpen(false);
                }}
              >
                {Object.entries(LANGS).map(([code, { label }]) => (
                  <option key={code} value={code}>{label}</option>
                ))}
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
