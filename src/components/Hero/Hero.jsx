// File: src/components/Hero/Hero.jsx
import CtaContent from "./CtaContent";
import CtaImage from "./CtaImage";
import HeroBadge from "./HeroBadge";

function Hero() {
  return (
    <div className="w-full h-full relative flex flex-col items-center gap-5">
     
      <HeroBadge className={"mx-auto"} />
      <CtaContent />
      <CtaImage />
    </div>
  );
}

export default Hero;
