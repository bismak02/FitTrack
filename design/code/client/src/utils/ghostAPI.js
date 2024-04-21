// utils/ghostAPI.js
import GhostContentAPI from '@tryghost/content-api';

// Initialize the Ghost Content API client
const api = new GhostContentAPI({
  url: 'https://fitnesstrack.ghost.io',  // Replace with your Ghost blog URL
  key: '58ac4225bbe5501fd519e439ea',  // Replace with your Content API Key
  version: "v5.0"  // Use the API version supported by your Ghost version
});

export default api;