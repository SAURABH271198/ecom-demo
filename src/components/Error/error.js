import React from "react";
import { ErrorStyledDiv } from "./error.style";
import Typography from "@mui/material/Typography";

const Error = ({ message }) => {
	return (
		<ErrorStyledDiv role="error-page" data-testid="error-page">
			<Typography variant="h3">{message}</Typography>
		</ErrorStyledDiv>
	);
};

export default Error;
