import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Stack, Typography, Button, Avatar } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login page after logout
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const profilePic = user?.picture;

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        px: '20px',
        bgcolor: 'black',
        height: '100px',
        alignItems: 'center',
        zIndex: 1100,
        top: 0,
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
        <Typography variant="h6" style={{ color: 'white' }}>FITTRACK</Typography>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="center"
        >
        {(location.pathname.includes('/exercise') || location.pathname.includes('/track')|| location.pathname.includes('/blog')  || location.pathname.includes('/calc')) ? (
          <>
            <Link to="/exercise" style={{ textDecoration: 'none', color: 'white' }}>Exercises</Link>
            <Link to="/calc" style={{ textDecoration: 'none', color: 'white' }}>Calculator</Link>
            <Link to="/track" style={{ textDecoration: 'none', color: 'white' }}>Tracker</Link>
            <Link to="/blog" style={{ textDecoration: 'none', color: 'white' }}>Blog</Link>
          </>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login/SignUp</Link>
          </>
        )}
        {user && (
          <>
            <Avatar src={profilePic} alt="profile" />
            <Button onClick={handleLogout} style={{ color: 'white' }}>Logout</Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
