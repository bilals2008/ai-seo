// File: src/components/clients/ClientCOntent.jsx
import React from "react";

import client from "../../assets/images/client.png";
import RightVertical from "./boders/RightVertical";
import Leftver from "./boders/Leftver";
import Top from "./boders/Top";
import Bottom from "./boders/Bottom";
import ClientResponse from "./ClientResponse";

function ClientContent() {
  return (
    <div className=" bg-black flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        {/* Main container with border styling */}
        <div className=" w-full relative ">
          {/* Top border */}

          <div className=" w-full flex items-center justify-center flex-col md:flex-row gap-5 md:gap-12">
            <Top />
            {/* Bottom border */}
            <Bottom />
            <div className="relative flex-shrink-0">
              {/* Left vertical border */}
              <Leftver />

              {/* Right vertical border */}
              <RightVertical />
              {/* Image */}
              <div className="px-0.5 py-1">
                <div
                  className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-2xl shadow-[-5px_0px_136px_69px_#17072e]"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #6D28D9 100%) ",
                  }}
                >
                  <img
                    src={client}
                    alt="client"
                    className="w-full h-full object-cover z-10 "
                  />
                </div>
              </div>
            </div>

            {/* Text content */}
           <ClientResponse/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientContent;
