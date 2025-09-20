// File: src/components/Navbar/NavBtton.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Mobile from "./Mobile";
function NavBtton() {
  return (
    <div className="flex item-center gap-2 justify-center">
      <div className="border border-white/40 rounded-md px-2 py-1  md:px-3  text-[#6d6d6e]  hover:bg-white/10 cursor-pointer">
        <Button
          className="
    font-light
    shadow-[inset_0px_0px_5px_1px_white,inset_2px_2px_16px_0px_#341949]
    bg-[#391c68]
  "
        >
          Join waitlist
        </Button>
      </div>
      <div className="md:hidden block ">
        <Mobile />
      </div>
    </div>
  );
}

export default NavBtton;
