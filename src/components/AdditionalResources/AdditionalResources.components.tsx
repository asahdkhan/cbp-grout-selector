/* eslint-disable  */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable  */
import React from 'react';
import { Box, Grid, Typography, List, ListItem, Link, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import './AdditionalResources.styles.css';
import MainLogo from '../MainLogo/MainLogo.components';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const AdditionalResources = () => {
  // Start Dialog Modal Code
  const [open, setOpen] = React.useState(false);
  const ViewGroutColorOpen = () => {
    setOpen(true);
  };
  const ViewGroutColorClose = () => {
    setOpen(false);
  };
  // End Dialog Modal Code
  return (
    <Grid container direction="row" columnSpacing={4} className="GridRow">
      <Grid item xs={12}>
        <Typography variant="h3" className="TextCenter">
          ADDITIONAL RESOURCES
        </Typography>
        <Box className="ResourcesBox">
          <List>
            <ListItem disablePadding>
              <Link onClick={ViewGroutColorOpen}>
                <DescriptionOutlinedIcon /> How to Select the Best Grout Color import
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                href="https://www.custombuildingproducts.com/wp-content/uploads/2021/07/Grout_Color_Card.pdf"
                target={'_blank'}
              >
                <PictureAsPdfOutlinedIcon /> View Grout Color Card
              </Link>
            </ListItem>
          </List>
        </Box>
      </Grid>
      {/* Start How to Select the Best Grout Color import Modal */}
      <Dialog
        open={open}
        onClose={ViewGroutColorClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Box className="DialogHeadingBox">
            <Box>
              <MainLogo />
            </Box>
            <Box className="CloseIcon">
              <IconButton onClick={ViewGroutColorClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box className="SelectBestGroutColor">
              <Typography variant="body2">
                Once the tile for the installation have been chosen, there are several factors to
                consider when selecting the best grout for your project. With a wide range of
                materials and designs to choose from, it is important consider the characteristics
                and appearance of the tile and the plans for the finished installation. Here are a
                few questions that should be answered before grouting tile to ensure that the needs
                of the tile installation are met: Are the tiles patterned, or do they have a solid
                color? Are they natural stone or manufactured ceramic? If it is glass tile, is it
                transparent or opaque? Are there mosaic sheets or accents, and do they contain
                differently-colored tiles? Once these questions have been answered, it will be
                easier to determine which grout color will best suit the project.
              </Typography>

              <Typography variant="body2">
                Aesthetically, one of the most crucial decisions to make when choosing tile grout
                color is deciding whether the grout will blend in with or stand out from the tiles.
              </Typography>

              <Typography variant="body2">
                Grout colors that match with the color of the tile create a uniform, monolithic look
                that will make the installation appear as one solid piece. The texture of the tile
                will be visible from a closer angle, but the overall installation will be more
                subdued. This color choice will be more forgiving of tile placement and grout line
                shaping, so any minor imperfections in the tile installation pattern will be less
                noticeable. However, this application depends on a uniform color for all of the
                tiles. Color variance, which is more likely to occur in natural stone tile, will
                break the uniform look. Additionally, maintenance may be required to maintain the
                monolithic look of the tile and grout. When dealing with lighter colors, any spots,
                scuffs or stains will be more noticeable, especially if you don't select
                stain-resistant grouts like Fusion Pro, CEG-Lite or CEG-IG, or if you don't seal and
                maintain cementitious grouts.
              </Typography>

              <Typography variant="body2">
                Alternately, a more visible tile pattern should have a contrasting grout color,
                which will ensure a striking, patterned look. The difference between the tile and
                grout colors can change how noticeable the pattern becomes. If you use a
                light-colored tile with a dark-colored grout, or vice-versa, the pattern will be
                much more apparent. While this will bring more focus to the tile, it can also
                highlight any variances in the layout of the installation. Additionally, a
                contrasting grout color can allow for more design options, whether you are trying to
                form a color theme between tiled and non-tiled surfaces, or between two adjacent
                surfaces with different tiles. Contrasting grout colors are also useful in instances
                where multiple tile types are involved, helping to highlight the different surface
                materials within the installation.
              </Typography>

              <Typography variant="body2">
                The shade of the grout can also have major impacts on the maintenance and upkeep of
                the tile installation.
              </Typography>

              <Typography variant="body2">
                A lighter-colored grout can be easier to clean off of the surface of tile during
                installation, but is more difficult to maintain. Dirt and spills are more
                noticeable, though a good sealer and cleaner can help to maintain the look of the
                original installation. Darker grouts, meanwhile, may be more difficult to clean, and
                are more noticeable on the surface of porous tile. Pre-sealing the tile can help
                eliminate this issue. Once installed, darker grout does not show wear, dirt or
                damage as easily. In commercial kitchens, darker grout is used to accent the tiles
                and reduce the appearance of stains.
              </Typography>

              <Typography variant="body2">
                However, if you have other surfaces in the room, consider their color and layout as
                well.
              </Typography>

              <Typography variant="body2">
                Mix your grout according to the manufacturer's instructions, if required. Improperly
                mixing the grout can lead to uneven color pigment distribution, which causes
                splotchy and inconsistently-colored grout lines. Single component grouts like Fusion
                Pro and premixed grouts like SimpleGrout do not need to be mixed; the color is
                already evenly distributed.
              </Typography>

              <Typography variant="body2">
                Find a caulk that matches the color of your grout for use on movement joints and
                changes of plane like CUSTOM's Commercial 100% Silicone Caulk. It's easier to match
                grout colors when selecting both products from the same manufacturer, as the
                manufacturer will have designed the products to have the same hue.
              </Typography>

              <Typography variant="body2">
                Remember that most grout typically takes several days to cure and set, so if you're
                concerned about the color right after the installation, give it time to obtain its
                final color. Similarly, the color of powder or mixed grout prior to installation and
                cure is not the same as the color of the final cured grout. Slight variances may
                occur based on mixing methods and drying conditions.
              </Typography>

              <Typography variant="body2">
                CUSTOM's palette of grout colors provides the most popular shades that architects
                and designers demand. No matter what color of tile or stone you are using, there is
                a CUSTOM grout that will compliment it. Whether your installation requires a subtle
                color that matches with the tile or a striking shade that accents the beauty of your
                installation, you can find the perfect grout with the performance characteristics
                that you need.
              </Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      {/* End How to Select the Best Grout Color import Dialog Modal */}
    </Grid>
  );
};

export default AdditionalResources;
