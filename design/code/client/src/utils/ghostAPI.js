// utils/ghostAPI.js
import GhostContentAPI from '@tryghost/content-api';

// Initialize the Ghost Content API client
const api = new GhostContentAPI({
  url: 'https://fittrack.ghost.io',  // Replace with your Ghost blog URL
  key: 'c6518a6d504e0e011e9bc0d38f',  // Replace with your Content API Key
  version: "v5.0"  // Use the API version supported by your Ghost version
});

export default api;