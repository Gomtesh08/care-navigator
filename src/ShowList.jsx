import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from './Image/RBG.png';
import { Link, useLocation } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [sortedAddresses, setSortedAddresses] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const bloodGroup = new URLSearchParams(location.search).get('bloodGroup');
  const latitude = new URLSearchParams(location.search).get('latitude');
  const longitude = new URLSearchParams(location.search).get('longitude');

  useEffect(() => {
    const fetchSortedAddresses = async () => {
      try {
        // Fetch sorted addresses from backend using the provided latitude, longitude, and bloodGroup
        const response = await axios.get(`http://localhost:3001/all-addresses?latitude=${latitude}&longitude=${longitude}&bloodGroup=${bloodGroup}`);
        console.log('Response:', response.data);
        setSortedAddresses(response.data);
      } catch (error) {
        console.error('Error fetching sorted addresses:', error);
        setError(error.message);
      }
    };

    fetchSortedAddresses();
  }, [bloodGroup, latitude, longitude]); // Include bloodGroup, latitude, and longitude in dependency array

  return (
    <div className='showListContainer'>
      <div>
        <Link to='/existing'>
          <img src={img} alt="" width="160rem"/>
        </Link>
      </div>
      <div className='listTitleContainer'>
        <div>
          <h1>List of Donors</h1>
        </div>
      </div>
      <div className='donorListContainer'>
        <div className='donorList'>
          <div>
            <h1>Sorted Addresses</h1>
            {error && <p>Error: {error}</p>}
            <ul>
              {sortedAddresses.map((address, index) => (
                <li key={index}>
                  Name: {address.name}, Distance: {address.distance} km, Age: {address.age}, Phone: {address.phone}, Blood Group: {address.bloodGroup}, Other: {address.other} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
