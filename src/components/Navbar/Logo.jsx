// File: src/components/Navbar/Logo.jsx
import React from "react";
import { motion } from "motion/react";
import logo from "@/assets/images/Logo.png";
import { scaleHover } from "../../animation/variants";

function Logo() {
  return (
    <motion.div variants={scaleHover} initial="initial" whileHover="hover">
      <img src={logo} className="size-8 md:size-10" />
    </motion.div>
  );
}

export default Logo;
