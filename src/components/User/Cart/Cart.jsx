import axios from "axios";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Cart() {
  let userId = JSON.parse(localStorage.getItem("userId"));
  console.log("userId ", userId);

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
    cartDataIdArr();
    allProductData();
  }, []);

  useEffect(() => {
    if (cartData[0] !== undefined) {
      setLoading(false);
    }
  }, [cartData]);

  console.log("cartData ", cartData);

  return (
    <div style={{ color: "#fff" }}>
      <h1>Cart</h1>
      {/* <pre>{JSON.stringify(cartData, null, 2)}</pre> */}

      <div className="cart__div">
        {loading ? (
          <div className="cart__div--loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          cartData.map((item) => {
            return (
              <div className="cart__div--item" key={uuidv4()} >
                <div className="cart__div--item--img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart__div--item--name">
                  <h3>{item.name}</h3>
                </div>
                <div className="cart__div--item--price">
                  <h3>{item.price}</h3>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
