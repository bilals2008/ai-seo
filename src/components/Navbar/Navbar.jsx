// File: src/components/Navbar/Navbar.jsx
import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import NavElements from "./NavElements";
import NavBtton from "./NavBtton";
import { Separator } from "@/components/ui/separator";
import { containerStagger, fadeInUp } from "../../animation/variants";

function Navbar({ className, seprator, border }) {
  return (
    <motion.div variants={containerStagger} initial="hidden" animate="visible">
      <motion.div
        className="flex justify-between md:justify-evenly items-center p-2 px-5"
        variants={fadeInUp}
      >
        <Logo />
        <NavElements className={className} />
        <NavBtton border={border} />
      </motion.div>
      {seprator && (
        <motion.div variants={fadeInUp}>
          <Separator className="bg-[#262628] mt-1" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default Navbar;
