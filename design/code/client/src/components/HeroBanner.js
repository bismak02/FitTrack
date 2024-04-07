import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Link, Typography } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import HeroBannerImage from '../assets/images/banner.png';
import ExerciseIcon from '@mui/icons-material/FitnessCenter';
import NutritionIcon from '@mui/icons-material/Restaurant';
import BookIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/People';

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/login');
  };

  return (
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

      <Button
          onClick={handleSignUpClick}
          sx={{
            width: '200px',
            textAlign: 'center',
            background: '#123A6D',
            padding: '14px',
            fontSize: '22px',
            color: 'white',
            borderRadius: '4px',
            marginTop: '20px',
            '&:hover': {
              background: '#0f2a4d',
            },
          }}
        >
          Sign up!
        </Button>
        
    </Box>
);
};

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


const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqygzyp");  // Replace "meqygzyp" with your actual Formspree form ID
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isFormValid = () => {
    return (
      formValues.firstName.trim() !== '' &&
      formValues.lastName.trim() !== '' &&
      formValues.email.trim() !== '' &&
      formValues.message.trim() !== ''
    );
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      handleSubmit(event);
      setSubmitted(true);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        mx: 'auto', // centers the form horizontally
        px: 3, // padding left and right
        py: 5, // padding top and bottom
      }}
    >
      {submitted ? (
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: 'blue', fontWeight: 'bold', fontSize: '24px' }}>
          Thank you for submitting!
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmitForm} noValidate autoComplete="off">
          <Typography variant="h4" textAlign="center" gutterBottom>
            Get In Touch
          </Typography>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            margin="normal"
            required
            value={formValues.firstName}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            margin="normal"
            required
            value={formValues.lastName}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            required
            value={formValues.email}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
            required
            value={formValues.message}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="contained" color="primary" disabled={state.submitting}>
            Submit
          </Button>
          <ValidationError
            prefix="Oops!"
            field="firstName"
            errors={state.errors}
          />
          <ValidationError
            prefix="Oops!"
            field="lastName"
            errors={state.errors}
          />
          <ValidationError
            prefix="Oops!"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Oops!"
            field="message"
            errors={state.errors}
          />
        </Box>
      )}
    </Box>
  );
};

const MainPage = () => (
  <>
    {/* Your existing components */}
    <HeroBanner />
    <AboutFitTrack id="about" />
    <WhyChooseUs id="why-choose-us" />
    
    {/* Include ContactForm component */}
    <ContactForm id="contact" />
  </>
);

export default MainPage;


