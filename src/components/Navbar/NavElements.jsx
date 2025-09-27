// File: src/components/Navbar/NavElements.jsx
import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navElem } from "./data/navElem";
import { cn } from "@/lib/utils";
import { slideDown } from "../../animation/variants";

function NavElements({ className }) {
  return (
    <motion.div
      className={cn(
        "rounded-full px-3 py-1 text-[#6d6d6e] hidden md:block",
        className
      )}
      variants={slideDown}
      initial="hidden"
      animate="visible"
    >
      <NavigationMenu>
        <NavigationMenuList>
          {navElem.menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <NavigationMenuItem>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-52">
                      {item.subItems?.map((sub) => (
                        <NavigationMenuLink key={sub.id} asChild>
                          <NavLink to={sub.link}>{sub.name}</NavLink>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <NavLink to={item.link}>{item.name}</NavLink>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            </motion.div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
}

export default NavElements;
