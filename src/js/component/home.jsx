import React from "react";
import { Todos } from "./Todos.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="bg-dark text-light home pt-5">
			<h1 className="text-center title">todos</h1>
			<Todos />
		</div>
	);
};

export default Home;
