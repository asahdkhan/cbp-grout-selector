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
  Typography,
  Button,
  Container
} from '@mui/material';
// import ChangeRoom from '../../assets/images/ChangeIcon.png';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

const SelectGroutColor = () => {

  return (
    <>
      <Box className="SelectGroutColourGrid LightSkyBlue">
        <Container maxWidth="sm" disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            className=""
            columnSpacing={2}
          >
            <Grid item xs={4}>
              <Box className="GroutColourGrid">
                <Box className="GroutGridColourCanvas">
                  <img
                    src={require('../../assets/images/GroutGrid.png')}
                    alt=""
                  />
                </Box>

                <Box className="GroutColourName">
                  <Box className="GroutColourInner">
                    <Typography variant="h6">
                      <AddIcon className="OrangeColor" />
                    </Typography>
                    <Typography variant="body2" className="ColourName">
                      Select color
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="GroutColourGrid">
                <Box className="GroutGridColourCanvas">
                  <img
                    src={require('../../assets/images/GroutGrid.png')}
                    alt=""
                  />
                </Box>
                <Box
                  className="GroutColourName"
                  style={{ backgroundColor: '#E0DCD0' }}
                >
                  <Box className="GroutColourInner">
                    <Typography variant="h6">#11</Typography>
                    <Typography variant="body2" className="ColourName">
                      Snow White
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="GroutColourGrid">
                <Box className="GroutGridColourCanvas">
                  <img
                    src={require('../../assets/images/GroutGrid.png')}
                    alt=""
                  />
                </Box>
                <Box className="GroutColourName">
                  <Box className="GroutColourInner">
                    <Typography variant="h6">
                      <AddIcon className="OrangeColor" />
                    </Typography>
                    <Typography variant="body2" className="ColourName">
                      Select color
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="sm" disableGutters>
        <Box className="SelectGroutColourOptions">
          <Box>
            <Typography variant="h5">GROUT COLOR (40 OPTIONS)</Typography>
          </Box>
          <Box className="SelectGroutColourSlider"></Box>
          {/* <Box className="SelectGroutColourName">
            <Typography variant="h5">
              <span className="DisableColour">No Color Selected</span>
              <span>#11 - Snow White</span>
            </Typography>
          </Box> */}
          <Paper>
            <Box className="GroutColorOptionContent">
              <Button variant='outlined' className='NoGroutButton GroutColorButton'>
                <div className="line1"></div>
                <CheckIcon className='CheckIcon' />
              </Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#6D6C60`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
              <Button variant='outlined' className='GroutColorButton' style={{
                backgroundColor: `#D6CEBA`,
              }}><CheckIcon className='CheckIcon' /></Button>
            </Box>

          </Paper>
        </Box>
      </Container>

    </>
  );
};

export default SelectGroutColor;
