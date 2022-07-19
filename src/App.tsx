import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Teams from "./pages/Teams";
import Activity from "./pages/Activity";
import Join from "./pages/Join";
import "./App.css";
import Team from "./pages/Team";
import React from "react";
import Help from "./pages/Help";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/join" element={<Join />} />
					<Route path="/help" element={<Help />} />
					<Route path="/teams" element={<Teams />} />
					<Route path="/teams/:id" element={<Team />} />
					<Route path="/activity" element={<Activity />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
