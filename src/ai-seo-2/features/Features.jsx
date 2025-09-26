// File: src/ai-seo-2/features/Features.jsx
import React from "react";
import FHeading from "./FHeading";
import FImage from "./FImage";
import SeoFeaturesList from "../../components/seo-features/SeoFeaturesList";

function Features() {
  return (
    <div className="px-2 space-y-8">
      <FHeading />
      <FImage />
      <div className="w-10/12 mx-auto">
        <SeoFeaturesList limit={6}/>
      </div>
    </div>
  );
}

export default Features;
