import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";
import { MOCK_DATA } from "../../constants";

const url = "https://fakestoreapi.com/products?limit=10";

describe("test cases for use fetch hook", () => {
	test("should fetch data from the provided url", async () => {
		global.fetch = jest.fn().mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(MOCK_DATA),
		});
		const { result } = renderHook(() => useFetch(url));
		expect(result.current.loading).toBe(true);
		expect(result.current.data).toEqual([]);
		expect(result.current.error).toBe("");

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
			expect(result.current.data).toEqual(MOCK_DATA);
			expect(result.current.error).toBe("");
			expect(global.fetch).toHaveBeenCalledWith(url);
		});
	});

	test("should handle fetch error", async () => {
		global.fetch = jest.fn().mockRejectedValueOnce("network error");
		const { result } = renderHook(() => useFetch(url));
		expect(result.current.loading).toBe(true);

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
			expect(result.current.data).toEqual([]);
			expect(result.current.error).toBe("network error");
		});
	});
});
