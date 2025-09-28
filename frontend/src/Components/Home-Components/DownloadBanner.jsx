import React from "react";
import shine from "../../assets/shine-app.png";

export default function DownloadBanner() {
  return (
    <div className="mx-auto max-w-[1200px] mt-6">
      <div className="rounded-[10px] overflow-hidden shadow-sm border border-black/10">
        <div className="relative bg-gradient-to-r from-[#2A2E6E] via-[#2A2E6E] to-[#2A2E6E]">
          {/* bump overall height a little */}
          <div className="grid md:grid-cols-2 gap-6 min-h-[150px] sm:min-h-[260px] md:min-h-[250px]">
            <div className="p-8 sm:p-12 text-white py-10 sm:py-14"> {/* ↑ extra vertical padding */}
              <h3 className="text-3xl font-extrabold tracking-wide">DOWNLOAD</h3>
              <p className="mt-1 text-md sm:text-lg">Key documents for the 1–2 Oct 2025 Egumeni & Coordination Meeting</p>
              <div className="mt-6 flex gap-3">
                <button className="rounded-md bg-[#F39A22] hover:bg-[#F39A22] text-white text-md px-3 py-2 shadow">
                  Concept Note (PDF)
                </button>
                <button className="rounded-md bg-white/95 hover:bg-white text-gray-900 text-md px-3 py-2 shadow">
                  Draft Agenda (PDF)
                </button>
              </div>
            </div>

            {/* Right column reserved (optional image/graphic) */}
            {/* <div className="min-h-[220px] sm:min-h-[260px] md:min-h-[300px]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
