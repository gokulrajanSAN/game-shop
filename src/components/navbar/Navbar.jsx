import { Box, Typography } from "@mui/material";
import "./Navbar.css";

const navItems = ["Products", "Cart", "Your Orders", "Login"];

const Navbar = () => {
  return (
    <Box
      className="container"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <img
        className="logo"
        src="src\assets\WhatsApp Image 2023-12-08 at 21.58.11.jpeg"
        alt=""
      />
      <Typography variant="h6" component="div" className="search">
        Search
      </Typography>
      {navItems.map((item) => {
        return (
          <Typography
            variant="h6"
            component="div"
            className="navItems"
            key={item}
          >
            {item}
          </Typography>
        );
      })}
      <Typography variant="h6" component="div" className="navItems">
        theme
      </Typography>
    </Box>
  );
};

export default Navbar;
