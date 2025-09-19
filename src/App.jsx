// File: src/App.jsx
import "@fontsource/inter/500.css";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="bg-black/20 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
