import { Avatar, Box, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography,  } from '@mui/material'
import React from 'react'
import HeroImage from '../../static/HeroImage.webp'
const Rightbar = () => {
  return (
    <Box>
    <Typography align='center' bgcolor={'black'} color="white">
        Most popular
    </Typography>
     <List sx={{ width: '100%',height:'100%' , maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{height:80,width:80}}  variant='square' alt="Remy Sharp" src={HeroImage} />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary=
          
            {" — I'll be in your neighborhood doing errands this…"}
       
        
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{height:80,width:80}}  variant='square' alt="Remy Sharp" src={HeroImage} />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary=
          
            {" — I'll be in your neighborhood doing errands this…"}
       
        
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{height:80,width:80}}  variant='square' alt="Remy Sharp" src={HeroImage} />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary=
          
            {" — I'll be in your neighborhood doing errands this…"}
       
        
      />
    </ListItem>
    <Divider variant='inset' component={'li'}/>
    </List>
    <Typography align='center' bgcolor={'black'} color="white">
        About Us
    </Typography>
    <Card HeroImage={HeroImage} />
    </Box>
  )
}

export default Rightbar