/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import {
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import './NavigationSteps.styles.css';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
// import  bannerLogoIcon  from '../../assets/images/CBP-logo-banner.svg';


const NavigationSteps = () => {
  return (

    <Grid item xs={12}>
      <Paper className='NavigationBox'>
        <IconButton className='NavigationArrow ArrowLeft'><KeyboardArrowLeftOutlinedIcon /></IconButton>
        <Box className='NavigationInfo'>
          <Typography variant='h6'>Step 1 of 1</Typography>
          <Typography variant='h4'>Select a Room</Typography>
        </Box>
        <IconButton className='NavigationArrow ArrowRight'><KeyboardArrowRightOutlinedIcon /></IconButton>
      </Paper>
    </Grid>

  );
};

export default NavigationSteps;
