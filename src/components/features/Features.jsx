// File: src/components/features/Features.jsx
import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureImage from "./FeatureImage";

function Features() {
  return (
    <div className="w-full px-4 max-w-6xl mx-auto mt-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
        <FeatureCard />
        <div className="flex-1">
          <FeatureImage />
        </div>
      </div>
    </div>
  );
}

export default Features;
