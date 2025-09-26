// File: src/ai-seo-2/Hero/Bgs.jsx
import React from 'react'
import pattren from "../../assets/images/pattern 1.png";
import stars from "../../assets/images/Stars.jpg";
function Bgs() {
  return (
    <>
      <div
        className=" w-full bg-cover opacity-30 overflow-hidden h-full absolute inset-0"
        style={{
          backgroundImage: `url(${pattren})`,
        }}
      ></div>
      <div
        className=" w-full bg-cover opacity-50 overflow-hidden h-[700px] absolute inset-0"
        style={{
          backgroundImage: `url(${stars})`,
        }}
      ></div>
    </>
  );
}

export default Bgs
