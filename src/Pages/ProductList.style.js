import styled from "@emotion/styled";

export const ProductListStyledDiv = styled.div`
	display: grid;
	grid-gap: 30px;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(4, 1fr);
	padding: 20px;

	.card {
		border: 1px solid lightgray;
		padding: 5px;
		border-radius: 6px;
		min-height: 300px;

		&:hover {
			cursor: pointer;
		}
	}
`;
