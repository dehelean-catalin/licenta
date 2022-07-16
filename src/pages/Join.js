import React, { useState } from "react";
import CreateTeam from "../components/CreateTeam";
import "./Join.css";
const Join = () => {
	const [isCreateTeamOpen, setIsCreateTeamOpen] = useState(false);
	return (
		<div className="join">
			<section className="create-team">
				<button onClick={() => setIsCreateTeamOpen(true)}>Create a team</button>
			</section>
			<section className="join-team">
				<input type="text" />
				Join a team
			</section>
			{isCreateTeamOpen && <CreateTeam setIsCreateTeamOpen={(open) => setIsCreateTeamOpen(open)} />}
		</div>
	);
};

export default Join;
