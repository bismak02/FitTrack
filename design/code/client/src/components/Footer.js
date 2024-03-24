import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box bgcolor="#040000" sx={{ width: '100vw', maxWidth: '100%', m: 0, p: 0 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', px: '40px', pt: '24px' }}>
      <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '20px' }, color: 'white', textAlign: 'center' }} pb="40px">
        Made by IIT Students 2024 ITMT430
      </Typography>
    </Box>
  </Box>
);

export default Footer;
