// File: src/components/Hero/Hero.jsx
import CtaContent from "./CtaContent";
import CtaImage from "./CtaImage";
import HeroBadge from "./HeroBadge";
import cir3 from "../../assets/images/circles/cir3.png";

function Hero() {
  return (
    <div className="w-full h-full relative flex flex-col items-center gap-5">
      <img src={cir3} className="w-1/2 h-1/2 absolute -z-10" />
      <HeroBadge />
      <CtaContent />
      <CtaImage />
    </div>
  );
}

export default Hero;
