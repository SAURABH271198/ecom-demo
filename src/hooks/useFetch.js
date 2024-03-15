import React, { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const productList = localStorage.getItem("productList");
		const list = JSON.parse(productList);
		if (!!list) {
			setData(list);
		} else {
			url && fetchData();
		}
	}, [url]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const resp = await fetch(url);
			const data = await resp.json();
			setLoading(false);
			setData(data);
		} catch (error) {
			setLoading(false);
			setError(error);
			console.log(error);
		}
	};

	return { data, loading, error };
};

export default useFetch;
