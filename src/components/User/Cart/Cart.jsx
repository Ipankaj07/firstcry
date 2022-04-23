import axios from "axios";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./cart.css";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../../redux/actions/userAction";
import { updateCartNumber } from "../../../redux/actions/productAction";

function Cart() {
  let userId = JSON.parse(localStorage.getItem("userId"));
  // console.log("userId ", userId);

  const dispatch = useDispatch();

  let appDBUrl = process.env.REACT_APP_DB_URL;

  let [cartItems, setCartItems] = useState([]);

  let cartDataIdArr = async () => {
    const response = await axios.get(`${appDBUrl}/users/${userId}`);
    let userData = response.data.user;
    setCartItems(userData.cart);
  };

  const [allProduct, setAllProduct] = useState([]);

  let allProductData = async () => {
    const response = await axios.get(`${appDBUrl}/products`);
    let productData = response.data;
    // console.log("productData ", productData.product);
    setAllProduct(productData.product);
  };

  let cartData = cartItems.map((item) => {
    return allProduct.find((product) => product._id === item);
  });

  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (cartData[0] !== undefined) {
      setLoading(false);
    }
  }, [cartData, dispatch]);

  useEffect(() => {
    cartDataIdArr();
    allProductData();
  }, []);

  useEffect(() => {
    cartDataIdArr();
    allProductData();
    setLoad(true);
  }, [dispatch, load]);

  useEffect(() => {
    dispatch(updateCartNumber(cartData.length));
  }, [cartData, dispatch]);

  const removeProduct = (productId, userId) => {
    dispatch(removeProductFromCart(productId, userId));
  };

  // console.log("cartData ", cartData);

  let [checkoutBtnText, setCheckoutBtnText] = useState("Checkout");

  const navigate = useNavigate();

  return (
    <div
      className="dis-flex cart__container"
      style={{ padding: "3rem", color: "#fff" }}
    >
      {/* <pre>{JSON.stringify(cartData, null, 2)}</pre> */}

      <div className="cart__div">
        {loading ? (
          <div className="cart__div__loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          cartData.map((item) => {
            return (
              <div className="cart__div__item dis-flex" key={uuidv4()}>
                <div
                  className="cart__item__img cart__left"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
                <div className="cart__right">
                  <div className="cart__item__name">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="cart__item__price">
                    <h3>
                      Price : <BiRupee className="rs__logo" />{" "}
                      {(item.price * (100 - item.discount)) / 100}
                      <span className="span_price">({item.discount}% OFF)</span>
                      <span className="span_price ori">
                        <BiRupee className="rs__logo" /> {item.price}
                      </span>
                    </h3>

                    <div
                      className="btn__remove-cart"
                      onClick={() => {
                        removeProduct(item._id, userId);
                        setLoad(false);
                      }}
                    >
                      REMOVE FROM CART
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="cart__item__price2">
        {loading ? (
          <div className="cart__div__loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
            <h3>
              Total Price : <BiRupee className="rs__logo" />
              {parseFloat(
                cartData.reduce((acc, curr) => {
                  return acc + (curr.price * (100 - curr.discount)) / 100;
                }, 0)
              ).toFixed(2)}
            </h3>
            <div
              className="btn__remove-cart"
              onClick={() => {
                setCheckoutBtnText("Loading...");
                setTimeout(() => {
                  setCheckoutBtnText("Payment Processing...");
                  setTimeout(() => {
                    navigate("/checkout");
                  }, 2000);
                }, 1000);
              }}
            >
              {checkoutBtnText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
