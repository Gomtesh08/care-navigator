const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors(
  origin = '*'
));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/addressDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

// Define Donor schema
const donorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  address: String,
  bloodGroup: String,
  latitude: Number,
  longitude: Number,
  other : String
});

const Donor = mongoose.model('Donor', donorSchema);

// Route to handle adding a new donor
app.post('/add-donor', async (req, res) => {
  try {
    // Extract form data from the request body
    const { name, age, phone, address, bloodGroup ,other } = req.body;
    
    // Convert address to latitude and longitude using OpenStreetMap Nominatim API
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`);
    const result = response.data[0];
    if (!result) {
      throw new Error('Address not found');
    }
    const { lat, lon } = result;
      
    // Create a new donor document
    const newDonor = new Donor({
      name,
      age,
      phone,
      address,
      bloodGroup,
      latitude: lat,
      longitude: lon,
      other 
    });

    // Save the new donor document to the database
    await newDonor.save();

    res.status(201).json({ message: 'Donor added successfully', latitude: lat, longitude: lon });
  } catch (error) {
    console.error('Error adding donor:', error);
    res.status(500).json({ error: 'Error adding donor' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
