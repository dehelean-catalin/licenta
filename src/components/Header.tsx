import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import "./Header.css";
const Header = () => {
	const { pathname } = useLocation();
	return (
		<header>
			<nav className="header-nav">
				<ul className="header-ul">
					<li className="header-li">
						<Link to="/join" className={pathname === "/join" ? "active-link" : "inactive-link"}>
							<span className="header-span">
								<FaUserPlus />
								<h2>Join</h2>
							</span>
						</Link>
					</li>
					<li className="header-li">
						<Link to="/activity" className={pathname === "/activity" ? "active-link" : "inactive-link"}>
							<span className="header-span">
								<IoMdNotificationsOutline />
								<h2> Activity</h2>
							</span>
						</Link>
					</li>
					<li className="header-li">
						<Link to="/teams" className={pathname === "/teams" ? "active-link" : "inactive-link"}>
							<span className="header-span">
								<FaUsers />
								<h2>Teams</h2>
							</span>
						</Link>
					</li>
					<li className="header-li">
						<span className="header-span">
							<BsThreeDots />
						</span>
					</li>
					<li className="header-li">
						<Link to="/help" className={pathname === "/help" ? "active-link" : "inactive-link"}>
							<span className="header-span">
								<MdHelp />
								<h2>Help</h2>
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
