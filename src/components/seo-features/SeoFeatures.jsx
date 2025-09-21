// File: src/components/seo-features/SeoFeatures.jsx
import React from "react";
import SeoFeaturesList from "./SeoFeaturesList";

function SeoFeatures() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-tl from-[#020103] to-[#190D2E] lg:rounded-xl my-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-12 max-w-md leading-tight">
          Elevate your SEO efforts.
        </h1>

        {/* Features List */}
        <SeoFeaturesList />
      </div>
    </section>
  );
}

export default SeoFeatures;
