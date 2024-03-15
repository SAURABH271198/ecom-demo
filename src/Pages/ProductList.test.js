import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { Provider } from "react-redux";
import store from "../store";
import { MOCK_DATA } from "../../constants";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("test cases for the product list page", () => {
	test("when no data passed it should display message", () => {
		render(
			<Provider store={store}>
				<ProductList />
			</Provider>
		);
		const element = screen.getByTestId("error-page");
		expect(element).toHaveTextContent("No products available");
	});

	test("when data passed it should display card", () => {
		store.dispatch({ type: "UPDATE_LIST", payload: MOCK_DATA });
		const { debug } = render(
			<Provider store={store}>
				<ProductList />
			</Provider>
		);
		const element = screen.getByTestId("product-list");
		expect(element).toHaveTextContent("men's clothing");
	});
});
