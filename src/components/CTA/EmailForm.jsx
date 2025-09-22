// File: src/components/CTA/EmailForm.jsx
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function EmailForm() {
  return (
    <div className="flex w-full md:max-w-xl justify-center px-3">
      {/* Mobile layout (col) */}
      <div className="w-2xs flex flex-col gap-3 md:hidden mx-auto py-2 px-1">
        <Input
          className="bg-transparent border border-slate-300 w-full rounded-sm py-6 px-3"
          placeholder="Your email"
        />
        <Button variant="" className="w-full h-12 rounded-sm bg-white text-black">
          Join waitlist
        </Button>
      </div>

      {/* Desktop layout (input + inside button) */}
      <div className="w-full relative mx-auto py-2 px-1 hidden md:block">
        <Input
          className="bg-transparent border border-slate-300 w-full rounded-sm py-6 px-3 pr-28"
          placeholder="Your email"
        />
        <Button
          variant=""
          className="absolute top-3 right-3 md:h-[calc(100%-25px)] px-4 rounded-sm bg-white text-black"
        >
          Join waitlist
        </Button>
      </div>
    </div>
  );
}

export default EmailForm;
