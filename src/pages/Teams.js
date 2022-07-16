import React, { useEffect, useState } from "react";
import Axios from "axios";
import { IoSettingsOutline } from "react-icons/io5";
import "./Teams.css";
import TeamsItemList from "../components/TeamsItemList";

const Teams = () => {
	const [teams, setTeams] = useState([]);
	const [teamsStatus, setTeamsStatus] = useState("active");
	useEffect(() => {
		Axios.get("https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams.json").then((response) => {
			let loadedData = [];
			for (const key in response.data) {
				loadedData.push({
					key: key,
					id: response.data[key].id,
					mentorId: response.data[key].mentorId,
					name: response.data[key].name,
					status: response.data[key].status,
					privacy: response.data[key].privacy,
					description: response.data[key].description,
				});
			}
			setTeams(loadedData);
		});
	}, []);
	return (
		<div className="teams">
			<div className="teams-container">
				<header className="teams-header">
					<div className="teams-header-title">
						Teams
						<IoSettingsOutline />
					</div>
					<div className="teams-nav">
						<h3 className="teams-li" onClick={() => setTeamsStatus("active")}>
							Your teams
						</h3>
						<h3 className="teams-li" onClick={() => setTeamsStatus("hidden")}>
							Hidden teams
						</h3>
					</div>
				</header>
				<TeamsItemList teams={teams} teamsStatus={teamsStatus} />
			</div>
		</div>
	);
};

export default Teams;
