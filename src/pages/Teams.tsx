import React, { useEffect, useContext } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import "./Teams.css";
import TeamsItemList from "../components/TeamsItemList";
import TeamsContext from "../store/teams-context";

const Teams = () => {
	const { status, handleStatus } = useContext(TeamsContext);
	useEffect(() => {
		status && handleStatus?.(status)!;
	}, []);

	return (
		<div className="teams">
			<div className="teams-wrapper">
				Teams
				<div className="teams-container">
					<ul className="teams-nav">
						<li
							className={status === "active" ? "teams-li-active" : "teams-li-inactive"}
							onClick={() => handleStatus?.("active")}
						>
							<h4 className="teams-link">Your teams</h4>
						</li>
						<li
							className={status === "hidden" ? "teams-li-active" : "teams-li-inactive"}
							onClick={() => handleStatus?.("hidden")}
						>
							<h4 className="teams-link">Hidden teams</h4>
						</li>
					</ul>
					<div className="teams-settings">
						<div className="search-wrapper">
							<input className="teams-search-bar" type="text" placeholder="Search Teams" />
							<BiSearch className="search-icon" />
						</div>
						<IoSettingsOutline />
					</div>
				</div>
			</div>
			<TeamsItemList />
		</div>
	);
};

export default Teams;
