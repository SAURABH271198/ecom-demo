import React from "react";
import Products from "./Products";
import store from "../store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { MOCK_DATA } from "../../constants";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	...jest.requireActual("react-redux"),
	useNavigate: jest.fn(),
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

describe("test cases for products component", () => {
	test("display loader initially", async () => {
		global.fetch = jest.fn().mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(MOCK_DATA),
		});
		render(
			<Provider store={store}>
				<Products />
			</Provider>
		);
		const loader = screen.getByTestId("loader");
		expect(loader).toBeInTheDocument();
	});

	test("should dispaly correct data", async () => {
		global.fetch = jest.fn().mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(MOCK_DATA),
		});
		render(
			<Provider store={store}>
				<Products />
			</Provider>
		);
		const productList = await screen.findByTestId("product-list");
		expect(productList).toHaveTextContent(MOCK_DATA[0].title);
	});

	test("should dispaly error page when error occured", async () => {
		global.fetch = jest.fn().mockRejectedValueOnce("Network Error");
		render(
			<Provider store={store}>
				<Products />
			</Provider>
		);
		const productList = await screen.findByTestId("error-page");
		expect(productList).toHaveTextContent(
			"Something went wrong please contact to admin"
		);
	});
});
