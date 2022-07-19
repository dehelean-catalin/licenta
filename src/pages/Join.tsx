import React, { useState } from "react";
import CreateTeam from "../components/CreateTeam";
import { IoPersonAddSharp } from "react-icons/io5";
import "./Join.css";
import Backdrop from "../components/Backdrop";
import { useRef } from "react";
import Axios from "axios";
import { ITeam, IUser } from "../models/models";

const USER: IUser = {
	id: "12d3",
};

const Join = () => {
	const CreateLogo = require("../images/logo.png");
	const [isCreateTeamOpen, setIsCreateTeamOpen] = useState(false);
	const [notification, setNotification] = useState(false);
	const inputJoinTeamValue = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
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

			const newData = loadedData.find((team) => team.id === inputJoinTeamValue.current?.value);
			console.log(loadedData);
			const isOwner = newData?.owners.some((owner) => owner.id === USER.id);
			const isMember = newData?.members.some((member) => member.id === USER.id);
			const alreadySentRequest = newData?.requests.some((request) => request.id === USER.id);

			const notEnrolled = !isOwner && !isMember && !alreadySentRequest;

			notEnrolled &&
				newData?.privacy === "Private" &&
				Axios.put(`https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams/${newData.key}.json`, {
					...newData,
					requests: [...response.data[newData.key].requests, { id: 1234 }],
				});

			notEnrolled &&
				newData?.privacy === "Public" &&
				Axios.put(`https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams/${newData.key}.json`, {
					...newData,
					members: [...response.data[newData.key].members, { id: 1234 }],
				});

			newData?.privacy === "Locked" && console.log("this team doesnt accept request");

			isOwner && console.log("you are owner");
			isMember && console.log("you are member");
			alreadySentRequest && console.log("you have already sent a request");
		});
		setNotification(true);
	};

	return (
		<div className="join">
			<div className="join-wrapper">Join or create a team</div>
			<div className="join-container">
				<section className="create-team">
					<img src={CreateLogo} alt="not found" className="join-avatar" />
					Create a team
					<div className="create-team-description">Bring everyone together and get to work!</div>
					<button className="create-team-btn" onClick={() => setIsCreateTeamOpen(true)}>
						<IoPersonAddSharp />
						<p className="create-team-btn-text">Create team</p>
					</button>
				</section>
				<section className="join-team">
					<img src={CreateLogo} alt="not found" className="join-avatar" />
					Join a team via code
					<form className="join-team-form" onSubmit={handleSubmit}>
						<input name="input" className="join-team-input" type="text" ref={inputJoinTeamValue} />
						<button className="join-team-btn">Join a team</button>
					</form>
				</section>
			</div>
			{isCreateTeamOpen && <Backdrop />}
			{isCreateTeamOpen && <CreateTeam setIsCreateTeamOpen={(open: boolean) => setIsCreateTeamOpen(open)} />}
			{/* {notification && <div className="join-notification">Congratiulation you have joined a team</div>} */}
		</div>
	);
};

export default Join;
