export interface IUser {
	id: string;
}
export interface ITeam {
	key: string;
	id: string;
	name: string;
	privacy: string;
	description: string;
	status: string;
	avatar: string;
	owners: IUser[];
	requests: IUser[];
	members: IUser[];
}
