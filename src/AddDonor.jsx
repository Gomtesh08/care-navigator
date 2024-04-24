import React, { useState, useEffect } from 'react';
import './AddDonor.css'; // Import CSS file
import axios from 'axios';

function AddDonor() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    bloodGroup: '',
    other: ''
  });

  const [userLocation, setUserLocation] = useState(null); // State to store user's current location

  useEffect(() => {
    // Function to get user's current location
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    };

    getUserLocation(); // Call the function to get user's current location
  }, []); // Run only once when component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API endpoint
      await axios.post('http://localhost:3002/add-donor', { ...formData, ...userLocation });
      alert('Donor added successfully!');
      // Clear the form fields after successful submission
      setFormData({
        name: '',
        age: '',
        phone: '',
        address: '',
        bloodGroup: '',
        other: ''
      });
    } catch (error) {
      console.error('Error adding donor:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert('Error adding donor: ' + error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        alert('Error adding donor: No response from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert('Error adding donor: ' + error.message);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add Donor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input type="text" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="other">Other:</label>
          <textarea id="other" name="other" value={formData.other} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDonor;
