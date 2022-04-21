import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from '../pages/Homepage/HomePage';
import ProductListPage from "../pages/ProductListPage/ProductListPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
    )
}

export default AllRoutes;