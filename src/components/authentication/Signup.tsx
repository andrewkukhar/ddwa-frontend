import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Grid } from '@mui/material';
import api from "../../api/api";
import UserContext from "../../context/user-context";
import BackButton from '../helpers/BackButton';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await api.post("/signup", { email, password });
      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate('/');
    } catch (error: any) {
      setError(error?.response?.data?.message || "An error occurred during signup");
    }
  };

  return (
    <>
      <BackButton />
      <Box
        component="form"
        onSubmit={handleSignup}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Grid item xs={12} m={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        {error && (
          <Grid item xs={12} m={2}>
            <p>{error}</p>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" size='large'>
            Sign Up
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Signup;
