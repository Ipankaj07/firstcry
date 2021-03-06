import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from '../pages/Homepage/HomePage';
import ProductListPage from "../pages/ProductListPage/ProductListPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import Login from "../components/User/Login/Login";
import SignUp from "../components/User/Signup/SignUp";
import Cart from "../components/User/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<div className="foF" ><h1> 404 | Page Not Found </h1> </div>} />
        </Routes>
    )
}

export default AllRoutes;