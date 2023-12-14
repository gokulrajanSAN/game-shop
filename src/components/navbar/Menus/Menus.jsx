import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./Menus.css";
const MenuItems = [
  { name: "My Profile", icon: <AccountCircleOutlined /> },
  { name: "Plus Zone", icon: <AddIcon /> },
  { name: "Orders", icon: <InventoryIcon /> },
  { name: "Wishlist", icon: <FavoriteBorderIcon /> },
  { name: "Rewards", icon: <RedeemIcon /> },
  { name: "Gift cards", icon: <CreditCardIcon /> },
];
const MoreItems = [
  { name: "Notification preferences", icon: <NotificationsNoneOutlinedIcon /> },
  { name: "24/7 Customer care", icon: <HeadsetMicOutlinedIcon /> },
  { name: "Advertise", icon: <TrendingUpOutlinedIcon /> },
  { name: "Download App", icon: <FileDownloadOutlinedIcon /> },
];
export const LoginMenu =()=> (
  <ul className="loginMenuContainer">
    <li>
      <div className="loginMenuSignUp">
        <span>New Customer?</span>
        <span style={{ color: "#2a55e5" }}>Sign Up</span>
      </div>
    </li>
    <div className="menuItemsContainer">
      {MenuItems.map((item, index) => (
        <li key={index}>
          <button className="menuItems">
            <div className="iconDiv">{item.icon}</div>
            <span> {item.name}</span>
          </button>
        </li>
      ))}
    </div>
  </ul>
);
export const MoreMenu = ()=> (
  <ul className="MoreMenuContainer">
    <div className="menuItemsContainer">
      {MoreItems.map((item, index) => (
        <li key={index}>
          <button className="menuItems">
            <div className="iconDiv">{item.icon}</div>
            <span> {item.name}</span>
          </button>
        </li>
      ))}
    </div>
  </ul>
);
