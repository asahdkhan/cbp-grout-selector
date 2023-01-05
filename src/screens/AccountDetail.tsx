/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import {
  Grid,
  Box,
  Button,
  IconButton,
  InputLabel,
  TextField,
  Typography,
  Link,
  Divider,
  Paper,
  Tab,
  Tabs,
  List,
  ListItem,
  Popover,
  Autocomplete,
  Table,
  TableHead,
  TableBody,
  TableRow
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Header.styles.css';
import CloseIcon from '@mui/icons-material/Close';
import MainLogo from '../components/MainLogo/MainLogo.components';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import InfoIcon from '@mui/icons-material/Info';
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

const AccountDetail = () => {
  // Start Tab Code
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
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
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };
  const AccountBoxClose = () => {
    setOpenDrawer(false);
  };
  // End Drawer Code
  return (
    <Paper className="AccountDetailBox">
      <Box className="SelectGroutColourHeader">
        <MainLogo />
        <Box className="CloseIcon">
          <IconButton onClick={AccountBoxClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Paper className="TileGroutOptions">
        <Box className="TabContainer">
          <Box className="TabHeader">
            <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Saved Scenes" {...a11yProps(1)} />
              <Tab label="Analytics" {...a11yProps(2)} />

            </Tabs>
          </Box>
          <Box className="TabContent AccountTabContent">
            <TabPanel value={value} index={0}>
              <Box className="AccountDetails">
                <Paper className="TileSelection">
                  <Typography variant="h6" className="AccountHeading">
                    <b>Account Details</b>
                  </Typography>
                  <Box className="CommonFormControl" mt={4}>
                    <InputLabel>Email</InputLabel>
                    <Box className="TextEditBox">
                      <TextField
                        defaultValue="tevin.smith@domain.com"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="standard"
                        className="TextFieldReadOnly"
                      />
                      <Link>Change</Link>
                    </Box>
                  </Box>
                  <Box className="CommonFormControl">
                    <InputLabel>
                      Password
                      <Typography variant="subtitle2" className="NoteBox">
                        (case sensitive)
                      </Typography>
                    </InputLabel>

                    <Box className="TextEditBox">
                      <TextField
                        defaultValue="tevin.smith@domain.com"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="standard"
                        className="TextFieldReadOnly"
                        type={'password'}
                      />
                      <Link>Change</Link>
                    </Box>
                  </Box>
                </Paper>
                <Box mt={4}>
                  <Divider></Divider>
                </Box>
                <Paper className="TilePattern">
                  <Button
                    className="DeleteLink NoHoverBg"
                    endIcon={<DeleteOutlineIcon />}
                  // onClick={props.onClickDeleteaccount}
                  >
                    Delete Account
                  </Button>
                  <Typography variant="body2">
                    Permanently remove your account and all data associated with it
                  </Typography>
                </Paper>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Paper className="SavedScenes">
                <Box className="GroutCanvas">
                  <Box
                    className="GroutContentBox"
                    style={{
                      backgroundImage: `url(
                      ${require(`../assets/images/CBPTileGroutBanner.jpg`)}
                    )`,
                    }}
                  ></Box>
                </Box>
                <Box className='SavedScenesHeader'>
                  <Typography variant='h4'>Kitchen</Typography>
                  <IconButton aria-describedby={id} onClick={handleClick}><MoreHorizOutlinedIcon /></IconButton>
                </Box>
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


                      <ListItem>
                        <Link>
                          Remove from saved scenes
                        </Link>
                      </ListItem>


                    </List>
                  </Box>
                </Popover>
                <Box className='SavedScenesGroutColor'>
                  <Box>
                    <Typography variant='h6'>Grout Colors</Typography>
                    <Grid container direction="row" columnSpacing={4}>
                      <Grid item xs={4}>
                        <Box className="GroutColour GroutColourSecond" onClick={toggleDrawer(true)}>
                          <Box
                            className="TileImageSecond"
                            style={{
                              backgroundColor: `#787679`,
                            }}
                          >

                          </Box>
                          <Typography variant="h6" className="GroutName">
                            <Box component="span">#11</Box>
                            Snow White
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box className="GroutColour GroutColourSecond" onClick={toggleDrawer(true)}>
                          <Box
                            className="TileImageSecond"
                            style={{
                              backgroundColor: `#787679`,
                            }}
                          >

                          </Box>
                          <Typography variant="h6" className="GroutName">
                            <Box component="span">#11</Box>
                            Snow White
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box className="GroutColour GroutColourSecond" onClick={toggleDrawer(true)}>
                          <Box
                            className="TileImageSecond"
                            style={{
                              backgroundColor: `#787679`,
                            }}
                          >

                          </Box>
                          <Typography variant="h6" className="GroutName">
                            <Box component="span">#11</Box>
                            Snow White
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className='SavedScenesGroutJointWidth'>
                    <Typography variant='h6'>Grout Joint Width</Typography>
                    <Typography variant='body2'>1/16” (1.6mm)</Typography>
                  </Box>
                </Box>
              </Paper>

            </TabPanel>
            <TabPanel value={value} index={2}>
              <Paper className='AnalyticsBox'>

                <Box className="CommonFormControl">
                  <Autocomplete
                    className='AnalyticDropdown'
                    disablePortal
                    options={tileshape}
                    renderInput={(params) => <TextField {...params} label="Please Select" />}
                  />
                </Box>
                <Box className='UsageSummaryBox UsageCommonBox'>
                  <Table className='AnalyticTable'>
                    <TableHead>
                      <th>Usage Summary</th>
                      <th className='Numbers'>Number</th>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <td><Typography variant='h6'>Guest Users</Typography></td>
                        <td className='Numbers'>46</td>
                      </TableRow>
                      <TableRow>
                        <td><Typography variant='h6'>Registered Users</Typography></td>
                        <td className='Numbers'>46</td>
                      </TableRow>
                      <TableRow>
                        <td><Typography variant='h6'>Total Hits</Typography></td>
                        <td className='Numbers'>46</td>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
                <Box className='UsageSummaryBox UsageCommonBox'>
                  <Table className='AnalyticTable'>
                    <TableHead>
                      <th>Grout Color Usage <InfoIcon className='InfoIcon' /></th>
                      <th className='Numbers'>Number</th>
                      <th className='Numbers'>% of Total</th>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <td>
                          <Box className='AnalyticsGroutColor'>
                            <Typography variant='body2' className='SerialNumber'>1</Typography>
                            <Box className='AnalyticsGroutColorBox' style={{
                              backgroundColor: `#787679`,
                            }}></Box>
                            <Box className='AnalyticsGroutColorName'>
                              <Typography variant='body2'>#11</Typography>
                              <Typography variant='h6'>Snow White</Typography>
                            </Box>
                          </Box>
                        </td>
                        <td className='Numbers'>47</td>
                        <td className='Numbers'>64%</td>
                      </TableRow>
                      <TableRow>
                        <td>
                          <Box className='AnalyticsGroutColor'>
                            <Typography variant='body2' className='SerialNumber'>2</Typography>
                            <Box className='AnalyticsGroutColorBox' style={{
                              backgroundColor: `#787679`,
                            }}></Box>
                            <Box className='AnalyticsGroutColorName'>
                              <Typography variant='body2'>#11</Typography>
                              <Typography variant='h6'>Snow White</Typography>
                            </Box>
                          </Box>
                        </td>
                        <td className='Numbers'>47</td>
                        <td className='Numbers'>64%</td>
                      </TableRow>
                      <TableRow>
                        <td>
                          <Box className='AnalyticsGroutColor'>
                            <Typography variant='body2' className='SerialNumber'>3</Typography>
                            <Box className='AnalyticsGroutColorBox' style={{
                              backgroundColor: `#787679`,
                            }}></Box>
                            <Box className='AnalyticsGroutColorName'>
                              <Typography variant='body2'>#11</Typography>
                              <Typography variant='h6'>Snow White</Typography>
                            </Box>
                          </Box>
                        </td>
                        <td className='Numbers'>47</td>
                        <td className='Numbers'>64%</td>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
                <Box className='UsageSummaryBox UsageCommonBox'>
                  <Table className='AnalyticTable'>
                    <TableHead>
                      <th>Tile Pattern Usage <InfoIcon className='InfoIcon' /></th>
                      <th className='Numbers'>Number</th>
                      <th className='Numbers'>% of Total</th>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <td>
                          <Box className='AnalyticsTilePattern'>
                            <Typography variant='body2' className='SerialNumber'>1</Typography>
                            <Box className='AnalyticsTilePatternBox' style={{
                              backgroundImage: `url(
                      ${require(`../assets/images/BrickUsageIcon.png`)}
                    )`,
                            }}></Box>

                            <Box className='AnalyticsTilePatternName'>
                              <Typography variant='h6'>Brick</Typography>
                            </Box>
                          </Box>
                        </td>
                        <td className='Numbers'>47</td>
                        <td className='Numbers'>64%</td>
                      </TableRow>
                      <TableRow>
                        <td>
                          <Box className='AnalyticsTilePattern'>
                            <Typography variant='body2' className='SerialNumber'>2</Typography>
                            <Box className='AnalyticsTilePatternBox' style={{
                              backgroundImage: `url(
                      ${require(`../assets/images/AshlarUsageIcon.png`)}
                    )`,
                            }}></Box>

                            <Box className='AnalyticsTilePatternName'>
                              <Typography variant='h6'>Ashlar</Typography>
                            </Box>
                          </Box>
                        </td>
                        <td className='Numbers'>47</td>
                        <td className='Numbers'>64%</td>
                      </TableRow>
                      <TableRow>
                        <td>
                          <Box className='AnalyticsTilePattern'>
                            <Typography variant='body2' className='SerialNumber'>3</Typography>
                            <Box className='AnalyticsTilePatternBox' style={{
                              backgroundImage: `url(
                      ${require(`../assets/images/MonolithicUsageIcon.png`)}
                    )`,
                            }}></Box>

                            <Box className='AnalyticsTilePatternName'>
                              <Typography variant='h6'>Monolithic</Typography>
                            </Box>
                          </Box>
                        </td>
                        <td className='Numbers'>47</td>
                        <td className='Numbers'>64%</td>
                      </TableRow>
                      <TableRow>
                        <td>
                          <Box className='AnalyticsTilePattern'>
                            <Typography variant='body2' className='SerialNumber'>4</Typography>
                            <Box className='AnalyticsTilePatternBox' style={{
                              backgroundImage: `url(
                      ${require(`../assets/images/QuarterTurnUsageIcon.png`)}
                    )`,
                            }}></Box>

                            <Box className='AnalyticsTilePatternName'>
                              <Typography variant='h6'>Quarter Turn</Typography>
                            </Box>
                          </Box>
                        </td>
                        <td className='Numbers'>47</td>
                        <td className='Numbers'>64%</td>
                      </TableRow>

                    </TableBody>
                  </Table>
                </Box>

              </Paper>
            </TabPanel>
          </Box>
        </Box>
      </Paper>
    </Paper>
  );
};
// Tile shape
const tileshape = [
  { label: 'Last Week' },
  { label: 'This Week' },
];
export default AccountDetail;
