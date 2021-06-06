import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/utils/ProtectedRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<ProtectedRoute exact path="/protected" component={Friends} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
