import React, { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import api from "../../api/api";
import UserContext from "../../context/user-context";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await api.post("/login", { email, password });
      setUser(response.data.user);
    } catch (error: any) {
      setError(error?.response?.data?.message || "An error occurred during login");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>} {/* Display the error message if it exists */}
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default Login;
