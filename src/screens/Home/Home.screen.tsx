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
// import  bannerLogoIcon  from '../../assets/images/CBP-logo-banner.svg';
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
                <Box className='BannerContainer'>
                  <Box className='BannerLogo'>
                    {/* <BannerLogoIcon /> */}
                    <img src={require('../../assets/images/CBP-Logo.png')} alt="Box Icon" />
                  </Box>
                  <Box className='BannerContent'>
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

                      <Link href='#/tile-selection' className='NoUnderline GetStartedLink'> <Button className='' color='primary' variant='outlined'>Get Started</Button></Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default HomeScreen;
