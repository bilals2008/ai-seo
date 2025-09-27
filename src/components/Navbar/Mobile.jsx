// File: src/components/Navbar/Mobile.jsx
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { navElem } from "./data/navElem";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Mobile() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <Sheet className="md:hidden block">
      <SheetTrigger>
        <div className=" p-1 mt-1.5">
          <Menu className=" text-white cursor-pointer" />
        </div>
      </SheetTrigger>
      <SheetContent className="w-80">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <nav className="space-y-2">
            {navElem.menuItems.map((item) => (
              <div key={item.id} className=" pb-2 ">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors hover:bg-violet-700"
                    >
                      <span className="font-medium ">{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedItems[item.id] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedItems[item.id] && item.subItems && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.subItems.map((sub) => (
                          <p className="text-gray-400 text-sm space-y-2 px-4 py-2">
                            <NavLink to={sub.link}>{sub.name}</NavLink>
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <p className="block px-4 py-3 font-medium hover:bg-violet-700 text-white rounded-lg transition-colors">
                    <NavLink to={item.link}>{item.name}</NavLink>
                  </p>
                )}
              </div>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;
