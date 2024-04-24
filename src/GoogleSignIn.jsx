// GoogleSignIn.js

import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
  const clientId = 'adsasd'; // Replace with your Google Client ID

  const handleSuccess = (response) => {
    console.log('Google Sign-In Success:', response);
    onSuccess(response);
  };

  const handleFailure = (error) => {
    console.error('Google Sign-In Failed:', error);
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignIn;
