import axios from "axios";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./cart.css";
import { useDispatch } from "react-redux";

import { removeProductFromCart } from "../../../redux/actions/userAction";

function Cart() {
  let userId = JSON.parse(localStorage.getItem("userId"));
  console.log("userId ", userId);

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

  //from this data store two things product and count of product
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cartData[0] !== undefined) {
      setLoading(false);
    }
  }, [cartData]);

  useEffect(() => {
    cartDataIdArr();
    allProductData();
  }, []);

  const removeProduct = (productId, userId) => {
    setLoading(true);
    dispatch(removeProductFromCart(productId, userId));
    setLoading(false);
  };

  console.log("cartData ", cartData);

  // let totalprice = cartData.reduce((acc, curr) => {
  //   return acc + (curr.price * (100 - curr.discount)) / 100;
  // }, 0);

  // console.log("totalPrice ", totalprice);

  return (
    <div className="dis-flex" style={{ padding: "3rem", color: "#fff" }}>
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
                >
                  {/* <img src={item.image} alt={item.name} /> */}
                </div>
                <div className="cart__right">
                  <div className="cart__item__name">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="cart__item__price">
                    <h3>
                      Price : {(item.price * (100 - item.discount)) / 100}
                      <span className="span_price">
                        {" "}
                        ({item.discount}% OFF){" "}
                      </span>
                      <span className="span_price ori">{item.price}</span>
                    </h3>

                    <div
                      className="btn__remove-cart"
                      onClick={() => removeProduct(item._id, userId)}
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
      <div className="cart__item__price">
        {loading ? (
          <div className="cart__div__loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
            <h3>
              Total Price :   
              {cartData.reduce((acc, curr) => {
                return acc + (curr.price * (100 - curr.discount)) / 100;
              }, 0)}
            </h3>
            <div className="btn__remove-cart">checkout</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
