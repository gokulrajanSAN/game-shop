import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from './components/navbar/navbar';


function App() {

  const [mode, setmode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar mode={mode} setmode={setmode} />
      </div>
    </ThemeProvider>
  )
}

export default App
