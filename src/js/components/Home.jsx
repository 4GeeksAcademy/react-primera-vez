import React from "react";

import NavBar from "./NavBar";
import Heading from "./Heading";
import Cards from "./Cards";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div style={{width: "100vw", height: "100vh"}}>
		<NavBar/>
		<Heading/>
		<Cards/>
		<Footer/>
		</div>
	);
};

export default Home;