// File: src/ai-seo-2/features/FImage.jsx
import React from "react";
import heroImg from "../../assets/images/hero-image.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function FImage() {
  return (
    <div className="w-11/12 mx-auto mt-3 md:mt-5 shadow-[0px_0px_20px_#8C45FF] rounded-sm overflow-hidden my-5">
      <div className="=">
        <AspectRatio ratio={16 / 9}>
          <img
            src={heroImg}
            alt="image"
            className="w-full h-full  rounded-sm"
          />
        </AspectRatio>
      </div>
    </div>
  );
}

export default FImage;
