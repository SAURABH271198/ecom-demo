import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";
import { MOCK_DATA } from "../../constants";
import { Provider } from "react-redux";
import store from "../store";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate,
}));

describe("test cases for the ProductItem component", () => {
	test("it should render product card", () => {
		render(
			<Provider store={store}>
				<ProductItem product={MOCK_DATA[0]} />
			</Provider>
		);
		const cardElement = screen.getByTestId("product-card");
		expect(cardElement).toBeInTheDocument();
	});

	test("on click on card it should redirect to product detail page", () => {
		render(
			<Provider store={store}>
				<ProductItem product={MOCK_DATA[0]} />
			</Provider>
		);
		const cardElement = screen.getByTestId("product-card");
		fireEvent.click(cardElement);
		expect(mockedUsedNavigate).toHaveBeenCalledWith("/product/1");
	});
});
