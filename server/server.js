const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/addressDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define schema for donor data
const donorSchema = new mongoose.Schema({
  Name: String,
  age: Number,
  phone: String,
  bloodGroup: String,
  other: String,
  latitude: Number,
  longitude: Number,
});

const Donor = mongoose.model('Donor', donorSchema, 'donors');

// Function to calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Endpoint to fetch sorted addresses
app.get('/all-addresses', async (req, res) => {
  const { latitude, longitude, bloodGroup } = req.query;
  console.log('Received request with latitude:', latitude, 'longitude:', longitude, 'BloodGroup:', bloodGroup);

  try {
    // Fetch donors near the provided location with the specified blood group
    const decodedBloodGroup = decodeURIComponent(bloodGroup); // Decode blood group
    const donors = await Donor.find({ bloodGroup: decodedBloodGroup });

    // Convert latitude and longitude to numbers
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    // Calculate distance and sort addresses
    const sortedAddresses = donors.map(donor => {
      const distance = calculateDistance(lat, lon, donor.latitude, donor.longitude);
      return { ...donor.toObject(), distance };
    }).sort((a, b) => a.distance - b.distance);

    console.log('Sorted addresses:', sortedAddresses);

    res.json(sortedAddresses);
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
