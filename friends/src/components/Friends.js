import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import "./components.css";

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
		<div className="friends-container">
			<h1> List of Friends </h1>

			{friends.map((friend) => {
				return (
					<div className="friend-card" key={friend.id}>
						Name: {friend.name} <br />
						Age: {friend.age} <br />
						Email: {friend.email} <br />
					</div>
				);
			})}

			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default Friends;
