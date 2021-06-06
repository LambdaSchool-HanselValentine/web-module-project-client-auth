import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const Friends = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		getFriends();
	}, []);

	const getFriends = () => {
		axiosWithAuth()
			.get("/friends")
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err.response.data.error);
			});
	};

	return <div>List of Friends</div>;
};

export default Friends;
