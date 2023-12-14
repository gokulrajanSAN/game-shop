import { useState } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
// import OfferCarousel from "./components/carousel/Carousel";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header className="navbar" >
        <Navbar mode={mode} setMode={setMode} />
      </header>
      {/* <body>
        <OfferCarousel />
      </body> */}
    </ThemeProvider>
  );
}

export default App;
