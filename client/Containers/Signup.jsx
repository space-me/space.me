import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
	const navigate = useNavigate();
	// validateInputs is a function that
	// const validateInputs = () => {
	//   // init email as
	//   let email = document.forms['signup']['email'].value;
	//   // check if email is a valid email (i.e. contains letters, numbers, periods or dashes interspersed by an @)
	//   if (email !== email.replace(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
	//     alert('email must be a valid email');
	// };
	return (
		<div className="form-container">
			<div className="login-container">
				<h2>Sign Up</h2>
				<form
					className="login-form"
					name="signup"
					action="/user/signup"
					method="POST"
					// onSubmit={() => validateInputs()}
				>
					<label for="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Enter your username"
						autoFocus
						required
					></input>
					<label for="email">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Enter your email"
						pattern="[^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$]"
						required
					></input>
					<label for="password">password</label>
					<input
						type="text"
						id="password"
						name="password"
						placeholder="Enter your password"
						required
					></input>
				</form>
				<div className="login-form-links">
					<button
						className="login-form-button"
						type="submit"
						placeholder="Sign Up"
					>
						Sign Up
					</button>
					<button className="form-links" onClick={() => navigate('/login')}>
						Already have an account? Log in
					</button>
				</div>
			</div>
		</div>
	);
}

export default Signup;
