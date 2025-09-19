// File: src/components/Navbar/NavBtton.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Mobile from "./Mobile";
function NavBtton() {
  return (
    <div className="flex item-center gap-2">
      <div className="border border-white/40 rounded-md px-3 py-1 text-[#6d6d6e] hover:bg-white/10 cursor-pointer">
        <Button
          className="
    font-light
   
    shadow-[inset_-2px_-2px_21px_6px_#000000]
  "
        >
          Join waitlist
        </Button>
      </div>

      <Mobile />
    </div>
  );
}

export default NavBtton;
