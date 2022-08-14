import { Box, Typography } from '@mui/material';
import React from 'react'
import HeroImage from "../../static/HeroImage.webp"

const Hero = () => {
  return (
    <Box>
        <Typography align="center" variant="h3" sx={{fontWeight:900}}>Fashions<b style={{color:"red"}}>Blog</b></Typography>
        <Typography align="center" variant="body2" sx={{fontWeight:900}}>We Make you look the better of you!</Typography>
  <Box sx={{
    backgroundImage:`(${HeroImage})`,
    backgroundRepeat:"no-repeat",
    backgroundColor:"black",
    backgroundPosition:"center",
    backgroundSize:"cover",
    height:600,
    width:"100%",
    display:"flex",
    justifyContent:"center",
  }}>
  <Box sx={{width:{xs:"100%",sm:"50%" ,md:"40%"}, padding:{xs:3,sm:2,md:20},}}>
<Box sx={{background:'white',opacity:'0.8'}}>
    <Typography variant="h6" color="tomato" align="center" pt={8}>Trending Styles</Typography>
    <Typography variant="h4" align="center">Life is boring without fashion!</Typography>
    <Typography variant="body1" align="center" pb={8}>we love your style</Typography>
</Box>
  </Box>
</Box>
    </Box>
  )
}

export default Hero
