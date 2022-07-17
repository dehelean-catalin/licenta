import React, { useContext } from "react";
import TeamsContext from "../store/teams-context";
import "./TeamsItemOptions.css";
const TeamsItemOptions = ({ team, setIsOptionOpened }) => {
	const { changeStatus } = useContext(TeamsContext);
	return (
		<div className="teams-item-options">
			<button
				className="options-hidden-btn"
				onClick={() => {
					changeStatus(team);
					setIsOptionOpened(false);
				}}
			>
				{team.status === "active" ? "Hide" : "Show"}
			</button>
		</div>
	);
};

export default TeamsItemOptions;
