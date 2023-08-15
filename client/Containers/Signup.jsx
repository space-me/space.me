import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <label>Username</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>password</label>
        <input></input>
        <button onSubmit={() => {}}>Sign Up</button>
      </form>
      <button onClick={() => navigate('/login')}>
        Already have an account? Log in
      </button>
    </div>
  );
}

export default Signup;
