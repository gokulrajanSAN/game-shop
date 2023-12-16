import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import OfferCarousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className="container">
      <header className="navbar">
        <Navbar mode={mode} setMode={setMode} />
      </header>
      <div className="body">
        <Categories />
        <OfferCarousel />
        <div className="bankDiscount">
          <img
            alt="bank-discount"
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/065bf4ed0fee4532.jpg?q=20"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
