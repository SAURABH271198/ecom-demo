import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductDetailStyledDiv } from "./ProductDetail.style";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const ProductDetail = () => {
	const params = useParams();
	const navigate = useNavigate();
	const productList = useSelector((state) => state.productList);
	const selectedProduct = productList?.find((item) => item.id === +params.id);

	useEffect(() => {
		if (!productList.length) {
			navigate("/");
		}
	}, [productList]);

	return (
		<ProductDetailStyledDiv role="product-detail">
			<div
				className="productDetail-container"
				aria-description="productDetail-container"
			>
				<img
					src={selectedProduct?.image}
					alt="product-image"
					width={300}
					height={300}
				/>
				<Typography variant="h5">{selectedProduct?.category}</Typography>
				<Typography variant="body">{selectedProduct?.title}</Typography>
				<Typography variant="h5">${selectedProduct?.price}</Typography>
				<Typography
					variant="body2"
					style={{ width: "60%", wordWrap: "break-word" }}
				>
					{selectedProduct?.description}
				</Typography>
			</div>
		</ProductDetailStyledDiv>
	);
};

export default ProductDetail;
