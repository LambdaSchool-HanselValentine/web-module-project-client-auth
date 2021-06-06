import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ProtectedRoute from "./components/utils/ProtectedRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<ProtectedRoute path="/friends" component={Friends} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
