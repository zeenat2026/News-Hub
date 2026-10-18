 import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Search from './Search';
import Notification from './Notification';
import ToggleSettingsDrawer from './ToggleSettingsDrawer';



const pages = [];




function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

   


  return (
   
  <Box sx={{position:'sticky',top:0,zIndex:20}}>
       <AppBar position="static" sx={{backgroundColor:'navbar.main'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },

              fontWeight: 800,
            
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          NewsHub
          </Typography>

          <Box sx={{ flexGrow:1}}>
       
          </Box>
      
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexShrink:0
            }}
          >
            NewsHub
          </Typography>
   
         
     <Stack direction={'row'} spacing={1} sx={{minWidth:0,alignItems:'center'}}>
      <Search />
      <Notification />
      <ToggleSettingsDrawer />
     </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  
  </Box>
  );
}
export default Navbar;

 
 
 
 
 
