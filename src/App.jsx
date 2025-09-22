// File: src/App.jsx
import React from "react";
import "@fontsource/inter/500.css";
import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/compainies/Companies";
import FeaturesSection from "./components/features/FeaturesSection";
import FeaturesHeading from "./components/features/FeaturesHeading";
import SeoFeatures from "./components/seo-features/SeoFeatures";
import Client from "./components/clients/Client";
import { Separator } from "@/components/ui/separator";
import Pricing from "./components/pricing/Pricing";
import AISEOSection from "./components/CTA/Cta";
import Footer from "./components/footer/Footer";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 4.3, 
          lerp: 0.1, 
          smoothWheel: true, 
          smoothTouch: false, 
          touchMultiplier: 2, 
          wheelMultiplier: 1, 
          infinite: false, 
          gestureDirection: "vertical", 
          orientation: "vertical", 
          normalizeWheel: true, 
        }}
      >
        <div className="bg-[#05020a] text-white h-auto pb-10">
          <div className="max-w-6xl mx-auto ">
            <Navbar />
            <Hero />
            <Companies />
            <FeaturesHeading />
            <FeaturesSection />
            <SeoFeatures />
            <Separator />
            <Client />
            <Pricing />
            <AISEOSection />
            <Footer />
          </div>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
