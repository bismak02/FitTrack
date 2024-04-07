import React, { useState } from 'react';
import { Box, Button, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import signupIcon from '../assets/images/signup.jpg';
import GoogleIcon from '@mui/icons-material/Google'; // Import Google icon

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(credentials));
    navigate('/exercise');
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    const decoded = jwtDecode(tokenResponse.credential);
    if (decoded.email.endsWith('@hawk.iit.edu')) {
      localStorage.setItem('user', JSON.stringify(decoded));
      navigate('/exercise');
    } else {
      alert('You must use an IIT email to log in.');
    }
  };

  const handleGoogleFailure = (error) => {
    console.log(error);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mb: 5 }}> 
      <Box
        sx={{
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="#123A6D">
          <span style={{ textDecoration: 'underline' }}>Log in</span>
        </Typography>

        {/* Google Login Button */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <GoogleLogin
  onSuccess={handleGoogleSuccess}
  onError={handleGoogleFailure}
  render={(renderProps) => (
    <Button
      onClick={renderProps.onClick}
      disabled={renderProps.disabled}
      variant="contained"
      sx={{
        mt: 3,
        mb: 2,
        px: 6, // Increased padding on the sides for a bigger button
        py: 3, // Increased padding vertically for a bigger button
        fontSize: '1.4rem', // Increased font size
        backgroundColor: '#D32F2F', // Changed to a different color, e.g., red
        color: 'white',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#C62828', // Darker shade on hover
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      fullWidth
    >
      <GoogleIcon sx={{ mr: 1, fontSize: '1.5rem' }} /> Sign in with Google
    </Button>
  )}
/>
  
        </Box>
        
        {/* Welcome section */}
        <Card sx={{ mt: 3, width: '100%', maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image={signupIcon}
            alt="Sign Up Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Welcome to our login page. This is the gateway to access our platform's features and resources. Log in to manage your profile, interact with other users, and explore a wide range of tools designed to enhance your experience. If you don’t have an account yet, you can sign up to join our community and unlock additional functionalities. We are committed to providing a secure and user-friendly environment for all our users. Thank you for choosing us!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
