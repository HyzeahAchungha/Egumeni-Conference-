import React from "react";
import { useNavigate } from "react-router-dom";
import hands from "../../assets/holding-hands-table.jpg";

export default function HeroCard() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-[1200px] mt-5">
      <div className="relative rounded-[10px] shadow-sm border border-black/10 overflow-hidden">
        <img
          src={hands}
          alt="Welcome background"
          className="h-[250px] sm:h-[240px] md:h-[280px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div
          className="
            absolute inset-0 flex flex-col justify-end gap-3 text-white
            px-5 sm:px-6 pb-8 md:pb-10
            items-center text-center sm:items-start sm:text-left
          "
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight drop-shadow ">
            Egumeni: EAGER Knowledge Hub
          </h1>

          <p className="text-base sm:text-lg opacity-95">You are not logged in yet</p>

          <div className="mt-2 flex w-full max-w-[560px] flex-col gap-3 sm:mt-1 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:justify-start">
            <button
              onClick={() => navigate("/login")}
              className="
                w-full sm:w-auto
                rounded-md bg-[#F39A22] hover:bg-[#e48e1f]
                text-white text-base
                px-6 py-1.5 shadow
              "
            >
              Log in
            </button>

            <button
              className="
                w-full sm:w-auto
                rounded-md bg-white/95 hover:bg-white text-gray-900
                text-base
                px-6 shadow py-1.5 sm:py-2.5
              "
            >
              Not a member yet? Join the community!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
