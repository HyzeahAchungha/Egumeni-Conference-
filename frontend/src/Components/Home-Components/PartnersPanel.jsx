import React from "react";

export default function PartnersPanel() {
  return (
    <div className="mx-auto max-w-[1200px] mt-5 rounded-[10px] shadow-sm border border-black/10 bg-white p-12 sm:p-16 md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 items-start">
        {/* Left: Heading */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold">OBJECTIVES</div>
        </div>

        {/* Right: Content */}
        <div className="text-[15px] leading-6 flex flex-col justify-between">
          <div className="self-start text-left">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-3xl">⬅️</div>

              <div className="max-w-[720px]">
                <p className="font-medium">
                  The Egumeni &amp; Coordination Meeting (1–2 Oct 2025, Addis Ababa) will align partners,
                  finalize governance and working modalities, and validate the 2025 roadmap.
                </p>

                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    Align AUC, AU CIEFFA, World Bank and country teams on roles, responsibilities and shared objectives for the Community of Practice.
                  </li>
                  <li>
                    Develop the 2025 Egumeni roadmap, workplan, timeline and deliverables.
                  </li>
                  <li>
                    Build consensus on scope of work, governance, coordination structures and communication protocols.
                  </li>
                  <li>
                    Identify logistical, technical and financial needs, risks and mitigation strategies for effective operationalisation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3 justify-end">
            <a
              href="#"
              className="rounded-md bg-[#2A2E6E] hover:bg-[#23275e] text-white text-sm px-4 py-2 shadow"
            >
              View full objectives
            </a>
            <a
              href="#"
              className="rounded-md bg-[#F39A22] hover:bg-[#e48e1f] text-white text-sm px-4 py-2 shadow"
            >
              Register / Express Interest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
