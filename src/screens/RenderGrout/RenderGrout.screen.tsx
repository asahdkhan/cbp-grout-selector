/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
// @ts-ignore
import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
  Tab,
  Tabs,
  Typography,
  Button,
  Popover,
  List,
  ListItem,
  SwipeableDrawer,
  Container,
  IconButton,
  Link,
} from '@mui/material';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import './RenderGrout.styles.css';
// import ChangeRoom from '../../assets/images/ChangeIcon.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import SelectGroutColor from '../../components/SelectGroutColor/SelectGroutColor.components';
// import RoomChange from '../../assets/images/changeicon.png';
// import { ReactComponent as RoomChange } from '../../assets/images/changeicon.svg';

// Start Tab Code
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
// End Tab Code

const RenderGrout = () => {
  // Start Tab Code
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // End Tab Code
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
  // Start Drawer Code
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const SelectGroutColourClose = () => {
    setOpen(false);
  };
  // End Drawer Code
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Grid container direction="row" className="LightSkyBlue GridRow">
          <Grid item xs={12}>
            <Paper className="GroutBox">
              <Box className="ChangeRoomBox">
                <Button className="CommonGrayButton" variant="outlined">
                  {/* <RoomChange /> */}
                  Change Room
                </Button>
                <Box>
                  <Button
                    aria-describedby={id}
                    className="CommonGrayButton"
                    variant="outlined"
                    onClick={handleClick}
                    startIcon={<CreateNewFolderOutlinedIcon />}
                  >
                    Save Scene
                  </Button>
                  <Popover
                    id={id}
                    open={opensecond}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    className="OptionsPopover"
                  >
                    <Box className="OptionsPopoverBox">
                      <List>
                        <ListItem disablePadding>
                          <Link>
                            <CreateNewFolderOutlinedIcon /> Add to Saved Scenes
                          </Link>
                        </ListItem>
                        <ListItem disablePadding>
                          <Link>
                            <FileDownloadOutlinedIcon /> Download Specifications
                          </Link>
                        </ListItem>
                      </List>
                    </Box>
                  </Popover>
                </Box>
              </Box>
              <Box className="GroutCanvas">
                <Box
                  className="GroutContentBox"
                  style={{
                    backgroundImage: `url(
                      ${require(`../../assets/images/CBPTileGroutBanner.jpg`)}
                    )`,
                  }}
                ></Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Container maxWidth="sm" disableGutters>
          <Grid container direction="row" className="GridRow GridRowSecond">
            <Grid item xs={12}>
              <Paper className="TileGroutOptions">
                <Box className="TabContainer">
                  <Box className="TabHeader">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Tile" {...a11yProps(0)} />
                      <Tab label="Grout" {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                  <Box className="TabContent">
                    <TabPanel value={value} index={0}>
                      {/* <Paper className="TileSelection">
                        <Typography variant="h6" className="TitleOption">
                          <b>Tile Selection</b>
                        </Typography>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="stretch"
                          className=""
                          columnSpacing={2}
                        >
                          <Grid item xs={4} sm={3}>
                            <Box
                              className="TileImage"
                              style={{
                                backgroundImage: `url(
                      ${require(`../../assets/images/CBPTileGroutBanner.jpg`)}
                    )`,
                              }}
                            ></Box>
                          </Grid>
                          <Grid item xs={8} sm={9}>
                            <Box className="TileInfoBox">
                              <Typography variant="h6" className="TileInfo">
                                <b>Tile Shape:</b> <span>Square</span>
                              </Typography>
                              <Typography variant="h6" className="TileInfo">
                                <b>Dimensions:</b> <span>4” x 4”</span>
                              </Typography>
                              <Button
                                variant="outlined"
                                color="primary"
                                className="FullWidthButton"
                              >
                                Edit Tile
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper> */}
                      <Paper className="TilePattern ZeroTop">
                        <Typography variant="h6" className="TitleOption">
                          <b>Tile Pattern</b>
                        </Typography>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="stretch"
                          className=""
                          columnSpacing={2}
                        >
                          <Grid item xs={6} sm={3}>
                            <Box className="PatternInfoBtn">
                              <Box className="PatternImage">
                                <img
                                  src={require('../../assets/images/Monolithic.png')}
                                  alt=""
                                  className="PatternIcon"
                                />
                                <img
                                  src={require('../../assets/images/MonolithicHover.png')}
                                  alt=""
                                  className="PatternIconHover"
                                />
                              </Box>
                              <Typography variant="h6">Monolithic</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={3}>
                            <Box className="PatternInfoBtn">
                              <Box className="PatternImage">
                                <img
                                  src={require('../../assets/images/QuarterTurn.png')}
                                  alt=""
                                  className="PatternIcon"
                                />
                                <img
                                  src={require('../../assets/images/QuarterTurnHover.png')}
                                  alt=""
                                  className="PatternIconHover"
                                />
                              </Box>
                              <Typography variant="h6">Quarter Turn</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={3}>
                            <Box className="PatternInfoBtn">
                              <Box className="PatternImage">
                                <img
                                  src={require('../../assets/images/Ashlar.png')}
                                  alt=""
                                  className="PatternIcon"
                                />
                                <img
                                  src={require('../../assets/images/AshlarHover.png')}
                                  alt=""
                                  className="PatternIconHover"
                                />
                              </Box>
                              <Typography variant="h6">Ashlar</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={6} sm={3}>
                            <Box className="PatternInfoBtn">
                              <Box className="PatternImage">
                                <img
                                  src={require('../../assets/images/Brick.png')}
                                  alt=""
                                  className="PatternIcon"
                                />
                                <img
                                  src={require('../../assets/images/BrickHover.png')}
                                  alt=""
                                  className="PatternIconHover"
                                />
                              </Box>
                              <Typography variant="h6">Brick</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Paper className="TileSelection">
                        <Typography variant="h6" className="TitleOption">
                          <b>Compare Grout Colors</b>
                        </Typography>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          className=""
                          columnSpacing={2}
                        >
                          <Grid item xs={4}>
                            <Box className="PatternInfoBtn GroutWidth">
                              <Box className="PatternInfoInner">
                                <Typography variant="h6">
                                  <AddIcon className="OrangeColor" />
                                </Typography>
                                <Typography variant="body2">Add Color</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box className="GroutColour">
                              <Box
                                className="TileImageSecond"
                                style={{
                                  backgroundColor: `#E1DCCF`,
                                }}
                              >
                                <Box className="CancelIcon">
                                  <CancelRoundedIcon />
                                </Box>
                              </Box>
                              <Typography variant="h6" className="GroutName">
                                <Box component="span">#11</Box>
                                Snow White
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box className="GroutColour Selected" onClick={toggleDrawer(true)}>
                              <Box
                                className="TileImageSecond"
                                style={{
                                  backgroundColor: `#787679`,
                                }}
                              >
                                <Box className="CancelIcon">
                                  <CancelRoundedIcon />
                                </Box>
                              </Box>
                              <Typography variant="h6" className="GroutName">
                                <Box component="span">#11</Box>
                                Snow White
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                      <Paper className="TilePattern">
                        <Typography variant="h6" className="TitleOption">
                          <b>Grout Joint Width</b>
                        </Typography>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          className=""
                          columnSpacing={2}
                        >
                          <Grid item xs={4}>
                            <Box className="PatternInfoBtn GroutWidth">
                              <Box className="PatternInfoInner">
                                <Typography variant="h6">1/16”</Typography>
                                <Typography variant="body2">(1.6 mm)</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box className="PatternInfoBtn GroutWidth">
                              <Box className="PatternInfoInner">
                                <Typography variant="h6">1/8”</Typography>
                                <Typography variant="body2">(3.175 mm)</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box className="PatternInfoBtn GroutWidth">
                              <Box className="PatternInfoInner">
                                <Typography variant="h6">3/16”</Typography>
                                <Typography variant="body2">(4.8 mm)</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box className="PatternInfoBtn GroutWidth">
                              <Box className="PatternInfoInner">
                                <Typography variant="h6">1/4”</Typography>
                                <Typography variant="body2">(6.35 mm)</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <Box className="PatternInfoBtn GroutWidth">
                              <Box className="PatternInfoInner">
                                <Typography variant="h6">3/8”</Typography>
                                <Typography variant="body2">(9.5 mm)</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                      <Box>
                        <SwipeableDrawer
                          className="SwipeableDrawerBox"
                          // container={container}
                          anchor="left"
                          open={open}
                          onClose={toggleDrawer(false)}
                          onOpen={toggleDrawer(true)}
                          // swipeAreaWidth={drawerBleeding}
                          disableSwipeToOpen={false}
                          ModalProps={{
                            keepMounted: true,
                          }}
                        >
                          <Paper className="SelectGroutColourBox CommonDrawerBox">
                            <Box className="SelectGroutColourHeader">
                              <Typography variant="h4">0 of 3 Selected</Typography>
                              <Box className="CloseIcon">
                                <IconButton onClick={SelectGroutColourClose}>
                                  <CloseIcon />
                                </IconButton>
                              </Box>
                            </Box>
                            <SelectGroutColor />
                          </Paper>
                        </SwipeableDrawer>
                      </Box>
                    </TabPanel>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default RenderGrout;
