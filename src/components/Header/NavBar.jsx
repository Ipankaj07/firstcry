import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      Navbar
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/product/1">Product 1</Link>
    </div>
  );
}

export default NavBar;
