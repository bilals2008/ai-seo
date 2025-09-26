// File: src/ai-seo-2/Hero/LeftSide.jsx
import React from 'react'
import EmailForm from '../../components/CTA/EmailForm';
import HeroBadge from '../../components/Hero/HeroBadge';

function LeftSide() {
  return (
    <>
      <div className="w-full flex flex-col gap-5 lg:gap-10 lg:items-baseline-last items-center md:items-start md:ml-3">
        <HeroBadge className={"border border-white/40"}/>
        {/* Heading */}
        <div className="max-w-full ml-16 md:ml-0">
          <h1 className="text-3xl ml-2 md:text-5xl lg:text-6xl font-bold">
            <span className="mb-2 inline-block"> Elevate your</span>
            <br />
            <span>SEO Efforts</span>
          </h1>
          {/* Paragraph */}
          <p className="px-4  text-base md:text-lg mt-4 max-w-sm md:max-w-full font-extralight ">
            Elevate your site's visibility effortlessly with AI,{" "}
            <br className="hidden md:block" /> where smart technology meets
            user-friendly SEO tools.
          </p>
        </div>
        <div className="w-sm">
          <EmailForm/>
        </div>
      </div>
    </>
  );
}

export default LeftSide
