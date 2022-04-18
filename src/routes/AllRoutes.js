import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from '../pages/Homepage/HomePage';
import ProductList from "../pages/ProductListPage/ProductList";
import ProductDetail from "../pages/ProductDetailPage/ProductDetail";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
    )
}

export default AllRoutes;