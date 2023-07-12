import React from 'react';
import { Container } from '@mui/material';
import Navbar from "../authentication/Navbar";
import HomeBody from './HomeBody';

const Home = ({ handleLogout }: { handleLogout: () => void }) => {
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
      <Navbar handleLogout={handleLogout} />
      <HomeBody />
    </Container>
  );
};

export default Home;
