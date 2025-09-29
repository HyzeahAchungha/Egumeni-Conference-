import React from "react";
import { useTranslation } from "react-i18next";
import MeetImage from "../../assets/meet.png"

export default function MeetPanels() {
    const { t } = useTranslation("common");
    return (
        <div className="mx-auto max-w-[1200px] mt-6">
            <div className="rounded-[10px] overflow-hidden shadow-sm border border-black/10 relative">
                {/* Centralized image */}
                <img src={MeetImage} alt={t("meet.alt")} className="h-[250px] w-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/35" />
                
                {/* Text moved down */}
                <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                    <h3 className="text-3xl font-extrabold tracking-wide">{t("meet.heading")}</h3>
                    <p className="mt-1">{t("meet.desc")}</p>
                    <div className="mt-3 flex gap-3 flex-wrap">
                        <button className="rounded-md bg-[#F39A22] hover:bg-[#F39A22] text-white text-md px-3 py-1.5 shadow">
                             {t("meet.btnJoin")}
                        </button>
                        <button className="rounded-md bg-white/95 hover:bg-white text-gray-900 text-md px-3 py-1.5 shadow">
                            {t("meet.btnCoord")}

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
