// File: src/components/Navbar/Navbar.jsx
import React from 'react'
import Logo from './Logo'
import NavElements from './NavElements'
import NavBtton from './NavBtton'
import { Separator } from "@/components/ui/separator"
function Navbar() {
  return (
    <div>
      <div className="flex justify-between md:justify-evenly items-center p-2 px-5">
        <Logo />
        <NavElements />
        <NavBtton />
      </div>
      <Separator className="bg-[#262628] mt-1"/>
    </div>
  );
}

export default Navbar