import React, { startTransition } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
	const { title, image, category, price, id } = product;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<Card
			sx={{ maxWidth: 345 }}
			className="card"
			draggable
			onDragStart={() =>
				dispatch({
					type: "UPDATE_DRAGGED_ITEM",
					payload: product,
				})
			}
			id={id}
			onClick={() => {
				startTransition(() => {
					navigate(`/product/${id}`);
				});
			}}
			data-testid="product-card"
		>
			<CardMedia
				sx={{ height: 140 }}
				image={image}
				title={product.category}
				style={{ height: "250px" }}
			/>
			<CardContent>
				<Typography variant="h6">{category}</Typography>
				<Typography variant="body1">{title}</Typography>
				<Typography variant="h6">${price}</Typography>
			</CardContent>
		</Card>
	);
};

export default ProductItem;
