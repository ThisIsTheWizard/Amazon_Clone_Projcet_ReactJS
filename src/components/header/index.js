import React from "react";

import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./index.css";

import { useStateValue } from "../../stateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <section className="header">
      <nav>
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon"
          />
        </Link>

        <div className="header_search">
          <input
            type="text"
            className="header_search_input"
          />
          <SearchIcon
            className="header_search_icon"
          />
        </div>

        <div className="header_nav">
          <Link
            to="/login"
            className="header_nav_link"
          >
            <div className="header_nav_link_option">
              <span>Hello</span>
              <span>Sign In</span>
            </div>
          </Link>

          <Link
            to="/login"
            className="header_nav_link"
          >
            <div className="header_nav_link_option">
              <span>Returns</span>
              <span>& Orders</span>
            </div>
          </Link>

          <Link
            to="/login"
            className="header_nav_link"
          >
            <div className="header_nav_link_option">
              <span>Your</span>
              <span>Prime</span>
            </div>
          </Link>

          <Link
            to="/checkout"
            className="header_nav_link"
          >
            <div className="header_nav_link_basket">
              <ShoppingBasketIcon/>
              <span>{ basket.length }</span>
            </div>
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default Header;