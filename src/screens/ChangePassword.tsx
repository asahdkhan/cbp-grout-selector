/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  InputLabel,
  TextField,
  OutlinedInput,
  InputAdornment,
  Paper,
  Link,
} from '@mui/material';
import MainLogo from '../components/MainLogo/MainLogo.components';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ChangePassword = () => {
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
    <Paper className="UpdateEmailBox">
      <Box className="SelectGroutColourHeader" mb={3}>
        <MainLogo />
      </Box>
      <Paper className="UpdateEmailInfo">
        <Typography variant="h6" className="AccountHeading">
          <b>Change Password</b>
        </Typography>
        <Paper className="CurrentEmailBox">
          <Box className="CommonFormControl" mt={3}>
            <InputLabel></InputLabel>
            <InputLabel className="PasswordLabelBox">Current Password *</InputLabel>
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
            <InputLabel className="PasswordLabelBox">
              New Password * <span className="ForgotPassword">Minimum 8 characters</span>
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
            <InputLabel className="PasswordLabelBox">
              Confirm New Password * <span className="ForgotPassword">Minimum 8 characters</span>
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

export default ChangePassword;
