const axios = require('axios');

const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

const getCoordinates = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    const coordinates = {
      latitude: data.results[0].geometry.location.lat,
      longitude: data.results[0].geometry.location.lng,
    };
    return coordinates;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { getCoordinates };