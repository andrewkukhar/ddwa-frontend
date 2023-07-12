import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import UserContext from "../../context/user-context";

const Navbar = ({ handleLogout }: { handleLogout: () => void }) => {
  const { user } = useContext(UserContext);

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <Box my={4}>
      <Typography variant="h5" component="h1" gutterBottom>
        {user ? 'Welcome to our application!' : 'You are not logged in'}
      </Typography>
      {user ? (
        <Button variant="contained" color="secondary" onClick={handleLogoutClick}>
          Logout
        </Button>
      ) : (
        <Box 
          mt={3}
          sx={{
            margin: '0 0 1em 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
          }} 
        >
          <Button variant="contained" color="primary" component={RouterLink} to="/login" sx={{ marginRight: '10px' }}>
            Login
          </Button>
          <Button variant="contained" color="secondary" component={RouterLink} to="/signup">
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
