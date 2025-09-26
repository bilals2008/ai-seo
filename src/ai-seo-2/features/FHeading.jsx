// File: src/ai-seo-2/features/FHeading.jsx
import React from 'react'

function FHeading() {
  return (
    <div>
      <div className="w-full bg-black text-white py-20 text-center relative">
        {/* Small Label */}
        <div className="mb-4">
          <span className="px-4 py-1 text-xs font-medium rounded-full border border-white/40 text-[#2f076e]">
            Everything you need
          </span>
        </div>

        {/* Heading / Text */}
        <h2 className="max-w-2xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
          Harness the power of AI, making <br className="hidden md:block" />
          search engine optimization intuitive{" "}
          <br className="hidden md:block" />
          and effective for all skill levels.
        </h2>
      </div>
    </div>
  );
}

export default FHeading
