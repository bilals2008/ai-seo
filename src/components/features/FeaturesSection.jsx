// File: src/components/features/FeaturesSection.jsx
// File: src/components/features/FeaturesSection.jsx
import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";
import FeatureImage from "./FeatureImage";
import FeatureImage2 from "./FeatureImage2";

function FeaturesSection() {
  return (
    <div className="w-full px-4 max-w-6xl mx-auto mt-28 space-y-28">
      {/* 1st Row → Card + Image */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
        <FeatureCard />
        <div className="flex-1">
          <FeatureImage />
        </div>
      </div>

      {/* 2nd Row → Image + Card */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
        <div className="flex-1">
          <FeatureImage2 />
        </div>
        <FeatureCard2 />
      </div>
    </div>
  );
}

export default FeaturesSection;
