// File: src/components/Navbar/NavElements.jsx
import React from "react";
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

function NavElements({ className }) {
  return (
    <div
      className={cn(
        "rounded-full px-3 py-1 text-[#6d6d6e] hidden md:block",
        className
      )}
    >
      <NavigationMenu>
        <NavigationMenuList>
          {navElem.menuItems.map((item) => (
            <NavigationMenuItem key={item.id}>
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
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavElements;
