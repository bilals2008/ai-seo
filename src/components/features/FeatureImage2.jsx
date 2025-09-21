// File: src/components/features/FeatureImage2.jsx
import React from "react";
import featureImg2 from "../../assets/images/feature2.png";

function FeatureImage2() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
      {/* Image */}
      <img
        src={featureImg2}
        alt="Feature Preview"
        className="w-11/12 ml-auto h-96 mt-auto object-cover opacity-95"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#371866]/90 via-[#371866]/40 to-transparent" />

      {/* Text Overlay */}
      <div className="absolute bottom-6 left-6 right-6 text-left">
        <h3 className="text-white font-medium text-base md:text-lg mb-2">
          User-friendly dashboard
        </h3>
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-md">
          Perform complex SEO <br />
          audits and optimizations with a single click.
        </p>
      </div>
    </div>
  );
}

export default FeatureImage2;
