import React from "react";
import AU from "../../assets/AU.png";
import WorldBank from "../../assets/Worldbank.svg";
import { useTranslation } from "react-i18next";
export default function Footer() {
   const { t } = useTranslation("common");
   const year = new Date().getFullYear();
  return (
    <footer className="mt-10 bg-[#e9e9e9] border-t border-black/10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="py-12 grid md:grid-cols-2 gap-6 items-center">
          {/* Logos: responsive sizes + wrap on small */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <img
              src={AU}
              alt={t("footer.alt.au")}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain bg-white rounded"
            />
            <img
              src={WorldBank}
              alt={t("footer.alt.worldBank")}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain bg-white rounded"
            />
          </div>

          {/* Text */}
          <div className="text-sm text-gray-700 leading-6 text-center md:text-left">
            <p>{t("footer.rights1", { year })}</p>
            <p>{t("footer.rights2")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
