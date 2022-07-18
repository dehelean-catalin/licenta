import React, { useState } from "react";
import "./TeamsItem.css";
import { BsThreeDots } from "react-icons/bs";
import TeamsItemOptions from "./TeamsItemOptions";
import { ITeam } from "../models/models";
interface Props{
	team:ITeam
}
const TeamsItem = (props:Props) => {
	const [isOptionOpened, setIsOptionOpened] = useState<boolean>(false);
    const Logo = require("../images/logo.png")
	return (
		<div className="teams-item">
			<div className="teams-item-dots">
				<BsThreeDots onClick={() => setIsOptionOpened(!isOptionOpened)} />
			</div>

			<img src={Logo} alt="not found" className="join-icon" />
			<h3>{props.team.name}</h3>
			<div>
				Role: <span>Owner</span>
			</div>
			{isOptionOpened && <TeamsItemOptions team={props.team} setIsOptionOpened={(open:boolean) => setIsOptionOpened(open)} />}
		</div>
	);
};

export default TeamsItem;
