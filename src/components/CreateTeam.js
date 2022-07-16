import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTeam.css";
import Axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

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
			name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
		}),
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
				navigate(`/teams/${id}`);
			});
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<div>Create your own Team</div>
			<label>
				Team name
				<input
					name="name"
					type="text"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="Enter title"
				/>
			</label>
			<label>
				Privacy type
				<select name="privacy" value={formik.values.privacy} onChange={formik.handleChange}>
					<option value="Private">Private</option>
					<option value="Public">Public</option>
					<option value="Locked">Locked</option>
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
				<button className="create-btn" type="submit">
					Create
				</button>
			</div>
		</form>
	);
};

export default CreateTeam;
