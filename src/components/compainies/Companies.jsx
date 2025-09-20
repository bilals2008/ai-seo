// File: src/components/companies/Companies.jsx
import React from "react";
import { companies } from "./companeis";

function Companies() {
  return (
    <div className="relative z-[99999] w-full  bg-[#020103] shadow-[-9px_-71px_72px_46px_#000000] mb-10">
      <h1 className="text-center underline text-[#878687] z-[9999] relative font-light py-10">
        Trusted by the world's most innovative teams
      </h1>
      <div className=" w-full h-full flex items-center justify-center z-40 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 px-4 md:px-0">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-6 rounded-md border border-[#1e1d1f] bg-[#020103]"
            >
              <img
                src={company.img}
                alt={company.name}
                className="h-8 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
