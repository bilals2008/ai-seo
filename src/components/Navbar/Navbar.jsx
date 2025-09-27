import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import NavElements from "./NavElements";
import NavBtton from "./NavBtton";
import { Separator } from "@/components/ui/separator";
import { containerStagger } from "../../animation/variants";

function Navbar({ className, seprator, border }) {
  return (
    <motion.div variants={containerStagger} initial="hidden" animate="visible">
      <motion.div
        className="flex justify-between md:justify-evenly items-center p-2 px-5"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <Logo />
        <NavElements className={className} />
        <NavBtton border={border} />
      </motion.div>
      {seprator && <Separator className="bg-[#262628] mt-1" />}
    </motion.div>
  );
}

export default Navbar;
