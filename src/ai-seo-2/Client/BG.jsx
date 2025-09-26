// File: src/ai-seo-2/Client/BG.jsx
import React from 'react'
import stars from "../../assets/images/Stars.jpg";
function BG() {
  return (
    <>
      <div
        className="w-full bg-cover opacity-50 overflow-hidden z-50 absolute inset-0"
        style={{
          backgroundImage: `url(${stars})`,
        }}
      ></div>
      <div
        className="absolute inset-0 overflow-hidden "
        style={{
          background:
            "radial-gradient(30% 40% at 50% 0%, #401f74 60%, #000000 190%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20 "></div>

        {/* Subtle glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#311858] rounded-full blur-3xl opacity-10" />
      </div>
    </>
  );
}

export default BG
