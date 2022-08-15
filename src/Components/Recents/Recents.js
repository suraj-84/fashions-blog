import { Box, Grid,} from "@mui/material";
import React from "react";
import HeroImage from "../../static/HeroImage.webp";
import Card from "../Card/Card";

const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:1}}>
        <Grid >
        <Card HeroImage={HeroImage} />
        </Grid>
        <Grid item md={6} xs={12}>
        <Card HeroImage={HeroImage} />
        </Grid>
        <Grid item md={6} xs={12}>
        <Card HeroImage={HeroImage} />
        </Grid>
        <Grid item md={6} xs={12}>
        <Card HeroImage={HeroImage} />
        </Grid>
        <Grid item md={6} xs={12} >
        <Card HeroImage={HeroImage} />
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default Recents;
