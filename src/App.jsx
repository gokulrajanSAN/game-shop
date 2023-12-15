import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import OfferCarousel from "./components/carousel/Carousel";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className="container">
      <header className="navbar">
        <Navbar mode={mode} setMode={setMode} />
      </header>
      <div className="body">
        <OfferCarousel />
      </div>
    </div>
  );
}

export default App;
