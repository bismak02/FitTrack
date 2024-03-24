import React from 'react';
import { Box, TextField, Button, Grid,Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import ExerciseIcon from '@mui/icons-material/FitnessCenter';
import NutritionIcon from '@mui/icons-material/Restaurant';
import BookIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/People';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '50px', xs: '70px' },
      position: 'relative',
      m: 0,
      p: 0,
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${HeroBannerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center' 
    }}
  >
    <Typography
      color="white"
      fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '40px' },
        textAlign: 'center',
        maxWidth: '90%', 
        p: '20px', 
      }}
    >
      Reach Your <br />
      Fitness Goals
    </Typography>

    <a href="/login" style={{ textDecoration: 'none', width: '200px', textAlign: 'center', background: '#123A6D', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px', marginTop: '20px' }}>Sign up!</a>
    
    <Typography
      fontWeight={600}
      color="#123A6D"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
        position: 'absolute',
        bottom: 0,
        right: 0,
      }}
    >
      Exercise
    </Typography>
  </Box>
);

const AboutFitTrack = () => (
  <Box sx={{
    bgcolor: 'white',
    p: { xs: 4, sm: 6, md: 8 }, // Increase padding on different screen sizes
    my: { xs: 4, sm: 6, md: 8 } // Add vertical margin for extra space outside the box
  }}>
    <Typography variant="h4" gutterBottom textAlign="center">
      About FitTrack
    </Typography>
    <Typography variant="subtitle1" textAlign="center">
    Our website is designed with one goal in mind: to empower you to take control of your physical health and dietary habits. Whether you're a seasoned fitness enthusiast 
    or just beginning your wellness journey, our interactive and user-friendly platform is here to support you every step of the way. With Fitness and Nutrition Tracker,
     you can set personalized fitness goals, log various exercises, track your nutritional intake, and monitor your progress towards achieving your health objectives.
    </Typography>
  </Box>
);

const WhyChooseUs = () => (
  <Box sx={{ bgcolor: '#123A6D', color: 'white', p: 4 }}>
    <Typography variant="h4" gutterBottom textAlign="center">
      Why Choose Us
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6} sm={3} textAlign="center">
        <ExerciseIcon fontSize="large" />
        <Typography variant="subtitle1">Exercise</Typography>
        <Typography variant="caption">Log exercises and count calories burned.</Typography>
      </Grid>
      <Grid item xs={6} sm={3} textAlign="center">
        <NutritionIcon fontSize="large" />
        <Typography variant="subtitle1">Nutrition</Typography>
        <Typography variant="caption">Track your food to form healthy eating habits.</Typography>
      </Grid>
      <Grid item xs={6} sm={3} textAlign="center">
        <BookIcon fontSize="large" />
        <Typography variant="subtitle1">Blog</Typography>
        <Typography variant="caption">Learn more about fitness or teach others by using our blog option.</Typography>
      </Grid>
      <Grid item xs={6} sm={3} textAlign="center">
        <GroupIcon fontSize="large" />
        <Typography variant="subtitle1">Friends</Typography>
        <Typography variant="caption">Compete with friends and meet new people.</Typography>
      </Grid>
      {/* Repeat for the other items */}
    </Grid>
  </Box>
);

const ContactForm = () => (
  <Box
    sx={{
      maxWidth: '600px',
      mx: 'auto', // centers the form horizontally
      px: 3, // padding left and right
      py: 5, // padding top and bottom
    }}
  >
    <Typography variant="h4" textAlign="center" gutterBottom>
      Get In Touch
    </Typography>
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        label="First name"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Last name"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        variant="outlined"
        type="email"
      />
      <TextField
        fullWidth
        label="Message"
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
      />
      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="primary">
          SEND
        </Button>
      </Box>
    </Box>
  </Box>
);


// You can create a parent component that includes all the sections of the page
const MainPage = () => (
  <>
    <HeroBanner />
    <AboutFitTrack />
    <WhyChooseUs />
    <ContactForm />
  
  </>
);

export default MainPage; 


