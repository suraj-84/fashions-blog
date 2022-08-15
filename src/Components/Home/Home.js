import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Recents from '../Recents/Recents'
import Rightbar from '../Rightbar/Rightbar'
const Home = () => {
  return (
    <Box>
    <Hero />
    <Container>
    <Category />
        <Stack direction={"row"} spacing={8} mt={8}>
        
        <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
        <Recents/>
        </Box>
        <Box flex={1}><Rightbar /></Box>

        </Stack>
        </Container>
    </Box>
  )
}

export default Home