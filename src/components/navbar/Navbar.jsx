import './Navbar.css'
import { Button } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const navItems = ["Products", "Cart", "Your Orders", "Login"]

const Navbar = ({ mode, setmode }) => {

    const themeHandler = () => {
        setmode(mode === "light" ? "dark" : "light")
    }
    return (
        <Box className='container' sx={{
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
        }}>

            <img className='logo' src="src\assets\WhatsApp Image 2023-12-08 at 21.58.11.jpeg" alt="logo" />

            <Typography variant="h6" component="div" className='search'>
                <input placeholder='search' type="text" name="" id="" />
            </Typography>

            {navItems.map(item => {
                return (<Typography variant="h6"
                    component="div" className='navItems' key={item} >{item}</Typography>)
            })}

            <Button onClick={themeHandler}>
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
                </Button>

        </Box>
    )
}

export default Navbar