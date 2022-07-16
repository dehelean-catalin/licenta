import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Join";
import Teams from "./pages/Teams";
import Activity from "./pages/Activity";
import Join from "./pages/Join";
import "./App.css";
import Team from "./pages/Team";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/help" element={<Join />} />
					<Route path="/teams" element={<Teams />} />
					<Route path="/teams/:id" element={<Team />} />
					<Route path="/activity" element={<Activity />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
