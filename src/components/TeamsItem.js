import React from "react";
import "./TeamsItem.css";
import { BsThreeDots } from "react-icons/bs";
import Axios from "axios";
const TeamsItem = ({ team }) => {
	const { id, mentorId, name, status, privacy, description, key } = team;

	const handleStatus = () => {
		let newStatus = "";
		if (status === "active") {
			newStatus = "hidden";
		}
		if (status === "hidden") {
			newStatus = "active";
		}
		Axios.put(`https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams/${key}.json`, {
			id,
			mentorId,
			name,
			status: newStatus,
			privacy,
			description,
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="teams-item">
			<BsThreeDots onClick={handleStatus} />
			<h3>{team.name}</h3>
		</div>
	);
};

export default TeamsItem;
