// File: src/App.jsx
import "@fontsource/inter/500.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/compainies/Companies";
function App() {
  return (
    <div className="bg-[#05020a] text-white h-auto overflow-x-hidden pb-10">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        <Companies />
      </div>
    </div>
  );
}

export default App;
