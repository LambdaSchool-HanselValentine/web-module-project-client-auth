import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const Friends = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		getFriends();
	}, []);

	const logout = () => {
		localStorage.removeItem("token");
		window.location.href = "/";
	};

	const getFriends = () => {
		axiosWithAuth()
			.get("/friends")
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			List of Friends
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Friends;
