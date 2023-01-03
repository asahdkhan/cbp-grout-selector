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
  Button,
  IconButton,
} from '@mui/material';
import './SelectRoomScene.styles.css';

// import  bannerLogoIcon  from '../../assets/images/CBP-logo-banner.svg';


const SelectRoomScene = () => {
  return (
    <>
      <Grid item xs={12} md={4} className="LoopRoomBox">
        <Box className="RoomItemBox">
          <Box className="RoomBox Selected">
            <Box className="RoomContent">
              <img src={require('../../assets/images/CBPTileGroutBanner.jpg')} alt="" />
              <Box className="RoomHeadingBox">
                <Typography variant="h3" className="RoomHeading">
                  Bathroom
                </Typography>
              </Box>
              <Box className="RoomName">
                <Typography variant="h4" className='SceneName'>Image placeholder</Typography>
                <Button variant="contained" className='VisualizeButton'
                  color="primary">  <img src={require('../../assets/images/LeftIcon.png')} alt="" /> Visualize It</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} className="LoopRoomBox">
        <Box className="RoomItemBox">
          <Box className="RoomBox">
            <Box className="RoomContent">
              <img src={require('../../assets/images/CBPTileGroutBanner.jpg')} alt="" />
              <Box className="RoomHeadingBox">
                <Typography variant="h3" className="RoomHeading">
                  Living Room
                </Typography>
              </Box>
              <Box className="RoomName">
                <Typography variant="h4" className='SceneName'>Image placeholder</Typography>
                <Button variant="contained" className='VisualizeButton'
                  color="primary">  <img src={require('../../assets/images/LeftIcon.png')} alt="" /> Visualize It</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} className="LoopRoomBox">
        <Box className="RoomItemBox">
          <Box className="RoomBox">
            <Box className="RoomContent">
              <img src={require('../../assets/images/CBPTileGroutBanner.jpg')} alt="" />
              <Box className="RoomHeadingBox">
                <Typography variant="h3" className="RoomHeading">
                  Kitchen
                </Typography>
              </Box>
              <Box className="RoomName">
                <Typography variant="h4" className='SceneName'>Image placeholder</Typography>
                <Button variant="contained" className='VisualizeButton'
                  color="primary">  <img src={require('../../assets/images/LeftIcon.png')} alt="" /> Visualize It</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SelectRoomScene;
