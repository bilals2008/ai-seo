// File: src/ai-seo-2/Hero/RightSide.jsx
import React from 'react'
import boxes from "../../assets/images/purple-composition2 12.png"
import boxes2 from "../../assets/images/purple-composition2 1.png"
function RightSide() {
  return (
    <>
      <div className=" w-full h-full bg-cover bg-transparent flex items-center justify-center">
        <img src={boxes} alt="boxes" className="hidden lg:block z-50" />
        <img
          src={boxes2}
          alt="boxes"
          className="hidden md:block lg:hidden absolute -top-2 object-cover right-11 "
        />
      </div>
    </>
  );
}

export default RightSide
