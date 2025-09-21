// File: src/components/seo-features/SeoFeaturesList.jsx
import React from "react";
import * as Icons from "lucide-react"; // saare icons ek object ke through import
import { seoFeatures } from "./seoFeaturesdata";

function SeoFeaturesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 text-white">
      {seoFeatures.map((feature) => {
        const Icon = Icons[feature.icon];
        return (
          <div
            key={feature.id}
            className="flex items-center md:items-start space-x-3"
          >
            <div>
              <div className="text-gray-300 flex gap-2 items-start">
                {Icon ? <Icon size={17} /> : null}
              <h3 className="text-base font-medium pb-3">{feature.title}</h3>
              </div>
              <p className="text-sm font-light text-gray-400 line-clamp-3">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SeoFeaturesList;
