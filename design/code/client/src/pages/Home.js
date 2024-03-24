import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      {/* Any other components specific to the Home page */}
    </Box>
  );
};

export default Home;