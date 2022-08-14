
import { Box, Stack, styled ,Typography} from '@mui/material'
import HeroImage from '../../static/HeroImage.webp'

import React from 'react'
const StyledBox =styled(Box)({
    height:200,
    width:"100%",
    cursor:"pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center ",
    backgroundSize:"cover",

});
const StyledTypography= styled(Typography)({
    margin:"25% 50px 25% 50px",
    background:"white",
    opacity:'0.8'
})
const Category = () => {
  return (
    <Box>
        <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:1,sm:2,md:4}} mt={5}>
            <StyledBox sx={{backgroundImage:`url(${HeroImage})`}}><StyledTypography align="center" variant="h3">Kids</StyledTypography></StyledBox>
            <StyledBox sx={{backgroundImage:`url(${HeroImage})`}}><StyledTypography align="center" variant="h3">Mens</StyledTypography></StyledBox>
            <StyledBox sx={{backgroundImage:`url(${HeroImage})`}}><StyledTypography align="center" variant="h3">Women</StyledTypography></StyledBox>
            
        </Stack>
    </Box>
  )
}

export default Category