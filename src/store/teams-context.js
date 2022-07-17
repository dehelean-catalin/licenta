import React, { useState, useEffect } from "react";
import Axios from "axios";
const TeamsContext = React.createContext({
	status: "",
	handleStatus: (status) => {},
	teams: [],
	changeStatus: (team) => {},
});
export const TeamsContextProvider = (props) => {
	const [teams, setTeams] = useState([]);
	const [status, setStatus] = useState([]);

	const handleStatus = (status) => {
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
			setTeams(loadedData.filter((data) => data.status === status));
			setStatus(status);
		});
	};
	useEffect(() => {
		handleStatus("active");
	}, []);
	const changeStatus = (team) => {
		const { id, mentorId, name, status, privacy, description, key } = team;
		const newStatus = status === "active" ? "hidden" : "active";
		Axios.put(`https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams/${key}.json`, {
			id,
			mentorId,
			name,
			status: newStatus,
			privacy,
			description,
		}).then((response) => {
			console.log(response);
			handleStatus(status);
		});
	};

	const contextValue = { status, teams, handleStatus: handleStatus, changeStatus };
	return <TeamsContext.Provider value={contextValue}>{props.children}</TeamsContext.Provider>;
};

export default TeamsContext;
