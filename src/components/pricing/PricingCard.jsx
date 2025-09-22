// File: src/components/pricing/PricingCard.jsx
import React from "react";
import { cardData } from "./PricingCardData";
import pattren from "../../assets/images/pattern 1.png"
function PricingCard() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`relative max-h-[600px] min-h-[600px] rounded-xl p-6 flex flex-col justify-between border border-gray-500 shadow-lg 
    ${index === 1 ? "shadow-[#1b0737]/40 bg-transparent" : "bg-transparent"}
  `}
          >
            {/* Background only for index 1 */}
            {index === 1 && (
              <div className=" h-[calc(600px - 400x)] absolute inset-0 z-0 rounded-xl overflow-hidden shadow-[10px_0px_180px_90px_#1e093c] bg-linear-to-b to-[#16072b] to-[29%] from-black/20">
                <div className="absolute inset-0 shadow-[10px_10px_180px_102px_#1e093c] "></div>
              </div>
            )}
            {/* Inner Content */}
            <div className="relative z-50 ">
              <h2 className="text-xl font-semibold text-white">{card.name}</h2>
              <p className="text-gray-300 text-lg mt-1">
                ${card.price}
                <span className="text-sm text-gray-400">/mo</span>
              </p>

              <hr className="my-4 border-gray-700 pb-4" />

              <div>
                <ul className="space-y-5">
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex text-sm font-extralight items-center gap-2 text-gray-300"
                    >
                      <span className="text-slate-200">✔</span>
                      <span className="font-extralight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Button */}
            <button
              className={`mt-6 w-full py-2 rounded-lg font-medium transition z-20
      ${
        index === 1
          ? "shadow-[inset_0px_0px_5px_1px_white,inset_2px_2px_16px_0px_#341949] bg-[#391c68]"
          : " text-gray-300 hover:bg-gray-700 shadow-[inset_0px_0px_5px_1px_white,inset_2px_2px_16px_0px_#341949] bg-[#1b1a1d]"
      }
    `}
            >
              Join waitlist
            </button>
            {index === 1 && (
              <div
                className="mx-auto w-full h-96 absolute  left-0 bg-size-[1000px] overflow-x-hidden bg-top bg-local shadow-[inset_2px_13px_290px_77px_#16072b] bottom-1"
                style={{
                  backgroundImage: `url(${pattren})`,
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCard;
