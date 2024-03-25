import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = ({ showDescription }) => (
  <Box bgcolor="#040000" sx={{ width: '100vw', maxWidth: '100%', m: 0, p: 0 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', px: '40px', pt: '24px' }}>
      {showDescription && (
        <>
          <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '20px' }, color: '#ffffff', textAlign: 'center' }}>
            Made by IIT Students 2024 ITMT430
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px', color: '#ffffff', textAlign: 'center' }}>
            Fitness and Nutrition Tracker - Empowering you to achieve your health goals.
          </Typography>
        </>
      )}
      <Typography variant="caption" sx={{ fontSize: '12px', color: '#ffffff', textAlign: 'center', mt: 'auto' }}>
        © 2024 FitTrack. All rights reserved.
      </Typography>
    </Box>
  </Box>
);

export default Footer;
