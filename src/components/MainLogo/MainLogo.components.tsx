/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import React from 'react';
import { Box } from '@mui/material';
import './MainLogo.styles.css';

const MainLogo = () => {
  return (
    <Box className="logoBox">
      <img className="logo" src={require('../../assets/images/CBPLogo.png')} alt="Logo" />
    </Box>
  );
};

export default MainLogo;
