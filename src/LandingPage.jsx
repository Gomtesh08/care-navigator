import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <div className='LMainPage'>
        <div className="buttons-container">
          <Link to='/login'><button>Login</button></Link> 
          <Link to='/signup'><button>SignUp</button></Link> 
        </div>
      </div>
      <span className='LSpan1'></span>
      <span className='LSpan2'></span>
    </>
  );
}

export default LandingPage;
