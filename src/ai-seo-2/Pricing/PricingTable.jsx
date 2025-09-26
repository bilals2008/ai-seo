// File: src/ai-seo-2/Pricing/PricingTable.jsx
import React from 'react'
import PricingHeader from './PricingHeader';
import PricingRow from './PricingRow';

function PricingTable({ plans, features }) {
  return (
    <div>
      <table className="w-full border-collapse text-left rounded-2xl overflow-hidden">
        <thead>
          <tr>
            {/* Left Header (hide on mobile) */}
            <th className="p-6 hidden sm:table-cell"></th>
            {plans.map((plan) => (
              <PricingHeader key={plan.id} plan={plan} />
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800">
          {/* Price Row */}
          <PricingRow label="Price" plans={plans} field="price" />

          {/* Features Rows */}
          {features.map((feature) => (
            <PricingRow
              key={feature.name}
              label={feature.name}
              feature={feature}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PricingTable
