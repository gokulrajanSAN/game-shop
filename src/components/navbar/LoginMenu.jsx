import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./LoginMenu.css";
const LoginMenu = () => {
  const MenuItems = [
    { name: "My Profile", icon: <AccountCircleOutlined /> },
    { name: "Plus Zone", icon: <AddIcon /> },
    { name: "Orders", icon: <InventoryIcon /> },
    { name: "Wishlist", icon: <FavoriteBorderIcon /> },
    { name: "Rewards", icon: <RedeemIcon /> },
    { name: "Gift cards", icon: <CreditCardIcon /> },
  ];
  return (
    <ul className="loginMenuContainer">
      <li>
        <div className="loginMenuSignUp">
          <span>New Customer?</span>
          <span style={{ color: "#2a55e5" }}>Sign Up</span>
        </div>
      </li>
      {MenuItems.map((item, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default LoginMenu;
