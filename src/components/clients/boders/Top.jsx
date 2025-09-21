// File: src/components/clients/boders/Top.jsx
import React from 'react'

function Top() {
  return (
    <div
      className="absolute top-0 left-0 right-0 h-[1px] w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #ffffff 20%, #ffffff 80%, transparent 100%)",
      }}
    />
  );
}

export default Top
