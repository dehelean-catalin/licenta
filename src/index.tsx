import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TeamsContextProvider } from "./store/teams-context";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<TeamsContextProvider>
		<App />
	</TeamsContextProvider>
);
