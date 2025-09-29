import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";

const comingSoonGif =
  "https://media.giphy.com/media/3o7aD0JmCw1cS9Wc9C/giphy.gif";

export default function Partner() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top nav */}
      <Navbar />


      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center gap-6">
        <img
          src={comingSoonGif}
         alt={t("partner.alt")}
          className="w-48 sm:w-64 md:w-80 rounded-xl"
        />

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          {t("comingSoon")}
          </h2>
          <p className="text-sm text-gray-500"> {t("partner.subtitle")}
           
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium
                     bg-[#e8ba00] text-white hover:bg-black/85 active:scale-[.99] transition"
        >
       {t("backHome")}
        </Link>
      </main>


      <Footer />
    </div>
  );
}
