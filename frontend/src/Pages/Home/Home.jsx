import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import HeroCard from "../../Components/Home-Components/HeroCard";
import ParticipateBanner from "../../Components/Home-Components/ParticipateBanner";
import PartnersPanel from "../../Components/Home-Components/PartnersPanel";
import DownloadBanner from "../../Components/Home-Components/DownloadBanner";
import ReadPanel from "../../Components/Home-Components/ReadPanel";
import MeetPanel from "../../Components/Home-Components/MeetPanel"
import EngagePanel from "../../Components/Home-Components/EngagePanel";
import Footer from "../../Components/Footer/Footer";



export default function Home() {
  return (
    <div className="min-h-dvh bg-[#f2f2f2] text-gray-900">
      <Navbar />
      <main>
        <HeroCard />
        <ParticipateBanner />
        <PartnersPanel />
        <DownloadBanner />
        <ReadPanel />
        <MeetPanel />
        <EngagePanel />
      </main>
      <Footer />
    </div>
  );
}