// File: src/components/Navbar/NavBtton.jsx
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Mobile from "./Mobile";
import { fadeInUp, scaleHover } from "../../animation/variants";

function NavBtton({ border }) {
  return (
    <motion.div
      className="flex item-center gap-2 justify-center"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`${
          border && "border border-white/40"
        } rounded-md px-2 py-1  md:px-3  text-[#6d6d6e]  hover:bg-white/10 cursor-pointer`}
        variants={scaleHover}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className="
    font-light
    shadow-[inset_0px_0px_5px_1px_white,inset_2px_2px_16px_0px_#341949]
    bg-[#391c68]
  "
        >
          Join waitlist
        </Button>
      </motion.div>
      <motion.div
        className="md:hidden block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mobile />
      </motion.div>
    </motion.div>
  );
}

export default NavBtton;
