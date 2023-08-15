import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div id='login-container'>
      <form action='/login' method='POST'>
        <label for='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='example@email.com'
        ></input>
        <label for='password'>password</label>
        <input
          type='text'
          id='password'
          name='password'
          placeholder='totallysecurepassword'
        ></input>
        <input type='submit'></input>
      </form>
      {/* need to add logic for handling when user forgets their password */}
      <button onClick={() => navigate('/signup')}>Forgot your password?</button>
      <button onClick={() => navigate('/signup')}>
        Don't have an account? Sign up
      </button>
    </div>
  );
}

export default Login;
