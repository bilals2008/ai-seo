// File: src/components/Navbar/NavElements.jsx
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navElem } from "./data/navElem";

function NavElements() {
  return (
    <div className="border border-white/40 rounded-full px-3 py-1 text-[#6d6d6e] hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          {navElem.menuItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              {item.hasDropdown ? (
                <>
                  <NavigationMenuTrigger className="bg-transparent">{item.name}</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-52">
                    {item.subItems &&
                      item.subItems.map((sub) => (
                        <NavigationMenuLink key={sub.id}>
                          {sub.name}
                        </NavigationMenuLink>
                      ))}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink>{item.name}</NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavElements;
