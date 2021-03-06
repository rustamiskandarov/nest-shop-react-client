
import { Component } from "react";
import { Wrapper } from "../component/Wrapper";

class Dashboard extends Component{
	render(){
		return (
			<Wrapper>
				<div className="">
					<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<h1 className="h2">Dashboard</h1>
						<div className="btn-toolbar mb-2 mb-md-0">
							<div className="btn-group me-2">
								<button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
								<button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
							</div>
							<button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
								<span data-feather="calendar"></span>
								This week
							</button>
						</div>
					</div>

					<canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

					<h2>Section title</h2>
					<div className="table-responsive">
						<table className="table table-striped table-sm">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Header</th>
									<th scope="col">Header</th>
									<th scope="col">Header</th>
									<th scope="col">Header</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1,001</td>
									<td>random</td>
									<td>data</td>
									<td>placeholder</td>
									<td>text</td>
								</tr>
								<tr>
									<td>1,002</td>
									<td>placeholder</td>
									<td>irrelevant</td>
									<td>visual</td>
									<td>layout</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</Wrapper>
		)
	}
}

export default Dashboard;