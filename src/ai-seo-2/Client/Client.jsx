// File: src/ai-seo-2/Client/Client.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import clientimg from "../../assets/images/client.png"
import stars from "../../assets/images/Stars.jpg";
import BG from "./BG";
function Client() {
  return (
    <div className="w-11/12  mx-auto rounded-xl text-white relative pt-5">
      <Card>
        <BG />
        <CardContent className="flex flex-col md:flex-row md:items-start gap-6 p-6 justify-center z-50">
          {/* Left: Profile Image */}
          <img
            src={clientimg}
            alt={"tay"}
            className="size-44 md:size-52 rounded-xl object-cover"
          />

          {/* Right: Quote + Name + Role */}
          <div className="text-left md:text-left w-full max-w-80 h-52 flex  justify-evenly flex-col">
            <blockquote className="text-lg font-medium mb-3">
              This product has completely transformed how I manage my projects
              and deadlines
            </blockquote>
            <div>
              <h4 className="font-medium">Tailor Taylor</h4>
              <span className="text-xs text-gray-400 font-extralight">
                Digital Marketing Director @ Quantum
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Client;
