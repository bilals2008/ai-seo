// File: src/ai-seo-2/footer/Footer.jsx
import React from "react";
import { Instagram, Youtube, Twitter } from "lucide-react";
import logo from "../../assets/images/Logo.png"
function Footer() {
  return (
    <footer className="bg-black max-w-6xl mx-auto mt-5">
      <div className="flex justify-between px-6 py-4 flex-wrap">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="AI Startup Kit" className="w-6 h-6" />
          <span className="text-sm font-medium">AI Startup Kit</span>
        </div>

        {/* Center Nav */}
        <nav className="order-3 font-extralight sm:order-0 hidden sm:flex gap-6 text-sm text-gray-400  ">
          <p>Features</p>
          <p>Integration</p>
          <p>Updates</p>
          <p>FAQ</p>
          <p>Pricing</p>
        </nav>

        {/* Right side - Icons */}
        <div className="flex items-center gap-4 text-xl text-gray-400 ">
          <Twitter className="w-5 h-5 cursor-pointer" />
          <Instagram className="w-5 h-5 cursor-pointer" />
          <Youtube className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* {mobile} */}
      <nav className="sm:hidden font-extralight flex flex-col p-5 gap-6 text-sm text-gray-400 pl-10">
        <p>Features</p>
        <p>Integration</p>
        <p>Updates</p>
        <p>FAQ</p>
        <p>Pricing</p>
      </nav>
    </footer>
  );
}

export default Footer;
