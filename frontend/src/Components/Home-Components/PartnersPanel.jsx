import React from "react";
import { useTranslation } from "react-i18next";
export default function PartnersPanel() {
   const { t } = useTranslation("common");
  return (
    <div className="mx-auto max-w-[1200px] mt-5 rounded-[10px] shadow-sm border border-black/10 bg-white p-12 sm:p-16 md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 items-start">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold"> {t("partnersPanel.heading")}</div>
        </div>
        <div className="text-[15px] leading-6 flex flex-col justify-between">
          <div className="self-start text-left">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-3xl">⬅️</div>

              <div className="max-w-[720px]">
                <p>
                  <span className="underline">{t("partnersPanel.visit")}</span>
                </p>

                <p className="mt-2">
                  {t("partnersPanel.blurb")}
                </p>

                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <a className="text-[#1a56db] underline">
                      {t("partnersPanel.linkAbout")}

                    </a>
                  </li>
                  <li>
                    <a className="text-[#1a56db] underline">{t("partnersPanel.linkAucPartners")}</a>
                  </li>
                  <li>
                    <a className="text-[#1a56db] underline">{t("partnersPanel.linkEagerCountries")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <a href="" className=" text-[#1a56db] underline font-semibold px-5 py-2 rounded-md shadow">
              {t("partnersPanel.cta")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
