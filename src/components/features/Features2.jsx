// File: src/components/features/Features2.jsx
import React from "react";
import FeatureImage2 from "./FeatureImage2";
import FeatureCard2 from "./FeatureCard2";

function Features2() {
  return (
    <div className="w-full px-4 max-w-6xl mx-auto mt-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
        <div className="flex-1">
          <FeatureImage2 />
        </div>
        <FeatureCard2 />
      </div>
    </div>
  );
}

export default Features2;
