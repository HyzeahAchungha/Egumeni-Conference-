import React from "react";
import AU from "../../assets/AU.png"
import WorldBank from "../../assets/Worldbank.svg"

export default function Footer() {
    return (
        <footer className="mt-10 bg-[#e9e9e9] border-t border-black/10">
            <div className="mx-auto max-w-[1200px] px-4">
                {/* Increased height */}
                <div className="py-12 grid md:grid-cols-2 gap-6 items-center">
                    <div className="flex items-center gap-4">
                        {/* Increased logo size */}
                        <img src={AU} alt="Partner 1" className="h-14 w-auto bg-white rounded" />
                         <img src={WorldBank} alt="Partner 1" className="h-14 w-auto bg-white rounded" />
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
