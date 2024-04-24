import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import Hero from './Hero';
import Existing from './Existing';
import ShowList from './ShowList';
import AddDonor from './AddDonor'; // Corrected import statement with matching casing


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Hero />} />
        <Route path="/existing" element={<Existing/>} />
        <Route path="/showList" element={<ShowList/>} />
        <Route path="/addD" element={<AddDonor/>} /> {/* Corrected route path and element */}
      </Routes>
    </Router>
  );
};

export default App;



