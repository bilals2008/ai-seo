// File: src/ai-seo-2/Pricing/PricingHeader.jsx
import React from 'react'
import { Button } from "@/components/ui/button"
function PricingHeader({ plan }) {
  return (
    <th
      className={` p-1 md:p-6 text-center  pt-2 ${
        plan.popular ? "bg-[#311858]/30 rounded-t-md" : ""
      }`}
    >
      <h3 className=" text-lg md:text-xl font-medium mb-4">{plan.name}</h3>

      {plan.popular ? (
        <Button
          className="
                font-light
                shadow-[inset_0px_0px_5px_1px_white,inset_2px_2px_16px_0px_#341949] bg-[#391c68]
              "
        >
          {plan.buttonText}
        </Button>
      ) : (
        <Button
          className="
                font-light
                md:px-6 md:py-2 rounded-sm text-sm  transition
                text-gray-300 hover:bg-gray-700 shadow-[inset_0px_0px_5px_1px_white,inset_2px_2px_16px_0px_#341949] bg-[#000000]
              "
        >
          {plan.buttonText}
        </Button>
      )}
    </th>
  );
}

export default PricingHeader
 