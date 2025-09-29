import React from "react";
import { useTranslation } from "react-i18next";

export default function ParticipateBanner() {
     const { t } = useTranslation("common");
    return (
        <div className="mx-auto max-w-[1200px] mt-5">
            <div className="rounded-[10px] overflow-hidden shadow-sm border border-black/10">
                <div className="bg-gradient-to-b from-[#2A2E6E] to-[#2A2E6E] text-white p-10 sm:p-12 md:p-16 relative">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">{t("participate.heading")}</h2>
                    <p className="mt-2 text-base sm:text-lg md:text-xl max-w-4xl">
                        {t("participate.desc")}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                        <button className="rounded-md bg-[#F39A22] hover:bg-[#F39A22] text-white text-md px-3 py-1.5 shadow"> {t("participate.btnObjectives")}</button>
                    
                    </div>

                </div>
            </div>
        </div>
    );
}
    