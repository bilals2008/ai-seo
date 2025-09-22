// File: src/components/footer/Footer.jsx
import React from 'react'
import { links } from './links';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from "../../assets/images/Logo.png";

function Footer() {
  


  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent py-5">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Logo */}
          <div className="md:col-span-2  flex flex-row md:flex-col justify-between py-2 px-2">
            <div>
              <a href="/" aria-label="go home" className="block size-fit">
                <span className="flex items-center gap-2">
                  <img src={Logo} alt="" />
                  Ai startup kits
                </span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Twitter />
              <Instagram />
              <Facebook />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
