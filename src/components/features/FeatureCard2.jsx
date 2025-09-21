// File: src/components/features/FeatureCard2.jsx
import React from 'react'
import cone from "../../assets/images/cone.png";
function FeatureCard2() {
  return (
    <div className="w-full md:h-[395px] md:w-72 bg-black rounded-xl p-5 flex flex-col items-center justify-evenly space-y-4 shadow-lg border border-[#48484b] ">
      {/* Image */}
      <div className="flex justify-center w-full">
        <img src={cone} alt="visual" className="w-32 h-32 object-contain" />
      </div>

      {/* Text */}
      <div className="text-left">
        <h3 className="text-white font-normal text-base mb-2">
          SEO goal setting
        </h3>
        <p className="text-gray-400 font-light text-sm leading-relaxed">
          Helps you set and achieve SEO <br /> goals with guided assistance.
        </p>
      </div>
    </div>
  );
}

export default FeatureCard2