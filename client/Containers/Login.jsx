import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
	//
	const navigate = useNavigate();
	//
	return (
		<div className="login-container">
			<h2>Log In</h2>
			<form
				className="login-form"
				name="login"
				action="/user/login"
				method="POST"
			>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Enter your email here"
					pattern="[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g]"
					autoFocus
					required
				></input>
				<label htmlFor="password">password</label>
				<input
					type="text"
					id="password"
					name="password"
					placeholder="Enter your password here"
					required
				></input>
				<button className="login-form-button" type="submit">
					Log In
				</button>
			</form>
			<div className="login-form-links">
				{/* need to add logic for handling when user forgets their password */}
				<button className="form-links" onClick={() => navigate('/signup')}>
					Forgot your password?
				</button>
				<button className="form-links" onClick={() => navigate('/signup')}>
					Don't have an account? Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;
