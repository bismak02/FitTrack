import React, { useState } from 'react';
import { Box } from '@mui/material';
import Login from '../components/Login';

const loginpage = () => {
  return (
    <Box>
      <Login />
      {/* Any other components specific to the Home page */}
    </Box>
  );
};

export default loginpage;