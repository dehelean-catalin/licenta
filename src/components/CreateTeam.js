import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Axios from "axios";
import "./CreateTeam.css";

const generateTeamID = () => {
	let result = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let charactersLength = characters.length;
	for (let i = 0; i < 8; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

const CreateTeam = ({ setIsCreateTeamOpen }) => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			name: "",
			description: "",
			privacy: "Private",
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required("Required"),
		}),
		initialErrors: {
			name: false,
		},
		onSubmit: (values) => {
			const id = generateTeamID();
			Axios.post("https://licenta-986d3-default-rtdb.europe-west1.firebasedatabase.app/teams.json", {
				id: id,
				mentorId: 1234,
				status: "active",
				name: formik.values.name,
				privacy: formik.values.privacy,
				description: formik.values.description,
			}).then(() => {
				navigate(`/teams`);
			});
		},
	});
	console.log(formik);

	return (
		<form className="create-team-form" onSubmit={formik.handleSubmit}>
			<div className="form-title">Create a team</div>
			<p className="form-info">
				The whole point of collaboration is that you give and take from each other, and that's how you create things
				that are totally new.
			</p>
			<label>
				Team name
				<input
					className={formik.errors.name ? "invalid-input-name" : "valid-input-name"}
					name="name"
					type="text"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="Enter title"
				/>
				<div className={!formik.errors.name ? "name-length" : "name-length-limit"}>{formik.values.name.length}/30</div>
			</label>

			<label>
				Privacy type
				<select name="privacy" value={formik.values.privacy} onChange={formik.handleChange}>
					<option value="Private">Private - (Only team owners can add members / accept requsts)</option>
					<option value="Public">Public - (Anyoane can add members / accept requsts)</option>
					<option value="Locked">Locked - (Only team owners can add members)</option>
				</select>
			</label>
			<label>
				Description
				<textarea
					name="description"
					type="text"
					placeholder="Add a few words about your team"
					value={formik.values.description}
					onChange={formik.handleChange}
					rows="3"
				/>
			</label>
			<div className="btns">
				<button className="close-btn" onClick={() => setIsCreateTeamOpen(false)}>
					Close
				</button>

				<button className="create-btn" type="submit" disabled={formik.errors.name}>
					Create
				</button>
			</div>
		</form>
	);
};

export default CreateTeam;
