import React, { useEffect, useContext } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import "./Teams.css";
import TeamsItemList from "../components/TeamsItemList";
import TeamsContext from "../store/teams-context";

const Teams = () => {
	const { status, handleStatus } = useContext(TeamsContext);
	useEffect(() => {
		handleStatus?.("active");
	}, []);
    const handleClick = ()=>{
		handleStatus?.("active")
	}
	return (
		<div className="teams">
			<div className="teams-container">
				<header className="teams-header">
					<div className="teams-header-title">
						Teams
						<IoSettingsOutline />
					</div>
					<div className="teams-header-wrapper">
						<ul className="teams-nav">
							<li
								className={status === "active" ? "teams-li-active" : "teams-li-inactive"}
								onClick={handleClick}
							>
								Your teams
							</li>
							<li
								className={status === "hidden" ? "teams-li-active" : "teams-li-inactive"}
								onClick={() => handleStatus?.("hidden")}
							>
								Hidden teams
							</li>
						</ul>
						<div className="search-wrapper">
							<input className="teams-search-bar" type="text" placeholder="Search Teams" />
							<BiSearch className="search-icon" />
						</div>
					</div>
				</header>
				<TeamsItemList />
			</div>
		</div>
	);
};

export default Teams;
