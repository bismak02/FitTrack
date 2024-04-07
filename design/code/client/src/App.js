import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExercisePage from './pages/Exercisepage';
import LoginPage from './pages/LoginPage';
import CalcPage from './pages/CalcPage'; 
import TrackPage from './pages/TrackPage'; 
import BlogPage from './pages/BlogPage';
import BlogPost from './components/BlogPost';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/exercise" element={<ExercisePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/calc" element={<CalcPage />} />
      <Route path="/track" element={<TrackPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
    <Footer showDescription={true} />
  </Box>
);

export default App;
