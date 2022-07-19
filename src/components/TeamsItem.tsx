import React, { useState } from "react";
import "./TeamsItem.css";
import { BsThreeDots } from "react-icons/bs";
import TeamsItemOptions from "./TeamsItemOptions";
import { ITeam } from "../models/models";
import { Link } from "react-router-dom";
interface Props {
	team: ITeam;
}
const TeamsItem = (props: Props) => {
	const [isOptionOpened, setIsOptionOpened] = useState<boolean>(false);
	const Logo = require("../images/logo.png");
	return (
		<div className="teams-item">
			<div className="teams-item-dots">
				<BsThreeDots onClick={() => setIsOptionOpened(!isOptionOpened)} />
			</div>
			<Link to={`${props.team.id}`} className="teams-item-link">
				<img src={Logo} alt="not found" className="join-avatar" />
				<h3>{props.team.name}</h3>
			</Link>

			{isOptionOpened && (
				<TeamsItemOptions team={props.team} setIsOptionOpened={(open: boolean) => setIsOptionOpened(open)} />
			)}
		</div>
	);
};

export default TeamsItem;
