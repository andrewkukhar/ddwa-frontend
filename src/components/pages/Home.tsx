import React from 'react';
import { Container } from '@mui/material';
import Navbar from "../authentication/Navbar";

const Home = () => {

  return (
    <Container 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }} 
    >
      <Navbar/>
    </Container>
  );
};

export default Home;
