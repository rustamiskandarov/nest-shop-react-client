import { Component, SyntheticEvent } from "react";
import '../Form.css';
import axios from 'axios';

class Register extends Component {
	first_name = '';
	last_name = '';
	email='';
	password='';
	password_confirm=''; 
	submit=(e: SyntheticEvent)=>{
		e.preventDefault();

		const obj = {
			first_name: this.first_name,
			last_name: this.last_name,
			email: this.email,
			password: this.password,
			password_confirm: this.password_confirm
		}

		console.log(obj)
		axios.post('http://localhost:3000/api/register', {
			...obj
		})
	}
	render() {
		return (
			<div className="text-center">
				<div className="form-signin">
					<form className="pt-5 mt-5" onSubmit={this.submit}>

						<h1 className="h3 mb-3 fw-normal">Регистрация</h1>

						<div className="form-floating">
							<input type="text" className="form-control" id="floatingFirstName" placeholder="Text" required
								onChange={e=>this.first_name = e.target.value}
							/>
							<label htmlFor="floatingFirstName">Имя</label>
						</div>

						<div className="form-floating">
							<input type="text" className="form-control" id="floatingLastName" placeholder="Text"
								onChange={e => this.last_name = e.target.value}
							/>
							<label htmlFor="floatingLastName">Фамилия</label>
						</div>

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

						<div className="form-floating">
							<input type="password" className="form-control" id="floatingPasswordCinfirm" placeholder="Password" 
								onChange={e => this.password_confirm = e.target.value}
							/>
							<label htmlFor="floatingPasswordCinfirm">Password confirm</label>
						</div>

						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<button className="w-100 btn btn-lg btn-success" type="submit">Зарегистрироваться</button>

					</form>
				</div>

			</div>

		)
	}
}

export default Register;