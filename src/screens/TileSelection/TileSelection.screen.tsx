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
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Divider,
  Link
} from '@mui/material';
import './TileSelection.styles.css';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const TileSelection = () => {
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
            <Box className='BannerTitle TileBannerTitle'>
              <img src={require('../../assets/images/BoxIcon.png')} alt="Box Icon" />
              <Typography variant='h1' className=''>
                Getting Started
              </Typography>
            </Box>
            <Box className='Subtitle'>
              <Typography variant='body2'>Add your tile using one of the options below</Typography>
            </Box>
            <Box className='PhotoInfo'>
              <Typography variant='h5'><b>For Best Photo Results</b></Typography>
              <List className='CustomList'>
                <ListItem>Ensure the tile surface is properly lit</ListItem>
                <ListItem>To minimize distortion, try not to take the photo at an angle</ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" columnSpacing={0} className="GridRow">
          <Grid item xs={12}>
            <Box mb={4}>
              <Button variant='outlined' aria-describedby={id} onClick={handleClick} className='AddYourPhotoBox' style={{
                backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
              }}>
                <Box>
                  <IconButton><CameraAltOutlinedIcon color='primary' /></IconButton>
                  <Typography variant='h6'>Add Your Own</Typography>
                </Box>
              </Button>
            </Box>
            <Popover
              id={id}
              open={opensecond}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              className="OptionsPopover"
            >
              <Box className="OptionsPopoverBox">
                <List>
                  <ListItem>
                    <Link>
                      <CameraAltIcon /> Take Photo
                    </Link>
                  </ListItem>
                  <Divider></Divider>
                  <ListItem>
                    <Link>
                      <img src={require('../../assets/images/UploadPhoto.png')} alt="Box Icon" /> Upload Photo
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Popover>
          </Grid>
          <Grid item xs={12}>

            <Container maxWidth="sm" disableGutters>
              <Box mb={4}><Divider></Divider></Box>
              <Grid container direction="row" columnSpacing={0} className="DefaultTileContainer">
                <Grid item xs={12}>
                  <Box className="DefaultTileContent">
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                    <Button variant='outlined' className='DefaultTile' style={{
                      backgroundImage: `url(
                      ${require(`../../assets/images/Tile.jpg`)}
                    )`,
                    }}></Button>
                  </Box>
                </Grid>
              </Grid>
              <Box mt={3}><Divider></Divider></Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TileSelection;
