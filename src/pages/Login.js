import React, { useState } from 'react';
import { login } from '../api';

import '../styles/Login.css';

function Login() {
  const [input, setInput] = useState({ user: '', password: ' ' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await login(input.user, input.password);
    console.log(result);
  };

  const handleChange = ({ target: { name, value } }) => {
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <main className='login-page'>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='user-input'>Username or email</label>
          <br />
          <input type='text' id='user-input' name='user' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='password-input'>Password</label>
          <br />
          <input
            type='text'
            id='password-input'
            name='password'
            onChange={handleChange}
          />
          <span className='small-link'>Forgot your password?</span>
        </div>
        <button type='submit'>Log In</button>
        <hr />
        <span className='large-link'>Not a user yet? Sign Up.</span>
      </form>
    </main>
  );
}

export default Login;
