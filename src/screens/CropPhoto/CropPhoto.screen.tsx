/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import {
  Grid,
  Container,
  Popover,
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Divider,
  Link
} from '@mui/material';
import './CropPhoto.styles.css';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const CropPhoto = () => {
  // Start Account Setting Code
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const opensecond = Boolean(anchorEl);
  const id = opensecond ? 'simple-popover' : undefined;
  // End Account Setting Code
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Grid container direction="row" columnSpacing={4} className="GridRow LightSkyBlue">
          <Grid item xs={12}>
            <Box className="CropPhotoHeader" mb={3}>
              <Button className="CommonGrayButton" variant="outlined">
                Change Tile
              </Button>
              <Button className="CommonLinkButton" variant="outlined">
                Edit Image
              </Button>
              <Button variant="contained" color='primary' className="UsePhotoButton">
                Use Photo
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className='CropPhotoCanvas'>
              <img src={require('../../assets/images/CropPhoto.jpg')} alt="" />
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" columnSpacing={1} className="GridRow">
          <Grid item xs={12}>
            <Container maxWidth="sm" disableGutters>
              <Grid container direction="row" columnSpacing={0} className="DefaultTileContainer">
                <Grid item xs={12}>
                  <Box className='PhotoInfo'>
                    <Typography variant='h5'><b>For Best Outcomes</b></Typography>
                    <List className='CustomList'>
                      <ListItem>Ensure the tile is properly lit in the photo</ListItem>
                      <ListItem>Crop out anything you don’t want on the tile</ListItem>
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CropPhoto;
