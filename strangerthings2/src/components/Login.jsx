import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setToken, setUserData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  async function loginRequest(event) {
    event.preventDefault();

    const COHORT_NAME = '2306-FTB-ET-WEB-PT';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        const token = result.data.token;
        setToken(token);
        setUserData(username);
        setResponse('Login successful');
        navigate('/usermenue');
      } else {
        setResponse(result.error.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setResponse('An error occurred during login');
    }
  }

  return (
    <>
      <h2>Login</h2>
      <h4>{response}</h4>
      <form onSubmit={loginRequest}>
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password" // Use type="password" for password input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
