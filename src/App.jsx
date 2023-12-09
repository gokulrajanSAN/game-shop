import { Button, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const handleModeChange = () => setMode(mode === "light" ? "dark" : "light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Button
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
            margin: "1rem",
            "&:hover": { bgcolor: "blue" },
          }}
          onClick={handleModeChange}
        >
          Change Theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
