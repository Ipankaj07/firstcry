import React from "react";
import "./checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <div class="gif-container">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20201129221326/abc.gif"
          alt=".."
        />
        <div class="home__option">
          <Link to="/">
            <div class="home__option__btn">Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
