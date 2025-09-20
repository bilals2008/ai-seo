// File: src/components/features/FeatureCard.jsx
import React from "react";
import ring from "../../assets/images/ring.png";

function FeatureCard() {
  return (
    <div className="w-full md:h-[390px] md:w-72 bg-black rounded-xl p-5 flex flex-col items-center justify-evenly space-y-4 shadow-lg border border-[#48484b] mb-10">
      {/* Image */}
      <div className="flex justify-center w-full">
        <img src={ring} alt="visual" className="w-32 h-32 object-contain" />
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

export default FeatureCard;
