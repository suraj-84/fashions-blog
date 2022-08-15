import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card = ({HeroImage}) => {
  return (
    <Box><CardMedia
    component="img"
    alt="green iguana"
    height="100%"
    image={HeroImage}
  />
  <CardContent>
    <Typography
      gutterBottom
      variant="body1"
      align="center"
      component="div"
      color="tomato"
    >
      perfumes
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      align="center"
      component="div"
    >
      wearing this will make everyone love you
    </Typography>
    <Typography
      gutterBottom
      variant="body2"
      align="center"
      component="div"
    >
      its women love
    </Typography>
    <Typography variant="body2" align="center" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over
      6,000 species, ranging across all continents except Antarctica
    </Typography>
  </CardContent></Box>
  )
}

export default Card