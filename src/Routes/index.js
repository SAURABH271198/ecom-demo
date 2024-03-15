import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Products = lazy(() => import("../Pages/Products"));
const ProductDetail = lazy(() => import("../Pages/ProductDetail"));

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/products" element={<Products />} />;
			<Route path="/product/:id" element={<ProductDetail />} />
			<Route path="*" element={<Navigate to="/products" />} />;
		</Routes>
	);
};

export default AppRoutes;
