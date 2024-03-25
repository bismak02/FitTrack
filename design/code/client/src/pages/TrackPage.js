import React, { useState } from 'react';
import { Box } from '@mui/material';
import FitnessTracker from '../components/Track';

const TrackPage = () => {
  return (
    <Box>
      <FitnessTracker />
      {/* Any other components specific to the Home page */}
    </Box>
  );
};

export default TrackPage;