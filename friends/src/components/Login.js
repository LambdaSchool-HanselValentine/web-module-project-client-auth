import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Login = () => {
	return (
		<div className="login-form">
			<form>
				<input type="text" placeholder="Enter Username" />
				<input type="text" placeholder="Enter Password" />

				<Link to="/friends">
					<button> Login </button>
				</Link>
			</form>
		</div>
	);
};

export default Login;
