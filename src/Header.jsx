import React from "react";
import "./Header.css";
import {
  Search as SearchIcon,
  ShoppingBasket as ShoppingBasketIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      console.log("user Signed out");
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <div className="header__optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </div>
            <div className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="header__option">
            <div className="header__optionLineOne">Returns</div>
            <div className="header__optionLineTwo">& Orders</div>
          </div>
        </Link>
        <Link to={"/"}>
          <div className="header__option">
            <div className="header__optionLineOne">Your</div>
            <div className="header__optionLineTwo">Prime</div>
          </div>
        </Link>
        <Link to={"/checkout"}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <div className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
