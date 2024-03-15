import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoaderStyledDiv } from "./loader.style";

const Loader = () => {
	return (
		<LoaderStyledDiv role="loader" data-testid="loader">
			<CircularProgress size={60} />
		</LoaderStyledDiv>
	);
};

export default Loader;
