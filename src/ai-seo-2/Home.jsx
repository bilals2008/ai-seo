// File: src/ai-seo-2/Home.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Features from "./features/Features";
import Client from "./Client/Client";
import Pricing from "./Pricing/Pricing";

function Home() {
  return (
    <div className="bg-[#05020a] text-white h-auto pb-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto relative pt-2">
        <div className="w-11/12 border border-white/30 rounded-md mx-auto space-y-10">
          <Navbar seprator={false} />
        </div>
      </div>
      <Hero />
      <Features />
      <div className="py-10">
        <Client />
      </div>
      <Pricing />
    </div>
  );
}

export default Home;
