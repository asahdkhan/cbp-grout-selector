/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import { Box, Grid, Typography, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LanguageIcon from '@mui/icons-material/Language';
import './VisitOurWebsite.styles.css';

const VisitOurWebsite = () => {
  return (
    <Grid container direction="row" columnSpacing={4} className="GridRow LightSkyBlue">
      <Grid item xs={12}>
        <Typography variant="h3" className="TextCenter">
          WANT TO SEE MORE? VISIT OUR WEBSITE
        </Typography>
        <Typography variant="body1" className="TextParaSecond">
          Get your tile, stone, and floor covering installations as fast, easy and durable as
          possible through performance-driven installation systems and support. At CBP, our expert
          customer support team will ensure you select the right tile installation materials for
          your job.
        </Typography>
        <Box mt={4} className="TextCenter">
          <Button
            variant="contained"
            color="primary"
            startIcon={<LanguageIcon />}
            endIcon={<OpenInNewIcon />}
          >
            Visit Custom Building Products
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VisitOurWebsite;
