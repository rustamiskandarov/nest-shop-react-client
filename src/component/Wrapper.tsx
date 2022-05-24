import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Users from "../pages/Users";
import { Navbar } from "./navigation/Navbar";
import { Sidebar } from "./navigation/Sidebar";

export class Wrapper extends Component {
	render() {
		return (
			<>
				<Navbar />

				<div className="container-fluid">
					<div className="row">
						<Sidebar />
						<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

							

						</main>
					</div>
				</div>
			</>
		)
	}
}