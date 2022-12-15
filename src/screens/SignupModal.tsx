/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  InputLabel,
  TextField,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MainLogo from '../components/MainLogo/MainLogo.components';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignupModal = () => {
  // Start Input Password Code
  interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  // End Input Password Code
  return (
    <Dialog
      // open={props.open}
      // onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      open={false}
    >
      <DialogTitle id="alert-dialog-title">
        <Box className="DialogHeadingBox">
          <Box>
            <MainLogo />
          </Box>
          <Box className="CloseIcon">
            <IconButton
            // onClick={props.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box className="AlertMsgBox">
            <InfoIcon />
            <Typography variant="body2">To save a scene, please sign in</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="h6">Create an Account</Typography>
          </Box>
          <Box className="CommonFormControl">
            <InputLabel>Email</InputLabel>
            <TextField label="" variant="outlined" />
          </Box>
          <Box className="CommonFormControl">
            <InputLabel className="PasswordLabelBox">
              Password <span className="PasswordInfo">Minimum 8 characters</span>
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </Box>
          <Box className="CommonFormControl">
            <InputLabel>Name</InputLabel>
            <TextField label="" variant="outlined" />
          </Box>
          <Box className="CommonFormControl">
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Creating an account means you agree with our Terms of Service and Privacy Policy"
              labelPlacement="end"
              className="AgreeCheckbox"
            />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="DialogActionsBlock">
        <Box>
          <Button
            className="CommonModalButton FullWidthButton"
            color="primary"
            variant="contained"
            disabled
          >
            Create Account
          </Button>
        </Box>
        <Box textAlign={'center'} className="SignUpBox" mt={3}>
          <Typography variant="body2">
            Already have an account? <a className="UnderLineLink">Sign in</a>
          </Typography>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default SignupModal;
