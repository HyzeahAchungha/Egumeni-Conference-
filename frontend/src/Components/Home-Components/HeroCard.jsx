import React from "react";
import hands from '../../assets/holding-hands-table.jpg'


export default function HeroCard() {
    return (
        <div className="mx-auto max-w-[1200px] mt-5 rounded-[10px] shadow-sm border border-black/10 bg-white p-5 sm:p-6">
            <div className="relative overflow-hidden rounded-[8px]">
                {/* Replace src with your hero image */}
                <img src={hands} alt="Welcome background" className="h-[200px] sm:h-[220px] md:h-[270px] w-full object-cover rounded-[8px]" />
                <div className="absolute inset-0 rounded-[8px] bg-black/35" />
                <div className="absolute inset-0 flex flex-col justify-center gap-2 text-white px-5 sm:px-6">
                    <h1 className="text-2xl font-extrabold drop-shadow">Welcome to SHINE!</h1>
                    <p className="opacity-95">You are not logged in yet</p>
                    <div className="mt-2 flex flex-wrap gap-3">
                        <button className="rounded-md bg-[#1f6fb2] hover:bg-[#1b5f98] text-white text-sm px-3 py-1.5 shadow">Log in</button>
                        <button className="rounded-md bg-white/95 hover:bg-white text-gray-900 text-sm px-3 py-1.5 shadow">Not a member yet? Join the community!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}