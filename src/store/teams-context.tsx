import React, { useState, useEffect, createContext, ReactNode, FC } from "react";
import Axios from "axios";
import { ITeam } from "../models/models";

type Props = {
	children: ReactNode;
};
interface ITeamsContext {
	status: string;
	handleStatus?: (status: string) => void;
	teams: ITeam[];
	changeStatus: (team: ITeam) => void;
}
const TeamsContext = createContext<Partial<ITeamsContext>>({});

export const TeamsContextProvider: FC<Props> = ({ children }) => {
	const [teams, setTeams] = useState<ITeam[]>([]);
	const [status, setStatus] = useState<string>("");

	const handleStatus = (status: string) => {
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
					owners: [],
					members: [],
					requests: [],
				});
			}
			setTeams(loadedData.filter((data) => data.status === status));
			setStatus(status);
		});
	};
	useEffect(() => {
		handleStatus("active");
	}, []);
	const changeStatus = (team: ITeam) => {
		const { key, id, name, privacy, description, status, owners, members, requests } = team;
		const newStatus = status === "active" ? "hidden" : "active";
		Axios.put(`https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams/${key}.json`, {
			key,
			id,
			name,
			privacy,
			description,
			status: newStatus,
			owners,
			requests,
			members,
		}).then((response) => {
			console.log(response);
			handleStatus(status);
		});
	};

	return (
		<TeamsContext.Provider value={{ status, teams, handleStatus, changeStatus: changeStatus }}>
			{children}
		</TeamsContext.Provider>
	);
};

export default TeamsContext;
