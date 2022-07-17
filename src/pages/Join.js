import React, { useState } from "react";
import CreateTeam from "../components/CreateTeam";
import CreateLogo from "../images/logo.png";
import { IoPersonAddSharp } from "react-icons/io5";
import "./Join.css";
import Backdrop from "../components/Backdrop";
const Join = () => {
	const [isCreateTeamOpen, setIsCreateTeamOpen] = useState(false);
	const [notification, setNotification] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setNotification(true);
	};

	return (
		<div className="join">
			<h3 className="join-title">Join or create a team</h3>
			<div className="join-wrapper">
				<section className="create-team">
					<img src={CreateLogo} alt="not found" className="join-icon" />
					Create a team
					<div className="create-team-description">Bring everyone together and get to work!</div>
					<button className="create-team-btn" onClick={() => setIsCreateTeamOpen(true)}>
						<IoPersonAddSharp />
						<p className="create-team-btn-text">Create team</p>
					</button>
				</section>
				<section className="join-team">
					<img src={CreateLogo} alt="not found" className="join-icon" />
					Join a team via code
					<form className="join-team-form" onSubmit={handleSubmit}>
						<input className="join-team-input" type="text" />
						<button className="join-team-btn">Join a team</button>
					</form>
				</section>
			</div>
			{isCreateTeamOpen && <Backdrop />}
			{isCreateTeamOpen && <CreateTeam setIsCreateTeamOpen={(open) => setIsCreateTeamOpen(open)} />}
			{notification && <div className="join-notification">Congratiulation you have joined a team</div>}
		</div>
	);
};

export default Join;
