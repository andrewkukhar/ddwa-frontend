import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  };

  return (
    <Button variant="contained" onClick={goBack}>
      Go Back
    </Button>
  );
};

export default BackButton;
