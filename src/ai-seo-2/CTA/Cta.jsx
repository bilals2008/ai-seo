// File: src/ai-seo-2/CTA/Cta.jsx
import React from 'react'
import { Button } from "@/components/ui/button"
import AiIcon from "../../assets/images/AiIcon.png"
import stars from "../../assets/images/Stars.jpg"
function Cta() {
  return (
    <div className="w-11/12 border rounded-2xl  max-w-6xl mx-auto h-[470px] relative overflow-hidden p-3">
      {/* Background with gradient and grid pattern */}
      <div
        className="absolute inset-0 "
        style={{
          background:
            "radial-gradient(30% 40% at 50% 0%, #401f74 60%, #000000 190%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-40 "
          style={{
            backgroundImage: `url(${stars})`
          }}
        ></div>

        {/* Subtle glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#311858] rounded-full blur-3xl opacity-10" />
      </div>

      {/* Main content */}
      <div className=" p-4 md:p-2 max-w-md mx-auto relative z-10 flex flex-col items-center justify-center h-full gap-7">
        <img src={AiIcon} alt="AI-icon" className="size-24 mb-3" />
        {/* Heading */}
        <h1 className="text-white text-4xl font-medium md:text-5xl text-center leading-tight">
          The magic of AI at your fingertips.
        </h1>
        <p className=" max-w-sm text-gray-400 text-md text-center">
          Achieve clear, impactful results without the complexity.
        </p>
 <Button
          className="
    font-light
    shadow-[inset_0px_0px_5px_1px_white,inset_2px_2px_16px_0px_#341949]
    bg-[#391c68]
  "
        >
          Try for free
        </Button>
      </div>
    </div>
  );
}

export default Cta
