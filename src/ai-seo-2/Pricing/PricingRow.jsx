// File: src/ai-seo-2/Pricing/PricingRow.jsx
import React from "react";

import { Check } from "lucide-react";

const renderValue = (val) => {
  if (val === true) return <Check className="w-4 h-4 text-green-400 mx-auto" />;

  if (val === false) return <span className="text-gray-500">—</span>;

  return <span className="text-sm">{val}</span>;
};

const PricingRow = ({ label, plans, field, feature }) => {
  return (
    <tr>
      <td className="p-4 font-medium text-gray-300 hidden sm:table-cell">
        {label}
      </td>

      {field
        ? plans.map((plan) => (
            <td
              key={`${field}-${plan.id}`}
              className={`p-4 text-center font-medium   ${
                plan.popular
                  ? "bg-[#311858]/30 text-green-500"
                  : "text-purple-700"
              }`}
            >
              {plan[field]}
            </td>
          ))
        : [
            <td key="basic" className="p-4 text-center ">
              {renderValue(feature.basic)}
            </td>,

            <td key="pro" className="p-4 text-center bg-[#311858]/30">
              {renderValue(feature.pro)}
            </td>,

            <td key="business" className="p-4 text-center">
              {renderValue(feature.business)}
            </td>,
          ]}
    </tr>
  );
};

export default PricingRow;
