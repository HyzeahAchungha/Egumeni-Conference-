import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer";
import TwoHands from "../../assets/two-hands.jpg";

export default function AboutUs() {
  return (
    <div className="bg-[#f5f6f7] text-gray-800">
      {/* Top nav (yours) */}
      <Navbar />

      {/* Page container */}
      <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6">
        {/* Page label + title */}
        <div className="pt-6 sm:pt-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-500">
            PAGE
          </p>
          <h1 className="mt-1 text-[28px] sm:text-[32px] font-semibold tracking-tight">
            About us
          </h1>
        </div>

        {/* Hero image card (rounded, with double rule at the bottom) */}
        <section className="relative mt-5 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          {/* Image */}
          <div className="aspect-[16/6] sm:aspect-[16/5]">
            <img
              src={TwoHands}
              alt="About us banner"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Thin “double” bars under the image */}
          <div className="h-[6px] bg-[#c9a9a1]" />
          <div className="h-[6px] bg-white" />


        </section>

        {/* Share row (right aligned) */}
        <div className="mt-4 flex items-center justify-end gap-3 text-sm text-gray-600">
          <span className="hidden sm:inline">Share this page</span>
          {/* X icon */}
          <a
            href="#"
            aria-label="Share on X"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-gray-800 hover:bg-gray-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M18.24 2H21l-6.54 7.48L22 22h-6.93l-4.85-6.33L4.6 22H2l7.02-8.02L2 2h6.93l4.51 5.88L18.24 2Zm-1.21 18h1.3L7.06 4h-1.3L17.03 20Z" />
            </svg>
          </a>
          {/* Facebook icon */}
          <a
            href="#"
            aria-label="Share on Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#1877F2] hover:bg-gray-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.05 5.66 21.21 10.44 22v-7.01H7.9v-2.93h2.54V9.83c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.93h-2.3V22C18.34 21.21 22 17.05 22 12.06Z" />
            </svg>
          </a>
        </div>

        {/* Content card */}
        <main className="mt-5 rounded-xl border border-black/10 bg-white p-6 shadow-sm sm:p-7">
          <div className="prose prose-sm max-w-none text-[15px] leading-7 prose-a:text-[#1a56db] prose-a:no-underline hover:prose-a:underline">
            <p className="mb-4">
              Egumeni Hub is convened by the African Union, with support from the World Bank through the EAGER programme, to strengthen regional coordination and dialogue among governments, civil society, development partners, practitioners,
              and researchers working to advance gender-responsive education and women’s empowerment across Africa.
            </p>

            <p className="mb-4">
              EAGER (East Africa Girls’ Empowerment and Resilience) is a World Bank–supported regional programme that advances girls’ and young women’s education and economic empowerment across East Africa. Phase one is implemented by the Republic of Madagascar and the Republic of Mozambique, with the African Union Commission—through the Women, Gender and Youth Directorate (WGYD) in collaboration with the Health, Humanitarian and Social Affairs Directorate (HHSD) and AU CIEFFA—providing regional coordination. The programme aligns with Agenda 2063, Aspiration 6 and the Second Ten-Year Implementation Plan (Moonshot 6) to ensure development that is people-driven, especially by women and youth.

              To optimise design and implementation, EAGER is operationalising the Egumeni Knowledge Platform—a regional Community of Practice (CoP) named from the Siswati word for “a gathering space.” Egumeni convenes programme implementers and partners working on gender-responsive education and GEWE to connect, exchange evidence and lessons, and strengthen institutional capacity across countries.
            </p>

            <p>
              The Egumeni & Coordination Meeting (1–2 Oct 2025, Addis Ababa, Ethiopia) will align partners on roles, governance and working modalities; validate the 2025 roadmap and workplan; and agree on communication, monitoring and coordination structures. Expected outcomes include a final Egumeni Framework, thematic outputs on policy, data systems and institutional capacity, as well as strengthened partnerships among AUC departments, the World Bank and EAGER country actors.
            </p>
          </div>
        </main>

        {/* Footer logos + legal are already in your Footer component */}
        <div className="h-8" />
      </div>

      <Footer />
    </div>
  );
}
