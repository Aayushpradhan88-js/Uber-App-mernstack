const axios = require('axios');

const getAddressCoordinates = async (address) => {

  const apiKey = process.env.GOOGLE_MAPS_API
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data; //extracts the data from the API response
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

//get-distance-time
module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin & Destination required are required");
  }

  const apiKey = Google_Maps_API;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      throw new Error('No routes Found');
    }

  } catch (error) {

  }

}
module.exports = { getAddressCoordinates };