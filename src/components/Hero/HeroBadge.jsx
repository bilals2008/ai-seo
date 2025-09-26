// File: src/components/Hero/HeroBadge.jsx
import React from 'react'
import { Badge } from "@/components/ui/badge"
function HeroBadge({ className }) {
  return (
    <div
      className={`${className}  w-fit  mt-20 text-sm px-3 border rounded-full border-border font-light flex gap-3 items-center text-purple-800 py-2`}
    >
      <Badge className="bg-violet-800">New</Badge>
      <span>Latest integration just arrived</span>
    </div>
  );
}

export default HeroBadge