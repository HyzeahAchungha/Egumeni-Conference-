// import React from "react";
// import hands from "../../assets/holding-hands-table.jpg";

// export default function HeroCard() {
//   return (
//     <div className="mx-auto max-w-[1200px] mt-5 rounded-[10px] shadow-sm border border-black/10 bg-white p-5 sm:p-6">
//       <div className="relative overflow-hidden rounded-[8px]">
//         <img
//           src={hands}
//           alt="Welcome background"
//           className="h-[200px] sm:h-[240px] md:h-[280px] w-full object-cover rounded-[8px]"
//         />
//         <div className="absolute inset-0 rounded-[8px] bg-black/35" />

//         {/* Centered on mobile; left-aligned from sm+ */}
//         <div className="absolute inset-0 flex flex-col justify-end gap-3 text-white px-5 sm:px-6 pb-8 md:pb-10
//                         items-center text-center sm:items-start sm:text-left">
//           <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight drop-shadow">
//             Welcome to SHINE!
//           </h1>

//           <p className="text-base sm:text-lg opacity-95">
//             You are not logged in yet
//           </p>

//           {/* Buttons: full-width on mobile (same width), auto on sm+ */}
//           <div className="mt-2 flex w-full max-w-[560px] flex-col gap-3 sm:mt-1 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:justify-start">
//             <button
//               className="
//                 w-full sm:w-auto
//                 rounded-md bg-[#1f6fb2] hover:bg-[#1b5f98]
//                 text-white text-base sm:text-base
//                 px-6 py-2 shadow
//                 "
//             >
//               Log in
//             </button>

//             <button
//               className="
//                 w-full sm:w-auto
//                 rounded-md bg-white/95 hover:bg-white text-gray-900
//                 text-base sm:text-base
//                 px-6 shadow
//                 "
//             >
//               Not a member yet? Join the community!
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import hands from "../../assets/holding-hands-table.jpg";
import {  Link } from "react-router-dom";
export default function HeroCard() {
  return (
    <div className="mx-auto max-w-[1200px] mt-5 rounded-[10px] shadow-sm border border-black/10 bg-white p-5 sm:p-6">
      <div className="relative overflow-hidden rounded-[8px]">
        <img
          src={hands}
          alt="Welcome background"
          className="h-[230px] sm:h-[240px] md:h-[280px] w-full object-cover rounded-[8px]"
        />
        {/* Slightly darker overlay for readability */}
        <div className="absolute inset-0 rounded-[8px] bg-black/40" />

        {/* Centered on mobile; left-aligned from sm+ */}
        <div className="absolute inset-0 flex flex-col justify-end gap-2 sm:gap-3 text-white px-5 sm:px-6 pb-8 md:pb-10 items-center text-center sm:items-start sm:text-left">
          <h1 className="text-[22px] sm:text-4xl font-extrabold leading-snug drop-shadow">
            Welcome to SHINE!
          </h1>

          <p className="text-base sm:text-lg opacity-95">
            You are not logged in yet
          </p>

          {/* Buttons: full-width on mobile (same width), auto on sm+ */}
          <div className="mt-2 flex w-full max-w-[360px] flex-col gap-3 sm:mt-1 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3 sm:justify-start">
            <button
              
            >
              <Link to="/login" className="
                w-full sm:w-auto
                rounded-md bg-[#1f6fb2] hover:bg-[#1b5f98]
                text-white text-[16px] px-6 py-3 shadow
              ">
                                                   Log in
                  </Link>
            </button>

            <button
              className="
                w-full sm:w-auto
                rounded-md bg-white/95 hover:bg-white text-gray-900
                text-[16px] px-6  shadow
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
