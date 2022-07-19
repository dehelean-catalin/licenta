import React, { useEffect } from "react";
import Axios from "axios";
import { ITeam, IUser } from "../models/models";
import { useParams } from "react-router";
import { useState } from "react";
import "./Team.css";

const Team = () => {
	const { id } = useParams();

	const [owners, setOwners] = useState<IUser[]>();
	useEffect(() => {
		Axios.get("https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams.json").then((response) => {
			let loadedData: ITeam[] = [];
			for (const key in response.data) {
				loadedData.push({
					key: key,
					id: response.data[key].id,
					name: response.data[key].name,
					status: response.data[key].status,
					privacy: response.data[key].privacy,
					description: response.data[key].description,
					avatar: "",
					owners: response.data[key].owners,
					members: response.data[key].members,
					requests: response.data[key].requests,
				});
			}
			setOwners(loadedData.find((team) => team.id === id)?.owners);
			console.log(loadedData);
		});
	}, []);
	console.log(owners);
	return (
		<div className="team">
			<div className="team-wrapper">
				<div className="team-channels">
					Numele echipei
					<div>
						Canalele
						<ul>
							<li>Principal</li>
							<li>Add Channel</li>
						</ul>
					</div>
				</div>
				<div>
					Zona de chat
					<div>
						<ul>
							<li>Team</li>
							<li>Members</li>
						</ul>
					</div>
				</div>
			</div>
			{owners && owners.map((owner) => <div>{owner.id}</div>)}
		</div>
	);
};

export default Team;
