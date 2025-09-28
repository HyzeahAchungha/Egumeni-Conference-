import React from "react";
import Engage from "../../assets/engage.png";

export default function EngagePanel() {
  return (
    <div className="mx-auto max-w-[1200px] mt-6">
      <div className="relative overflow-hidden rounded-[10px] border border-black/10 shadow-sm">
        {/* Show more of the TOP by lowering the Y% (35% < 62%) */}
        <img
          src={Engage}
          alt="Mural with sunflowers"
          className="
            h-[230px] w-full object-cover
            object-[50%_35%]   /* ↑ move view up; try 30–40% */
          "
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

        {/* Content pinned lower */}
        <div className="absolute inset-0 flex items-end">
          <div className="p-6 pb-10 text-white">
            <h3 className="text-3xl font-extrabold tracking-wide">ENGAGE</h3>
            <button className="mt-3 rounded-md bg-[#245da8] hover:bg-[#1d4e8f] text-white text-sm px-3 py-1.5 shadow">
              Visit our Communities | Themes pages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
