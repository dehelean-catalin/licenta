import React from "react";
import "./TeamsItemList.css";
import TeamsItem from "./TeamsItem";
const TeamsItemList = ({ teams, teamsStatus }) => {
	return (
		<div>
			{teams
				.filter((team) => team.status == teamsStatus)
				.map((team, key) => (
					<TeamsItem key={key} team={team} />
				))}
		</div>
	);
};

export default TeamsItemList;
