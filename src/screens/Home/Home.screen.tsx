/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  IconButton,
  Link,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LanguageIcon from '@mui/icons-material/Language';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import useAppHooks from '../../hooks/App.hooks';
import './Home.styles.css';

const HomeScreen = () => {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Paper className="BannerBox">
              <Box className="BannerOverlay">
                <Box>
                  <Box className="BannerTitle">
                    <img src={require('../../assets/images/BoxIcon.png')} alt="Box Icon" />
                    <Typography variant="h1" className="MainHeading">
                      Tile & Grout Visualizer
                    </Typography>
                  </Box>
                  <Box className="BannerSubTitle">
                    <Typography variant="body1" className="BannerText">
                      Whether you have a tile picked out or you are still looking for inspiration,
                      use our vizualizer to find a grout that works for you.
                    </Typography>
                  </Box>
                  <Box className="BannerButton">
                    <Typography variant="body1">Choose an option below to get started</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container direction="row" columnSpacing={4} className="GridRow">
          <Grid item xs={12}>
            <Typography variant="h3" className="HeadingSecond">
              ROOM SELECTIONS
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className="LoopRoomBox">
            <Box className="RoomItemBox">
              <Button className="RoomBox">
                <Box className="RoomContent">
                  <img src={require('../../assets/images/CBPTileGroutBanner.jpg')} alt="" />
                  <Box className="RoomHeadingBox">
                    <Typography variant="h3" className="RoomHeading">
                      Bathroom
                    </Typography>
                  </Box>
                  <Box className="RoomName">
                    <Typography variant="h4">Image placeholder</Typography>
                  </Box>
                </Box>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="LoopRoomBox">
            <Box className="RoomItemBox">
              <Button className="RoomBox">
                <Box className="RoomContent">
                  <img src={require('../../assets/images/CBPTileGroutBanner.jpg')} alt="" />
                  <Box className="RoomHeadingBox">
                    <Typography variant="h3" className="RoomHeading">
                      Living Room
                    </Typography>
                  </Box>
                  <Box className="RoomName">
                    <Typography variant="h4">Image placeholder</Typography>
                  </Box>
                </Box>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="LoopRoomBox">
            <Box className="RoomItemBox">
              <Button className="RoomBox">
                <Box className="RoomContent">
                  <img src={require('../../assets/images/CBPTileGroutBanner.jpg')} alt="" />
                  <Box className="RoomHeadingBox">
                    <Typography variant="h3" className="RoomHeading">
                      Kitchen
                    </Typography>
                  </Box>
                  <Box className="RoomName">
                    <Typography variant="h4">Image placeholder</Typography>
                  </Box>
                </Box>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
