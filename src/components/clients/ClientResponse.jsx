// File: src/components/clients/ClientResponse.jsx
import React from 'react'

function ClientResponse() {
  return (
    <div className="mt-5 md:mt-0">
      <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mb-6">
        "This product has completely
        <br />
        transformed how I manage my
        <br />
        projects and deadlines"
      </blockquote>

      {/* Client details */}
      <div>
        <h4 className="text-white font-normal text-base mb-1">Talia Taylor</h4>
        <p className="text-gray-400 text-sm font-light">
          Digital Marketing Director @ Quantum
        </p>
      </div>
    </div>
  );
}

export default ClientResponse
