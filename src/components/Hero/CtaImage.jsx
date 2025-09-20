// File: src/components/Hero/CtaImage.jsx

import React from "react";
import img from "../../assets/images/hero-image.png";

function CtaImage() {
  return (
    <div className="w-full mt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-50">
      {/* Background glow effects for image - full screen width */}
      

      {/* Responsive image container */}
      <div className="relative bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-lg p-1 md:shadow-[0_-20px_80px_rgba(139,69,193,0.6),0_0_100px_rgba(139,69,193,0.4),0_0_140px_rgba(139,69,193,0.2)] z-10 max-w-7xl mx-auto ">
        <div>
          <img
            src={img}
            alt="Dashboard Interface"
            className="shadow-purple-glow rounded-md object-cover w-full h-full z-50 opacity-90 "
          />
        </div>
      </div>
    </div>
  );
}

export default CtaImage;
