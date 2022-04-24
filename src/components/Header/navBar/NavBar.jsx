import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";

import { filterProductsData } from "../../../../src/redux/actions/productAction";

function NavBar() {
  let isUserLogedIn = localStorage.getItem("isUserLogedIn");
  let userName = JSON.parse(localStorage.getItem("userName"));

  useEffect(() => {
    if (isUserLogedIn) {
      // console.log("user is loged in");
    }
  }, [isUserLogedIn, userName]);

  const dispatch = useDispatch();

  const cartNumber = useSelector((state) => state.product.cart);

  return (
    <>
      <div className="navbar">
        <div className="nav__container dis-flex">
          <div className="nav__1 dis-flex">
            <div className="logo__div">
              <Link to="/">
                <img
                  src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="nav__searchBox">
              <DebounceInput
                minLength={2}
                debounceTimeout={300}
                id="search__box"
                type="text"
                placeholder="Search for a Category, Brand or Product"
                onChange={(e) => {
                  dispatch(
                    filterProductsData(
                      e.target.value,
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      ""
                    )
                  );
                }}
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
                {isUserLogedIn ? (
                  <span className="user__name">{userName}</span>
                ) : (
                  <Link to="/login">Login/Register</Link>
                )}
              </div>
              <div className="nav__listItem dis-flex">
                <AiOutlineHeart className="nav__icon heart" />
                <Link to="/">Shortlist</Link>
              </div>
              <div className="nav__listItem dis-flex">
                <Link to="/cart" className="dis-flex">
                  <BsCart className="nav__icon cart" />
                  <div className="cart__number">
                    {cartNumber ? cartNumber : 0}
                  </div>
                  Cart
                </Link>
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
