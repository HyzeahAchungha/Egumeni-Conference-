import React from "react";

export default function ParticipateBanner() {
    return (
        <div className="mx-auto max-w-[1200px] mt-5">
            <div className="rounded-[10px] overflow-hidden shadow-sm border border-black/10">
                <div className="bg-gradient-to-b from-[#1c4a7a] to-[#1a3a5f] text-white p-10 sm:p-12 md:p-16 relative">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">PARTICIPATE</h2>
                    <p className="mt-2 text-base sm:text-lg md:text-xl max-w-4xl">
                        NEW DISCUSSION: Supporting CSOs to Deliver Survivor Services and Comprehensive EVAWG Programmes in Fragile Contexts
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                        <button className="rounded-md bg-[#1f6fb2] hover:bg-[#1b5f98] text-white text-md px-3 py-1.5 shadow">Share your thoughts here!</button>
                    
                    </div>

                </div>
            </div>
        </div>
    );
}
    