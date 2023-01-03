/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import * as React from 'react';
import {
  Grid,
  Container,
  InputLabel,
  Box,
  Paper,
  Typography,
  Autocomplete,
  IconButton,
  TextField,
  Button,
  Divider,
  Link
} from '@mui/material';
import './ConfigureTile.styles.css';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CloseIcon from '@mui/icons-material/Close';
import NavigationSteps from '../../components/NavigationSteps/NavigationSteps.components';


const ConfigureTile = () => {
  const [Open, setOpen] = React.useState(true);
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Grid container direction="row" columnSpacing={4} className="GridRow" paddingBottom={0}>
          <NavigationSteps />
        </Grid>
        <Grid container direction="row" columnSpacing={1} className="GridRow LightSkyBlue">
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
                  <Box className="CommonFormControl">
                    <InputLabel>Tile Shape</InputLabel>
                    <Autocomplete
                      disablePortal
                      options={tileshape}
                      renderInput={(params) => <TextField {...params} label="Select Shape" />}
                    />
                  </Box>
                  <Box className="CommonFormControl">
                    <InputLabel>Tile Size (inches)</InputLabel>
                    <Autocomplete
                      disablePortal
                      options={tilesize}
                      renderInput={(params) => <TextField {...params} label="Select Size" />}
                      noOptionsText={
                        <Button>
                          Custom Dimensions
                        </Button>
                      }
                    />
                  </Box>

                </Grid>
                <Grid item xs={5}>
                  <Box className="CommonFormControl" mt={3}>
                    <InputLabel>Length (inches)</InputLabel>
                    <TextField label="" variant="outlined" />
                  </Box>
                </Grid>
                <Grid item xs={2} className="Relative">
                  <Box className='MultipleIcon'>x</Box>
                </Grid>
                <Grid item xs={5}>
                  <Box className="CommonFormControl" mt={3}>
                    <InputLabel>Width (inches)</InputLabel>
                    <TextField label="" variant="outlined" />
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
// Tile shape
const tileshape = [
  { label: 'Square' },
  { label: 'Rectangle' },
];
// Tile size
const tilesize = [
  { label: '1 x 1”' },
  { label: '2 x 2”' },
  { label: '4 x 4”' },
  { label: '6 x 6”' },
  { label: '8 x 8”' },
  { label: '10 x 10”' },
  { label: '16 x 16”' },
  { label: '24 x 24”' },
  { label: '48 x 48”' },
  { label: 'Custom Dimensions' },

];

export default ConfigureTile;
