// File: src/App.jsx
import "@fontsource/inter/500.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/compainies/Companies";
import FeaturesSection from "./components/features/FeaturesSection";
import FeaturesHeading from "./components/features/FeaturesHeading";
import SeoFeatures from "./components/seo-features/SeoFeatures";
import Client from "./components/clients/Client";
function App() {
  return (
    <div className=" bg-[#05020a] text-white h-auto pb-10">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        <Companies />
       < FeaturesHeading/>
        <FeaturesSection />
        <SeoFeatures/>
        <Client/>
      </div>
    </div>
  );
}

export default App;
