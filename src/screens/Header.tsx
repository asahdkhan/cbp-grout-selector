/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';
import AppRoute, { MainRoutes } from '../routes/App.route';
import {
  Grid,
  Box,
  Button,
  IconButton,
  InputLabel,
  TextField,
  FormControlLabel,
  Checkbox,
  OutlinedInput,
  InputAdornment,
  Typography,
  Popover,
  List,
  ListItem,
  Link,
  Divider,
  SwipeableDrawer,
  Paper,
  Tab,
  Tabs,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.styles.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

import MainLogo from '../components/MainLogo/MainLogo.components';
import AdditionalResources from '../components/AdditionalResources/AdditionalResources.components';
import VisitOurWebsite from '../components/VisitOurWebsite/VisitOurWebsite.components';
import { spawn } from 'child_process';
import UpdateEmail from './UpdateEmail';
import AccountDetail from './AccountDetail';
import ChangePassword from './ChangePassword';
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

const Header = () => {
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
    <Grid container direction="row">
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="header"
        >
          <Grid item xs={6}>
            <Box>
              <MainLogo />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="headerRightSide">
              <Button
                // onClick={props.onClickSignin}
                startIcon={<AccountCircleIcon />}
                className="NoHoverBg"
              >
                Sign In
              </Button>
              <IconButton className="AccountDetailBtn" aria-describedby={id} onClick={handleClick}>
                <AccountCircleIcon />
              </IconButton>
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
                      <Typography variant="h6">tevin.smith@domain.com</Typography>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                      <Link onClick={toggleDrawer(true)}>
                        <AccountCircleIcon /> Account Details
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link>
                        <AccountCircleIcon /> Saved Scenes
                      </Link>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                      <Link>Log Out</Link>
                    </ListItem>
                  </List>
                </Box>
              </Popover>
            </Box>
            <Box>
              <SwipeableDrawer
                className="SwipeableDrawerBox"
                // container={container}
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                // swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                <Paper className="AccountBox CommonDrawerBox">
                  <AccountDetail />
                  <UpdateEmail />
                  <ChangePassword />
                </Paper>
              </SwipeableDrawer>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
