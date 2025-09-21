// File: src/components/clients/ClientHeader.jsx
import React from 'react'

function ClientHeader() {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
          Our clients
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Hear firsthand how our solutions have
          <br />
          boosted online success for users like you.
        </p>
      </div>
    </div>
  );
}

export default ClientHeader
