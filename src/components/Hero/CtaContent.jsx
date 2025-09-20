// File: src/components/Hero/CtaContent.jsx

import React from "react";
import { Button } from "@/components/ui/button";

function CtaContent() {
  return (
    <div className="relative z-50">
      {/* Background glow effects - reduced intensity */}
      <div className="absolute inset-0 -z-10">
        {/* Main purple glow behind text */}
        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5xl h-full bg-purple-600/20  blur-[120px] opacity-60"></div>

        {/* Secondary glow */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7xl h-full bg-purple-700/25  blur-[80px] opacity-50"></div>

        {/* Subtle accent glow */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7xl bg-indigo-600/12  blur-[140px] opacity-40"></div>
      </div>

      {/* heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-snug">
        <span>Boost your</span>
        <br />
        <span className="bg-gradient-to-b from-white from-20% to-violet-700 bg-clip-text text-transparent">
          {" "}
          Rankings with AI.
        </span>
      </h1>

      {/* paragraph */}
      <p className="px-4   text-md md:text-lg mt-4 max-w-sm md:max-w-full text-center font-light">
        Elevate your site's visibility effortlessly with AI, <br className="hidden md:block" /> where smart
        technology meets user-friendly SEO tools.
      </p>

      {/* button */}
      <div className="mt-6 mx-auto cursor-pointer z-10 border  rounded-sm w-fit p-2">
        <Button className="bg-white rounded-sm text-black md:px-4 md:py-5">
          Start for free
        </Button>
      </div>
    </div>
  );
}

export default CtaContent;
