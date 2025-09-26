// File: src/ai-seo-2/Hero/Hero.jsx
import React from 'react'
import Bgs from './Bgs'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Brands from './Brands';
function Hero() {
  return (
    <div className="bg-[#020103] border-none py-5 px-2 my-5 relative w-lvw  bg-linear-[130deg] from-[#010001] via-transparent via-50% md:via-60%  to-[#8C45FF] from-30% max-h-[900px] overflow-hidden">
     {/* Background images */}
     <Bgs/>


      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      
      {/* LEftSide  */}
      <LeftSide/>
        {/* RightSIde */}
        <RightSide/>
      </div>
      {/* Brands */}
      <Brands/>
    </div>
  );
}

export default Hero
