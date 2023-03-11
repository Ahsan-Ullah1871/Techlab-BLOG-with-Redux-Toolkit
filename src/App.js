import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/blog/:blogID"
					element={<BlogDetails />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

