import React from "react";
import UNlogo from "../../assets/UN-Women.png"

export default function Footer() {
    return (
        <footer className="mt-10 bg-[#e9e9e9] border-t border-black/10">
            <div className="mx-auto max-w-[1200px] px-4">
                {/* Increased height */}
                <div className="py-12 grid md:grid-cols-2 gap-6 items-center">
                    <div className="flex items-center gap-6">
                        {/* Increased logo size */}
                        <img src={UNlogo} alt="Partner 1" className="h-14 w-auto bg-white rounded" />
                    </div>
                    {/* Increased text size */}
                    <div className="text-sm text-gray-700 leading-6">
                        <p>©2025 African Union Commission (WGYD, HHSD) & AU CIEFFA. All rights reserved.</p>
                        <p>In partnership with the World Bank under the EAGER Programme.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
