import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import img from './Image/RBG.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username or password is empty
    if (!username || !password) {
      setErrorMessage('Please enter username and password');
      return;
    }

    try {
      // Make a POST request to your backend API to authenticate the user
      const response = await axios.post('http://localhost:3003/login', {
        username,
        password,
      });

      console.log(response.data.message);

      // Check if login was successful
      if (response.status === 200) {
        // Redirect to the main page upon successful login
        window.location.href = '/main';
      } else {
        // Handle other responses, such as invalid credentials
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <>
      <div>
        <div className='HomeBtn'>
          <Link to="/"><img src={img} alt="" width="140rem" /></Link>
        </div>
        <div className='Main_container'>
          <div className="login-container">
            <h2 className='login-title'>Login</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder='Username'
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Password'
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <div className='Forget_SignUp'>
              <a href="#c" className='anchorForget'>Forget Password?</a>
              <Link to='/signup' className='SignupLink'>Sign Up</Link>
            </div>
          </div>
          <span className='login_container_span'></span>
          <span className='login_container_span_1'></span>
        </div>
      </div>
    </>
  );
};

export default Login;
  