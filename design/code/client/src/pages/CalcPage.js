import React, { useState } from 'react';
import { Box } from '@mui/material';
import Calc from '../components/Calc';

const CalcPage = () => {
  return (
    <Box>
      <Calc />
      {/* Any other components specific to the Home page */}
    </Box>
  );
};

export default CalcPage;