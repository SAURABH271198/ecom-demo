import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error/error";
import ProductItem from "./ProductItem";
import { ProductListStyledDiv } from "./ProductList.style";

const ProductList = () => {
	const state = useSelector((state) => state);
	const { productList, draggedItem } = state;
	const dispatch = useDispatch();

	if (!productList.length) return <Error message="No products available" />;

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDropOver = (e) => {
		const { id = "", parentNode } = e.target;
		const dropId = id || parentNode.id;

		if (dropId && !isNaN(+dropId)) {
			const droppedIndex = productList.findIndex((item) => item.id === +dropId);
			const draggedIndex = productList.findIndex(
				(item) => item.id === draggedItem.id
			);

			if (droppedIndex !== -1 && draggedIndex !== -1) {
				const data = JSON.parse(JSON.stringify(productList));
				[data[droppedIndex], data[draggedIndex]] = [
					draggedItem,
					data[droppedIndex],
				];

				dispatch({
					type: "UPDATE_LIST",
					payload: data,
				});

				localStorage.setItem("productList", JSON.stringify(data));
			}
		}
	};

	return (
		<ProductListStyledDiv
			onDrop={handleDropOver}
			onDragOver={handleDragOver}
			data-testid="product-list"
		>
			{productList.map((item, index) => {
				return <ProductItem product={item} key={`${item.title}_${index}`} />;
			})}
		</ProductListStyledDiv>
	);
};

export default ProductList;
