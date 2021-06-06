import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./components.css";

const initialFormValues = {
	username: "",
	password: "",
};

const Login = () => {
	const [formValues, setFormValues] = useState(initialFormValues);

	const onChangeHandler = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	let history = useHistory();
	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", formValues)
			.then((res) => {
				localStorage.setItem("token", res.data.payload);
				history.push("/protected");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="login-form" onSubmit={submitHandler}>
			<h1> Please login to see friends list</h1>
			<form>
				<input
					type="text"
					name="username"
					value={formValues.username}
					onChange={onChangeHandler}
					placeholder="Enter Username"
				/>
				<input
					type="password"
					name="password"
					value={formValues.password}
					onChange={onChangeHandler}
					placeholder="Enter Password"
				/>
				<button> Login </button>
			</form>
		</div>
	);
};

export default Login;
