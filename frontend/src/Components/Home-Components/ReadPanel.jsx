import React from "react";
import women from "../../assets/women.png"

export default function ReadPanel() {
    return (
        <div className="mx-auto max-w-[1200px] mt-6">
            <div className="rounded-[10px] overflow-hidden shadow-sm border border-black/10 relative">
                {/* Increased height */}
                <img src={women} alt="People reading resources" className="h-[260px] w-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                
                {/* Text moved down with flexbox */}
                <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                    <h3 className="text-3xl font-extrabold tracking-wide">READ</h3>
                    <p className="mt-1">Background, Rationale & Methodology for the Egumeni Knowledge Platform</p>
                    <div className="mt-3 flex gap-3">
                        <button className="rounded-md bg-[#F39A22] hover:bg-[#F39A22    ] text-white text-md px-3 py-1.5 shadow">Background & Rationale</button>
                        <button className="rounded-md bg-white/95 hover:bg-white text-gray-900 text-md px-3 py-1.5 shadow">Methodology / Format</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
