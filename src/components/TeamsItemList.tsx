import React, { useContext } from "react";
import "./TeamsItemList.css";
import TeamsItem from "./TeamsItem";
import TeamsContext from "../store/teams-context";
const TeamsItemList = () => {
	const { teams } = useContext(TeamsContext);
	return (
		<div className="teams-list">
			{teams && teams.map((team, key) => (
				<TeamsItem key={key} team={team} />
			))}
		</div>
	);
};

export default TeamsItemList;
