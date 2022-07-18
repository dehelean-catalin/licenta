import React, { useContext } from "react";
import { ITeam } from "../models/models";
import TeamsContext from "../store/teams-context";
import "./TeamsItemOptions.css";
interface Props {
	team: ITeam;
	setIsOptionOpened: (data: boolean) => void;
}
const TeamsItemOptions = (props: Props) => {
	const { changeStatus } = useContext(TeamsContext);
	return (
		<div className="teams-item-options">
			{changeStatus && (
				<button
					className="options-hidden-btn"
					onClick={() => {
						changeStatus(props.team);
						props.setIsOptionOpened(false);
					}}
				>
					{props.team.status === "active" ? "Hide" : "Show"}
				</button>
			)}
		</div>
	);
};

export default TeamsItemOptions;
