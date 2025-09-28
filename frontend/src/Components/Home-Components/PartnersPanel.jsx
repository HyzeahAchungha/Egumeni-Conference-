import React from "react";

export default function PartnersPanel() {
    return (
        <div className="mx-auto max-w-[1200px] mt-5 rounded-[10px] shadow-sm border border-black/10 bg-white p-12 sm:p-16 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 items-start">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-extrabold">MEET OUR PARTNERS</div>
                </div>
                <div className="text-[15px] leading-6 flex flex-col justify-between">
                    <div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-3xl">⬅️</div>
                            <div>
                                <p><span className="underline">VISIT!</span></p>
                                <p className="mt-2">
                                    <a className="text-[#1a56db] underline">Spotlight Initiative</a> and <a className="text-[#1a56db] underline">ACT</a> are the first partners to launch their own pages on SHINE hub. Don’t miss out the opportunity to learn more about them and to check their curated content and resources.
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>
                                        <a className="text-[#1a56db] underline">Follow Spotlight initiative page here!</a>
                                    </li>
                                    <li>
                                        <a className="text-[#1a56db] underline">Follow ACT page here!</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <a href="" className=" text-[#1a56db] underline font-semibold px-5 py-2 rounded-md shadow">
                            SIGN UP FOR MORE HERE!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
