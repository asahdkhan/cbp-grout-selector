/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import { Box, Paper, Typography, Button, InputLabel, TextField, Link } from '@mui/material';
import MainLogo from '../components/MainLogo/MainLogo.components';

const UpdateEmail = () => {
  return (
    <Paper className="UpdateEmailBox">
      <Box className="SelectGroutColourHeader" mb={3}>
        <MainLogo />
      </Box>
      <Paper className="UpdateEmailInfo">
        <Typography variant="h6" className="AccountHeading">
          <b>Check your inbox</b>
        </Typography>
        <Typography variant="body2" marginTop={2}>
          We sent a code to tev***@domain.com. Enter the code below to continue with your change.
        </Typography>
        <Paper className="CurrentEmailBox">
          <Box className="CommonFormControl" mt={3}>
            <InputLabel>Current Email</InputLabel>
            <TextField label="" variant="outlined" />
          </Box>
          <Box className="CommonFormControl">
            <InputLabel>New Email</InputLabel>
            <TextField label="" variant="outlined" />
          </Box>
        </Paper>
        <Paper className="OtpCodeBox">
          <Box className="CommonFormControl" mt={3}>
            <InputLabel>Code</InputLabel>
            <TextField label="" variant="outlined" />
          </Box>
          <Box>
            <Typography variant="body1">
              Didn’t get a code? <Link>Resend code</Link>
            </Typography>
          </Box>
        </Paper>
        <Box className="FooterButton" mt={4}>
          <Button className="CommonModalButton FullWidthButton" color="primary" variant="outlined">
            Cancel
          </Button>
          <Button className="CommonModalButton FullWidthButton" color="primary" variant="contained">
            Continue
          </Button>
        </Box>
      </Paper>
    </Paper>
  );
};

export default UpdateEmail;
