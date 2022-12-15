/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';
import AppRoute, { MainRoutes } from '../routes/App.route';
import { Box } from '@mui/material';
import './Header.styles.css';
import AdditionalResources from '../components/AdditionalResources/AdditionalResources.components';
import VisitOurWebsite from '../components/VisitOurWebsite/VisitOurWebsite.components';
import Header from './Header';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';
import DeleteaccountModal from './DeleteaccountModal';

const Layout = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(MainRoutes, location) || [];
  console.log(route);

  // Start Dialog Modal Code
  // const [openSignin, setOpenSignin] = React.useState(false);
  // const [openSignup, setOpenSignup] = React.useState(false);
  // const [openDeleteaccount, setOpenDeleteaccount] = React.useState(false);
  // End Dialog Modal Code

  return (
    <Box>
      <Header
      // onClickSignin={() => setOpenSignin(true)}
      // onClickSignup={() => setOpenSignup(true)}
      // onClickDeleteaccount={() => setOpenDeleteaccount(true)}
      />
      <SigninModal
      // open={openSignin} handleClose={() => setOpenSignin(false)}
      />
      <SignupModal
      // open={openSignup} handleClose={() => setOpenSignup(false)}
      />
      <DeleteaccountModal
      // open={openDeleteaccount}
      // handleClose={() => setOpenDeleteaccount(false)}
      />

      <AppRoute />
      <VisitOurWebsite />
      <AdditionalResources />
    </Box>
  );
};

export default Layout;
