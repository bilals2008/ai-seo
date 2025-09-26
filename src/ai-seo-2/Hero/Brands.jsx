// File: src/ai-seo-2/Hero/Brands.jsx
import React from "react";
import Celestial from "../../assets/images/celestial.png";
import Apex from "../../assets/images/apex.png";
import Quantum from "../../assets/images/quantum.png";
import Acme from "../../assets/images/apex.png";
import Pulse from "../../assets/images/pulse.png";

function Brands() {
  return (
    <div className="w-full bg-gradient-to-r py-6">
      <div className="max-w-full mx-auto px-4 flex flex-row items-center justify-between gap-6 flex-nowrap">
        {/* Left Text */}
        <p className="text-sm text-white opacity-70 whitespace-nowrap">
          Trusted by top innovative teams:
        </p>

        {/* Logos Row */}
        <div className="flex items-center gap-6 flex-row flex-nowrap">
          <img src={Celestial} alt="Celestial" className="h-6 md:h-8" />
          <img src={Apex} alt="APEX" className="h-6 md:h-8" />
          <img src={Quantum} alt="Quantum" className="h-6 md:h-8" />
          <img src={Acme} alt="Acme Corp" className="h-6 md:h-8" />
          <img src={Pulse} alt="PULSE" className="h-6 md:h-8" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
