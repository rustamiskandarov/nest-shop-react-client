import { Component, SyntheticEvent } from "react";
import '../Form.css';
import axios from 'axios';

class Login extends Component {
	
	email='';
	password='';
	load = false;
 
	submit=(e: SyntheticEvent)=>{
		e.preventDefault();

		const obj = {
	
			email: this.email,
			password: this.password,
			
		}

		
		try {
			this.load = true
			setTimeout(()=>{
				axios.post('http://localhost:3000/api/login', {
					...obj
				})
			}, 3000)
			this.load = false
		} catch (error) {
			this.load = false
		}
		
	}
	render() {
		return (
			<div className="text-center">
				<div className="form-signin">
					<form className="pt-5 mt-5" onSubmit={this.submit}>

						<h1 className="h3 mb-3 fw-normal">Войти</h1>

						
						<div className="form-floating">
							<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required 
								onChange={e => this.email = e.target.value}
							/>
							<label htmlFor="floatingInput">Email address</label>
						</div>

						<div className="form-floating">
							<input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
								onChange={e => this.password = e.target.value}
							/>
							<label htmlFor="floatingPassword">Password</label>
						</div>


						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button disabled={this.load} className="w-100 btn btn-lg btn-success" type="submit">Войти</button>

					</form>
				</div>

			</div>

		)
	}
}

export default Login;