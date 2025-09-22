// File: src/components/clients/Client.jsx
import React from "react";
import ClientHeader from "./ClientHeader";
import ClientCOntent from "./ClientCOntent";

const Client = () => {
  return (
    <div className=" h-auto bg-[#010103] relative overflow-hidden py-20 px-4">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <ClientHeader />
        <ClientCOntent />
      </div>
    </div>
  );
};

export default Client;
