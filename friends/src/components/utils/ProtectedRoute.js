import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => {
				if (localStorage.getItem("token") === null) {
					return (
						<div>
							<h1>
								Please <a href="/">login </a> to continue
							</h1>
						</div>
					);
				}
				return <Component {...rest} />;
			}}
		/>
	);
};

export default ProtectedRoute;
