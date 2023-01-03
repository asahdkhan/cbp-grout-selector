/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import { Grid } from '@mui/material';
import './ConfigureTileStep3.styles.css';
import NavigationSteps from '../../components/NavigationSteps/NavigationSteps.components';
import SelectRoomScene from '../../components/SelectRoomScene/SelectRoomScene.components';

// import  bannerLogoIcon  from '../../assets/images/CBP-logo-banner.svg';


const ConfigureTileStep3 = () => {
  return (
    <Grid container direction="row" columnSpacing={4} className="GridRow">
      <NavigationSteps />

      <SelectRoomScene />
    </Grid>
  );
};

export default ConfigureTileStep3;
