/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MainLogo from '../components/MainLogo/MainLogo.components';
import CloseIcon from '@mui/icons-material/Close';
const DeleteaccountModal = () => {
  return (
    <Dialog
      open={false}
      // open={props.open}
      // onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={'xs'}
    >
      <DialogTitle id="alert-dialog-title">
        <Box className="DialogHeadingBox">
          <Box>
            <MainLogo />
          </Box>
          {/* <Box className="CloseIcon">
              <IconButton onClick={DeleteAccountClose}>
                <CloseIcon />
              </IconButton>
            </Box> */}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box mb={2}>
            <Typography variant="h3">We’re sorry to see you go</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body2">
              Your Custom Building Products account information will not be used for any marketing
              or promotional purposes.
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body2">
              Once your account has been deleted, all saved visualiztions and information on your
              account will be permanently deleted.
            </Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="CommonModalButton FullWidthButton" color="primary" variant="outlined">
          Go Back
        </Button>
        <Button className="CommonModalButton FullWidthButton" color="secondary" variant="contained">
          Delete Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteaccountModal;
