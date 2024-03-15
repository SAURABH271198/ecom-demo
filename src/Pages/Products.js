import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import Loader from "../components/loader/loader";
import Error from "../components/Error/error";
import ProductList from "./ProductList";

const Products = () => {
	const url = "https://fakestoreapi.com/products?limit=10";
	const { data, loading, error } = useFetch(url);
	const dispatch = useDispatch();

	const updateProductList = () => {
		dispatch({
			type: "UPDATE_LIST",
			payload: data,
		});
	};

	useEffect(() => {
		updateProductList();
	}, [data]);

	if (loading) return <Loader />;

	if (error)
		return <Error message="Something went wrong please contact to admin" />;

	return <ProductList />;
};

export default Products;
