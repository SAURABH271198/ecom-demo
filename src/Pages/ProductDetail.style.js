import styled from "@emotion/styled";

export const ProductDetailStyledDiv = styled.div`
	padding: 30px;

	.productDetail-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		max-width: 600px;
		margin: 0 auto;
		background-color: #fff;
	}

	.productDetail-container img {
		max-width: 100%;
		height: auto;
		margin-bottom: 20px;
	}
`;
