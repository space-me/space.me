import React from 'react';
import { useNavigate } from 'react-router-dom';

// renders Signup page components
function Signup() {
  const navigate = useNavigate();
  const inputValidate = () => {
    let password = document.forms['signup']['password'].value;
    let confirmPassword = document.forms['signup']['confirmpassword'].value;
    if (password !== confirmPassword) {
      alert('passwords must match');
      return false;
    }
  };
  return (
    <div id='signup-container'>
      <form
        name='signup'
        action='/user/signup'
        method='POST'
        onSubmit={inputValidate}
      >
        <label for='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Enter username'
          autoFocus
          required
        ></input>
        <label for='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Enter your email'
          pattern='[^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$]'
          required
        ></input>
        <label for='password'>password</label>
        <input
          type='text'
          id='password'
          name='password'
          placeholder='Enter password'
          required
        ></input>
        <label for='password'>Confirm password</label>
        <input
          type='text'
          id='confirmpassword'
          name='confirmpassword'
          placeholder='Confirm password'
          required
        ></input>
        <input type='submit' placeholder='Sign Up'></input>
      </form>
      <button onClick={() => navigate('/login')}>
        Already have an account? Log in
      </button>
    </div>
  );
}

export default Signup;
