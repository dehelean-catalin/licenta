import React, { useState } from "react";
import "./TeamsItem.css";
import { BsThreeDots } from "react-icons/bs";
import Logo from "../images/logo.png";
import TeamsItemOptions from "./TeamsItemOptions";
const TeamsItem = ({ team }) => {
	const [isOptionOpened, setIsOptionOpened] = useState(false);

	return (
		<div className="teams-item">
			<div className="teams-item-dots">
				<BsThreeDots onClick={() => setIsOptionOpened(!isOptionOpened)} />
			</div>

			<img src={Logo} alt="not found" className="join-icon" />
			<h3>{team.name}</h3>
			<div>
				Role: <span>Owner</span>
			</div>
			{isOptionOpened && <TeamsItemOptions team={team} setIsOptionOpened={(open) => setIsOptionOpened(open)} />}
		</div>
	);
};

export default TeamsItem;
