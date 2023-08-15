import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  //
  const navigate = useNavigate();
  //
  return (
    <div id='login-container'>
      <form name='login' action='/user/login' method='POST'>
        <label for='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Enter your email here'
          pattern='[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g]'
          autoFocus
          required
        ></input>
        <label for='password'>password</label>
        <input
          type='text'
          id='password'
          name='password'
          placeholder='Enter your password here'
          required
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
