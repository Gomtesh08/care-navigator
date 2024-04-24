import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img from './Image/RBG.png';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Check password strength
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3006/signup', {
        username,
        email,
        password,
      });

      console.log(response.data.message);
      setSuccessMessage('Signup successful');

      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error signing up:', error.response.data.message);
      if (error.response && error.response.status === 400) {
        setErrorMessage('Username or email already exists');
      } else {
        setErrorMessage('Error signing up. Please try again later.');
      }
    }
  };

  return (
    <>
      <div>
        <div className='HomeBtn'>
          <Link to="/"><img src={img} alt="" width="140rem" /></Link>
        </div>
        <div className='Main_container'>
          <div className="Signup-container">
            <h2 className='Signup-title'>Sign Up</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
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
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder='Email'
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
              <div className="form-group">
                <label htmlFor="confirmPassword">Re-enter Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder='Re-Enter Password'
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className='Have_Acc'>
              <p>Already Have an Account? <Link to='/login'>Login</Link></p>
            </div>
          </div>
          <span className='login_container_span'></span>
          <span className='login_container_span_1'></span>
        </div>
      </div>
    </>
  );
}

export default SignUp;
