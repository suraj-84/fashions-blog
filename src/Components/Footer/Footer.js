import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Instagram,  Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color:"white",
  });
const Footer = () => {
  return (
    <Box sx={{background:'black',height:'300px'}}>
    <Stack direction={{xs:'row',md:'row'}} p={7}>
<Box flex={1}>
    <Typography color={'white'} align={'center'}>
        Contact Us
    </Typography>
    <Typography color={'white'} align={'center'}>
        of squamate 
    </Typography>
    <Typography color={'white'} align={'center'}>
        over 600 across
    </Typography>
</Box>
<Box flex={1}>
<Typography color={'white'} align={'center'}>
        Data POLICY
    </Typography>
    <Typography color={'white'} align={'center'}>
        cookies
    </Typography>
    <Typography color={'white'} align={'center'}>
        Data saftey
    </Typography>
</Box>
<Box flex={1}>
<Typography color={'white'}  align={'center'}>
       Categories
    </Typography>
    <Typography color={'white'} variant={'body2'} align={'center'}>
      kids
    </Typography>
    <Typography color={'white'} variant={'body2'} align={'center'}>
      women
    </Typography>
    <Typography color={'white'} variant={'body2'} align={'center'}>
       men
    </Typography>
    </Box>
    <Box>
    <Typography color={'white'} align={'center'}>
        FOLLOW US
    </Typography>
    <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
    </Box>
    </Stack>
    </Box>
  )
}

export default Footer