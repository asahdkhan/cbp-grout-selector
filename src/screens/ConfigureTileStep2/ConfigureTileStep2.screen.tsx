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
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CloseIcon from '@mui/icons-material/Close';
import NavigationSteps from '../../components/NavigationSteps/NavigationSteps.components';
import SelectGroutColor from '../../components/SelectGroutColor/SelectGroutColor.components';


const ConfigureTileStep2 = () => {
  const [Open, setOpen] = React.useState(true);
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Grid container direction="row" columnSpacing={4} className="GridRow" paddingBottom={0}>
          <NavigationSteps />
        </Grid>
        <SelectGroutColor />
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

export default ConfigureTileStep2;
