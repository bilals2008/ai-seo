// File: src/components/clients/boders/RightVertical.jsx
import React from 'react'

function RightVertical() {
  return (
    <div
      className="absolute right-0 -top-10 md:-top-14 bottom-0 w-[1px] h-72 md:h-[350px]"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, #ffffff 30%, #ffffff 70%, transparent 100%)",
      }}
    />
  );
}

export default RightVertical
