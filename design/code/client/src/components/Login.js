import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import signupIcon from '../assets/images/signup.jpg'; // Import a locally stored image

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
    <Container component="main" maxWidth="xs" sx={{ mb: 30 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            render={(renderProps) => (
              <Box sx={{ position: 'relative' }}>
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5, py: 1 }} // Adjust padding and margin as needed
                  fullWidth
                >
                  Sign in with Google
                </Button>
                <img
                  src={signupIcon} // Use the imported image
                  alt="Signup Icon"
                  style={{
                    width: 100, // Adjust image width as needed
                    position: 'absolute',
                    top: '100%', // Position the image below the button
                    left: '50%', // Align the image horizontally centered
                    transform: 'translateX(-50%)', // Center the image horizontally
                  }}
                />
              </Box>
            )}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
