import React from "react";
import shine from "../../assets/shine-app.png"

export default function DownloadBanner() {
    return (
        <div className="mx-auto max-w-[1200px] mt-6">
            <div className="rounded-[10px] overflow-hidden shadow-sm border border-black/10">
                <div className="relative bg-gradient-to-r from-[#8a2b14] via-[#9c3c20] to-[#c65a3a]">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 sm:p-12 text-white">
                            <h3 className="text-3xl font-extrabold tracking-wide">DOWNLOAD</h3>
                            <p className="mt-1 text-md sm:text-lg">SHINE hub App is available now!</p>
                            <div className="mt-6 flex gap-3">
                                <button className="rounded-md bg-[#245da8] hover:bg-[#1d4e8f] text-white text-md px-3 py-2 shadow">For Android</button>
                                <button className="rounded-md bg-white/95 hover:bg-white text-gray-900 text-md px-3 py-2 shadow">For iPhone</button>
                            </div>
                        </div>
                        {/* Replace src with your phone/app promo image */}
                        <div className="relative min-h-[150px] sm:min-h-[200px] md:min-h-[250px]">
                            <img src={shine} alt="App phone preview" className="absolute inset-0 h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
