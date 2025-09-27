// File: src/ai-seo-2/Pricing/Pricing.jsx
import React from "react";
import { Check } from "lucide-react";
import PricingTable from "./PricingTable";
import { features, plans } from "./data";

const Pricing = () => {
  return (
    <div className="w-full p-3 mt-20">
      <h1 className="text-4xl font-medium text-center py-2">Pricing</h1>
      <p className="max-w-80 text-center mx-auto font-extralight text-muted-foreground mb-5">
        Choose the right plan to meet your SEO needs and start optimizing today.
      </p>

      <div className="max-w-5xl mx-auto my-10 md:p-7 rounded-md lg:border border-slate-300/20">
        <PricingTable plans={plans} features={features} />
      </div>
    </div>
  );
};

export default Pricing;
