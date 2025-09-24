// File: src/ai-seo-2/Home.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="bg-[#05020a] text-white h-auto pb-10">
      <div className="max-w-6xl mx-auto relative pt-2">
        <div className="w-11/12 border border-white/30 rounded-md mx-auto  ">
          <Navbar seprator={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;
