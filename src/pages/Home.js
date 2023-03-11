import React from "react";
import Blogs from "../components/Blogs/Blogs";
import Filter from "../components/Filter/Filter";

const Home = () => {
	return (
		<section class="wrapper">
			<Filter />
			<Blogs />
		</section>
	);
};

export default Home;
