import React from "react";

export default function PartnersPanel() {
    return (
        <div className="mx-auto max-w-[1200px] mt-5 rounded-[10px] shadow-sm border border-black/10 bg-white p-12 sm:p-16 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 items-start">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-extrabold">MEET OUR PARTNERS</div>
                </div>
                <div className="text-[15px] leading-6 flex flex-col justify-between">
                    <div className="self-start text-left">
  <div className="flex items-start gap-4">
    <div className="mt-1 text-3xl">⬅️</div>

    <div className="max-w-[720px]">
      <p>
        <span className="underline">VISIT!</span>
      </p>

      <p className="mt-2">
        The Egumeni is convened by the African Union (WGYD, HHSD, AU CIEFFA) with the World Bank and 
  EAGER country teams (Madagascar, Mozambique) to strengthen regional coordination on GEWE and 
  gender-responsive education.
      </p>

      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          <a className="text-[#1a56db] underline">
            About the Egumeni (Community of Practice)
          </a>
        </li>
        <li>
          <a className="text-[#1a56db] underline">AUC partners: WGYD • HHSD • AU CIEFFA!</a>
        </li>
        <li>
          <a className="text-[#1a56db] underline">EAGER countries: Madagascar • Mozambique</a>
        </li>
      </ul>
    </div>
  </div>
</div>

                    <div className="mt-4 flex justify-end">
                        <a href="" className=" text-[#1a56db] underline font-semibold px-5 py-2 rounded-md shadow">
                            SIGN UP FOR MORE HERE!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
