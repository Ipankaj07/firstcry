import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="nav__container dis-flex">
          <div className="nav__1 dis-flex">
            <div className="logo__div">
              <img
                src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
                alt="logo"
              />
            </div>
            <div className="nav__searchBox">
              <input
                type="text"
                placeholder="Search for a Category, Brand or Product"
                id="search__box"
              />
              <BiSearch className="search__icon" />
            </div>
          </div>

          <div className="nav__2 dis-flex">
            <div className="nav__list dis-flex">
              <div
                className="nav__listItem dis-flex"
                style={{ position: "relative", top: "2px" }}
              >
                <VscLocation className="nav__icon" />
                <Link to="/">Select location</Link>
              </div>
              <div className="nav__listItem">
                <Link to="/">Stores & Preschools</Link>
              </div>
              <div className="nav__listItem">
                <Link to="/">Support</Link>
              </div>
              <div className="nav__listItem">
                <Link to="/">Track Order</Link>
              </div>
              <div className="nav__listItem">
                <Link to="/">FirstCry Parenting</Link>
              </div>
              <div className="nav__listItem">
                <Link to="/">Login / Register</Link>
              </div>
              <div className="nav__listItem dis-flex">
                <AiOutlineHeart className="nav__icon heart" />
                <Link to="/">Shortlist</Link>
              </div>
              <div className="nav__listItem dis-flex">
                <BsCart className="nav__icon cart" />
                <Link to="/">Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

// Navbar
// <Link to="/">Home</Link>
// <Link to="/products">Products</Link>
// <Link to="/product/1">Product 1</Link>
